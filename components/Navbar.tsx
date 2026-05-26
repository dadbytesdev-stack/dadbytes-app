import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-db-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="Dad Bytes"
            width={120}
            height={56}
            className="h-10 w-auto"
            priority
          />
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
          <a
            href="/#early-access"
            className="text-sm font-medium bg-primary text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Get Early Access
          </a>
        </nav>
      </div>
    </header>
  );
}
