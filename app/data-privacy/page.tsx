import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Data Privacy | Dad Bytes",
  description: "Data Privacy Policy for Dad Bytes apps and website.",
};

export default function DataPrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-semibold text-db-text mb-2">Data Privacy Policy</h1>
          <p className="text-sm text-db-muted mb-10">Last updated: January 2025</p>

          <div className="prose prose-sm max-w-none space-y-8 text-db-text">

            <section>
              <h2 className="text-xl font-semibold mb-3">1. Overview</h2>
              <p className="text-db-muted leading-relaxed">
                Dad Bytes (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy.
                This policy explains what information we collect, how we use it, and your
                rights regarding your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
              <p className="text-db-muted leading-relaxed mb-2">
                We collect minimal data necessary to provide our services:
              </p>
              <ul className="list-disc list-inside text-db-muted space-y-1 ml-4">
                <li>
                  <strong>Email address</strong> — if you sign up for early access
                  notifications through our website
                </li>
                <li>
                  <strong>Usage data</strong> — anonymised analytics to understand how our
                  apps are used (no personally identifiable information)
                </li>
                <li>
                  <strong>Payment information</strong> — processed entirely by Google Play,
                  Apple App Store, or Stripe; we do not store card details
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
              <p className="text-db-muted leading-relaxed">
                We use collected information solely to:
              </p>
              <ul className="list-disc list-inside text-db-muted space-y-1 mt-2 ml-4">
                <li>Send early access notifications if you have opted in</li>
                <li>Improve app performance and user experience</li>
                <li>Process donations or subscription payments</li>
                <li>Respond to support enquiries</li>
              </ul>
              <p className="text-db-muted leading-relaxed mt-3">
                We do not sell, rent, or share your personal information with third parties
                for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Third-Party Services</h2>
              <p className="text-db-muted leading-relaxed">
                Our apps and website may integrate with third-party services:
              </p>
              <ul className="list-disc list-inside text-db-muted space-y-1 mt-2 ml-4">
                <li>
                  <strong>Google Play</strong> — subscription and payment management
                </li>
                <li>
                  <strong>Apple App Store</strong> — subscription and payment management
                </li>
                <li>
                  <strong>Stripe</strong> — donation payment processing
                </li>
              </ul>
              <p className="text-db-muted leading-relaxed mt-3">
                Each third-party service has its own privacy policy governing data they
                collect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Data Retention</h2>
              <p className="text-db-muted leading-relaxed">
                We retain your data only as long as necessary to fulfil the purposes outlined
                in this policy, or as required by law. Email addresses collected for early
                access may be removed at any time upon your request.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
              <p className="text-db-muted leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-db-muted space-y-1 mt-2 ml-4">
                <li>Request access to the personal data we hold about you</li>
                <li>Request correction or deletion of your personal data</li>
                <li>Opt out of any communications from us at any time</li>
              </ul>
              <p className="text-db-muted leading-relaxed mt-3">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:dadbytesdev@gmail.com" className="text-primary hover:underline">
                  dadbytesdev@gmail.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Children&apos;s Privacy</h2>
              <p className="text-db-muted leading-relaxed">
                Our apps are not directed at children under 13. We do not knowingly collect
                personal information from children. If you believe a child has provided us
                with personal data, please contact us and we will delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Changes to This Policy</h2>
              <p className="text-db-muted leading-relaxed">
                We may update this privacy policy from time to time. We will notify users of
                material changes through the app or website. Continued use of our services
                after any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Contact</h2>
              <p className="text-db-muted leading-relaxed">
                For any privacy-related questions or requests, contact us at{" "}
                <a href="mailto:dadbytesdev@gmail.com" className="text-primary hover:underline">
                  dadbytesdev@gmail.com
                </a>
                .
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
