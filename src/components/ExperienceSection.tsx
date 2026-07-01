import { SectionBlock } from "@/components/SectionBlock";
import { TimelineEntry } from "@/components/TimelineEntry";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <SectionBlock id="experience" label="// 01 · experience">
      <div className="flex flex-col gap-4">
        {experience.map((item, index) => (
          <TimelineEntry key={item.id} entry={item} index={index} />
        ))}
      </div>
    </SectionBlock>
  );
}
