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

const ReturnPolicy = () => {
  return (
    <div style={textualStyle}>
      <h2 style={{ color: '#fff', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
        Return & Refund Policy
      </h2>

      <p style={{ marginBottom: '20px' }}>
        At ShopSphere, customer satisfaction matters. If you are not happy with your purchase,
        you may request a return within 30 days of delivery.
      </p>

      <h4 style={{ color: '#8b5cf6', marginTop: '25px', marginBottom: '10px' }}>1. Eligibility</h4>
      <p style={{ marginBottom: '15px' }}>
        Items must be unused, in original packaging, and accompanied by proof of purchase.
      </p>

      <h4 style={{ color: '#8b5cf6', marginTop: '25px', marginBottom: '10px' }}>2. Refunds</h4>
      <p style={{ marginBottom: '15px' }}>
        Once we receive and inspect your return, approved refunds are processed to your original
        payment method within 5–7 business days.
      </p>

      <h4 style={{ color: '#8b5cf6', marginTop: '25px', marginBottom: '10px' }}>3. Non-returnable Items</h4>
      <p style={{ marginBottom: '15px' }}>
        Perishable goods, digital downloads, and customized products cannot be returned.
      </p>

      <h4 style={{ color: '#8b5cf6', marginTop: '25px', marginBottom: '10px' }}>4. Shipping</h4>
      <p>
        Return shipping costs are the responsibility of the customer unless the return is due to our error.
      </p>
    </div>
  );
};

export default ReturnPolicy;
