import { PropsWithChildren } from "react";

export interface SectionProps {
  id: string;
  name: string;
}

export default function Section({
  id,
  name,
  children,
}: PropsWithChildren<SectionProps>) {
  return (
    <section id={id} className="w-screen pt-32 md:pt-36 pb-16 px-5 md:px-12 lg:px-40 xl:px-90 2xl:px-94">
      <div className="h-full w-full flex flex-col items-center justify-center">
        <h2 className="font-bold text-3xl pb-10">{name}</h2>
        {children}
      </div>
    </section>
  );
}
