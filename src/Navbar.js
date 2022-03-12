const Navbar = () => {
  const instaHandle = "@pic.youth";

  return (
    <nav className="navbar">
      <h1>
        <a href="/">
          <img
            src="IMG_7966.JPG"
            className="logo"
            onClick="/"
            alt="pic.youth logo"
          />
        </a>
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
        <a href="/create">New Announcement</a>
        <a href="/about">Our Team</a>
      </div>
    </nav>
  );
};

export default Navbar;
