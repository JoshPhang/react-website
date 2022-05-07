const BlogList = ({ announcements, title, handleDelete }) => {
  return (
    <div className="home">
      <h2 id="announcement-page"> {title}</h2>
      {announcements.map((announcement) => (
        <div className="blog-preview" key={announcement.id}>
          <h2>{announcement.title}</h2>
          <h3>{announcement.body}</h3>
          <p>{announcement.date}</p>
          <button onClick={() => handleDelete(announcement.id)}>
            delete blog
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
