import { SectionTitle } from "./SectionTitle";

export function SectionBlock({
  label,
  children,
  id,
}: {
  label: string;
  children?: React.ReactNode;
  id?: string;
}) {
  return (
    <section className="flex flex-col gap-4" id={id}>
      <SectionTitle label={label} />
      {children}
    </section>
  );
}
