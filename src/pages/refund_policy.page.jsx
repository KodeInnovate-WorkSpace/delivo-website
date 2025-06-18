const refundPolicy = [
  {
    title: "1. Refund Eligibility",
  },
  {
    type: "list",
    items: [
      "Refunds are only applicable for incorrect or damaged items.",
      "To be eligible for a refund, you must contact our support team within 3 working days of delivery.",
    ],
  },
  {
    title: "2. Refund Process",
  },
  {
    type: "list",
    items: [
      "Contact our support team at info@bakalaa.com with your order details and reason for the refund request.",
      "Our team will review your request and, if approved, process the refund within 3 working days.",
      "Refunds will be credited to the original payment method.",
    ],
  },
  {
    title: "3. Non-Refundable Items",
  },
  {
    type: "list",
    items: ["Perishable goods", "Gift cards", "Items purchased on sale"],
  },
  {
    title: "4. Support Contact",
  },
  {
    type: "list",
    items: ["Email: info@bakalaa.com", "Phone: 8108212153"],
  },
  {
    content:
      "Please note that order cancellations are not allowed once an order is placed.",
  },
];

export default function RefundPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">Refund Policy</h1>
      <div className="space-y-8">
        {refundPolicy.map((section, index) => (
          <div key={index}>
            {section.title && (
              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            )}

            {section.type === "list" && (
              <ul className="list-disc list-inside space-y-1">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {section.content && (
              <p className="leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            )}
          </div>
        ))}
      </div>
      <h6 className="text-lg text-center mt-14">
        © 2025 Bakalaa App. All rights reserved.
      </h6>
    </div>
  );
}
