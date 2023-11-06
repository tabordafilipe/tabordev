import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useDarkMode } from "usehooks-ts";
import { useEffect, useState } from "react";
import config from "../../../tailwind.config";
import {
  TimelineStep,
  TimelineStyle,
  TimelineStyles,
} from "@/models/timeline.model";
import TimelineElement from "./TimelineElement/TimelineElement";
import TIMELINE from "../../assets/configs/timeline.json";

const { colors } = config.theme as any;
const { steps } = TIMELINE as { steps: TimelineStep[] };

const setStyle = (
  contentBackground: string,
  contentText: string,
  line: string,
  iconBackground: string,
  iconText: string
): TimelineStyle => ({
  content: {
    background: contentBackground,
    color: contentText,
    boxShadow: "unset",
    borderStyle: "solid",
    borderWidth: "2px",
    borderRadius: "15px",
    borderColor: line,
  },
  arrow: {
    borderRight: `7px solid ${line}`,
  },
  icon: {
    background: iconBackground,
    color: iconText,
    boxShadow: `0 0 0 4px ${line}, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)`,
  },
});

export default function Timeline() {
  const { isDarkMode } = useDarkMode();
  const [styles, setStyles] = useState<TimelineStyles | undefined>();

  useEffect(() => {
    if (isDarkMode) {
      setStyles({
        line: colors.green[25],
        timelines: {
          work: setStyle(
            colors.black[25],
            colors.white.DEFAULT,
            colors.green[25],
            colors.black[25],
            colors.white.DEFAULT,
          ),
          education: setStyle(
            colors.black[25],
            colors.white.DEFAULT,
            colors.green[25],
            colors.green[50],
            colors.white.DEFAULT,
          ),
        },
      });
    } else {
      setStyles({
        line: colors.green[25],
        timelines: {
          work: setStyle(
            colors.white.DEFAULT,
            colors.blue[25],
            colors.green[25],
            colors.white.DEFAULT,
            colors.green[25]
          ),
          education: setStyle(
            colors.white.DEFAULT,
            colors.blue[25],
            colors.green[25],
            colors.green[50],
            colors.white.DEFAULT
          ),
        },
      });
    }
  }, [isDarkMode]);

  return (
    styles && (
      <VerticalTimeline lineColor={styles.line}>
        {steps.map((step) => (
          <TimelineElement
            key={step.id}
            styles={styles.timelines[step.type]}
            data={step}
          />
        ))}
      </VerticalTimeline>
    )
  );
}
