const terms = [
  {
    content: `
  Bakalaa revolutionizes the way you shop for groceries by offering a seamless, user-friendly app that delivers everything you need right to your doorstep. With an extensive range of fresh produce, pantry staples, household essentials, and specialty items, Bakalaa ensures that you have access to high-quality products without the hassle of visiting a store.
      `,
  },
  {
    content: `The app features an intuitive interface that makes browsing, selecting, and purchasing groceries quick and easy. Whether you're planning your weekly shop or need a last-minute ingredient, Bakalaa's same-day delivery service ensures your groceries arrive promptly and in perfect condition.`,
  },
  {
    content: `
    Customize your orders, track your delivery in real-time, and enjoy the convenience of contactless payment options. Bakalaa also offers personalized recommendations based on your shopping habits, making your grocery shopping experience tailored to your preferences. Experience the future of grocery shopping with Bakalaa, where quality, convenience, and customer satisfaction are our top priorities.
    `,
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">About Bakalaa App</h1>
      <div className="space-y-8">
        {terms.map((section, index) => (
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
              <p className="leading-relaxed whitespace-pre-line text-justify">
                {section.content}
              </p>
            )}
          </div>
        ))}
      </div>
      <h6 className="text-md text-center mt-14">
        © 2025 Bakalaa App. All rights reserved.
      </h6>
    </div>
  );
}
