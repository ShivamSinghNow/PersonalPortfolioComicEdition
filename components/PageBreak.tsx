interface PageBreakProps {
  pageNumber: number;
  label: string;
}

export default function PageBreak({ pageNumber, label }: PageBreakProps) {
  return (
    <div className="comic-page-break">
      <div className="flex-1 h-px bg-comic-paper/10" />
      <div className="flex items-center gap-2 flex-shrink-0 select-none">
        <span className="font-bangers text-xs tracking-widest text-comic-paper/20">
          PG&nbsp;{pageNumber}
        </span>
        <span className="text-comic-paper/10 text-xs">|</span>
        <span className="font-bangers text-xs tracking-widest text-comic-paper/20">
          {label}
        </span>
      </div>
      <div className="flex-1 h-px bg-comic-paper/10" />
    </div>
  );
}
