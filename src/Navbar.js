import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const instaHandle = "@pic.youth";

  return (
    <nav className="navbar">
      <h1>
        <AnchorLink offset="200" href="#home-page">
          <img src="IMG_7966.JPG" className="logo" alt="pic.youth logo" />
        </AnchorLink>
      </h1>
      <div className="links">
        <a
          href="https://www.instagram.com/pic.youth/"
          target="_blank"
          rel="noreferrer noopener"
          className="insta"
        >
          {instaHandle}
        </a>
        <AnchorLink offset="100" href="#announcement-page">
          Announcements
        </AnchorLink>
        <AnchorLink offset="100" href="#about-page">
          Our Team
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
