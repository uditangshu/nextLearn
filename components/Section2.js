import imgBack from "/public/devimg.png";
import Image from "next/image";
const SectionTwo = () => {
  return (
    <section className="secondsection">
      <span id="grey">What I have done so far?</span>
      <p> My Journey</p>
      <div className="box">
        <div className="vertical">
          <div className="verticaltext">
            Did Primary,Middle and Secondary Schooling from HCS <div></div>
            (2011-2021)
          </div>
        </div>
        <div className="vertical">
          <div className="verticaltext">
            Did Higher Secondary Schooling from Hindi School <div></div>
            IIT-JEE Aspirant <div></div>(2021-2023)
          </div>
        </div>
        <div className="vertical">
          <div className="verticaltext">
            Started Studing in IIT-KGP <div></div>(2023-present)
          </div>
        </div>
        <div className="vertical">
          <div className="verticaltext">
            Aspiring Web-Developer and Graphic Designer <div></div>
            (2023-present)
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionTwo;
