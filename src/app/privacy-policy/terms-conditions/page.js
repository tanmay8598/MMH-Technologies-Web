import { FaGavel, FaFileContract, FaUserShield, FaExclamationTriangle, FaHandshake, FaBalanceScale } from 'react-icons/fa';

export const metadata = {
  title: "Terms & Conditions | Legal Agreement – MMH Technologies",
  description:
    "Read the Terms & Conditions of MMH Technologies to understand your rights, responsibilities, service usage rules, payment terms, and legal obligations when using our services.",
  keywords: [
    "terms and conditions",
    "terms of service",
    "legal agreement",
    "user obligations",
    "service terms",
    "payment terms",
    "intellectual property",
    "MMH Technologies terms"
  ],
  openGraph: {
    title: "Terms & Conditions | Legal Agreement – MMH Technologies",
    description:
      "Read the Terms & Conditions of MMH Technologies to understand your rights, responsibilities, service usage rules, payment terms, and legal obligations when using our services.",
    type: "website",
  },
  // twitter: {
  //   card: "summary",
  //   title: "Terms & Conditions | MMH Technologies",
  //   description:
  //     "Legal terms governing the use of MMH Technologies services.",
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


export default function TermsConditionsPage() {
  const lastUpdated = "January 1, 2026";

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--color-background-soft)] text-center">
        <div className="flex justify-center mb-6">
          <FaGavel className="text-6xl text-[var(--color-primary)] animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--color-quaternary)]">
          Terms & <span className="text-[var(--color-primary)]">Conditions</span>
        </h1>
        <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto">
          Please read these terms and conditions carefully before using our services.
        </p>
        <p className="text-sm text-[var(--text-muted)] mt-4">
          Last Updated: {lastUpdated}
        </p>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[var(--color-white)]">
        <div className="container-custom max-w-5xl">

          {/* Introduction */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaFileContract className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">1. Introduction</h2>
            </div>
            <div className="pl-12">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-4">
                Welcome to MMH Technologies. These Terms and Conditions govern your use of our website, services, and products. MMH Technologies is a Canada-based IT solutions company specializing in web development, mobile app development, and software solutions.
              </p>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                By accessing or using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>
          </div>

          {/* Definitions */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaBalanceScale className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">2. Definitions</h2>
            </div>
            <div className="pl-12">
              <ul className="space-y-3 text-lg text-[var(--text-muted)]">
                <li><strong className="text-[var(--color-quaternary)]">"Company"</strong> refers to MMH Technologies, located in Canada.</li>
                <li><strong className="text-[var(--color-quaternary)]">"Services"</strong> refers to all web development, mobile app development, software solutions, and IT services provided by MMH Technologies.</li>
                <li><strong className="text-[var(--color-quaternary)]">"User," "You,"</strong> and <strong className="text-[var(--color-quaternary)]">"Your"</strong> refer to the individual or entity accessing our services.</li>
                <li><strong className="text-[var(--color-quaternary)]">"Website"</strong> refers to mmhtechnologies.com and all associated subdomains.</li>
                <li><strong className="text-[var(--color-quaternary)]">"Content"</strong> refers to all text, images, code, designs, and materials provided through our services.</li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaHandshake className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">3. Services Provided</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                MMH Technologies provides comprehensive IT solutions including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-[var(--text-muted)]">
                <li>Custom web application development</li>
                <li>Mobile application development (iOS and Android)</li>
                <li>Software development and consulting</li>
                <li>Cloud services and infrastructure management</li>
                <li>DevOps and continuous integration services</li>
                <li>Technical support and maintenance</li>
              </ul>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed mt-4">
                We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
              </p>
            </div>
          </div>

          {/* User Obligations */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaUserShield className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">4. User Obligations</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                By using our services, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-[var(--text-muted)]">
                <li>Provide accurate and complete information when required</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not interfere with or disrupt our services or servers</li>
                <li>Not use our services to transmit malicious code or harmful content</li>
                <li>Comply with all applicable local, national, and international laws</li>
                <li>Respect intellectual property rights of MMH Technologies and third parties</li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaFileContract className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">5. Intellectual Property Rights</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, software, and designs, are the exclusive property of MMH Technologies and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                For custom development projects, intellectual property rights will be transferred to the client upon full payment, unless otherwise specified in a separate agreement. MMH Technologies retains the right to showcase completed projects in our portfolio unless confidentiality agreements specify otherwise.
              </p>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaBalanceScale className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">6. Payment Terms</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                Payment terms will be specified in individual project agreements. Generally:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-[var(--text-muted)]">
                <li>Payments are due according to the schedule outlined in the project proposal</li>
                <li>Late payments may incur additional fees as specified in the agreement</li>
                <li>All prices are quoted in Canadian dollars unless otherwise stated</li>
                <li>Refund policies are determined on a case-by-case basis</li>
                <li>MMH Technologies reserves the right to suspend services for non-payment</li>
              </ul>
            </div>
          </div>

          {/* Warranties and Disclaimers */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaExclamationTriangle className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">7. Warranties and Disclaimers</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. While we strive to provide high-quality services, we do not guarantee that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-[var(--text-muted)]">
                <li>Our services will be uninterrupted, timely, secure, or error-free</li>
                <li>Results obtained from using our services will be accurate or reliable</li>
                <li>The quality of any products, services, or information obtained will meet your expectations</li>
                <li>Any errors in software or services will be corrected within a specific timeframe</li>
              </ul>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed mt-4">
                MMH Technologies provides warranty and support terms specific to each project as outlined in individual service agreements.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaExclamationTriangle className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">8. Limitation of Liability</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                To the maximum extent permitted by applicable law, MMH Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-[var(--text-muted)]">
                <li>Your access to or use of or inability to access or use our services</li>
                <li>Any conduct or content of any third party on our services</li>
                <li>Any content obtained from our services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed mt-4">
                Our total liability shall not exceed the amount paid by you to MMH Technologies in the twelve months preceding the claim.
              </p>
            </div>
          </div>

          {/* Confidentiality */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaUserShield className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">9. Confidentiality</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                MMH Technologies respects the confidentiality of client information. We commit to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-[var(--text-muted)]">
                <li>Maintain confidentiality of all proprietary client information</li>
                <li>Not disclose client data to third parties without consent</li>
                <li>Use client information only for the purposes of providing our services</li>
                <li>Implement reasonable security measures to protect confidential information</li>
              </ul>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed mt-4">
                Additional confidentiality terms may be outlined in separate Non-Disclosure Agreements (NDAs) for specific projects.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaHandshake className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">10. Termination</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms and Conditions.
              </p>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                Upon termination, your right to use our services will cease immediately. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                For ongoing service contracts, termination terms and notice periods will be specified in individual service agreements.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaBalanceScale className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">11. Governing Law</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of Canada, without regard to its conflict of law provisions.
              </p>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                Any disputes arising from these terms or our services shall be resolved in the courts of Canada. You consent to the exclusive jurisdiction and venue of such courts.
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaFileContract className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">12. Changes to Terms</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                We reserve the right to modify or replace these Terms and Conditions at any time at our sole discretion. We will provide notice of any material changes by posting the new Terms and Conditions on this page and updating the "Last Updated" date.
              </p>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                Your continued use of our services after any changes constitutes acceptance of those changes. We encourage you to review these Terms periodically for any updates.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FaHandshake className="text-3xl text-[var(--color-primary)]" />
              <h2 className="text-3xl font-bold text-[var(--color-quaternary)]">13. Contact Us</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-[var(--color-bg)] p-6 rounded-lg">
                <p className="text-lg text-[var(--color-quaternary)] font-semibold mb-2">MMH Technologies</p>
                <p className="text-[var(--text-muted)]">Email: info@mmhtechnologies.com</p>
                <p className="text-[var(--text-muted)]">Website: www.mmhtechnologies.com</p>
                <p className="text-[var(--text-muted)]">Location: Canada</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-background-soft)] text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-quaternary)]">
            Have Questions?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-[var(--text-muted)]">
            Our team is available 24/7 to help clarify any terms or discuss your project needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--color-secondary)] transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}