import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoreButtons from "@/components/StoreButtons";

export const metadata: Metadata = {
  title: "Apps | Dad Bytes",
  description: "Explore MindMantra and The Recipe Extractor — free apps available on Google Play and the App Store.",
};

const MM_ICON = "https://play-lh.googleusercontent.com/7xpN1sq5hECkV4PCijMAdPsE_2PCEAIl-cTgMAGKaYlwkmOuxoS3k_2KtBG7t6akytL5-magCrbVEtOZcRaYs0M=w160-h160-rw";
const MM_SCREENS = [
  "https://play-lh.googleusercontent.com/BhgaA7HjtBVB4pHVx3pKmmtQma3SJGRLVIu04gTGdzguyiomt6vhiNlLa2oFxQnn4lMnRSeEN0dnXVsJqHyJMA=w300-h650-rw",
  "https://play-lh.googleusercontent.com/PtNqSLkWT_iz5xX1c2Jmz3RVY4mve39_KX2hEiFsN8TgGJeUXRr98FMUJlCb-JamucmkESTFH_yYdqDSkaJ-sQ=w300-h650-rw",
];

const RE_ICON = "https://play-lh.googleusercontent.com/j7YWwwqi4FHy0rRPAE6xPCZ2gEEW6GEdTwEpz65K9C7Jy9K8fv8Iyq8LKaMaUD7W7Qk7dhORQ-sfBvBtzgssRQ=w160-h160-rw";
const RE_SCREENS = [
  "https://play-lh.googleusercontent.com/2JCtGcWmwKJknaToIDShf2PLi-Mqo6Q-C3JkD1Ns09qIUtS72dy-SYcJgzmWK85u9_EpJ1IoEEmGr4Yq4Fr3fRc=w300-h650-rw",
  "https://play-lh.googleusercontent.com/4EoqFGMAqMJM84viMNkoub54s0OKp12om7nqkRvTONTvPzmUm43BMQ8HzVPFApvXX21AUxWq700Kn6_M12r-=w300-h650-rw",
];

export default function AppsPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">

        {/* Page Header */}
        <section className="bg-db-surface border-b border-db-border">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-semibold text-db-text mb-3">Our Apps</h1>
            <p className="text-db-muted text-lg max-w-xl">
              Two apps. Both free. Both available on Google Play and the App Store.
            </p>
          </div>
        </section>

        {/* MindMantra */}
        <section className="max-w-5xl mx-auto px-6 py-16 border-b border-db-border">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Info */}
            <div>
              <div className="flex items-center gap-4 mb-5">
                <img src={MM_ICON} alt="MindMantra icon" className="w-16 h-16 rounded-2xl shadow-sm" />
                <div>
                  <div className="inline-flex items-center bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-1">
                    Daily Affirmations
                  </div>
                  <h2 className="text-2xl font-semibold text-db-text">MindMantra</h2>
                </div>
              </div>
              <p className="text-db-muted mb-5">
                Build a daily mindset habit with affirmations tailored to men.
                MindMantra delivers a fresh, focused affirmation every day —
                short enough to read in seconds, meaningful enough to carry
                through the day.
              </p>
              <ul className="space-y-2 text-sm text-db-muted mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-primary">&#10003;</span> Daily affirmation notifications
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">&#10003;</span> Tailored for men&apos;s mindset
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">&#10003;</span> Focus categories &amp; favourites
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">&#10003;</span> 100% free
                </li>
              </ul>
              <StoreButtons
                googlePlayUrl="https://play.google.com/store/apps/details?id=app.vercel.mma_pied_seven.twa"
                appStoreUrl="https://apps.apple.com/us/app/mindmantra-daily-affirmations/id6764234535"
              />
            </div>

            {/* Screenshots */}
            <div className="flex gap-4 justify-center">
              {MM_SCREENS.map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-md border border-db-border flex-1 max-w-[160px]">
                  <img src={src} alt={`MindMantra screenshot ${i + 1}`} className="w-full h-auto" />
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Recipe Extractor */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Screenshots */}
            <div className="flex gap-4 justify-center order-2 md:order-1">
              {RE_SCREENS.map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-md border border-db-border flex-1 max-w-[160px]">
                  <img src={src} alt={`Recipe Extractor screenshot ${i + 1}`} className="w-full h-auto" />
                </div>
              ))}
            </div>

            {/* Info */}
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-4 mb-5">
                <img src={RE_ICON} alt="Recipe Extractor icon" className="w-16 h-16 rounded-2xl shadow-sm" />
                <div>
                  <div className="inline-flex items-center bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-1">
                    Recipe Tool
                  </div>
                  <h2 className="text-2xl font-semibold text-db-text">The Recipe Extractor</h2>
                </div>
              </div>
              <p className="text-db-muted mb-5">
                Paste any recipe URL and get just the recipe. No life stories,
                no ads, no pop-ups — just the ingredients and steps you need,
                clean and ready to use.
              </p>
              <ul className="space-y-2 text-sm text-db-muted mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-primary">&#10003;</span> Extract from any recipe website
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">&#10003;</span> Clean, ad-free results
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">&#10003;</span> Copy ingredients &amp; steps instantly
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">&#10003;</span> 100% free
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
