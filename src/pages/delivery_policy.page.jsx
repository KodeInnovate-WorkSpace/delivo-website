const deliveryPolicy = [
  {
    title: "1. Delivery Areas",
    content: "Service Area: 400612, 421204",
  },
  {
    title: "2. Delivery Hours",
    content: "9 AM - 12 PM",
  },
  {
    title: "3. Delivery Fees",
    content: "Fees may vary",
  },
  {
    title: "4. Delivery Time",
    content: "Maximum 45 minutes",
  },
];

export default function DeliveryPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">
        Bakalaa App Delivery Policy
      </h1>
      <div className="space-y-8">
        {deliveryPolicy.map((section, index) => (
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
