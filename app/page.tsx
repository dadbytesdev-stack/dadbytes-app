import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoreButtons from "@/components/StoreButtons";

const DONATE_LINK = "https://ko-fi.com/supportdadbytes";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">

        {/* Hero */}
        <section className="bg-db-surface border-b border-db-border">
          <div className="max-w-5xl mx-auto px-6 py-24 text-center">
            <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-4">
              Built by a dad, for everyone
            </span>
            <h1 className="text-5xl font-semibold text-db-text leading-tight mb-6">
              Simple, Useful Apps<br />for Everyday Life
            </h1>
            <p className="text-lg text-db-muted max-w-xl mx-auto mb-10">
              We build small, focused tools that make a real difference — no
              bloat, no noise. Just apps that help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/apps"
                className="bg-primary text-white px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                View Our Apps
              </Link>
              <a
                href="#early-access"
                className="border border-db-border text-db-text px-7 py-3 rounded-full font-medium hover:bg-db-surface transition-colors"
              >
                Get Early Access
              </a>
            </div>
          </div>
        </section>

        {/* App Highlights */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold text-db-text mb-2">Our Apps</h2>
          <p className="text-db-muted mb-12">Available on Google Play and the App Store.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* MindMantra */}
            <div className="border border-db-border rounded-2xl p-8 bg-white hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center mb-5">
                <span className="text-2xl font-bold text-primary">MM</span>
              </div>
              <h3 className="text-xl font-semibold text-db-text mb-2">
                MindMantra &middot; Daily Affirmations
              </h3>
              <p className="text-db-muted text-sm mb-6">
                Start each day with a positive affirmation tailored to men.
                Build a mindset habit that sticks with simple, daily prompts.
              </p>
              <StoreButtons
                googlePlayUrl="https://play.google.com/store/apps/details?id=app.vercel.mma_pied_seven.twa"
                appStoreUrl="https://apps.apple.com/us/app/mindmantra-daily-affirmations/id6764234535"
              />
            </div>

            {/* Recipe Extractor */}
            <div className="border border-db-border rounded-2xl p-8 bg-white hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center mb-5">
                <span className="text-2xl font-bold text-primary">RE</span>
              </div>
              <h3 className="text-xl font-semibold text-db-text mb-2">
                The Recipe Extractor
              </h3>
              <p className="text-db-muted text-sm mb-6">
                Paste any recipe URL and get just the recipe — no life stories,
                no ads, no scrolling. Clean, copyable, and yours.
              </p>
              <StoreButtons
                googlePlayUrl="https://play.google.com/store/apps/details?id=app.vercel.re_flax.twa"
                appStoreUrl="https://apps.apple.com/us/app/the-recipe-extractor/id6768546046"
              />
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/apps" className="text-sm font-medium text-primary hover:underline">
              See full app details &rarr;
            </Link>
          </div>
        </section>

        {/* Early Access */}
        <section id="early-access" className="bg-db-surface border-t border-b border-db-border">
          <div className="max-w-xl mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl font-semibold text-db-text mb-3">Get Early Access</h2>
            <p className="text-db-muted mb-8">
              Be the first to try new apps and features from Dad Bytes. No spam —
              just a heads-up when something new drops.
            </p>
            <form
              action="https://formsubmit.co/dadbytesdev@gmail.com"
              method="POST"
              className="flex flex-col sm:flex-row gap-3"
            >
              <input type="hidden" name="_subject" value="New Early Access Sign-Up" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="flex-1 border border-db-border rounded-full px-5 py-3 text-sm outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Sign Me Up
              </button>
            </form>
          </div>
        </section>

        {/* Donate */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-db-text mb-3">Support Dad Bytes</h2>
          <p className="text-db-muted max-w-md mx-auto mb-8">
            All our apps are free. If they&apos;ve helped you, consider buying us a
            coffee — it keeps the lights on and the apps coming.
          </p>
          <a
            href={DONATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            &#9749; Buy Us a Coffee
          </a>
        </section>

      </main>

      <Footer />
    </>
  );
}
