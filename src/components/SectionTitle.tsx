type SectionTitleProps = {
  id?: string;
  label: string;
};

export function SectionTitle({ label }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] text-primary tracking-widest uppercase">
        {label}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
