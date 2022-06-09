export default function Home(props) {
  return (
    <div className="App">
      <h4>Sobre mi</h4>
      <p>Soy Gabriel</p>
      <h4>Tecnologías que manejo:</h4>
      <ul>{props.techs.tech}</ul>
    </div>
  );
}
