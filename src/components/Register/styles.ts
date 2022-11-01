import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
`;

export const FormContainer = styled.div`
  position: relative;
  margin: 10px;
  align-items: center;
  margin-bottom: auto;
`;

export const PersonalInfo = styled.div`
  align-items: center;
  text-align: center;
`;

export const SubTitle = styled.h3`
  font-size: x-large;
  margin-bottom: 10px;
`;

export const InputInfo = styled.div`
  margin: 10px auto;

  label {
    font-weight: 800;
  }

  input {
    border: 0;
    outline: 0;
    padding: 22px 18px;
    width: 360px;
    font: inherit;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  }
  select {
    width: 180px;
    height: 3em;

    overflow: hidden;
    text-align: center;
    align-items: center;

    option {
      padding: 0 30px 0 10px;
      min-height: 40px;
      display: flex;
      align-items: center;
      pointer-events: none;
      order: 2;
      z-index: 1;
      transition: background 0.4s ease-in-out;
    }
    :hover {
      background: #626666;
    }
  }
`;

export const ExpContainer = styled.div`
  margin: 10px;
  align-items: center;
  margin-bottom: auto;
`;

export const ExpCard = styled.div`
  margin: 10px;
  align-items: center;
  margin-bottom: auto;
`;

export const ErrorMsg = styled.p`

  color: #e72343e7;
  position: relative;
  margin: 10px;
  align-items: center;
  margin-bottom: auto;
`;

export const ButtonSubmit = styled.button`
  width: 180px;
  pointer-events: auto;
  cursor: pointer;
  background: #34e7e7;
  border: none;
  padding: 0.5rem 2rem;

  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
  :hover {
    scale: 1.1;
  }
`;

export const ButtonExp = styled.button`
  width: 180px;
  pointer-events: auto;
  cursor: pointer;
  background: #e724e7e7;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  font-family: inherit;
  font-size: smaller;
  position: relative;
  display: inline-block;
  :hover {
    scale: 1.1;
  }
`;

export const ButtonDelete = styled.button`
  pointer-events: auto;
  cursor: pointer;
  background: #e72343e7;
  border: none;
  margin: 0.5rem;
  padding: 8px;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
  align-items: center;
  margin-bottom: 5px;
  :hover {
    scale: 1.1;
  }
`;
