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

          <div className="space-y-8 text-db-text">

            <section>
              <h2 className="text-xl font-semibold mb-3">1. Overview</h2>
              <p className="text-db-muted leading-relaxed">
                Dad Bytes is committed to protecting your privacy. This policy explains what
                information we collect, how we use it, and your rights regarding your
                personal data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
              <p className="text-db-muted leading-relaxed">
                We collect minimal data necessary to provide our services: your email address
                if you sign up for early access notifications, anonymised usage analytics,
                and payment information processed entirely by Google Play, Apple App Store,
                or Stripe — we do not store card details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
              <p className="text-db-muted leading-relaxed">
                We use collected information solely to send early access notifications if you
                have opted in, improve app performance, process payments, and respond to
                support enquiries. We do not sell, rent, or share your personal information
                with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Third-Party Services</h2>
              <p className="text-db-muted leading-relaxed">
                Our apps integrate with Google Play and Apple App Store for subscription
                management, and Stripe for donation payment processing. Each service has its
                own privacy policy governing data they collect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Data Retention</h2>
              <p className="text-db-muted leading-relaxed">
                We retain your data only as long as necessary to fulfil the purposes outlined
                in this policy. Email addresses collected for early access may be removed at
                any time upon your request.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
              <p className="text-db-muted leading-relaxed">
                You have the right to request access to, correction of, or deletion of your
                personal data, and to opt out of any communications from us at any time.
                Contact us at{" "}
                <a href="mailto:dadbytesdev@gmail.com" className="text-primary hover:underline">
                  dadbytesdev@gmail.com
                </a>{" "}
                to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Children&apos;s Privacy</h2>
              <p className="text-db-muted leading-relaxed">
                Our apps are not directed at children under 13. We do not knowingly collect
                personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Changes to This Policy</h2>
              <p className="text-db-muted leading-relaxed">
                We may update this privacy policy from time to time. Continued use of our
                services after any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Contact</h2>
              <p className="text-db-muted leading-relaxed">
                For any privacy-related questions, contact us at{" "}
                <a href="mailto:dadbytesdev@gmail.com" className="text-primary hover:underline">
                  dadbytesdev@gmail.com
                </a>.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
