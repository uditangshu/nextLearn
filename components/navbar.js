const Navbar = () => {
  return (
    <nav className="nightnav">
      <div className="left">
        <p >Abhishek's Portfolio</p>
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
