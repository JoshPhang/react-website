import { useState } from "react";
import BlogList from "./BlogList";
import About from "./About";

const Home = () => {
  const [announcements, setAnnouncements] = useState([
    { title: "Youth Meeting this Week!", body: "We will be meeting this week in the Surrey Campus!", date: "05/06/22", id: 1 },
    { title: "Youth Cancelled!", body: "Due to unforseen circumstances, youth will be cancelled this week.", date: "05/05/22", id: 2 },
    {
      title: "Youth is taking a break!",
      body: "Enjoy your break, see you in the new year!",
      date: "05/04/22",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = announcements.filter(
      (announcement) => announcement.id !== id
    );
    setAnnouncements(newBlogs);
  };

  return (
    <div id="home-page" className="home">
      <BlogList
        announcements={announcements}
        title="All Announcements"
        handleDelete={handleDelete}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <About />
    </div>
  );
};

export default Home;
