import aboutLeaders from "./about-leaders";

const About = () => {
  const leaderData = () => JSON.parse(JSON.stringify(aboutLeaders));
  var id = 1;

  function getLeaderData(id) {
    let leader = aboutLeaders.find((el) => el.id === id);
    return (
      <div className="leaderCard">
        <img src={leader.img}></img>
        <div className="overlay">
          <h1>{leader.name}</h1>
          <p>{leader.q}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="aboutPage">
      <h1 id="about-page">Meet The Leaders!</h1>
      <div className="leaders">
        <div className="col">
          {getLeaderData(1)}
          {getLeaderData(2)}
          {getLeaderData(3)}
          {getLeaderData(4)}
        </div>
        <div className="col">
          {getLeaderData(5)}
          {getLeaderData(6)}
          {getLeaderData(7)}
          {getLeaderData(8)}
        </div>
      </div>
    </div>
  );
};

export default About;
