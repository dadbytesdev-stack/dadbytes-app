import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Dad Bytes",
  description: "Terms of Service for Dad Bytes apps and website.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-semibold text-db-text mb-2">Terms of Service</h1>
          <p className="text-sm text-db-muted mb-10">Last updated: January 2025</p>

          <div className="prose prose-sm max-w-none space-y-8 text-db-text">

            <section>
              <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p className="text-db-muted leading-relaxed">
                By downloading, installing, or using any Dad Bytes application or visiting
                www.dadbytes.app, you agree to be bound by these Terms of Service. If you do
                not agree to these terms, please do not use our apps or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Use of Our Apps</h2>
              <p className="text-db-muted leading-relaxed">
                Dad Bytes apps are provided for personal, non-commercial use. You may not:
              </p>
              <ul className="list-disc list-inside text-db-muted space-y-1 mt-2 ml-4">
                <li>Reverse engineer, decompile, or disassemble any part of our apps</li>
                <li>Use our apps for any unlawful purpose</li>
                <li>Attempt to gain unauthorised access to any part of our services</li>
                <li>Reproduce or distribute our app content without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Intellectual Property</h2>
              <p className="text-db-muted leading-relaxed">
                All content, features, and functionality of Dad Bytes apps and website —
                including text, graphics, logos, and software — are the exclusive property
                of Dad Bytes and are protected by applicable intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Subscriptions and Payments</h2>
              <p className="text-db-muted leading-relaxed">
                Some features of our apps may require a subscription or one-time payment.
                Subscriptions are managed through Google Play or the Apple App Store. All
                payments are processed by the respective platform (Google or Apple) and are
                subject to their terms and policies. Donations made through our website are
                processed by Stripe and are non-refundable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Disclaimer of Warranties</h2>
              <p className="text-db-muted leading-relaxed">
                Our apps are provided &quot;as is&quot; without warranty of any kind, express or
                implied. We do not warrant that the apps will be error-free, uninterrupted,
                or free of viruses or other harmful components. Your use of the apps is at
                your sole risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Limitation of Liability</h2>
              <p className="text-db-muted leading-relaxed">
                To the maximum extent permitted by law, Dad Bytes shall not be liable for
                any indirect, incidental, special, consequential, or punitive damages arising
                out of or related to your use of our apps or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Changes to Terms</h2>
              <p className="text-db-muted leading-relaxed">
                We reserve the right to update these Terms of Service at any time. We will
                notify users of significant changes through the app or via email where
                applicable. Continued use of our apps following any changes constitutes
                acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Contact</h2>
              <p className="text-db-muted leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{" "}
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
