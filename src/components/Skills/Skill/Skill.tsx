import styles from "./Skill.module.scss";
import SkillImage from "./SkillImage";

export interface SkillProps {
  id: string;
  name: string;
  description: string;
  classification: number;
}

function buildSkillCircles(id: string, classification: number) {
  const roundClassification = Math.floor(classification);

  let skills = [];

  let n = 0;
  while (n < roundClassification) {
    skills.push(
      <div key={`${id}-circle-${n}`} className={styles.Skill__Circle}></div>
    );
    n++;
  }

  if (classification > roundClassification) {
    skills.push(
      <div
        key={`${id}-circle-half`}
        className={styles.Skill__Circle_Half}
      ></div>
    );
  }

  return skills;
}

export default function Skill({
  id,
  name,
  description,
  classification,
}: SkillProps) {
  const skills = buildSkillCircles(id, classification);

  return (
    <div id={id} className="w-full flex flex-row items-center justify-center">
      <div className="w-32 flex flex-col items-center p-2 md:p-5 mr-4 md:mr-5">
        <SkillImage name={name} description={description} />
      </div>
      <div className="w-60 mb-4 space-x-5 flex flex-row items-center">
        {skills}
      </div>
    </div>
  );
}
