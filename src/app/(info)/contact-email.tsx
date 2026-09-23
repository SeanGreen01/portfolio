const contactEmail = "seangreen640@gmail.com";

export default function ContactEmail() {
  return (
    <a
      href={`mailto:${contactEmail}`}
      className="break-words text-white underline decoration-neutral-600 underline-offset-4 transition hover:decoration-white"
    >
      {contactEmail}
    </a>
  );
}
