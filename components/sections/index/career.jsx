// Core packages
import Image from "next/image";

import Badges from "../../utils/badge.list.util";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Career scss
import career from "../../../styles/sections/index/career.module.scss";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  function digiAppTime() {
    const startDate = new Date("January 1, 2024");
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = currentDate - startDate;

    // Convert milliseconds to years, months, and days
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const years = Math.floor(timeDifference / millisecondsInYear);

    const remainingMilliseconds = timeDifference % millisecondsInYear;
    const millisecondsInMonth = 1000 * 60 * 60 * 24 * (365.25 / 12);
    const months = Math.floor(remainingMilliseconds / millisecondsInMonth);

    const remainingMillisecondsInMonth =
      remainingMilliseconds % millisecondsInMonth;
    const days = Math.floor(
      remainingMillisecondsInMonth / (1000 * 60 * 60 * 24)
    );

    return { years, months, days };
  }

  function smitTime() {
    const startDate = new Date("December 1, 2023");
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = currentDate - startDate;

    // Convert milliseconds to years, months, and days
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const years = Math.floor(timeDifference / millisecondsInYear);

    const remainingMilliseconds = timeDifference % millisecondsInYear;
    const millisecondsInMonth = 1000 * 60 * 60 * 24 * (365.25 / 12);
    const months = Math.floor(remainingMilliseconds / millisecondsInMonth);

    const remainingMillisecondsInMonth =
      remainingMilliseconds % millisecondsInMonth;
    const days = Math.floor(
      remainingMillisecondsInMonth / (1000 * 60 * 60 * 24)
    );

    return { years, months, days };
  }

  const digiAppExpTime = digiAppTime();
  const smitExpTime = smitTime();

  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="Merning the Digital Canvas: Crafting Seamless Experiences, Line by Line."
        />
        <section className={career.area}>
          <article className={career.company} data-aos="zoom-out-up">
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>BNG Labs</h3>
                <h4>Mern Stack Intern</h4>
                <h4>Jul 2023 - Dec 2023 · 6 months</h4>
                <h5>Karachi, Pakistan</h5>
              </span>
              <p>
                As a Mern Stack Developer Intern at Bng Labs, I embarked on an
                enriching journey to apply theoretical knowledge to real-world
                development scenarios. This internship provided me with hands-on
                experience in the dynamic realm of web development, honing my
                skills across the Mern stack.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
          <article className={career.company} data-aos="zoom-out-up">
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>DigiApp Solutions</h3>
                <h4>Junior Mern Stack Developer</h4>
                <h4>
                  Jan 2024 - Current ·
                  {digiAppExpTime.years > 0
                    ? ` ${digiAppExpTime.years} year${
                        digiAppExpTime.years > 1 ? "s" : ""
                      }`
                    : ``}
                  {digiAppExpTime.months > 0
                    ? ` ${digiAppExpTime.months} month${
                        digiAppExpTime.months > 1 ? "s" : ""
                      }`
                    : ``}
                  {digiAppExpTime.days > 0
                    ? ` ${digiAppExpTime.days} day${
                        digiAppExpTime.days > 1 ? "s" : ""
                      }`
                    : ``}
                </h4>
                <h5>Karachi, Pakistan</h5>
              </span>
              <p>
                As a Junior MERN Stack Developer at DigiApp Solutions, I
                developed and maintained web applications, specializing in
                MongoDB, Express.js, Next.js, and Node.js. I crafted seamless
                RESTful APIs, designed user-friendly interfaces with Next.js,
                and contributed to agile problem-solving, honing my full-stack
                development skills and reinforcing proficiency in the MERN
                stack.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
          <article className={career.company} data-aos="zoom-out-up">
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>SMIT</h3>
                <h4>Assistant Professor</h4>
                <h4>
                  Dec 2023 - Current ·
                  {smitExpTime.years > 0
                    ? ` ${smitExpTime.years} year${
                        smitExpTime.years > 1 ? "s" : ""
                      }`
                    : ``}
                  {smitExpTime.months > 0
                    ? ` ${smitExpTime.months} month${
                        smitExpTime.months > 1 ? "s" : ""
                      }`
                    : ``}
                  {smitExpTime.days > 0
                    ? ` ${smitExpTime.days} day${
                        smitExpTime.days > 1 ? "s" : ""
                      }`
                    : ``}
                </h4>
                <h5>Karachi, Pakistan</h5>
              </span>
              <p>
                I&apos;m a assistant teacher at SMIT, helping students understand
                tech in an easy way. We explore how to make computer things work
                and build fun stuff. It&apos;s like having an adventure with
                technology every day! Mixing class learning with doing things
                hands-on, I enjoy making tech simple and exciting for these new
                minds. Teaching here adds a bit of extra fun to my skill set,
                mixing school with real-world tech play.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
        </section>
      </Container>
    </Section>
  );
}
