import { business } from "../data/content";

export default function Privacy() {
  return (
    <section className="bg-offwhite py-32">
      <div className="container-wide max-w-3xl">
        <h1 className="text-3xl font-extrabold text-navy md:text-4xl">Privacy Policy</h1>
        <div className="prose mt-8 max-w-none space-y-4 text-navy/70">
          <p>
            This is placeholder privacy policy content for Golden Tours. Replace it with a policy reviewed
            against South Africa's Protection of Personal Information Act (POPIA) before launch.
          </p>
          <p>
            Information submitted through our contact and quote forms (such as your name, email address, phone
            number and trip details) is used solely to respond to your enquiry and arrange your booking. We do
            not sell or share your information with third parties for marketing purposes.
          </p>
          <p>
            To ask about the information we hold, or to request it be corrected or removed, contact us at{" "}
            <a href={`mailto:${business.email}`} className="underline">{business.email}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
