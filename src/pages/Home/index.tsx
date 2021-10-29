import * as C from "./styles";
import cursos from "../../images/cursos.png";
import esportes from "../../images/esportes.png";
import eventos from "../../images/eventos.png";
import festas from "../../images/festas.png";
import passeios from "../../images/passeios.png";
import teatro from "../../images/teatro.png";
import img4 from "../../images/img4.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <C.Container>
        <C.Titulo>
          <h1>
            {" "}
            Crie e viva experiências únicas <br /> quando e onde quiser{" "}
          </h1>
          <p>
            Aprenda, divirta-se ou empreenda com eventos presenciais, online e
            conteúdos gravados.
          </p>
          <Link to={"/step1"}>
            <button> SEJA UM PRODUTOR</button>
            </Link>
          <button
            style={{
              backgroundColor: " transparent",
              color: "#0000FF",
              border: "none",
              marginLeft: " 50px",
            }}
          >
            DESCUBRA ATIVIDADES{" "}
          </button>
          <br />
          <h3> Viva com a gente</h3>
          <C.Imag>
            <C.Photo>
              <img src={teatro} />
            </C.Photo>
            <C.Photo1>
              <img src={img4} />
            </C.Photo1>
            <C.Photo2>
              <img src={eventos} />
            </C.Photo2>
            <C.Photo3>
              <img src={passeios} />
            </C.Photo3>
            <C.Photo3>
              <img src={festas} />
            </C.Photo3>
            <C.Photo4>
              <img src={cursos} />
            </C.Photo4>
            <C.Photo5>
              <img src={esportes} />
            </C.Photo5>
          </C.Imag>
          <C.H4>
            <h4 className="teatro">Teatros</h4>
            <h4 className="exposicoes">Exposicoes</h4>
            <h4 className="eventos">Eventos Online</h4>
            <h4 className="passeios">Passeios</h4>
            <h4 className="festas">Festas</h4>
            <h4 className="cursos">Cursos</h4>
            <h4 className="esporte">Esportes</h4>
          </C.H4>
        </C.Titulo>
      </C.Container>
    </div>
  );
};
