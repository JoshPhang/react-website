const BlogList = (props) => {
    const announcements = props.announcements;
    const title = props.title;

    return (
        <div className="home">
            <h2> {title}</h2>
            {announcements.map((announcement) => (
            <div className="blog-preview" key={announcement.id}>
                <h2>{announcement.title}</h2>
                <p>Written by {announcement.author}</p>
            </div>
            ))}
        </div>
    );
}
 
export default BlogList;