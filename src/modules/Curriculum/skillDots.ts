import SKILLS from "@/assets/configs/skills.json";
import { Skill } from "@/models/skill.model";

const DOTS = 5;

export type DotFill = "full" | "half" | "empty";

// Same rounding as the site: whole part is full, any remainder is a half dot
export function getDotFills(classification: number): DotFill[] {
  const whole = Math.floor(classification);
  return Array.from({ length: DOTS }, (_, i) => {
    if (i < whole) return "full";
    if (i < classification) return "half";
    return "empty";
  });
}

export const ratedSkills = (SKILLS as { skills: Skill[] }).skills.map(
  ({ id, description, classification }) => ({
    id,
    label: description.replace("\n", " "),
    classification,
  })
);
