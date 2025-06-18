const terms = [
  {
    content: `
    Thank you for accessing/shopping at Bakalaa. This site is owned by Bakalaa Cart Private Limited (hereinafter referred to as “Bakalaa: Grocery in Minutes*”). By accessing or shopping on this site, you indicate your unconditional acceptance of these terms and conditions. We reserve the right, at our sole discretion, to update or revise these terms and conditions. Continued use of the site following the posting of any changes constitutes your acceptance of those changes. At “Bakalaa App”, we strive to create a space where you can explore and shop for all your favorite things in a safe and secure environment. All products and information displayed on “Bakalaa App” constitutes an "invitation to offer". “Bakalaa App” reserves the right to accept or reject your offer. Your order for purchase constitutes your "offer" which shall be subject to the terms and conditions as listed below.
      `,
  },
  {
    title: "1. Eligibility to Use Our Site",
    content: `Use of the Site is available only to persons who can legally enter into contracts under applicable laws. Persons who are "incompetent to contract", within the meaning of the Indian Contract Act, 1872 including un-discharged insolvents etc., are not eligible to use the Site. “Bakalaa App” reserves the right to terminate your access to the Site if it discovers that you are under the age of 18 years or suffer from any other disability, as recognized under the Indian Contract Act, 1872.`,
  },
  {
    title: "2. Membership",
    content: `Although it's not essential to have an account to shop with “Bakalaa App”, you can shop as a guest. As a member, you agree to provide true, accurate, current, and complete information about yourself as prompted by the site's registration form. Registration where prohibited under any law shall be void. “Bakalaa App” reserves the right to revoke or terminate your registration for any reason at any time, without notice.`,
  },
  {
    title: "3. Electronic Communications",
    content: `When you use the site or send emails or other data, information, or communication to us, you agree and understand that you are communicating with us electronically and give your consent to receive communications electronically from us periodically, when required.`,
  },
  {
    title: "4. Reviews, Feedback, Submissions",
    content: `All reviews, comments, feedback, postcards, suggestions, ideas, and other submissions disclosed, submitted, or offered to “Bakalaa App” directly or otherwise disclosed, submitted, or offered in connection with your use of this Site (collectively referred to "Comments") will remain “Bakalaa App” property. Such disclosure, submission, or offer of any comments shall constitute an assignment to “Bakalaa App” of all worldwide rights, titles, and interests in all copyrights and other intellectual properties in the comments. Thus, it exclusively owns all such rights, titles, and interests and shall not be limited in any way in its use, commercial or otherwise. “Bakalaa App” will be entitled to use, reproduce, disclose, modify, adapt, create derivative works from, publish, display, and distribute any comments you submit for any purpose whatsoever, without restriction and without compensating you in any way. “Bakalaa App” is and shall be under no obligation (1) to maintain any Comments in confidence; or (2) to pay you any compensation for any Comments; or (3) to respond to any Comments. You agree that any comments submitted by you to the Site will not violate this policy or any right of any third party, including copyright, trademark, privacy, or other personal or proprietary right(s), and will not cause injury to any person or entity. You further agree that no comments submitted by you to the site will be libelous or otherwise unlawful, threatening, abusive, or obscene material, or contain software viruses, political campaigning, commercial solicitation, chain letters, mass mailings or any form of "spam".

    “Bakalaa App” does not regularly review posted comments, but does reserve the right (but not the obligation) to monitor and edit or remove any comment submitted to the Site. You grant “Bakalaa App” the right to use the name that you submit in connection with any of the posted comments. You agree not to use a false email address, impersonate any person or entity, or otherwise mislead as to the origin of any Comments you submit. You are and shall remain solely responsible for the content of any comments you make and you agree to indemnify “Bakalaa App” and its affiliates for all claims resulting from any Comments you submit. We take no responsibility and assume no liability for any comments submitted by you or any third party.`,
  },
  {
    title: "5. Accuracy of Content/Information of Products on the Web Site",
    content: `While “Bakalaa App” strives to provide accurate product and pricing information, typographical errors may occur. In the event that a product is listed at an incorrect price or with incorrect information due to an error in pricing or product information, “Bakalaa App” shall have the right, on our sole discretion, to modify the price of the products, or information of the products or to refuse or cancel any orders placed for that product, unless the product has already been dispatched.`,
  },
  {
    title:"6. Limitation of Liability",
    content:`Bakalaa Cart Private Limited is not liable for any indirect, incidental, or consequential damages arising from the use of the app.`
  },
  {
    title:"7. Governing Law",
    content:"These terms are governed by the laws of India."
  },
  {
    title:"8. Changes to Terms",
    content:"We may update these terms from time to time. Changes will be posted on our website and app."
  }
];

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">
        Terms and Conditions
      </h1>
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
              <p className="leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            )}
          </div>
        ))}
      </div>
       <h6 className="text-lg text-center mt-14">
        For any queries, please contact us at info@bakalaa.com.
      </h6>
    </div>
  );
}
