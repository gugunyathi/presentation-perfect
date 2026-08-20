import { meta } from "@/data/proposal";

// Renders each A4 "doc-page" section to a canvas and stitches them into a
// multi-page PDF so the browser downloads a file directly (no print dialog).
export async function downloadPdf(onProgress?: (done: number, total: number) => void) {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import("html2canvas-pro"),
    import("jspdf"),
  ]);

  const pages = Array.from(document.querySelectorAll<HTMLElement>(".doc-page"));
  if (!pages.length) return;

  const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
  const pw = pdf.internal.pageSize.getWidth();
  const ph = pdf.internal.pageSize.getHeight();

  for (let i = 0; i < pages.length; i++) {
    const canvas = await html2canvas(pages[i], {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
      logging: false,
    });
    const img = canvas.toDataURL("image/jpeg", 0.92);
    const h = Math.min((canvas.height / canvas.width) * pw, ph);
    if (i > 0) pdf.addPage();
    pdf.addImage(img, "JPEG", 0, 0, pw, h);
    onProgress?.(i + 1, pages.length);
  }

  pdf.save(`${meta.reference}-Ribbon-Protocol-ZEEX-Proposal.pdf`);
}
