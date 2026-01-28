import { FaCookie, FaShieldAlt, FaCog, FaChartLine, FaUserCog, FaInfoCircle } from 'react-icons/fa';

export const metadata = {
  title: "Cookie Policy | MMH Technologies",
  description:
    "Learn how MMH Technologies uses cookies, analytics, and similar technologies for users in Qatar and globally to improve website performance, security, and overall user experience.",
  keywords: [
    "cookie policy",
    "cookies usage",
    "website cookies",
    "privacy compliance",
    "analytics cookies",
    "third party cookies",
    "MMH Technologies cookie policy",
    "Qatar",
  ],
  openGraph: {
    title: "Cookie Policy | MMH Technologies",
    description:
      "Learn how MMH Technologies uses cookies, analytics, and similar technologies for users in Qatar and globally to improve website performance, security, and overall user experience.",
    url: "https://www.mmhtechnologies.qa/cookie-policy",
    siteName: "MMH Technologies",
    type: "website",
  },
  // twitter: {
  //   card: "summary",
  //   title: "Cookie Policy | MMH Technologies",
  //   description:
  //     "Understand how cookies are used on MMH Technologies to enhance functionality and user experience.",
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function CookiePolicyPage() {
  const lastUpdated = "January 1, 2026";

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--color-background-soft)] text-center">
        <div className="flex justify-center mb-6">
          <FaCookie className="text-6xl text-[var(--color-primary)] animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--color-quaternary)]">
          Cookie <span className="text-[var(--color-primary)]">Policy</span>
        </h1>
        <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto">
          Learn how MMH Technologies uses cookies and similar technologies to enhance your experience.
        </p>
        <p className="text-sm text-[var(--text-muted)] mt-4">
          Last Updated: {lastUpdated}
        </p>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[var(--color-white)]">
        <div className="container-custom max-w-5xl">

          {/* What Are Cookies */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaInfoCircle className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">1. What Are Cookies?</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                Cookies help us understand how you use our website, remember your preferences, and improve your overall experience. They can also help us show you relevant content and advertisements.
              </p>
              <div className="bg-[var(--color-bg)] p-6 rounded-lg mt-4">
                <p className="text-[var(--color-quaternary)] font-semibold mb-2">Key Points:</p>
                <ul className="list-disc pl-6 space-y-2 text-[var(--text-muted)]">
                  <li>Cookies store small amounts of data on your device</li>
                  <li>They help improve website functionality and user experience</li>
                  <li>You have control over cookie settings in your browser</li>
                  <li>Some cookies are essential for the website to function properly</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Cookies */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaCog className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">2. How We Use Cookies</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-4">
                MMH Technologies uses cookies for several purposes to enhance your experience and improve our services:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg text-[var(--text-muted)]">
                <li><strong className="text-[var(--color-quaternary)]">Essential Operations:</strong> Enable core website functionality and security features</li>
                <li><strong className="text-[var(--color-quaternary)]">User Preferences:</strong> Remember your settings, language preferences, and customization choices</li>
                <li><strong className="text-[var(--color-quaternary)]">Performance Analysis:</strong> Understand how visitors interact with our website to improve services</li>
                <li><strong className="text-[var(--color-quaternary)]">Authentication:</strong> Keep you logged in during your session</li>
                <li><strong className="text-[var(--color-quaternary)]">Security:</strong> Detect and prevent fraudulent activity and security threats</li>
                <li><strong className="text-[var(--color-quaternary)]">Analytics:</strong> Gather insights about website traffic and user behavior</li>
              </ul>
            </div>
          </div>

          {/* Types of Cookies */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaShieldAlt className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">3. Types of Cookies We Use</h2>
            </div>
            <div className="pl-12 space-y-6">

              {/* Strictly Necessary */}
              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-2xl font-semibold text-[var(--color-quaternary)] mb-3">
                  Strictly Necessary Cookies
                </h3>
                <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-3">
                  These cookies are essential for the website to function and cannot be disabled. They enable core functionality such as security, network management, and accessibility.
                </p>
                <div className="bg-[var(--color-bg)] p-4 rounded">
                  <p className="text-[var(--text-muted)]"><strong>Examples:</strong> Session cookies, authentication cookies, security cookies</p>
                  <p className="text-[var(--text-muted)]"><strong>Duration:</strong> Session-based or up to 1 year</p>
                </div>
              </div>

              {/* Performance Cookies */}
              <div className="border-l-4 border-[var(--color-secondary)] pl-6">
                <h3 className="text-2xl font-semibold text-[var(--color-quaternary)] mb-3">
                  Performance Cookies
                </h3>
                <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-3">
                  These cookies collect information about how visitors use our website, such as which pages are visited most often and if error messages are received from certain pages.
                </p>
                <div className="bg-[var(--color-bg)] p-4 rounded">
                  <p className="text-[var(--text-muted)]"><strong>Examples:</strong> Google Analytics, page load metrics, error tracking</p>
                  <p className="text-[var(--text-muted)]"><strong>Duration:</strong> Up to 2 years</p>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="border-l-4 border-[var(--color-tertiary)] pl-6">
                <h3 className="text-2xl font-semibold text-[var(--color-quaternary)] mb-3">
                  Functional Cookies
                </h3>
                <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-3">
                  These cookies allow our website to remember choices you make and provide enhanced, personalized features.
                </p>
                <div className="bg-[var(--color-bg)] p-4 rounded">
                  <p className="text-[var(--text-muted)]"><strong>Examples:</strong> Language preferences, region selection, user interface customization</p>
                  <p className="text-[var(--text-muted)]"><strong>Duration:</strong> Up to 1 year</p>
                </div>
              </div>

              {/* Targeting Cookies */}
              <div className="border-l-4 border-[var(--color-quaternary)] pl-6">
                <h3 className="text-2xl font-semibold text-[var(--color-quaternary)] mb-3">
                  Targeting/Advertising Cookies
                </h3>
                <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-3">
                  These cookies are used to deliver content that is more relevant to you and your interests. They may be set by us or third-party advertising partners.
                </p>
                <div className="bg-[var(--color-bg)] p-4 rounded">
                  <p className="text-[var(--text-muted)]"><strong>Examples:</strong> Remarketing tags, conversion tracking, ad personalization</p>
                  <p className="text-[var(--text-muted)]"><strong>Duration:</strong> Up to 2 years</p>
                </div>
              </div>

            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaChartLine className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">4. Third-Party Cookies</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                In addition to our own cookies, we may use third-party cookies from trusted partners to help us analyze website usage and improve our services. These partners include:
              </p>

              <div className="space-y-4 mt-4">
                <div className="bg-[var(--color-bg)] p-5 rounded-lg">
                  <h4 className="font-semibold text-[var(--color-quaternary)] mb-2">Google Analytics</h4>
                  <p className="text-[var(--text-muted)]">
                    Helps us understand how visitors engage with our website through anonymous usage statistics.
                  </p>
                </div>

                <div className="bg-[var(--color-bg)] p-5 rounded-lg">
                  <h4 className="font-semibold text-[var(--color-quaternary)] mb-2">Google Cloud Platform</h4>
                  <p className="text-[var(--text-muted)]">
                    Provides infrastructure and hosting services, may set cookies for performance optimization.
                  </p>
                </div>

                <div className="bg-[var(--color-bg)] p-5 rounded-lg">
                  <h4 className="font-semibold text-[var(--color-quaternary)] mb-2">Social Media Platforms</h4>
                  <p className="text-[var(--text-muted)]">
                    If you share our content on social media, those platforms may set cookies to track engagement.
                  </p>
                </div>
              </div>

              <p className="text-lg text-[var(--text-muted)] leading-relaxed mt-4">
                Please note that we do not control third-party cookies. We recommend reviewing the privacy policies of these third parties for more information about their cookie practices.
              </p>
            </div>
          </div>

          {/* Managing Cookies */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaUserCog className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">5. Managing Your Cookie Preferences</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences in several ways:
              </p>

              <div className="space-y-4 mt-4">
                <div className="bg-[var(--color-bg)] p-5 rounded-lg">
                  <h4 className="font-semibold text-[var(--color-quaternary)] mb-2">Browser Settings</h4>
                  <p className="text-[var(--text-muted)] mb-3">
                    Most web browsers allow you to control cookies through their settings. You can typically:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-[var(--text-muted)]">
                    <li>View and delete existing cookies</li>
                    <li>Block third-party cookies</li>
                    <li>Block all cookies</li>
                    <li>Delete cookies when closing your browser</li>
                  </ul>
                </div>

                <div className="bg-[var(--color-bg)] p-5 rounded-lg">
                  <h4 className="font-semibold text-[var(--color-quaternary)] mb-2">Browser-Specific Instructions</h4>
                  <ul className="space-y-2 text-[var(--text-muted)]">
                    <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                    <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                    <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                    <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                  </ul>
                </div>

                <div className="bg-[var(--color-bg)] p-5 rounded-lg">
                  <h4 className="font-semibold text-[var(--color-quaternary)] mb-2">Cookie Consent Banner</h4>
                  <p className="text-[var(--text-muted)]">
                    When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept or reject.
                  </p>
                </div>
              </div>

              <div className="bg-[var(--warning-soft)] bg-opacity-20 border-l-4 border-[var(--warning-soft)] p-5 rounded mt-6">
                <p className="text-[var(--color-quaternary)] font-semibold mb-2">⚠️ Important Note:</p>
                <p className="text-[var(--text-muted)]">
                  If you choose to block or delete cookies, some features of our website may not function properly. Strictly necessary cookies cannot be disabled as they are essential for the website to work.
                </p>
              </div>
            </div>
          </div>

          {/* Do Not Track */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaShieldAlt className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">6. Do Not Track Signals</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                Some web browsers have a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked.
              </p>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                Currently, there is no universally accepted standard for how to respond to DNT signals. As such, we do not currently respond to DNT browser signals. However, you can always control cookies through your browser settings as described above.
              </p>
            </div>
          </div>

          {/* Data Retention */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaCog className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">7. Cookie Data Retention</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                The length of time a cookie remains on your device depends on its type:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-[var(--text-muted)]">
                <li><strong className="text-[var(--color-quaternary)]">Session Cookies:</strong> Temporary cookies deleted when you close your browser</li>
                <li><strong className="text-[var(--color-quaternary)]">Persistent Cookies:</strong> Remain on your device for a set period (from days to years) or until you manually delete them</li>
              </ul>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed mt-4">
                We regularly review the cookies we use and only retain them for as long as necessary to fulfill their intended purpose.
              </p>
            </div>
          </div>

          {/* Updates to Policy */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaInfoCircle className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">8. Updates to This Cookie Policy</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make changes, we will update the "Last Updated" date at the top of this policy.
              </p>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies. Your continued use of our website after changes are posted constitutes your acceptance of the updated policy.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaInfoCircle className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">9. Contact Us</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, please feel free to contact us:
              </p>
              <div className="bg-[var(--color-bg)] p-6 rounded-lg">
                <p className="text-lg text-[var(--color-quaternary)] font-semibold mb-2">MMH Technologies</p>
                <p className="text-[var(--text-muted)]">Email: privacy@mmhtechnologies.com</p>
                <p className="text-[var(--text-muted)]">Website: www.mmhtechnologies.com</p>
                <p className="text-[var(--text-muted)]">Location: Canada</p>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaChartLine className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">10. Additional Resources</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-4">
                For more information about cookies and online privacy, you may find these resources helpful:
              </p>
              <ul className="space-y-2 text-lg text-[var(--text-muted)]">
                <li>• <a href="https://www.allaboutcookies.org" className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] underline">AllAboutCookies.org</a> - Comprehensive information about cookies</li>
                <li>• <a href="https://www.priv.gc.ca" className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] underline">Office of the Privacy Commissioner of Canada</a> - Canadian privacy laws and guidelines</li>
                <li>• <a href="https://youradchoices.ca" className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] underline">YourAdChoices.ca</a> - Opt-out of interest-based advertising</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-background-soft)] text-center">
        <div className="container-custom">
          <div className="flex justify-center mb-6">
            <FaShieldAlt className="text-5xl text-[var(--color-primary)]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-quaternary)]">
            Your Privacy Matters
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-[var(--text-muted)] max-w-3xl mx-auto">
            We're committed to transparency and protecting your privacy. Have questions or concerns about cookies?
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--color-secondary)] transition-colors duration-300 mr-4"
          >
            Contact Us
          </a>
          <a
            href="/privacy-policy"
            className="inline-block bg-[var(--color-white)] text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold text-lg border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </div>
      </section>
    </>
  );
}