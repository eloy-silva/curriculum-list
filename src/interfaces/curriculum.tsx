export interface Curriculum {
  id: number;
  firstName: string;
  lastName: string;
  birth: string;
  email: string;
  cpf: string;
  phone: string;
  gender: string;
  experiences?: Experiences[];
}

interface Experiences {
  experiences: string;
}
