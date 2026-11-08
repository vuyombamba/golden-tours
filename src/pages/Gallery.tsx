import { useState } from "react";
import { X } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { galleryImages } from "../data/content";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <section className="bg-navy pb-16 pt-32 text-white md:pt-40">
        <div className="container-wide">
          <SectionHeading light eyebrow="Gallery" title="A visual glimpse of Golden Tours." />
        </div>
      </section>

      <section className="bg-offwhite py-20">
        <div className="container-wide columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {galleryImages.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="block w-full overflow-hidden rounded-xl"
            >
              <img src={src} alt="" loading="lazy" className="w-full object-cover transition-transform duration-500 hover:scale-105" />
            </button>
          ))}
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/95 p-6"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 text-white"
            onClick={() => setActive(null)}
          >
            <X size={32} />
          </button>
          <img
            src={galleryImages[active]}
            alt=""
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
