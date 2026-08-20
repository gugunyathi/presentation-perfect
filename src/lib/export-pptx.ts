import PptxGenJS from "pptxgenjs";
import { meta, contact, sections, type Block } from "@/data/proposal";

const NAVY = "0B1F3A";
const NAVY_MID = "1E3A66";
const AZURE = "2F6FD0";
const LIGHT = "F2F5F9";
const WHITE = "FFFFFF";
const GREY = "5A6675";

function flatten(blocks: Block[]) {
  const bullets: string[] = [];
  const tables: Extract<Block, { kind: "table" }>[] = [];
  let quote: string | undefined;

  for (const b of blocks) {
    if (b.kind === "p") bullets.push(b.text);
    else if (b.kind === "h3") bullets.push(b.text.toUpperCase());
    else if (b.kind === "bullets" || b.kind === "numbers") bullets.push(...b.items);
    else if (b.kind === "table") tables.push(b);
    else if (b.kind === "quote") quote = b.text;
  }
  return { bullets, tables, quote };
}

function trim(text: string, max = 300) {
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}

export function buildPresentation() {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = contact.name;
  pptx.company = meta.firm;
  pptx.title = meta.title;

  // Cover
  const cover = pptx.addSlide();
  cover.background = { color: NAVY };
  cover.addShape("rect", { x: 0, y: 0, w: 0.16, h: 5.63, fill: { color: AZURE } });
  cover.addText(meta.firm.toUpperCase(), {
    x: 0.7, y: 0.7, w: 8.5, h: 0.4, fontFace: "Arial", fontSize: 14,
    color: WHITE, charSpacing: 4, bold: true,
  });
  cover.addText(meta.division, {
    x: 0.7, y: 1.05, w: 8.5, h: 0.3, fontFace: "Arial", fontSize: 11, color: "9DB4D6",
  });
  cover.addText(meta.title, {
    x: 0.7, y: 1.9, w: 8.6, h: 1.2, fontFace: "Georgia", fontSize: 40, bold: true, color: WHITE,
  });
  cover.addText(meta.subtitle, {
    x: 0.7, y: 3.15, w: 8.2, h: 0.9, fontFace: "Arial", fontSize: 14, color: "C6D6EC",
  });
  cover.addText(
    `${meta.date}   |   Reference ${meta.reference}   |   Private & Confidential`,
    { x: 0.7, y: 4.85, w: 8.6, h: 0.35, fontFace: "Arial", fontSize: 11, color: "9DB4D6" },
  );

  // Contents
  const toc = pptx.addSlide();
  toc.background = { color: WHITE };
  toc.addText("Contents", {
    x: 0.7, y: 0.55, w: 8.6, h: 0.7, fontFace: "Georgia", fontSize: 32, bold: true, color: NAVY,
  });
  toc.addText(
    sections.map((s) => ({
      text: `${s.number}   ${s.title}`,
      options: { bullet: false, fontSize: 15, color: NAVY_MID, paraSpaceAfter: 8 },
    })),
    { x: 0.75, y: 1.5, w: 8.5, h: 3.6, fontFace: "Arial" },
  );

  for (const section of sections) {
    const { bullets, tables, quote } = flatten(section.blocks);

    const slide = pptx.addSlide();
    slide.background = { color: WHITE };
    slide.addShape("rect", { x: 0, y: 0, w: 10, h: 1.25, fill: { color: NAVY } });
    slide.addText(`${section.number}  ·  ${section.kicker.toUpperCase()}`, {
      x: 0.55, y: 0.22, w: 8.9, h: 0.3, fontFace: "Arial", fontSize: 10,
      color: "9DB4D6", charSpacing: 3,
    });
    slide.addText(section.title, {
      x: 0.55, y: 0.52, w: 8.9, h: 0.6, fontFace: "Georgia", fontSize: 24, bold: true, color: WHITE,
    });

    if (bullets.length) {
      slide.addText(
        bullets.slice(0, 4).map((t) => ({
          text: trim(t, 200),
          options: { bullet: { code: "25AA" }, fontSize: 12, color: "24303F", paraSpaceAfter: 9, breakLine: true },
        })),
        { x: 0.6, y: 1.6, w: 8.8, h: quote ? 2.5 : 3.5, fontFace: "Arial", valign: "top" },
      );
    }

    if (quote) {
      slide.addShape("rect", { x: 0.6, y: 4.35, w: 8.8, h: 0.9, fill: { color: LIGHT } });
      slide.addShape("rect", { x: 0.6, y: 4.35, w: 0.06, h: 0.9, fill: { color: AZURE } });
      slide.addText(trim(quote, 230), {
        x: 0.85, y: 4.4, w: 8.4, h: 0.8, fontFace: "Georgia", fontSize: 11,
        italic: true, color: NAVY_MID, valign: "middle",
      });
    }

    for (const table of tables) {
      const chunks: string[][][] = [];
      for (let i = 0; i < table.rows.length; i += 3) chunks.push(table.rows.slice(i, i + 3));
      chunks.forEach((chunk, ci) => {
        const ts = pptx.addSlide();
        ts.background = { color: WHITE };
        ts.addShape("rect", { x: 0, y: 0, w: 10, h: 0.85, fill: { color: NAVY } });
        ts.addText(chunks.length > 1 ? `${section.title} (${ci + 1}/${chunks.length})` : section.title, {
          x: 0.55, y: 0.2, w: 8.9, h: 0.45, fontFace: "Georgia", fontSize: 19, bold: true, color: WHITE,
        });
        ts.addTable(
          [
            table.head.map((h) => ({
              text: h,
              options: { bold: true, color: WHITE, fill: { color: NAVY_MID }, fontSize: 11 },
            })),
            ...chunk.map((row, i) =>
              row.map((cell) => ({
                text: trim(cell, 200),
                options: {
                  fontSize: 10,
                  color: "24303F",
                  fill: { color: i % 2 ? LIGHT : WHITE },
                },
              })),
            ),
          ],
          {
            x: 0.5, y: 1.1, w: 9, fontFace: "Arial", border: { pt: 0.5, color: "D8DEE7" },
            margin: 6, valign: "top",
          },
        );
      });
    }
  }


  // Contact
  const last = pptx.addSlide();
  last.background = { color: NAVY };
  last.addShape("rect", { x: 0, y: 0, w: 0.16, h: 5.63, fill: { color: AZURE } });
  last.addText(contact.heading, {
    x: 0.8, y: 0.9, w: 8.6, h: 0.4, fontFace: "Arial", fontSize: 12,
    color: "9DB4D6", charSpacing: 3,
  });
  last.addText(contact.name, {
    x: 0.8, y: 1.4, w: 8.6, h: 0.8, fontFace: "Georgia", fontSize: 36, bold: true, color: WHITE,
  });
  last.addText(
    [
      { text: contact.role, options: { fontSize: 14, color: "D6E2F2", paraSpaceAfter: 6, breakLine: true } },
      { text: contact.assignment, options: { fontSize: 13, color: "9DB4D6", paraSpaceAfter: 14, breakLine: true } },
      { text: contact.email, options: { fontSize: 14, color: WHITE, paraSpaceAfter: 4, breakLine: true } },
      { text: `${contact.mobile}  (Mobile / WhatsApp)`, options: { fontSize: 14, color: WHITE, paraSpaceAfter: 4, breakLine: true } },
      { text: contact.website, options: { fontSize: 14, color: "9DB4D6", breakLine: true } },
    ],
    { x: 0.8, y: 2.35, w: 8.6, h: 2, fontFace: "Arial", valign: "top" },
  );

  last.addText(`${meta.firm}  |  ${meta.reference}`, {
    x: 0.8, y: 4.9, w: 8.6, h: 0.3, fontFace: "Arial", fontSize: 10, color: GREY,
  });

  return pptx;
}

export async function downloadPptx() {
  const pptx = buildPresentation();
  await pptx.writeFile({ fileName: "Signal-Desk-ZEEX-Proposal.pptx" });
}

