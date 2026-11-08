import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { business } from "../data/content";

const packageOptions = [
  "School Day Excursion",
  "Holiday Excursion",
  "Matric Study Camp",
  "Matric Dinner / Farewell",
  "Leadership Camp",
  "Drug & Awareness Day",
  "School Fun Day Fundraiser",
  "Staff Year-End Function",
  "Transport / Bus Hire",
];

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  schoolName: string;
  contactPerson: string;
  email: string;
  phone: string;
  packageType: string;
  grades: string;
  learners: string;
  preferredDate: string;
  notes: string;
  consent: boolean;
}

const initialState: FormState = {
  schoolName: "",
  contactPerson: "",
  email: "",
  phone: "",
  packageType: packageOptions[0],
  grades: "",
  learners: "",
  preferredDate: "",
  notes: "",
  consent: false,
};

interface Props {
  defaultPackage?: string;
}

export default function QuoteForm({ defaultPackage }: Props) {
  const [form, setForm] = useState<FormState>({
    ...initialState,
    packageType: defaultPackage ?? initialState.packageType,
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): boolean {
    const next: typeof errors = {};
    if (!form.schoolName.trim()) next.schoolName = "Please enter the school or organisation name.";
    if (!form.contactPerson.trim()) next.contactPerson = "Please enter a contact person.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Please enter a valid email address.";
    if (!form.phone.trim()) next.phone = "Please enter a contact number.";
    if (!form.learners || Number(form.learners) < 1) next.learners = "Please enter the number of learners.";
    if (!form.consent) next.consent = "Please confirm you're happy for us to contact you about this enquiry.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    try {
      // ---------------------------------------------------------------
      // INTEGRATION POINT
      // No backend or form provider is configured yet. Wire this up to
      // a real endpoint (e.g. Formspree, Resend, a serverless function,
      // or your own API) before relying on this form in production.
      //
      // Example:
      // const res = await fetch("/api/quote", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      // if (!res.ok) throw new Error("Request failed");
      // ---------------------------------------------------------------
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-navy/10 bg-white p-10 text-center">
        <CheckCircle2 className="text-gold" size={40} />
        <h3 className="text-xl font-bold text-navy">Enquiry received</h3>
        <p className="max-w-sm text-sm text-navy/60">
          Thank you — this is a quote enquiry, not a confirmed booking. Our team will be in touch at{" "}
          {business.phone} or by email shortly to confirm the details.
        </p>
        <button className="btn-outline-dark mt-2" onClick={() => setStatus("idle")}>
          Submit another enquiry
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-navy";
  const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy/50";
  const errCls = "mt-1 text-xs text-red-600";

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 rounded-2xl border border-navy/10 bg-white p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="schoolName">School / organisation name</label>
          <input id="schoolName" className={inputCls} value={form.schoolName} onChange={(e) => update("schoolName", e.target.value)} required />
          {errors.schoolName && <p className={errCls}>{errors.schoolName}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="contactPerson">Contact person</label>
          <input id="contactPerson" className={inputCls} value={form.contactPerson} onChange={(e) => update("contactPerson", e.target.value)} required />
          {errors.contactPerson && <p className={errCls}>{errors.contactPerson}</p>}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="email">Email address</label>
          <input id="email" type="email" className={inputCls} value={form.email} onChange={(e) => update("email", e.target.value)} required />
          {errors.email && <p className={errCls}>{errors.email}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">Phone number</label>
          <input id="phone" className={inputCls} value={form.phone} onChange={(e) => update("phone", e.target.value)} required />
          {errors.phone && <p className={errCls}>{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="packageType">Package / excursion type</label>
        <select id="packageType" className={inputCls} value={form.packageType} onChange={(e) => update("packageType", e.target.value)}>
          {packageOptions.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <label className={labelCls} htmlFor="grades">Grade(s)</label>
          <input id="grades" placeholder="e.g. Grade 10–11" className={inputCls} value={form.grades} onChange={(e) => update("grades", e.target.value)} />
        </div>
        <div>
          <label className={labelCls} htmlFor="learners">Number of learners</label>
          <input id="learners" type="number" min={1} className={inputCls} value={form.learners} onChange={(e) => update("learners", e.target.value)} required />
          {errors.learners && <p className={errCls}>{errors.learners}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="preferredDate">Preferred date</label>
          <input id="preferredDate" type="date" className={inputCls} value={form.preferredDate} onChange={(e) => update("preferredDate", e.target.value)} />
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="notes">Additional requirements</label>
        <textarea id="notes" rows={4} className={inputCls} value={form.notes} onChange={(e) => update("notes", e.target.value)} />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-navy/70">
          <input type="checkbox" className="mt-1" checked={form.consent} onChange={(e) => update("consent", e.target.checked)} />
          <span>
            I agree to be contacted by Golden Tours about this enquiry, in line with the{" "}
            <a href="/privacy" className="underline">Privacy Policy</a>.
          </span>
        </label>
        {errors.consent && <p className={errCls}>{errors.consent}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong sending your enquiry. Please try again, or contact us directly on {business.phone}.</p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-gold w-full md:w-auto">
        {status === "submitting" ? <Loader2 className="animate-spin" size={18} /> : null}
        {status === "submitting" ? "Sending enquiry..." : "Request a Quote"}
      </button>
    </form>
  );
}
