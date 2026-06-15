import React from 'react';

const textualStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '40px',
  background: '#18181b',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  lineHeight: '1.8',
  color: '#a1a1aa'
};

const Disclaimer = () => {
  return (
    <div style={textualStyle}>
      <h2 style={{ color: '#fff', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
        Legal Disclaimer
      </h2>

      <p style={{ marginBottom: '20px' }}>
        ShopSphere is a portfolio project built for learning and demonstration purposes.
        Product listings, images, and pricing are sample data and do not represent real merchandise.
      </p>

      <h4 style={{ color: '#8b5cf6', marginTop: '25px', marginBottom: '10px' }}>1. Product Information</h4>
      <p style={{ marginBottom: '15px' }}>
        All products displayed on this site are placeholder entries seeded for development.
        Images are sourced from Unsplash and are used for demonstration only.
      </p>

      <h4 style={{ color: '#8b5cf6', marginTop: '25px', marginBottom: '10px' }}>2. Payments</h4>
      <p style={{ marginBottom: '15px' }}>
        Payment processing uses Razorpay in test/sandbox mode. No real financial transactions are processed.
      </p>

      <h4 style={{ color: '#8b5cf6', marginTop: '25px', marginBottom: '10px' }}>3. External Links</h4>
      <p style={{ marginBottom: '15px' }}>
        ShopSphere is not responsible for content on third-party websites linked from this application.
      </p>
    </div>
  );
};

export default Disclaimer;
