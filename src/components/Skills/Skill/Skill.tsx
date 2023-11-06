import { useDarkMode } from "usehooks-ts";
import styles from "./Skill.module.scss";
import SkillImage from "./SkillImage";
import { useEffect, useState } from "react";

const CLASSIFICATION_MAX_LENGTH: number = 5;

export interface SkillProps {
  id: string;
  name: string;
  description: string;
  classification: number;
}

function getSkillClassification(
  id: string,
  classification: number,
  isDarkMode: boolean
) {
  const roundClassification = Math.floor(classification);

  return Array.from(Array(CLASSIFICATION_MAX_LENGTH).keys()).map((value) => {
    let classStr = isDarkMode ? "Skill__Circle--dark" : "Skill__Circle";
    if (value < roundClassification) {
      classStr += "_Filled";
    } else if (value < classification && classification > roundClassification) {
      classStr += "_HalfFilled";
    }
    let className = styles[classStr];

    return <div key={`${id}-circle-${value}`} className={className}></div>;
  });
}

export default function Skill({
  id,
  name,
  description,
  classification,
}: SkillProps) {
  const { isDarkMode } = useDarkMode();
  const [skillClassification, setSkillClassification] = useState<
    JSX.Element[] | null
  >(null);

  useEffect(
    () =>
      setSkillClassification(
        getSkillClassification(id, classification, isDarkMode)
      ),
    [classification, id, isDarkMode]
  );

  return (
    <div id={id} className="w-full flex flex-row items-center justify-center">
      <div className="w-32 flex flex-col items-center p-2 md:p-5 mr-2 md:mr-5">
        <SkillImage name={name} description={description} />
      </div>
      <div className="w-60 mb-4 space-x-5 flex flex-row items-center">
        {skillClassification}
      </div>
    </div>
  );
}
