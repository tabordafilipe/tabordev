import { PropsWithChildren } from "react";

export interface SectionProps {
  name: string;
}

export default function Section({
  name,
  children,
}: PropsWithChildren<SectionProps>) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-5 md:px-15">
      <h2 className="font-bold text-3xl pb-10">{name}</h2>
      {children}
    </div>
  );
}
