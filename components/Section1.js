import imgBack from "/public/devimg.png";
import Image from "next/image";

const SectionOne = () => {
  return (
    <section className="firstsection night">
      <div className="leftsection">
        Hi, My name is <span id="namewala">Abhishek</span>
        <div>and, I am a passionate</div>
        <div id="element">Web Developer</div>
        <div id="but">
          <button className="but">Download Resume</button>
          <button className="but">Visit GitHub</button>
        </div>
      </div>
      <div class="rightsection">
        <Image src={imgBack} className="imgBack" />
      </div>
    </section>
  );
};
export default SectionOne;
