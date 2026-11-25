import Image from "next/image";

export interface SkillImageProps {
  name: string;
  description: string;
  width?: number;
  height?: number;
  inlineOnMobile?: boolean;
}

export default function SkillImage({
  name,
  description,
  width = 50,
  height = 50,
  inlineOnMobile = false,
}: SkillImageProps) {
  const iconName = `/skills/${name}.svg`;

  return (
    <div
      className={`flex justify-center ${
        inlineOnMobile
          ? "flex-row items-center gap-3 md:flex-col md:gap-0"
          : "flex-col items-center"
      }`}
    >
      <Image
        className={inlineOnMobile ? "md:pb-2" : "pb-2"}
        src={iconName}
        alt={`Image for skill ${name}`}
        width={width}
        height={height}
      />
      <span className="text-xs whitespace-pre-line">{description}</span>
    </div>
  );
}
