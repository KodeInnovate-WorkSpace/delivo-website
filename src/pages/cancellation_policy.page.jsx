const cancelPolicy = [
  {
    title: "1. No Order Cancellation Policy",
    content: `Once an order has been placed on the Bakalaa App, it cannot be canceled. This policy is in place to ensure a seamless and efficient delivery process for all our users.`,
  },
  {
    title: "2. Company Information",
  },
  {
    type: "list",
    items: [
      "Company Name: Bakalaa Cart Pvt Ltd",
      "Contact Number: +91-8108212153",
    ],
  },
  {
    title: "3. Exceptions",
    content:
      "In exceptional cases, if an order must be canceled due to unavoidable circumstances, please contact our customer service team immediately at the provided contact number. Requests will be reviewed on a case-by-case basis.",
  },
];
export default function CancellationPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">Cancellation Policy</h1>
      <div className="space-y-8">
        {cancelPolicy.map((section, index) => (
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
      <h6 className="text-md text-center mt-10">
        © 2025 Bakalaa App. All rights reserved.
      </h6>
    </div>
  );
}
