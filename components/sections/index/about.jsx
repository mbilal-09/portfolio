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
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={`${about.section} hero_bg`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          preTitle="Developer"
          subTitle="An inquisitive Mern Stack Developer on a mission to conquer every tech stack with a touch of madness and a lot of innovation."
        />
        <section className={about.content}>
          <div
            className={about.image}
            data-aos="flip-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <img src="/img/profile-photo.jpg" alt="Nelson family photo" />
            {/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Innovating Digital Experiences with Code Craftsmanship"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fat", "ear-listen"]}
              copy="Dedicated to pushing the boundaries of technology, I specialize in creating dynamic, scalable solutions that redefine user interactions. From web marvels to mobile enchantments, I bring ideas to life through meticulous code craftsmanship."
            />
            <BadgesBlock
              title="Tech Visionary & Solution Architect"
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              icon="fingerprint"
              copy="Crafting tomorrow's digital experiences through visionary solutions and strategic architecture."
              //invertedColor="invertedColor"
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}

const methods = [
  { key: "planet-moon", name: "Web Application", type: "fad" },
  { key: "qrcode", name: "Mobile Application", type: "fad" },
  { key: "window", name: "Responsive Design", type: "fad" },
  { key: "cubes", name: "Leadership", type: "far" },
  { key: "layer-plus", name: "Designing", type: "fad" },
  { key: "solar-system", name: "Multi-Tasking", type: "fad" },
];
