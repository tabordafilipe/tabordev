import { Skill as SkillModel } from "@/models/skill.model";
import Skill from "./Skill/Skill";
import SKILLS from "@/assets/configs/skills.json";
import SkillImage from "./Skill/SkillImage";
import { useState } from "react";

const { skills, otherSkills } = SKILLS as {
  skills: SkillModel[];
  otherSkills: SkillModel[];
};

export default function Skills() {
  const [isToShowMore, setIsToShowMore] = useState(false);

  const handleShowMore = () => setIsToShowMore(true);

  return (
    <div className="w-full max-w-[90rem] flex flex-col items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2">
        {skills.map(({ id, name, description, classification }) => (
          <Skill
            key={id}
            id={id}
            name={name}
            description={description}
            classification={classification}
          />
        ))}
      </div>
      <span
        className="mt-4 cursor-pointer hover:text-green-50"
        onClick={handleShowMore}
      >
        and more...
      </span>
      {isToShowMore && (
        <div className="w-full flex flex-wrap items-center justify-center gap-16 mt-12">
          {otherSkills.map(({ id, name, description }) => (
            <SkillImage key={id} name={name} description={description} />
          ))}
        </div>
      )}
    </div>
  );
}
