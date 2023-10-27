import { Info } from "@/models/info.model";

export interface AboutProps {
  info: Info;
}

export default function About({ info }: AboutProps) {
  return (
    <div
      className="bg-opacity-75 bg-green-10 dark:bg-opacity-75 dark:bg-black-25 p-5 rounded-xl shadow-xl"
      dangerouslySetInnerHTML={{ __html: info.summary }}
    ></div>
  );
}
