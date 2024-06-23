import videoBg from "./assets/videoBg.mp4";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Translations } from "./translations/HomePage";

function App() {
  return (
    <div className="App">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="titleContent">
        <h1>
          Ciesz się <span style={{ color: "#f8b296" }}>muzyką!</span>
        </h1>
        <h5>Dołącz i wypełnij luki w harmonogramie</h5>
        {/* <Form.Control
          type="text"
          placeholder="Wyszukaj"
          className="mx-auto"
          style={{ width: "50%", margin: "40px" }}
        /> */}
        <div className="categories">
        <Link to="/miasta">
            <Button className="categoriesBtn">MIASTA</Button>
          </Link>
          <Link to="/wokal">
            <Button className="categoriesBtn">{Translations.Wokal}</Button>
          </Link>
          <Link to="/gitary">
            <Button className="categoriesBtn">Gitary</Button>
          </Link>
          <Link to="/instrumenty-klawiszowe">
            <Button className="categoriesBtn">Instrumenty klawiszowe</Button>
          </Link>
          <Link to="/instrumenty-perkusyjne">
            <Button className="categoriesBtn">Instrumenty perkusyjne</Button>
          </Link>
          <Link to="/instrumenty-dete">
            <Button className="categoriesBtn">Instrumenty dęte</Button>
          </Link>
          <Link to="/instrumenty-smyczkowe">
            <Button className="categoriesBtn">Instrumenty smyczkowe</Button>
          </Link>
          <Link to="/dj">
            <Button className="categoriesBtn">DJ</Button>
          </Link>
          <Link to="/wszystkie-ogloszenia">
            <Button className="categoriesBtn">WSZYSTKIE OGŁOSZENIA</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
