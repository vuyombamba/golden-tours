import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Calendar, Users2, Search } from "lucide-react";

const packageOptions = [
  "School Day Excursion",
  "Holiday Excursion",
  "Matric Study Camp",
  "Matric Dinner / Farewell",
  "Leadership Camp",
  "Transport / Bus Hire",
];

export default function QuickEnquiryBar() {
  const navigate = useNavigate();
  const [packageType, setPackageType] = useState(packageOptions[0]);
  const [date, setDate] = useState("");
  const [learners, setLearners] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    navigate("/contact", { state: { packageType, preferredDate: date, learners } });
  }

  const fieldCls = "w-full bg-transparent text-sm font-medium text-navy placeholder:text-navy/40 outline-none";
  const labelCls = "text-[11px] font-semibold uppercase tracking-wide text-navy/40";

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-20 mx-auto -mt-12 flex w-full max-w-5xl flex-col gap-4 rounded-2xl bg-white p-5 shadow-2xl shadow-navy-deep/30 md:-mt-14 md:flex-row md:items-center md:gap-0 md:divide-x md:divide-navy/10 md:p-3"
    >
      <div className="flex items-center gap-3 px-3 py-2 md:flex-1">
        <GraduationCap className="shrink-0 text-gold-bronze" size={20} />
        <div className="w-full">
          <label className={labelCls}>Package</label>
          <select className={fieldCls} value={packageType} onChange={(e) => setPackageType(e.target.value)}>
            {packageOptions.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="flex items-center gap-3 px-3 py-2 md:flex-1">
        <Calendar className="shrink-0 text-gold-bronze" size={20} />
        <div className="w-full">
          <label className={labelCls}>Preferred date</label>
          <input type="date" className={fieldCls} value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
      </div>

      <div className="flex items-center gap-3 px-3 py-2 md:flex-1">
        <Users2 className="shrink-0 text-gold-bronze" size={20} />
        <div className="w-full">
          <label className={labelCls}>Learners</label>
          <input
            type="number"
            min={1}
            placeholder="e.g. 120"
            className={fieldCls}
            value={learners}
            onChange={(e) => setLearners(e.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="btn-gold mx-3 my-1 shrink-0 md:mx-3">
        <Search size={17} /> Get a Quote
      </button>
    </form>
  );
}
