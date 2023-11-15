import CURRICULUM from "@/assets/configs/curriculum.json";
import Chip from "@/components/Chip/Chip";
import { CurriculumModel } from "@/models/curriculum.model";
import Icon from "@/components/Icon/Icon";
import Link from "next/link";

const curriculum = CURRICULUM as CurriculumModel;
const { info, experience, about, skills, education, interests } = curriculum;

const classes = {
  h1: "text-5xl font-semibold text-green-50 dark:text-green-25",
  h2: "text-3xl font-normal text-green-50 dark:text-green-25",
  h3: "text-xl font-semibold",
  h4: "text-lg font-normal",
  h5: "text-md",
  p: "text-sm",
};

export default function Curriculum() {
  return (
    <main className="font-sans font-light leading-6 pt-32 md:pt-36">
      <div className="container p-2 m-auto">
        <div className="w-full flex justify-between px-4 py-2">
          <Link
            className="flex flex-row space-x-2 items-center align-center text-lg font-semibold hover:text-green-25"
            href="/"
          >
            <Icon
              name="back"
              title="Go back"
              dimensions={{
                width: 30,
                height: 30,
              }}
            />
            <span>Back</span>
          </Link>
          <Link
            className="flex flex-row space-x-2 items-center align-center text-lg font-semibold hover:text-green-25"
            href="/api/curriculum"
            target="_blank"
          >
            <span>Download CV</span>
            <Icon
              name="download"
              title="Generate PDF"
              dimensions={{
                width: 30,
                height: 30,
              }}
            />
          </Link>
        </div>

        <div className="m-1 md:m-0 p-10 grid grid-cols-1 md:grid-cols-4 bg-white-50 dark:bg-black-25 rounded-md gap-y-14 md:gap-y-20">
          {/* INFO section */}
          <section
            id="curriculum_section_info"
            className="col-span-1 md:col-span-3 flex flex-col space-y-2"
          >
            <h1 className={classes.h1}>{info.name}</h1>
            <h4 className={classes.h4}>{info.role}</h4>
          </section>

          {/* INFO CONTACTS section */}
          <section
            id="curriculum_section_contacts"
            className="col-span-1 flex flex-col space-y-1"
          >
            <h5 className={classes.h5}>
              <a href={`mailto:${info.contacts.email}`} target="_blank">
                {info.contacts.email}
              </a>
            </h5>
            <h5 className={classes.h5}>
              <a
                href={`tel:${info.contacts.phone.replace(/\s+/g, "")}`}
                target="_blank"
              >
                {info.contacts.phone}
              </a>
            </h5>
            <h5 className={classes.h5}>
              <a href={`https://${info.contacts.linkedin}`} target="_blank">
                {info.contacts.linkedin}
              </a>
            </h5>
            <h5 className={classes.h5}>
              <a href={`https://${info.contacts.website}`} target="_blank">
                {info.contacts.website}
              </a>
            </h5>
          </section>

          {/* EXPERIENCE section */}
          <section
            id="curriculum_section_experience"
            className="col-span-1 md:col-span-3 flex flex-col space-y-6"
          >
            <h2 className={`${classes.h2} mb-5`}>{experience.title}</h2>
            {experience.jobs.map((job) => (
              <div key={`experience_${job.id}`}>
                <div className="flex items-center align-center space-x-12">
                  <h3 className={classes.h3}>{job.company}</h3>
                  <span className="text-xs">{job.date}</span>
                </div>
                <h4 className={`${classes.h4} mb-1`}>{job.role}</h4>
                <h5 className={`${classes.h5} mb-1`}>{job.project}</h5>
                <p
                  className={`${classes.p} mb-2`}
                  dangerouslySetInnerHTML={{ __html: job.description }}
                ></p>
                <div className="flex flex-row flex-wrap gap-1">
                  {job.skills.map((chip, index) => (
                    <Chip key={`${job.id}_skill_${index}`} text={chip} />
                  ))}
                </div>
              </div>
            ))}
          </section>

          <div className="col-span-1 flex flex-col space-y-20">
            {/* SKILLS section */}
            <section
              id="curriculum_section_skills"
              className="w-full flex flex-col space-y-4"
            >
              <h2 className={`${classes.h2} mb-5`}>{skills.title}</h2>
              {skills.skillsGroups.map((group, indexGroup) => (
                <div key={`skill_group_${indexGroup}`} className="space-y-1">
                  <h3 className={classes.h3}>{group.group}</h3>
                  <p className={classes.p}>{group.skills.join(", ")}</p>
                </div>
              ))}
            </section>

            {/* EDUCATION section */}
            <section className="w-full flex flex-col space-y-4">
              <h2 className={`${classes.h2} mb-5`}>{education.title}</h2>
              <h3 className={classes.h3}>{education.university}</h3>
              <h4 className={classes.h4}>{education.course}</h4>
              <h5 className={classes.h5}>{education.degree}</h5>
            </section>

            {/* ABOUT section */}
            <section
              id="curriculum_section_about"
              className="w-full flex flex-col space-y-4"
            >
              <h2 className={`${classes.h2} mb-5`}>{about.title}</h2>
              <p
                className={classes.p}
                dangerouslySetInnerHTML={{ __html: about.description }}
              ></p>
            </section>

            {/* INTERESTS section */}
            <section
              id="curriculum_section_interests"
              className="w-full flex flex-col space-y-4"
            >
              <h2 className={`${classes.h2} mb-5`}>{interests.title}</h2>
              <p
                className={classes.p}
                dangerouslySetInnerHTML={{ __html: interests.description }}
              ></p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
