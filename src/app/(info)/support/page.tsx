import type { Metadata } from "next";
import ContactEmail from "../contact-email";

export const metadata: Metadata = {
  title: "SG Dashboard (Kaizen) Support | Sean Green",
  description: "Contact Sean Green for help with SG Dashboard, also known as Kaizen.",
};

export default function SupportPage() {
  return (
    <>
      <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">SG Dashboard · Kaizen</p>
      <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">Support</h1>
      <p className="mt-8 text-lg leading-8 text-neutral-300">
        Need help with SG Dashboard (also known as Kaizen) or want to report a problem? Email me with a brief
        description of the issue, your device, and the app version. If possible,
        include the steps that led to the problem so I can help you resolve it.
      </p>
      <p className="mt-8 rounded-2xl border border-neutral-800 p-6 text-neutral-400">
        <ContactEmail />
      </p>
    </>
  );
}
