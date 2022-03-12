import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [announcements, setAnnouncements] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
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
    <div className="home">
      <BlogList
        announcements={announcements}
        title="All Announcements"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
