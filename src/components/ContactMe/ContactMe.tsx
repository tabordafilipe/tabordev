import CONTACT_ME from "@/assets/configs/contact-me.json";
import { ContactMeInfo } from "@/models/contact-me.model";
import Icon from "../Icon/Icon";

const { info, websiteInfo } = CONTACT_ME as {
  info: ContactMeInfo;
  websiteInfo: string;
};

export default function ContactMe() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap2">
      <div className="flex flex-col items-start md:items-center">
        <div className="max-w-sm ">
          <h3 className="text-xl font-semibold text-green-50 dark:text-green-25">
            {info.title}
          </h3>
          <p className="text-lg mt-6 mb-2">{info.subtitle}</p>
          <a
            className="font-semibold hover:text-green-25"
            href={`mailto:${info.email}`}
          >
            {info.emailDescription}
          </a>
          <div className="flex space-x-5 mt-2">
            {info.icons.map((icon) => (
              <Icon
                key={icon.name}
                href={icon.href}
                name={icon.name}
                title={icon.title}
                dimensions={{
                  width: 20,
                  height: 20,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start md:items-center justify-center">
        <div
          className="max-w-sm text-xs"
          dangerouslySetInnerHTML={{ __html: websiteInfo }}
        ></div>
      </div>
    </div>
  );
}
