import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '50px 40px',
    background: '#18181b',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    textAlign: 'center'
  };



  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#fff', background: 'none', webkitTextFillColor: 'initial' }}>About ShopSphere</h2>

      <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '680px', margin: '0 auto 35px auto' }}>
        ShopSphere is a fully functional full-stack MERN e-commerce application designed to demonstrate robust design systems, modern database structures, and seamless third-party integrations. Built from the ground up for performance, security, and aesthetics.
      </p>

      <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto 40px', color: '#a1a1aa', lineHeight: '1.8' }}>
        <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px' }}>Key Implementation Details</h4>
        <ul style={{ paddingLeft: '20px', listStyle: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>Role-Based Auth:</strong> Secure JWT implementation with access verification middleware and custom user roles.</li>
          <li><strong>Dynamic State:</strong> Cart operations handled on the frontend via Redux Toolkit slices for fluid, zero-latency interactions.</li>
          <li><strong>Integrated Payments:</strong> Sandbox-enabled checkout workflow simulated via Razorpay APIs.</li>
          <li><strong>Asset Uploads:</strong> Dynamic image storage and optimization on administrative routes utilizing Cloudinary.</li>
          <li><strong>Admin Terminal:</strong> Centralized manager dashboard to supervise active inventory, order lists, and user permissions.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
