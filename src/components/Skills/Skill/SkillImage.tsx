import Image from "next/image";

export interface SkillImageProps {
  name: string;
  description: string;
  width?: number;
  height?: number;
}

export default function SkillImage({
  name,
  description,
  width = 50,
  height = 50,
}: SkillImageProps) {
  const iconName = `/skills/${name}.svg`;

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        className="pb-2"
        src={iconName}
        alt={`Image for skill ${name}`}
        width={width}
        height={height}
      />
      <span className="text-xs">{description}</span>
    </div>
  );
}
