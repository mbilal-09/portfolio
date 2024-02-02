// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Technical />
 */
export default function Technical() {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Technical"
          preTitle="Hardskills"
          subTitle="As a digital sorcerer, I weave spells of innovation, conjuring enchanting digital experiences with a magical blend of diverse tools and languages."
        />
        <section className={`${about.content} ${about.container}`}>
          <div className={about.copy}>
            <CopyBlock
              title="Adaptable Creator"
              icon={["fat", "chart-network"]}
              copy="With a knack for both design and development, I bring a versatile touch to every project. I'm always learning and evolving to keep up with the latest trends, ensuring your experiences stay fresh and engaging."
              iconClass={about.icon}
              containerClass={about.container}
            />
            <BadgesBlock
              title="Software I love to work with"
              copy="Exploring my passion for coding, I dive into projects with the software I adore. It's not just work; it's a journey filled with love and creativity, turning lines of code into meaningful solutions"
              list={software}
              block="software"
              fullContainer="fullContainer"
              icon="grid-2-plus"
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title="Skills"
              copy="I thrive on transforming challenges into triumphs through code. From front-end aesthetics to back-end optimization and API integrations, I'm equipped to tackle diverse coding tasks. Let's bring your ideas to life with creative and efficient solutions."
              list={tech}
              block="tech"
              fullContainer="fullContainer"
              icon="laptop-code"
              containerClass={about.container}
              headerIcon={about.icon}
            />
          </div>
          <div className={`${about.image} ${about.technicalSvg}`}>
            <Image
              src="/img/dataism-24.svg"
              width={477}
              height={1111}
              alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
            />
          </div>
        </section>
      </Container>
      {/* <SectionGridBg gridSize={4}/> */}
    </Section>
  );
}

const software = [
  { key: "vscode", name: "VSCode", type: "devicon" },
  { key: "minitab", name: "Replit", type: "devicon" },
  { key: "mailbox", name: "Postman", type: "fas" },
  { key: "androidstudio", name: "Android Studio", type: "devicon" },
  { key: "illustrator", name: "Illustrator", type: "devicon" },
  { key: "photoshop", name: "Photoshop", type: "devicon" },
  { key: "canva", name: "Canva", type: "devicon" },
  { key: "trello", name: "Trello", type: "devicon" },
  { key: "slack", name: "Slack", type: "devicon" },
];

const tech = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "typescript", name: "Typescript", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "tailwindcss", name: "Tailwind CSS", type: "devicon" },
  { key: "firebase", name: "Firebase", type: "devicon" },
  { key: "react", name: "React Native", type: "devicon" },
  { key: "wordpress", name: "WordPress", type: "devicon" }
];
