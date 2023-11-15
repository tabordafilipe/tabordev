import { PropsWithChildren } from "react";

export interface SectionProps {
  id: string;
  name?: string;
  className?: string;
}

export default function Section({
  id,
  name,
  className,
  children,
}: PropsWithChildren<SectionProps>) {
  return (
    <section
      id={id}
      className={`w-full pt-32 md:pt-36 pb-16 ${className || ""}`}
    >
      <div className="container px-5 m-auto flex flex-col items-center justify-center">
        {name && (
          <h2 className="font-bold lowercase text-2xl tracking-widest overline decoration-1 pb-10">
            {name}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
