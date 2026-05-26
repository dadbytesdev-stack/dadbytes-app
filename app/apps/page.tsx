import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoreButtons from "@/components/StoreButtons";

export const metadata: Metadata = {
  title: "Apps | Dad Bytes",
  description: "Explore MindMantra and The Recipe Extractor — free apps available on Google Play and the App Store.",
};

export default function AppsPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">

        {/* ── Page Header ──────────────────────────────────── */}
        <section className="bg-db-surface border-b border-db-border">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-semibold text-db-text mb-3">Our Apps</h1>
            <p className="text-db-muted text-lg max-w-xl">
              Two apps. Both free. Both available on Google Play and the App Store.
            </p>
          </div>
        </section>

        {/* ── MindMantra ───────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 py-16 border-b border-db-border">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                Daily Affirmations
              </div>
              <h2 className="text-3xl font-semibold text-db-text mb-4">
                MindMantra
              </h2>
              <p className="text-db-muted mb-4">
                Build a daily mindset habit with affirmations tailored to men.
                MindMantra delivers a fresh, focused affirmation every day —
                short enough to read in seconds, meaningful enough to carry
                through the day.
              </p>
              <ul className="space-y-2 text-sm text-db-muted mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Daily affirmation notifications
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Tailored for men&apos;s mindset
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Simple, distraction-free interface
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> 100% free
                </li>
              </ul>
              <StoreButtons
                googlePlayUrl="https://play.google.com/store/apps/details?id=app.vercel.mma_pied_seven.twa"
                appStoreUrl="https://apps.apple.com/us/app/mindmantra-daily-affirmations/id6764234535"
              />
            </div>
            <div className="bg-db-surface rounded-2xl border border-db-border p-10 flex items-center justify-center min-h-64">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">MM</span>
                </div>
                <p className="text-sm text-db-muted">MindMantra</p>
                <p className="text-xs text-db-muted">Daily Affirmations</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Recipe Extractor ─────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-db-surface rounded-2xl border border-db-border p-10 flex items-center justify-center min-h-64">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">RE</span>
                </div>
                <p className="text-sm text-db-muted">The Recipe Extractor</p>
                <p className="text-xs text-db-muted">Clean recipes, instantly</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                Recipe Tool
              </div>
              <h2 className="text-3xl font-semibold text-db-text mb-4">
                The Recipe Extractor
              </h2>
              <p className="text-db-muted mb-4">
                Paste any recipe URL and get just the recipe. No life stories,
                no ads, no pop-ups — just the ingredients and steps you need,
                clean and ready to use.
              </p>
              <ul className="space-y-2 text-sm text-db-muted mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Extract from any recipe website
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Clean, ad-free results
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Copy ingredients & steps instantly
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> 100% free
                </li>
              </ul>
              <StoreButtons
                googlePlayUrl="https://play.google.com/store/apps/details?id=app.vercel.re_flax.twa"
                appStoreUrl="https://apps.apple.com/us/app/the-recipe-extractor/id6768546046"
              />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
