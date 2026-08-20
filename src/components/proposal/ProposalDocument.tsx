import { meta, contact, sections, type Block, type Section } from "@/data/proposal";
import coverImg from "@/assets/cover-skyline.jpg";
import ribbonLogo from "@/assets/ribbon-logo.png.asset.json";
import smeImg from "@/assets/sme-entrepreneurs.jpg";
import networkImg from "@/assets/onchain-network.jpg";
import mobileImg from "@/assets/mobile-access.jpg";

const IMAGES = {
  sme: {
    src: smeImg,
    alt: "Zimbabwean small business owners reviewing financial paperwork",
    caption: "SMEs represent 76% of business establishments and more than 70% of the workforce.",
  },
  network: {
    src: networkImg,
    alt: "Abstract onchain settlement network of connected nodes",
    caption: "Tokenized instruments settle 24/7 on Base, quoted against $ZIG.",
  },
  mobile: {
    src: mobileImg,
    alt: "Investor accessing a trading application on a mobile phone",
    caption: "Global terminals, mobile apps and a WhatsApp channel for low-end devices.",
  },
} as const;

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.kind === "h3") {
          return (
            <h3
              key={i}
              className="mt-9 mb-3 font-sans text-[11px] font-semibold tracking-[0.18em] text-azure uppercase"
            >
              {block.text}
            </h3>
          );
        }
        if (block.kind === "p") {
          return (
            <p key={i} className="mb-4 text-[13.5px] leading-[1.75] text-foreground/90">
              {block.text}
            </p>
          );
        }
        if (block.kind === "bullets") {
          return (
            <ul key={i} className="mb-5 space-y-3">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-3 text-[13.5px] leading-[1.7] text-foreground/90">
                  <span className="mt-[9px] h-[5px] w-[5px] shrink-0 bg-azure" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (block.kind === "numbers") {
          return (
            <ol key={i} className="mb-5 space-y-3">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-4 text-[13.5px] leading-[1.7] text-foreground/90">
                  <span className="mt-[2px] w-6 shrink-0 font-serif text-[13px] font-semibold text-navy-mid">
                    {String(j + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          );
        }
        if (block.kind === "quote") {
          return (
            <blockquote
              key={i}
              className="avoid-break my-7 border-l-[3px] border-azure bg-mist px-6 py-5"
            >
              <p className="font-serif text-[14.5px] leading-[1.7] text-navy italic">
                {block.text}
              </p>
            </blockquote>
          );
        }
        return (
          <div key={i} className="avoid-break my-7 overflow-hidden">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-navy">
                  {block.head.map((h) => (
                    <th
                      key={h}
                      className="border-r border-white/10 px-3.5 py-3 font-sans text-[10.5px] font-semibold tracking-[0.1em] text-white uppercase last:border-r-0"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr key={r} className={r % 2 ? "bg-mist" : "bg-background"}>
                    {row.map((cell, c) => (
                      <td
                        key={c}
                        className="border-t border-rule px-3.5 py-3 align-top text-[12px] leading-[1.6] text-foreground/90"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
}

function SectionBlock({ section, index }: { section: Section; index: number }) {
  const img = section.image ? IMAGES[section.image] : null;
  return (
    <section
      id={`section-${section.number}`}
      className={`doc-page px-14 pt-12 pb-14 shadow-sm ${index > 0 ? "page-break mt-8" : "mt-8"}`}
    >
      <header className="mb-8 border-b border-rule pb-6">
        <p className="font-sans text-[10px] font-semibold tracking-[0.28em] text-steel uppercase">
          {section.kicker}
        </p>
        <div className="mt-3 flex items-baseline gap-5">
          <span className="font-serif text-[42px] leading-none font-bold text-mist [-webkit-text-stroke:1px_var(--color-azure)]">
            {section.number}
          </span>
          <h2 className="font-serif text-[26px] leading-tight font-semibold text-navy">
            {section.title}
          </h2>
        </div>
      </header>

      {img && (
        <figure className="avoid-break mb-8">
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="h-[210px] w-full object-cover"
          />
          <figcaption className="mt-2 border-l-2 border-azure pl-3 font-sans text-[10.5px] tracking-wide text-steel">
            {img.caption}
          </figcaption>
        </figure>
      )}

      <Blocks blocks={section.blocks} />

      <footer className="mt-10 flex items-center justify-between border-t border-rule pt-4 font-sans text-[9.5px] tracking-wide text-steel">
        <span>
          {meta.firm} | {meta.reference}
        </span>
        <span>Private &amp; Confidential</span>
      </footer>
    </section>
  );
}

export function ProposalDocument() {
  return (
    <article>
      {/* Cover */}
      <section className="doc-page relative overflow-hidden shadow-sm">
        <div className="relative h-[420px]">
          <img
            src={coverImg}
            alt="Financial district skyline at dusk with digital network overlay"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy/85 to-navy-deep" />
          <div className="relative flex h-full flex-col justify-between px-14 py-12">
            <div>
              <div className="inline-block rounded-sm bg-white px-4 py-3">
                <img
                  src={ribbonLogo.url}
                  alt="Ribbon Protocol logo"
                  width={428}
                  height={205}
                  className="h-11 w-auto"
                />
              </div>
              <p className="mt-3 font-sans text-[11px] tracking-[0.2em] text-white/60 uppercase">
                {meta.division}
              </p>
            </div>
            <div>
              <div className="mb-6 h-[3px] w-16 bg-azure" />
              <h1 className="max-w-[16ch] font-serif text-[40px] leading-[1.1] font-bold text-white">
                {meta.title}
              </h1>
              <p className="mt-4 max-w-[52ch] font-sans text-[13.5px] leading-relaxed text-white/75">
                {meta.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="px-14 py-12">
          <dl className="grid grid-cols-1 gap-x-10 gap-y-4 border-y border-rule py-7 sm:grid-cols-2">
            {[
              ["From", meta.from],
              ["To", meta.to],
              ["Proposed role", meta.role],
              ["Date", meta.date],
              ["Reference", meta.reference],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="font-sans text-[9.5px] font-semibold tracking-[0.2em] text-steel uppercase">
                  {label}
                </dt>
                <dd className="mt-1 text-[13px] leading-snug text-navy">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-7 font-serif text-[12.5px] text-steel italic">{meta.confidential}</p>
        </div>
      </section>

      {/* Contents */}
      <section className="doc-page page-break mt-8 px-14 py-12 shadow-sm">
        <h2 className="font-serif text-[26px] font-semibold text-navy">Contents</h2>
        <div className="mt-2 h-[3px] w-16 bg-azure" />
        <ol className="mt-8 divide-y divide-rule">
          {sections.map((s) => (
            <li key={s.number} className="flex items-baseline gap-5 py-3.5">
              <span className="font-serif text-[13px] font-semibold text-azure">{s.number}</span>
              <a
                href={`#section-${s.number}`}
                className="text-[13.5px] text-navy hover:text-azure"
              >
                {s.title}
              </a>
            </li>
          ))}
          <li className="flex items-baseline gap-5 py-3.5">
            <span className="font-serif text-[13px] font-semibold text-azure">11</span>
            <a href="#contact" className="text-[13.5px] text-navy hover:text-azure">
              {contact.heading}
            </a>
          </li>
        </ol>
      </section>

      {sections.map((section, i) => (
        <SectionBlock key={section.number} section={section} index={i + 1} />
      ))}

      {/* Contact */}
      <section id="contact" className="doc-page page-break mt-8 mb-16 bg-navy-deep shadow-sm">
        <div className="px-14 py-16">
          <p className="font-sans text-[10px] font-semibold tracking-[0.28em] text-azure uppercase">
            {contact.heading}
          </p>
          <h2 className="mt-5 font-serif text-[34px] font-bold text-white">{contact.name}</h2>
          <div className="mt-4 h-[3px] w-16 bg-azure" />

          <dl className="mt-9 grid grid-cols-1 gap-x-12 gap-y-7 sm:grid-cols-2">
            {[
              ["Role & Position", contact.role],
              ["Division & Assignment", contact.assignment],
              ["Direct Email", contact.email],
              ["Mobile / WhatsApp", contact.mobile],
              ["Website", contact.website],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="font-sans text-[9.5px] font-semibold tracking-[0.2em] text-white/45 uppercase">
                  {label}
                </dt>
                <dd className="mt-1.5 text-[14px] leading-snug text-white">{value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-14 border-t border-white/15 pt-5 font-sans text-[9.5px] tracking-wide text-white/45">
            {meta.firm} | {meta.reference} | Private &amp; Confidential
          </p>
        </div>
      </section>
    </article>
  );
}
