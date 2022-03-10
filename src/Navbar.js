const Navbar = () => {
  const instaHandle = "@pic.youth";
  
  return (
    <nav className="navbar">
      <h1><a href="/">{instaHandle}</a></h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Announcement</a>
        <a href="/about">Our Team</a>
      </div>
    </nav>
  );
};

export default Navbar;
