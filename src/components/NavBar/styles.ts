import styled from "styled-components";

export const Container = styled.div`

  text-align: center;
  align-items: flex-start;
  margin: 30px;
`;

export const Title = styled.h1`
  font-size: x-large;
  margin-bottom: 20px;
`;

export const Nav = styled.nav`
  height: 0;
  border-radius: 10px;
  background-color: red;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);

  margin-bottom: 40px;
`;

export const MenuItem = styled.button`
  
  pointer-events: auto;
  cursor: pointer;
  background: #e7e7;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  font-family: inherit;
  font-size: inherit;
  position: relative;

  :hover {
    scale: 1.1;
  }
`;
