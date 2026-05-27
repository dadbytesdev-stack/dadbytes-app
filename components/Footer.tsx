import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-db-border bg-db-bg mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-db-muted">
          &copy; {new Date().getFullYear()} Dad Bytes. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          <Link href="/apps" className="text-sm text-db-muted hover:text-db-text transition-colors">
            Apps
          </Link>
          <Link href="/terms" className="text-sm text-db-muted hover:text-db-text transition-colors">
            Terms of Service
          </Link>
          <Link href="/data-privacy" className="text-sm text-db-muted hover:text-db-text transition-colors">
            Data Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
