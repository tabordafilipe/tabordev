import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import CURRICULUM from "@/assets/configs/curriculum.json";
import { CurriculumModel } from "@/models/curriculum.model";
import { getDotFills, ratedSkills } from "./skillDots";

const Curriculum = CURRICULUM as CurriculumModel;
const { info, experience, about, skills, education, interests } = Curriculum;

const backgroundColor = "#fafaf7";
const textColor = "#2b3a57";

// Layout was designed in B3 points (1000.63 wide); scale it down to A4 (595.28 wide)
const SCALE = 595.28 / 1000.63;
const s = (value: number) => value * SCALE;

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    paddingLeft: s(50),
    paddingRight: s(50),
    paddingBottom: s(30),
    paddingTop: s(30),
    backgroundColor: backgroundColor,
    color: textColor,
    fontSize: s(16),
  },

  leftSide: {
    width: "65%",
    flexDirection: "column",
    paddingRight: s(60),
  },
  rightSide: {
    width: "35%",
    flexDirection: "column",
    paddingLeft: s(15),
  },

  // Sections
  mainSection: {
    marginBottom: s(45),
  },
  subSection: {
    marginBottom: s(35),
  },
  subSubSection: {
    marginBottom: s(20),
  },
  rowSection: {
    width: "100%",
    flexDirection: "row",
  },
  columnSection: {
    width: "100%",
    flexDirection: "column",
  },

  // Headings
  h1: {
    fontSize: s(40),
    color: "#6b756c",
    marginBottom: s(5),
    fontWeight: 800,
  },
  h2: {
    fontSize: s(25),
    color: "#6b756c",
    fontWeight: "heavy",
    marginBottom: s(25),
  },
  h3: {
    fontSize: s(16),
    marginBottom: s(5),
  },
  h4: {
    fontSize: s(14),
    fontWeight: "normal",
    marginBottom: s(5),
  },
  h5: {
    fontSize: s(12),
    marginBottom: s(5),
  },
  p: {
    fontSize: s(10),
    marginTop: s(5),
    marginBottom: s(5),
    lineHeight: 1.5,
  },
  xs: {
    fontSize: s(8),
  },
  link: {
    color: textColor,
    textDecoration: "none",
  },

  // Skill dots (border 0.7 => content box 8.6)
  dot: {
    width: s(10),
    height: s(10),
    borderRadius: s(5),
    borderWidth: s(0.7),
    borderColor: textColor,
    borderStyle: "solid",
    marginLeft: s(4),
  },
  dotFull: {
    backgroundColor: "#aeb9b0",
  },
  dotHalf: {
    width: s(4.3),
    height: s(8.6),
    backgroundColor: "#aeb9b0",
    borderTopLeftRadius: s(4.3),
    borderBottomLeftRadius: s(4.3),
  },

  footer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: s(30),
  },
});

export default function CurriculumPDF() {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ ...styles.rowSection, ...styles.mainSection }}>
          {/* Left side */}
          <View style={styles.leftSide}>
            {/* INFO section */}
            <View style={styles.columnSection}>
              <Text style={styles.h1}>{info.name}</Text>
              <Text style={{ ...styles.h4, marginLeft: s(2) }}>{info.role}</Text>
            </View>
          </View>

          {/* Right side */}
          <View style={styles.rightSide}>
            {/* CONTACTS section */}
            <View style={{ ...styles.columnSection, marginTop: s(10) }}>
              <Text style={styles.h5}>{info.contacts.email}</Text>
              <Link
                style={{ ...styles.h5, ...styles.link }}
                src={`https://${info.contacts.linkedin}`}
              >
                {info.contacts.linkedin}
              </Link>
              <Link
                style={{ ...styles.h5, ...styles.link }}
                src={`https://${info.contacts.website}`}
              >
                {info.contacts.website}
              </Link>
            </View>
          </View>
        </View>

        <View style={styles.rowSection}>
          {/* Left side */}
          <View style={styles.leftSide}>
            {/* EXPERIENCE section */}
            <View style={styles.columnSection}>
              <Text style={styles.h2}>{experience.title}</Text>

              {experience.jobs.map((job, jobIndex) => (
                <View
                  key={`${job.id}_skill_${jobIndex}`}
                  style={{ ...styles.columnSection, ...styles.subSubSection }}
                >
                  <View style={{ ...styles.rowSection, alignItems: "center" }}>
                    <Text style={styles.h3}>{job.company}</Text>
                    <Text style={{ ...styles.xs, marginLeft: s(10) }}>
                      {job.date}
                    </Text>
                  </View>
                  <Text style={styles.h4}>{job.role}</Text>
                  <Text style={styles.h5}>{job.project}</Text>
                  <Text style={styles.p}>{job.descriptionPDF}</Text>
                  <Text style={{ ...styles.p, marginTop: s(2) }}>
                    {job.skills.join(", ")}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Right side */}
          <View style={styles.rightSide}>
            {/* SKILLS section */}
            <View style={{ ...styles.columnSection, ...styles.subSection }}>
              <Text style={styles.h2}>{skills.title}</Text>
              <View style={{ ...styles.columnSection, marginBottom: s(20) }}>
                {ratedSkills.map((skill) => (
                  <View
                    key={skill.id}
                    style={{
                      ...styles.rowSection,
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: s(8),
                    }}
                  >
                    <Text style={{ ...styles.p, marginTop: 0, marginBottom: 0 }}>
                      {skill.label}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      {getDotFills(skill.classification).map((fill, index) => (
                        <View
                          key={`${skill.id}_dot_${index}`}
                          style={
                            fill === "full"
                              ? { ...styles.dot, ...styles.dotFull }
                              : styles.dot
                          }
                        >
                          {fill === "half" && <View style={styles.dotHalf} />}
                        </View>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
              {skills.skillsGroups.map((group, groupIndex) => (
                <View
                  key={`skill_group_${groupIndex}`}
                  style={{ ...styles.columnSection, ...styles.subSubSection }}
                >
                  <Text style={styles.h3}>{group.group}</Text>
                  <Text style={styles.p}>{group.skills.join(", ")}</Text>
                </View>
              ))}
            </View>

            {/* EDUCATION section */}
            <View style={{ ...styles.columnSection, ...styles.subSection }}>
              <View style={styles.subSubSection}>
                <Text style={styles.h2}>{education.title}</Text>
                <Text style={styles.h3}>{education.university}</Text>
                <Text style={styles.h4}>{education.course}</Text>
                <Text style={styles.h5}>{education.degree}</Text>
              </View>
            </View>

            {/* ABOUT section */}
            <View style={{ ...styles.columnSection, ...styles.subSection }}>
              <View style={styles.subSubSection}>
                <Text style={styles.h2}>{about.title}</Text>
                <Text style={styles.p}>{about.descriptionPDF}</Text>
              </View>
            </View>

            {/* INTERESTS section */}
            <View style={styles.columnSection}>
              <View style={styles.subSubSection}>
                <Text style={styles.h2}>{interests.title}</Text>
                <Text style={styles.p}>{interests.descriptionPDF}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.p}>{`${currentMonth} ${currentYear}`}</Text>
        </View>
      </Page>
    </Document>
  );
}
