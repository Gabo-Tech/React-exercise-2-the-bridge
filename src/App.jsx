import Header from "./components/Header";
import Home from "./components/Home";
//import "./styles.css";

const techs = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "ES6",
  "React.js",
  "React Hooks",
  "Recoil",
  "React Native",
  "Web Design",
  "UX",
  "DOM Manipulation",
  "Heroku",
  "Github Pages",
  "NginX",
  "Digital Ocean",
  "MongoDB Atlas",
  "Vercel",
  "CI/CD",
  "Git",
  "Github",
  "Version Control",
  "Bash",
  "Command Line",
  "Linux",
  "Node.js",
  "NPM",
  "Express.js",
  "Next.js",
  "REST APIs",
  "TDD",
  "Jest",
  "Supertest",
  "SQL",
  "Sequelize",
  "MongoDB",
  "Mongoose",
  "Firebase",
  "JWT",
  "Passport",
  "Bcrypt",
  "Web3",
  "DAPPS",
  "Motoko"
];
const tech = techs.map((tech) => <li>{tech}</li>);
export default function App() {
  return (
    <div className="App">
      <Header />
      <Home techs={tech} />
      <ul>{tech}</ul>
    </div>
  );
}
