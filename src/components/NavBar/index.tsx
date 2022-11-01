import { Link } from "react-router-dom";
import { Container, MenuItem, Nav, Title } from "./styles";

function Header() {
  return (
    <Container>
      <Title>LISTA DE CURRÍCULOS</Title>

      <Nav>
        <Link to="/"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
           <MenuItem>Cadastro</MenuItem> 
        </Link>
        <Link to="/curriculumList"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <MenuItem>Lista</MenuItem>
        </Link>
      </Nav>
   
    </Container>
  );
}

export default Header;
