import type { Metadata } from "next";
import ContactEmail from "../contact-email";

export const metadata: Metadata = {
  title: "SG Dashboard (Kaizen) Privacy Policy | Sean Green",
  description: "Privacy policy for SG Dashboard, also known as Kaizen, developed by Sean Green.",
};

export default function PrivacyPage() {
  return (
    <>
      <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">SG Dashboard · Kaizen</p>
      <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">Privacy policy</h1>
      <p className="mt-5 text-sm text-neutral-400">
        Effective date: <time dateTime="2026-09-23">23 September 2026</time>
      </p>
      <article className="mt-10 space-y-10 text-base leading-8 text-neutral-300 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-white [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_p+p]:mt-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        <section aria-label="About this policy">
          <p>
            SG Dashboard is the App Store name of Kaizen. This policy applies to
            SG Dashboard, referred to as Kaizen throughout this policy.
          </p>
          <p>Kaizen is a productivity application designed to help users plan their day, organise tasks, manage calendar events and reflect on their daily priorities.</p>
          <p>Kaizen is developed and operated by Sean Green in the United Kingdom.</p>
          <p>If you have any questions about this Privacy Policy or the handling of your personal information, you can contact:</p>
          <p>Email: <ContactEmail /></p>
        </section>

        <section>
          <h2>Information Kaizen collects</h2>
          <p>To provide Kaizen&apos;s account and synchronisation features, the app collects and stores certain information.</p>
          <h3>Account information</h3>
          <p>When you create an account, Kaizen uses Firebase Authentication to process:</p>
          <ul>
            <li>your email address;</li>
            <li>your authentication credentials;</li>
            <li>a unique Firebase user identifier associated with your account.</li>
          </ul>
          <p>Firebase Authentication may also process technical information such as your IP address and user-agent information for authentication, security and abuse-prevention purposes.</p>
          <h3>Content you create</h3>
          <p>Information you enter into Kaizen may be stored in Firebase Cloud Firestore. This can include:</p>
          <ul>
            <li>tasks and priorities;</li>
            <li>calendar events;</li>
            <li>daily planning information;</li>
            <li>daily reviews;</li>
            <li>associated timestamps and account information.</li>
          </ul>
          <p>This information is associated with your Firebase user ID so that Kaizen can retrieve the correct information for your account.</p>
        </section>

        <section>
          <h2>How your information is used</h2>
          <p>Your information is used only to provide and operate Kaizen.</p>
          <p>This includes:</p>
          <ul>
            <li>creating and managing your account;</li>
            <li>signing you into Kaizen;</li>
            <li>saving your tasks, calendar events and daily reviews;</li>
            <li>synchronising your information between app sessions and supported devices;</li>
            <li>displaying your agenda and priorities;</li>
            <li>maintaining the security and operation of the service.</li>
          </ul>
          <p>Kaizen does not use your personal information for targeted advertising.</p>
          <p>Kaizen does not sell your personal information.</p>
          <p>Kaizen does not use your information to track you across apps or websites owned by other companies.</p>
          <p>Kaizen does not currently use Firebase Analytics, advertising SDKs or third-party behavioural analytics services.</p>
        </section>

        <section>
          <h2>Legal basis for processing</h2>
          <p>Where UK data protection law applies, personal information required to create your account and provide Kaizen&apos;s features is processed because it is necessary to provide the service you have requested.</p>
          <p>Where processing is necessary to protect the security and integrity of Kaizen, information may also be processed for legitimate interests relating to security, fraud prevention and service operation.</p>
        </section>

        <section>
          <h2>Firebase and service providers</h2>
          <p>Kaizen uses services provided by Google Firebase.</p>
          <p>The Firebase services currently used by Kaizen are:</p>
          <ul>
            <li>Firebase Authentication, for account registration and authentication;</li>
            <li>Firebase Cloud Firestore, for storing Kaizen user data.</li>
          </ul>
          <p>Google generally processes Firebase customer data on behalf of the developer as a data processor.</p>
          <p>Firebase Authentication operates using infrastructure located in the United States. Cloud Firestore may process data using Google infrastructure according to the configured Firebase and Google Cloud service locations.</p>
          <p>As a result, your information may be processed outside the United Kingdom.</p>
          <p>Google provides contractual and organisational safeguards intended to protect personal information processed through Firebase services.</p>
        </section>

        <section>
          <h2>Data security</h2>
          <p>Kaizen uses Firebase security controls to restrict access to stored user information.</p>
          <p>Kaizen user data is associated with a Firebase user identifier, and access controls are designed so that authenticated users can access only information associated with their own account.</p>
          <p>Firebase encrypts supported Authentication and Cloud Firestore data while in transit and at rest.</p>
          <p>Although reasonable technical and organisational measures are used to protect information, no internet-based service can guarantee absolute security.</p>
        </section>

        <section>
          <h2>Data retention</h2>
          <p>Your Kaizen data is retained while your account remains active or until you choose to delete it.</p>
          <p>When you permanently delete your Kaizen account, Kaizen is designed to delete the associated Kaizen data stored for your account and then delete your Firebase Authentication account.</p>
          <p>Some information may remain temporarily within Firebase or Google backup and operational systems in accordance with their normal backup, security and service-retention processes.</p>
        </section>

        <section>
          <h2>Account deletion</h2>
          <p>You can permanently delete your account from within Kaizen through the account settings.</p>
          <p>Account deletion removes your Kaizen account and the personal Kaizen data associated with that account, except where information must be retained for legal, security or regulatory reasons.</p>
          <p>If you experience difficulty deleting your account, you can contact: <ContactEmail /></p>
        </section>

        <section>
          <h2>Your data protection rights</h2>
          <p>Depending on where you live, you may have rights relating to your personal information.</p>
          <p>Under UK data protection law, these may include the right to:</p>
          <ul>
            <li>request access to personal information held about you;</li>
            <li>request correction of inaccurate information;</li>
            <li>request deletion of your personal information;</li>
            <li>request restriction of certain processing;</li>
            <li>object to certain processing;</li>
            <li>request a copy of your information in a portable format where applicable.</li>
          </ul>
          <p>You can exercise these rights by contacting: <ContactEmail /></p>
          <p>If you are located in the United Kingdom and believe your personal information has not been handled correctly, you also have the right to raise a concern with the UK Information Commissioner&apos;s Office.</p>
        </section>

        <section>
          <h2>Children&apos;s privacy</h2>
          <p>Kaizen is not specifically designed for children and does not intentionally seek to collect personal information from children.</p>
          <p>If you believe that a child has provided personal information to Kaizen inappropriately, please contact us so that the situation can be investigated.</p>
        </section>

        <section>
          <h2>Changes to this Privacy Policy</h2>
          <p>This Privacy Policy may be updated if Kaizen&apos;s features, data practices or service providers change.</p>
          <p>When material changes are made, the updated Privacy Policy will be made available within the app and through Kaizen&apos;s public Privacy Policy webpage.</p>
          <p>The effective date at the top of this policy will be updated when changes are made.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>For privacy questions, requests or concerns relating to Kaizen, contact:</p>
          <address className="mt-4 not-italic">
            Sean Green<br />
            United Kingdom<br />
            Email: <ContactEmail />
          </address>
        </section>
      </article>
    </>
  );
}
