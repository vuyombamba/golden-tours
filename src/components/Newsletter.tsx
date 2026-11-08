import { FormEvent, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // ---------------------------------------------------------------
    // INTEGRATION POINT — no email/newsletter provider is connected.
    // Wire this up to a real list (Mailchimp, Resend audiences, etc.)
    // before relying on it to capture real subscribers.
    // ---------------------------------------------------------------
    setStatus("sent");
    setEmail("");
  }

  return (
    <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm md:p-10">
      <h3 className="text-xl font-bold text-white">Travel updates, occasionally</h3>
      <p className="mt-2 max-w-sm text-sm text-white/60">
        Leave your email and we'll let you know about new tours and seasonal offers.
      </p>
      {status === "sent" ? (
        <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-gold">
          <CheckCircle2 size={18} /> Thanks — you're on the list.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 flex gap-2">
          <input
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold"
          />
          <button type="submit" aria-label="Subscribe" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-navy transition-transform hover:scale-105">
            <Send size={18} />
          </button>
        </form>
      )}
    </div>
  );
}
