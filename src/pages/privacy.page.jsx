
export default function PrivacyPage() {
  const sections = [
    { id: "information-collection", title: "Information We Collect" },
    { id: "information-usage", title: "How We Use Your Information" },
    { id: "information-sharing", title: "Information Sharing" },
    { id: "data-security", title: "Data Security" },
    { id: "cookies", title: "Cookies and Tracking" },
    { id: "user-rights", title: "Your Rights" },
    { id: "data-retention", title: "Data Retention" },
    { id: "children-privacy", title: "Children's Privacy" },
    { id: "policy-changes", title: "Changes to This Policy" },
    { id: "contact", title: "Contact Us" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Privacy Policy</h1>
          <p className="text-gray-600 text-lg">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6 border-gray-200">
              <CardContent className="p-6">
                <h2 className="font-semibold text-black mb-4">Contents</h2>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm text-gray-600 hover:text-black transition-colors duration-200 py-1"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Introduction */}
            <section className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                We respect your privacy and are committed to protecting your personal data. This privacy policy explains
                how we collect, use, and safeguard your information when you use our services.
              </p>
            </section>

            <Separator className="bg-gray-200" />

            {/* Information We Collect */}
            <section id="information-collection">
              <h2 className="text-2xl font-bold text-black mb-4">Information We Collect</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Personal Information</h3>
                  <p className="leading-relaxed">
                    We may collect personal information such as your name, email address, phone number, and other
                    contact details when you register for our services or contact us.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Usage Data</h3>
                  <p className="leading-relaxed">
                    We automatically collect information about how you interact with our services, including IP
                    addresses, browser type, pages visited, and time spent on our platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Device Information</h3>
                  <p className="leading-relaxed">
                    We may collect information about the device you use to access our services, including device type,
                    operating system, and unique device identifiers.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="bg-gray-200" />

            {/* How We Use Your Information */}
            <section id="information-usage">
              <h2 className="text-2xl font-bold text-black mb-4">How We Use Your Information</h2>
              <div className="text-gray-700 space-y-3">
                <p className="leading-relaxed">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our services and develop new features</li>
                  <li>Protect against fraudulent or illegal activity</li>
                </ul>
              </div>
            </section>

            <Separator className="bg-gray-200" />

            {/* Information Sharing */}
            <section id="information-sharing">
              <h2 className="text-2xl font-bold text-black mb-4">Information Sharing</h2>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With service providers who assist us in operating our platform</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </section>

            <Separator className="bg-gray-200" />

            {/* Data Security */}
            <section id="data-security">
              <h2 className="text-2xl font-bold text-black mb-4">Data Security</h2>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p className="leading-relaxed">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we
                  strive to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </div>
            </section>

            <Separator className="bg-gray-200" />

            {/* Cookies and Tracking */}
            <section id="cookies">
              <h2 className="text-2xl font-bold text-black mb-4">Cookies and Tracking</h2>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our platform. Cookies
                  are small data files stored on your device.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Types of Cookies We Use</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Essential Cookies:</strong> Required for the platform to function properly
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Help us understand how you use our services
                    </li>
                    <li>
                      <strong>Preference Cookies:</strong> Remember your settings and preferences
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator className="bg-gray-200" />

            {/* Your Rights */}
            <section id="user-rights">
              <h2 className="text-2xl font-bold text-black mb-4">Your Rights</h2>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to the processing of your personal information</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="leading-relaxed">
                  To exercise these rights, please contact us using the information provided in the "Contact Us"
                  section.
                </p>
              </div>
            </section>

            <Separator className="bg-gray-200" />

            {/* Data Retention */}
            <section id="data-retention">
              <h2 className="text-2xl font-bold text-black mb-4">Data Retention</h2>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                  this privacy policy, unless a longer retention period is required by law.
                </p>
                <p className="leading-relaxed">
                  When we no longer need your personal information, we will securely delete or anonymize it.
                </p>
              </div>
            </section>

            <Separator className="bg-gray-200" />

            {/* Children's Privacy */}
            <section id="children-privacy">
              <h2 className="text-2xl font-bold text-black mb-4">Children's Privacy</h2>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal
                  information from children under 13.
                </p>
                <p className="leading-relaxed">
                  If we become aware that we have collected personal information from a child under 13, we will take
                  steps to delete such information promptly.
                </p>
              </div>
            </section>

            <Separator className="bg-gray-200" />

            {/* Changes to This Policy */}
            <section id="policy-changes">
              <h2 className="text-2xl font-bold text-black mb-4">Changes to This Policy</h2>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the
                  new privacy policy on this page and updating the "Last updated" date.
                </p>
                <p className="leading-relaxed">
                  We encourage you to review this privacy policy periodically for any changes.
                </p>
              </div>
            </section>

            <Separator className="bg-gray-200" />

            {/* Contact Us */}
            <section id="contact">
              <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  If you have any questions about this privacy policy or our privacy practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="space-y-2">
                    <p>
                      <strong>Email:</strong> privacy@company.com
                    </p>
                    <p>
                      <strong>Address:</strong> 123 Privacy Street, Data City, DC 12345
                    </p>
                    <p>
                      <strong>Phone:</strong> (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            This privacy policy is effective as of the date listed above and will remain in effect except with respect
            to any changes in its provisions in the future.
          </p>
        </div>
      </div>
    </div>
  )
}
