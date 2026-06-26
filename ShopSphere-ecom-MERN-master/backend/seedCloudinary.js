const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Product = require('./models/Product');
const connectDB = require('./config/db');
const cloudinary = require('./config/cloudinary');

dotenv.config();

// Seeding products with image sources (remote Unsplash URLs or local generated images)
const productsData = [
  // 1. Electronics
  {
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Immersive sound experience with advanced active noise cancellation.',
    price: 299.99,
    category: 'Electronics',
    stock: 15,
    tempSource: 'C:\\Users\\PRANSHU\\.gemini\\antigravity-ide\\brain\\6ec7db26-f6b0-444c-af0a-5ccf43ce646c\\headphones_1782471157291.png',
    ratings: 4.8,
    numReviews: 24
  },
  {
    name: 'Professional DSLR Camera',
    description: 'Capture stunning moments with high-resolution clarity and speed.',
    price: 1199.99,
    category: 'Electronics',
    stock: 8,
    tempSource: 'C:\\Users\\PRANSHU\\.gemini\\antigravity-ide\\brain\\6ec7db26-f6b0-444c-af0a-5ccf43ce646c\\dslr_camera_1782472047799.png',
    ratings: 4.9,
    numReviews: 50
  },
  {
    name: 'Premium Smart Watch',
    description: 'Track your fitness, receive notifications, and look stylish with this premium smart watch.',
    price: 199.99,
    category: 'Electronics',
    stock: 25,
    tempSource: 'C:\\Users\\PRANSHU\\.gemini\\antigravity-ide\\brain\\6ec7db26-f6b0-444c-af0a-5ccf43ce646c\\smart_watch_1782472080344.png',
    ratings: 4.6,
    numReviews: 18
  },
  {
    name: 'Mechanical RGB Keyboard',
    description: 'Tactile mechanical keyboard with customizable RGB backlighting for ultimate gaming and typing.',
    price: 129.99,
    category: 'Electronics',
    stock: 20,
    tempSource: 'C:\\Users\\PRANSHU\\.gemini\\antigravity-ide\\brain\\6ec7db26-f6b0-444c-af0a-5ccf43ce646c\\rgb_keyboard_1782472100592.png',
    ratings: 4.7,
    numReviews: 32
  },
  {
    name: '3-in-1 Wireless Charging Station',
    description: 'Fast wireless charging dock for your smartphone, smartwatch, and earbuds simultaneously.',
    price: 49.99,
    category: 'Electronics',
    stock: 35,
    tempSource: 'https://images.unsplash.com/photo-1628149455678-16f37bc392f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ratings: 4.4,
    numReviews: 15
  },
  {
    name: 'Ergonomic Gaming Mouse',
    description: 'High-precision gaming mouse with adjustable DPI, RGB lighting, and ergonomic design.',
    price: 59.99,
    category: 'Electronics',
    stock: 40,
    tempSource: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ratings: 4.5,
    numReviews: 28
  },
  {
    name: 'Waterproof Bluetooth Speaker',
    description: 'Portable outdoor speaker with rich bass, 24-hour battery life, and IPX7 waterproof rating.',
    price: 79.99,
    category: 'Electronics',
    stock: 30,
    tempSource: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ratings: 4.3,
    numReviews: 22
  },

  // 2. Clothing
  {
    name: 'Classic White Sneakers',
    description: 'Versatile and comfortable, a staple for any casual outfit.',
    price: 85.00,
    category: 'Clothing',
    stock: 50,
    tempSource: 'C:\\Users\\PRANSHU\\.gemini\\antigravity-ide\\brain\\6ec7db26-f6b0-444c-af0a-5ccf43ce646c\\white_sneakers_1782472062640.png',
    ratings: 4.5,
    numReviews: 89
  },
  {
    name: 'Premium Leather Jacket',
    description: 'Classic black leather biker jacket crafted from soft, high-quality sheepskin leather.',
    price: 189.99,
    category: 'Clothing',
    stock: 12,
    tempSource: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ratings: 4.8,
    numReviews: 14
  },
  {
    name: 'Minimalist Sports Hoodie',
    description: 'Ultra-soft cotton blend sports hoodie, perfect for workouts or casual loungewear.',
    price: 45.00,
    category: 'Clothing',
    stock: 30,
    tempSource: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ratings: 4.2,
    numReviews: 21
  },
  {
    name: 'Water-Resistant Travel Backpack',
    description: 'Durable backpack with dedicated 15.6-inch laptop compartment and anti-theft design.',
    price: 65.00,
    category: 'Clothing',
    stock: 25,
    tempSource: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ratings: 4.6,
    numReviews: 35
  },
  {
    name: 'Classic Aviator Sunglasses',
    description: 'Polarized aviator sunglasses with UV400 protection and lightweight metal frame.',
    price: 35.00,
    category: 'Clothing',
    stock: 60,
    tempSource: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ratings: 4.4,
    numReviews: 42
  },
  {
    name: 'Vintage Denim Jacket',
    description: 'Rugged blue denim jacket with button closures and classic chest pockets.',
    price: 75.00,
    category: 'Clothing',
    stock: 18,
    tempSource: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ratings: 4.5,
    numReviews: 19
  },

  // 3. Furniture
  {
    name: 'Minimalist Modern Chair',
    description: 'A stylish and comfortable addition to any contemporary living room.',
    price: 150.00,
    category: 'Furniture',
    stock: 30,
    tempSource: 'C:\\Users\\PRANSHU\\.gemini\\antigravity-ide\\brain\\6ec7db26-f6b0-444c-af0a-5ccf43ce646c\\modern_chair_1782471185405.png',
    ratings: 4.2,
    numReviews: 12
  },
  {
    name: 'Ergonomic Office Chair',
    description: 'High-back mesh desk chair with adjustable lumbar support, 3D armrests, and tilt lock.',
    price: 249.99,
    category: 'Furniture',
    stock: 15,
    tempSource: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ratings: 4.7,
    numReviews: 27
  },
  {
    name: 'Modern LED Desk Lamp',
    description: 'Sleek eye-caring desk lamp with touch control, adjustable brightness, and wireless phone charger.',
    price: 39.99,
    category: 'Furniture',
    stock: 45,
    tempSource: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ratings: 4.5,
    numReviews: 31
  },
  {
    name: 'Minimalist Oak Coffee Table',
    description: 'Solid oak wood coffee table with a modern design and lower shelf for living room storage.',
    price: 179.99,
    category: 'Furniture',
    stock: 10,
    tempSource: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ratings: 4.3,
    numReviews: 16
  },
  {
    name: '5-Tier Industrial Bookshelf',
    description: 'Sturdy wood and metal bookshelf, perfect for organizing books, plants, and decor items.',
    price: 119.99,
    category: 'Furniture',
    stock: 12,
    tempSource: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ratings: 4.6,
    numReviews: 24
  },
  {
    name: 'Modern Arc Floor Lamp',
    description: 'Elegant arched standing lamp with marble base and fabric drum shade for cozy living spaces.',
    price: 89.99,
    category: 'Furniture',
    stock: 20,
    tempSource: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ratings: 4.4,
    numReviews: 18
  }
];

