import imgBack from "/public/devimg.png";


const SectionOne = () => {
  return (
    <section className="firstsection night">
      <div className="leftsection">
        Hi, My name is <span id="namewala">Abhishek</span>
        <div>and, I am a passionate</div>
        <div className="element">Web Developer</div>
        <div id="but">
          <button className="but">
            <a
              href="https://docs.google.com/document/d/18Lwn_OVekFEWuVprpCul_ZO-gNVuUPjnpW1YffsPslw/edit?usp=sharing"
              target="_blank"
              className="anchor"
            >
              Download Resume
            </a>
          </button>
          <button className="but">
            <a
              href="https://github.com/Abhishekkk2004"
              target="_blank"
              className="anchor"
            >
              Visit GitHub
            </a>{" "}
          </button>
        </div>
      </div>
      <div class="rightsection">
        there should have been an image...and the error is in next/image.
        
      </div>
    </section>
  );
};
export default SectionOne;
