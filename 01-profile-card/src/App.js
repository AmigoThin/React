import "./App.css";

export default function App() {
  return (
    <div className="card">
      <Avator />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avator() {
  return <img className="avatar" src="jonas.jpeg" alt="Jonas Schmedtmann" />;
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML-CSS" emoji="💪" color="orange" />
      <Skill skill="React" emoji="💪" color="yellow" />
      <Skill skill="React" emoji="😂" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
