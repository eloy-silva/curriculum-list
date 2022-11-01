import React, {
  ChangeEvent,
  Context,
  createContext,
  ReactNode,
  useState,
} from "react";
import { Curriculum } from "../interfaces/curriculum";

interface Props {
    children: ReactNode;
  }

interface ContextType {
  curriculums: Curriculum[];
  addCurriculum: (curriculum: Curriculum) => void;
  deleteCurriculum: (id: number) => void;
  downloadCurriculum: (id: number) => void;
  uploadCurriculum: (event: ChangeEvent<HTMLInputElement>) => void;
}



const CurriculumContext: Context<ContextType> = createContext<ContextType>({
  curriculums: [],
  addCurriculum: () => {},
  deleteCurriculum: () => {},
  downloadCurriculum: () => {},
  uploadCurriculum: () => {},
});

export default function CurriculumProvider({ children }: Props) {
  const [curriculums, setcurriculums] = useState<Curriculum[]>([]);

  function addCurriculum(curriculum: Curriculum): void {
    curriculum.id = Math.random();
    setcurriculums([...curriculums, curriculum]);
  }

 
  function downloadCurriculum(id: number) {
    curriculums.filter((curriculum) => {
      if (curriculum.id === id) {
        const File = JSON.stringify(curriculum);
        const data = `data:text/json;charset=UTF-8, ${encodeURIComponent(
          File
        )}`;
        const downloadAnchorElement = document.createElement("a");
        downloadAnchorElement.setAttribute("href", data);
        downloadAnchorElement.setAttribute(
          "download",
          `${curriculum.firstName}.json`
        );
        document.body.appendChild(downloadAnchorElement);
        downloadAnchorElement.click();
      }
    });
  }


  function deleteCurriculum(id: number): void {
    setcurriculums(curriculums.filter((curriculum) => curriculum.id !== id));
  }


  function uploadCurriculum(event: ChangeEvent<HTMLInputElement>): void {
    const input = event.target as HTMLInputElement;
    input.files
      ?.item(0)
      ?.text()
      .then((result: string) => {
        const uploadCurriculum = JSON.parse(result);
        addCurriculum(uploadCurriculum);
      });
  }

  return (
    <CurriculumContext.Provider
      value={{
        curriculums,
        addCurriculum,
        deleteCurriculum,
        downloadCurriculum,
        uploadCurriculum,
      }}
    >
      {children}
    </CurriculumContext.Provider>
  );
}

export const useCurriculum = () => React.useContext(CurriculumContext);
