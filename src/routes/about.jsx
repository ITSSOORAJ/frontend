import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>

      <h2 className="text-xl font-semibold mb-2">Operational Contact Address</h2>
      <p className="mb-4">
        Satheesh Bhavan, <br />
        Panavally PO, <br />
        Cherthala, <br />
        Alappuzha, <br />
        PIN: 688526
      </p>

      <h2 className="text-xl font-semibold mb-2">Pricing Information</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="border p-4 rounded">
          <h3 className="font-bold">Service</h3>
          <p>Booking Fees</p>
          <p>Hourly Rates</p>
          <p>Additional Charges</p>
        </div>
        <div className="border p-4 rounded">
          <h3 className="font-bold">Price</h3>
          <p>₹100</p>
          <p>₹2000 per hour</p>
          <p>Variable depending on service</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-2">Refund Policy</h2>
      <p className="mb-4">
        At our company, we strive to provide the best services to our customers. However, due to the nature of our services, we have established the following refund policy:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>No Refunds:</strong> All payments made for our services are non-refundable. This includes, but is not limited to, booking fees, deposits, and any other associated charges.</li>
      </ul>
    </div>
  );
};

export default AboutPage;
