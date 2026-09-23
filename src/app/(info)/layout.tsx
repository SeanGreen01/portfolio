import Link from "next/link";

export default function InfoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 sm:px-10 lg:px-16">
        <nav aria-label="Main navigation" className="flex items-center justify-between gap-6">
          <Link href="/" aria-label="Sean Green — home" className="text-sm font-semibold tracking-wide text-white">
            SG
          </Link>
          <Link href="/" className="text-sm text-neutral-400 transition hover:text-white">
            Back to portfolio
          </Link>
        </nav>

        <main className="mx-auto w-full max-w-3xl flex-1 py-20 sm:py-28">
          {children}
        </main>

        <footer className="flex flex-col gap-5 border-t border-neutral-800 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Sean Green</p>
          <nav aria-label="Footer navigation" className="flex gap-5 text-sm text-neutral-400">
            <Link href="/privacy" className="transition hover:text-white">Privacy</Link>
            <Link href="/support" className="transition hover:text-white">Support</Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}
