import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoreButtons from "@/components/StoreButtons";

const DONATE_LINK = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ?? "#";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">

        {/* ── Hero ───────────────────────────────────────────── */}
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

        {/* ── App Highlights ─────────────────────────────────── */}
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
                MindMantra · Daily Affirmations
              </h3>
              <p className="text-db-muted text-sm mb-6">
                Start each day with a positive affirmation tailored to men.
       