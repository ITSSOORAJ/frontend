import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <h1> Business name:</h1> <h3>SOORAJ KUMAR S</h3>
      
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

      <h2 className="text-xl font-semibold mb-2">Terms and Conditions</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Services:</strong> We will provide software development services as agreed upon in the project outline.</li>
        <li><strong>Payment:</strong> The client agrees to pay the agreed amount in installments or full upon project completion. Late payments may incur penalties.</li>
        <li><strong>Revisions:</strong> Minor revisions are included. Major changes or additional revisions may incur extra costs.</li>
        <li><strong>Ownership:</strong> All work and intellectual property created will be transferred to the client upon full payment.</li>
        <li><strong>Confidentiality:</strong> Both parties agree to keep all sensitive information confidential.</li>
        <li><strong>Liability:</strong> We are not liable for any damages resulting from the use of the software.</li>
        <li><strong>Termination:</strong> Either party may terminate the agreement with [number] days' notice. Payment will be due for work completed up to the termination date.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Data Collection:</strong> We may collect personal information such as name, email, and project details.</li>
        <li><strong>Use of Data:</strong> The data will be used solely for project communication and completion.</li>
        <li><strong>Data Sharing:</strong> Data will not be shared with third parties unless required by law.</li>
        <li><strong>Security:</strong> We will take appropriate steps to protect personal data but cannot guarantee complete security.</li>
        <li><strong>Client Rights:</strong> Clients may request access, correction, or deletion of their data at any time.</li>
      </ul>
    </div>
  );
};

export default AboutPage;
