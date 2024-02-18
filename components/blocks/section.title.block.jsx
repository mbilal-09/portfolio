import Container from "../structure/container";

// Section scss
import section from "../../styles/blocks/section.title.module.scss";

/**
 * Section header component
 *
 * @param {string} * strings for header
 * @returns
 */
export default function SectionTitle({ preTitle, title, subTitle }) {
  return (
    <>
      <div className={`${section.title}`}>
        <h4 data-aos="zoom-in" data-aos-delay="100">{preTitle}</h4>
        <h2 data-aos="zoom-in" data-aos-delay="300">{title}</h2>
        <p className="subtitle" data-aos="zoom-in" data-aos-delay="500">{subTitle}</p>
      </div>
    </>
  );
}
