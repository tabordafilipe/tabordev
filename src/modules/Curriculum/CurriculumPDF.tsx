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

const Curriculum = CURRICULUM as CurriculumModel;
const { info, experience, about, skills, education, interests } = Curriculum;

const backgroundColor = "#fafaf7";
const textColor = "#2b3a57";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 30,
    paddingTop: 30,
    backgroundColor: backgroundColor,
    color: textColor,
    fontSize: 16,
  },

  leftSide: {
    width: "65%",
    flexDirection: "column",
    paddingRight: 60,
  },
  rightSide: {
    width: "35%",
    flexDirection: "column",
    paddingLeft: 15,
  },

  // Sections
  mainSection: {
    marginBottom: 45,
  },
  subSection: {
    marginBottom: 35,
  },
  subSubSection: {
    marginBottom: 20,
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
    fontSize: 40,
    color: "#6b756c",
    marginBottom: 5,
    fontWeight: 800,
  },
  h2: {
    fontSize: 25,
    color: "#6b756c",
    fontWeight: "heavy",
    marginBottom: 25,
  },
  h3: {
    fontSize: 16,
    marginBottom: 5,
  },
  h4: {
    fontSize: 14,
    fontWeight: "normal",
    marginBottom: 5,
  },
  h5: {
    fontSize: 12,
    marginBottom: 5,
  },
  p: {
    fontSize: 10,
    marginTop: 5,
    marginBottom: 5,
    lineHeight: 1.5,
  },
  xs: {
    fontSize: 8,
  },
  link: {
    color: textColor,
    textDecoration: "none",
  },

  footer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 30,
  },
});

export default function CurriculumPDF() {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();

  return (
    <Document>
      <Page size="A3" style={styles.page}>
        <View style={{ ...styles.rowSection, ...styles.mainSection }}>
          {/* Left side */}
          <View style={styles.leftSide}>
            {/* INFO section */}
            <View style={styles.columnSection}>
              <Text style={styles.h1}>{info.name}</Text>
              <Text style={{ ...styles.h4, marginLeft: "2" }}>{info.role}</Text>
            </View>
          </View>

          {/* Right side */}
          <View style={styles.rightSide}>
            {/* CONTACTS section */}
            <View style={{ ...styles.columnSection, marginTop: "10" }}>
              <Text style={styles.h5}>{info.contacts.email}</Text>
              <Text style={styles.h5}>{info.contacts.phone}</Text>
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
                    <Text style={{ ...styles.xs, marginLeft: "10" }}>
                      {job.date}
                    </Text>
                  </View>
                  <Text style={styles.h4}>{job.role}</Text>
                  <Text style={styles.h5}>{job.project}</Text>
                  <Text style={styles.p}>{job.descriptionPDF}</Text>
                  <Text style={{ ...styles.p, marginTop: "2" }}>
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
