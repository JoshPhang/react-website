import aboutLeaders from "./about-leaders";

const About = () => {
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
          {getLeaderData(1)} {/*Christian*/}
          {getLeaderData(2)} {/*Josh*/}
          {getLeaderData(3)} {/*Jubelle*/}
          {getLeaderData(4)} {/*Kezziah*/}
        </div>
        <div className="col">
          {getLeaderData(5)} {/*Mark*/}
          {getLeaderData(6)} {/*Michaella*/}
          {getLeaderData(7)} {/*Rica*/}
          {getLeaderData(8)} {/*PG*/}
        </div>
      </div>
    </div>
  );
};

export default About;
