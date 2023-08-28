import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const experienceList = [
  {
    position: "Front-End Technical Team Lead",
    company: "Cube Ocean",
    companyLink: "",
    time: "May 2023 - PRESENT",
    address: "Isfahan, Iran",
    work: `Prioritized team needs as a topmost concern.
    Collaborated not only with a team of 20+ Frontend Engineers but also with product managers, backend developers, and designers to elevate User Experience.
    Conducted comprehensive code reviews for 5+ Frontend Engineers, offering constructive feedback to ensure unwavering adherence to best practices in Azure pull requests.
    Successfully implemented the Micro-Frontend application and integrated the today-kit npm package for a cross-functional team of 40+ developers.
    Dockerize Micro-Frontend applications and established 4+ CI/CD pipelines via Azure DevOps.
    Guided 7+ team members, enabling them to achieve professional growth and personal goals.
    `,
  },
  {
    position: "Front-End Developer",
    company: "Kasra Company",
    companyLink: "",
    time: "Apr 2018 - May 2023",
    address: "Isfahan, Iran",
    work: `Engineered 10+ responsive web applications and admin dashboards using React/Redux and Angular, incorporating 100+ reusable components alongside valuable development tools like plugins, mixins, and directives.
    Spearheaded improvements in development, code review, release, and bug-fixing methodologies within the team, leveraging Scrum/agile best practices for more than 1000+ hours.
    Elevated the GEO-fence Module for an Attendance Application, orchestrating intricate map customizations (using Leaflet and Google Maps) to ensure precise location-based functionalities.
    Successfully addressed the project's technical debt during a comprehensive inspection, demonstrating a flexible approach to adapting to evolving requirements and events.
    Strategically evaluated workloads and introduced innovative operational processes, yielding a remarkable 40% surge in productivity.
    Participated as an early adopter in the learning and implementation phase of the React.js library, contributing to its initial integration within the developer community.
    `,
  },
];

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
          ref={ref}
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {experienceList.map((experience, index) => (
            <Details key={index} {...experience} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
