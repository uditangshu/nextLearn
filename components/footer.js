const Footer = () => {
  return (
    <footer class="centerFoot">
      <div className="firstFooter">
        <div className="FooterLeft">
          <p className="FooterLeftHead">About Me</p>
          <p>
            I am Abhishek Saha.I am a first year undergraduate student of the
            department of mechanical engineering enrolled in its 4-year b-tech
            course.I am a boarder of Pandit Madan Mohan Malviya Hall of
            Residence.I am from Agartala,Tripura. I am currently an associate
            member at Spats and SubHead in the National STudents Space
            Challenge.
          </p>
        </div>
        <div className="FooterRight">
          <div class="footbox1">
            <p className="FooterLeftHead">Connect With Me</p>
            <div className="socials">
              <p>
                <a
                  href="https://www.facebook.com/profile.php?id=100094570903087"
                  target="_blank"
                  className="socialsLink"
                >
                  <i className="fa-brands fa-facebook sociallogo"></i>
                </a>
              </p>

              <p>
                <a
                  href="https://www.instagram.com/abhishekkk3_/?hl=en"
                  target="_blank"
                  className="socialsLink"
                >
                  <i className="fa-brands fa-instagram sociallogo"></i>
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/abhishek-saha-2531aa287/"
                  target="_blank"
                  className="socialsLink"
                >
                  <i className="fa-brands fa-linkedin sociallogo"></i>
                </a>
              </p>
            </div>
            <p>Call me at +012245670</p>
          </div>
        </div>
      </div>
      <p>Copyright www.AbhishekPortfolio.com. All rights reserved.</p>
    </footer>
  );
};
export default Footer;
