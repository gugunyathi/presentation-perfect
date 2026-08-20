import { useState } from "react";
import { FileDown, Presentation, Printer, Check } from "lucide-react";
import { downloadPptx } from "@/lib/export-pptx";

function Button({
  onClick,
  children,
  variant = "solid",
}: {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-sm px-4 py-2.5 text-[13px] font-medium tracking-wide transition-colors";
  const styles =
    variant === "solid"
      ? "bg-azure text-primary-foreground hover:bg-navy-mid"
      : "border border-white/25 text-white/90 hover:bg-white/10";
  return (
    <button type="button" onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}

export function ExportBar() {
  const [slidesHint, setSlidesHint] = useState(false);

  const handleGoogleSlides = async () => {
    await downloadPptx();
    setSlidesHint(true);
    window.open("https://docs.google.com/presentation/u/0/create", "_blank", "noopener");
  };

  return (
    <div className="no-print sticky top-0 z-50 bg-navy-deep/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.28em] text-azure">
            SIGNAL DESK · FRONTIER TECHNOLOGY DEVELOPMENT
          </p>
          <p className="mt-1 text-sm text-white/70">
            Tokenized Real World Assets for ZEEX — SD-ZEEX-RWA-2026-01
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => window.print()}>
            <Printer className="h-4 w-4" /> Download PDF
          </Button>
          <Button variant="outline" onClick={() => void downloadPptx()}>
            <FileDown className="h-4 w-4" /> PowerPoint
          </Button>
          <Button variant="outline" onClick={() => void handleGoogleSlides()}>
            <Presentation className="h-4 w-4" /> Google Slides
          </Button>
        </div>
      </div>
      {slidesHint && (
        <div className="border-t border-white/10 bg-navy px-6 py-2.5">
          <p className="mx-auto flex max-w-5xl items-center gap-2 text-xs text-white/75">
            <Check className="h-3.5 w-3.5 text-azure" />
            Deck downloaded. In the Google Slides tab, choose File → Import slides and
            select Signal-Desk-ZEEX-Proposal.pptx.
          </p>
        </div>
      )}
    </div>
  );
}