const importData = async () => {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await connectDB();

    console.log('🧹 Clearing existing data...');
    await User.deleteMany();
    await Product.deleteMany();

    console.log('🔑 Re-creating Admin User...');
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);
    
    await User.create({
      name: 'Admin User',
      email: 'admin@shopsphere.com',
      password: hashedPassword,
      role: 'admin'
    });
    console.log('✅ Admin user created!');

    console.log('📤 Uploading images to Cloudinary and preparing products...');
    const productsToInsert = [];

    for (let i = 0; i < productsData.length; i++) {
      const prod = productsData[i];
      console.log(`[${i + 1}/${productsData.length}] Uploading image for: "${prod.name}"...`);
      
      try {
        // Upload the local or remote URL image to Cloudinary
        const uploadResult = await cloudinary.uploader.upload(prod.tempSource, {
          folder: 'shopsphere_products'
        });
        
        console.log(`   Success! Secure URL: ${uploadResult.secure_url}`);
        
        // Push the final product database object
        productsToInsert.push({
          name: prod.name,
          description: prod.description,
          price: prod.price,
          category: prod.category,
          stock: prod.stock,
          imageUrl: uploadResult.secure_url,
          ratings: prod.ratings,
          numReviews: prod.numReviews
        });
      } catch (uploadError) {
        console.error(`❌ Failed to upload image for "${prod.name}": ${uploadError.message}`);
        // Fallback to original path in case upload fails
        productsToInsert.push({
          name: prod.name,
          description: prod.description,
          price: prod.price,
          category: prod.category,
          stock: prod.stock,
          imageUrl: prod.tempSource,
          ratings: prod.ratings,
          numReviews: prod.numReviews
        });
      }
    }

    console.log('💾 Saving new products to MongoDB...');
    await Product.insertMany(productsToInsert);
    
    console.log('🎉 Database Successfully Seeded with 19 products and Cloudinary images!');
    process.exit(0);
  } catch (error) {
    console.error(`❌ Global error during data seeding: ${error.message}`);
    process.exit(1);
  }
};

importData();
