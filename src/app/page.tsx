import Link from "next/link";

const links = [
  {
    name: "GitHub",
    href: "https://github.com/YOUR-GITHUB-USERNAME",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME",
  },
  {
    name: "Email",
    href: "mailto:YOUR-EMAIL-ADDRESS",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 sm:px-10 lg:px-16">
        <nav className="flex items-center justify-between">
          <a
            href="#top"
            className="text-sm font-semibold tracking-wide text-white"
          >
            SG
          </a>

          <a
            href="/Sean-Green-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 transition hover:border-neutral-400 hover:text-white"
          >
            View CV
          </a>
        </nav>

        <section
          id="top"
          className="flex flex-1 items-center py-24 sm:py-32"
        >
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              Software Engineer · Glasgow, UK
            </p>

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl">
              Hi, I&apos;m Sean Green.
            </h1>

            <h2 className="mt-5 max-w-3xl text-2xl leading-tight text-neutral-300 sm:text-4xl">
              I build practical software and intelligent systems that solve
              real-world problems.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
              I&apos;m a software engineering graduate and business owner
              focused on full-stack development, artificial intelligence and
              building useful digital products.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
              >
                View my work
              </a>

              <a
                href="mailto:YOUR-EMAIL-ADDRESS"
                className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-neutral-400"
              >
                Contact me
              </a>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="border-t border-neutral-800 py-20 sm:py-24"
        >
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Selected work
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Projects coming soon.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-400">
                I&apos;m currently building a collection of full-stack and AI
                engineering projects. Detailed case studies, demonstrations and
                source code will be added here.
              </p>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-5 border-t border-neutral-800 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Sean Green
          </p>

          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="text-sm text-neutral-400 transition hover:text-white">
              Privacy
            </Link>
            <Link href="/support" className="text-sm text-neutral-400 transition hover:text-white">
              Support
            </Link>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name === "Email" ? undefined : "_blank"}
                rel={link.name === "Email" ? undefined : "noreferrer"}
                className="text-sm text-neutral-400 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
