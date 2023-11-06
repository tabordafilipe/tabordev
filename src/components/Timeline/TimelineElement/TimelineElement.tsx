import Icon from "@/components/Icon/Icon";
import { TimelineStep, TimelineStyle } from "@/models/timeline.model";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import stylesTimeline from "./TimelineElement.module.scss";
import Image from "next/image";
import Chip from "@/components/Chip/Chip";
import { useDarkMode } from "usehooks-ts";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/IsMobile";

export interface TimelineElementProps {
  styles: TimelineStyle;
  data: TimelineStep;
}
const getImgUrl = (imageName: string) => `/timeline/${imageName}`;

export default function TimelineElement({
  styles,
  data,
}: TimelineElementProps) {
  const { isDarkMode } = useDarkMode();
  const isMobile = useIsMobile();
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!data.image && !data.imageDark) {
      setImageSrc(null);
      return;
    }

    if (data.image && data.imageDark) {
      setImageSrc(getImgUrl(isDarkMode ? data.imageDark : data.image));
      return;
    }

    if (data.image) {
      setImageSrc(getImgUrl(data.image));
    } else {
      setImageSrc(null);
    }
  }, [data.image, data.imageDark, isDarkMode]);

  const imageContent = imageSrc && (
    <div className="col-span-1 pr-6 flex items-center justify-start md:justify-center mb-4 md:mb-0">
      <Image
        src={imageSrc}
        alt={`Image for timeline ${data.image}`}
        width={!isMobile ? 100 : 75}
        height={!isMobile ? 100 : 75}
      />
    </div>
  );

  const dataContent = (
    <>
      <span className="font-bold">{data.title}</span>
      {data.subtitle && (
        <span className="opacity-60 text-sm">{data.subtitle}</span>
      )}
      <div className="mt-2 text-xs">
        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
      </div>
      {!!data.chips?.length && (
        <div className="mt-6 flex flex-row flex-wrap gap-1">
          {data.chips.map((chip, index) => (
            <Chip key={`${data.id}_chip_${index}`} text={chip} />
          ))}
        </div>
      )}
    </>
  );

  return (
    <VerticalTimelineElement
      contentStyle={styles.content}
      contentArrowStyle={styles.arrow}
      date={data.date}
      iconStyle={styles.icon}
      icon={
        <Icon
          name={data.type}
          title={data.type}
          dimensions={{
            width: 50,
            height: 50,
          }}
        />
      }
    >
      <div className={stylesTimeline.TimelineElement__Content}>
        {!isMobile && (
          <div className={`grid ${imageSrc ? "grid-cols-3" : "grid-cols-1"}`}>
            {imageContent}
            <div className={`${imageSrc && "col-span-2"} flex flex-col`}>
              {dataContent}
            </div>
          </div>
        )}
        {isMobile && (
          <div className="flex flex-col">
            {imageContent}
            {dataContent}
          </div>
        )}
      </div>
    </VerticalTimelineElement>
  );
}
