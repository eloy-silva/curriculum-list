import { useCurriculum } from "../../context/curriculumContext";
import {
  Title,
  SubTitle,
  Container,
  ContainerCurriculum,
  ButtonDelete,
  ButtonDown,
  EmptData,
  InfoCurriculum,
  InfoDetails
} from "./styles";

export const List = () => {
  const {
    curriculums,
    deleteCurriculum,
    downloadCurriculum,
    uploadCurriculum,
  } = useCurriculum();

  return (
    <Container>
      <Title>Currículos:</Title>
      <input
        className="upload"
        type="file"
        accept=".json"
        onChange={(event) => uploadCurriculum(event)}
      />
      {curriculums.length ? (
        <ContainerCurriculum className="item">
          {curriculums.map((curriculum) => (
            <InfoCurriculum key={curriculum.id}>
              <SubTitle>
                {curriculum.firstName} {curriculum.lastName}
              </SubTitle>
              <InfoDetails>CPF: {curriculum.cpf}</InfoDetails>
              <InfoDetails>Data de Nascimento: {curriculum.birth}</InfoDetails>
              <InfoDetails>Contato: {curriculum.phone}</InfoDetails>
              <InfoDetails>Email: {curriculum.email}</InfoDetails>
              <InfoDetails>Gênero: {curriculum.gender}</InfoDetails>
              <div>
                <InfoDetails>Experiencia(s):</InfoDetails>
                {curriculum.experiences?.map((experiences, index) => (
                  <div key={index}>
                    <p>{experiences.experiences}</p>
                  </div>
                ))}
              </div>
              <ButtonDown onClick={() => downloadCurriculum(curriculum.id)}>
                Download
              </ButtonDown>
              <ButtonDelete onClick={() => deleteCurriculum(curriculum.id)}>
                Deletar
              </ButtonDelete>
            </InfoCurriculum>
          ))}
        </ContainerCurriculum>
      ) : (
        <EmptData>... Sem currículos por aqui</EmptData>
      )}
    </Container>
  );
};
