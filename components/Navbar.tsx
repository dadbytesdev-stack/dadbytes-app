import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-db-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-db-text tracking-tight hover:text-primary transition-colors">
          Dad Bytes
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-db-muted hover:text-db-text transition-colors"
          >
            Home
          </Link>
          <Link
            href="/apps"
            className="text-sm font-medium text-db-muted hover:text-db-text transition-colors"
          >
            Apps
          </Link>
          <Link
            href="/apps"
            className="text-sm font-medium bg-primary text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Get the Apps
          </Link>
        </nav>
      </div>
    </header>
  );
}
