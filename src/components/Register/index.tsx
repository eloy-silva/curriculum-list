import { useFieldArray, useForm } from "react-hook-form";
import { Curriculum } from "../../interfaces/curriculum";
import { useCurriculum } from "../../context/curriculumContext";
import {
  validateCPF,
  validateBirthday,
  validatePhone,
} from "../../validators/curriculumValidators";
import {
    ButtonDelete,
  ButtonExp,
  ButtonSubmit,
  ErrorMsg,
  ExpCard,
  ExpContainer,
  Form,
  FormContainer,
  InputInfo,
  PersonalInfo,
  SubTitle,
} from "./styles";


const maskCpf = (value: string) => {
  return value.replace(
    /^(\d{3})\D*(\d{3})\D*(\d{3})\D*(\d{2})$/g,
    "$1.$2.$3-$4"
  );
};

const maskDate = (value: string) => {
  return value.replace(/^(\d{2})\D*(\d{2})\D*(\d{4})$/g, "$1/$2/$3");
};

const maskPhone = (value: string) => {
  return value.replace(/^(\d{2})\D*(\d{5})\D*(\d{4})$/g, "($1)$2-$3");
};

const Register = () => {
  const { addCurriculum } = useCurriculum();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<Curriculum>({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const { append, fields, remove } = useFieldArray<Curriculum>({
    control,
    name: "experiences",
  });

  const addCurriculums = (curriculum: Curriculum) => {
    addCurriculum(curriculum);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(addCurriculums)}>
      <FormContainer>
        <PersonalInfo>
          <SubTitle>Informacoes Pessoais</SubTitle>
          <InputInfo>
            <input
              {...register("firstName", { required: "Insira o Nome!" })}
              type="text"
              placeholder="Nome"
            />
            {errors.firstName && (
              <ErrorMsg>{errors.firstName.message}</ErrorMsg>
            )}
          </InputInfo>

          <InputInfo>
            <input
              {...register("lastName", { required: "Insira o Sobrenome!" })}
              type="text"
              placeholder="Sobrenome"
            />
            {errors.lastName && <ErrorMsg>{errors.lastName.message}</ErrorMsg>}
          </InputInfo>

          <InputInfo>
            <input
              {...register("cpf", {
                required: "Insira o CPF!",
                validate: validateCPF,
              })}
              placeholder="CPF"
              onChange={(event) => {
                event.currentTarget.maxLength = 14;
                const { value } = event.target;
                event.target.value = maskCpf(value);
              }}
            />
            {errors.cpf && <ErrorMsg>{errors.cpf.message}</ErrorMsg>}
          </InputInfo>

          <InputInfo>
            <input
              {...register("birth", {
                required: "Insira data de nascimento!",
                validate: validateBirthday,
              })}
              type="text"
              placeholder="data de nascimento"
              onChange={(event) => {
                event.currentTarget.maxLength = 10;
                const { value } = event.target;
                event.target.value = maskDate(value);
              }}
            />
            {errors.birth && <ErrorMsg>{errors.birth.message}</ErrorMsg>}
          </InputInfo>

          <InputInfo>
            <input
              {...register("phone", {
                required: "Insira o Telefone!",
                validate: validatePhone,
              })}
              type="text"
              placeholder="Número de Telefone"
              onChange={(event) => {
                event.currentTarget.maxLength = 14;
                const { value } = event.target;
                adding:;
                event.target.value = maskPhone(value);
              }}
            />
            {errors.phone && <ErrorMsg>{errors.phone.message}</ErrorMsg>}
          </InputInfo>

          <InputInfo>
            <input
              {...register("email", { required: "Adicione seu email!" })}
              type="email"
              placeholder="Email"
            />
            {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
          </InputInfo>

          <InputInfo>
            <select {...register("gender")} defaultValue={"Não Responder"}>
              <option value="Nao Responder">Qual Seu Gênero?</option>
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
              <option value="Outros">Outro</option>
            </select>
          </InputInfo>

          <ExpContainer>
            <ButtonExp onClick={() => append({})}> Adicionar Experiência </ButtonExp>

            {fields.map((field, index) => (
              <ExpCard key={field.id}>
                <label>Experiencia: </label>
                <textarea
                  {...register(`experiences.${index}.experiences` as const, {
                    required: "experience required",
                  })}
                />
                <ButtonDelete onClick={() => remove(index)}>Deletar</ButtonDelete>
              </ExpCard>
            ))}
          </ExpContainer>
        </PersonalInfo>
        <ButtonSubmit  type="submit"  disabled={!isDirty && !isValid}>
        Cadastrar
      </ButtonSubmit>
      </FormContainer>

    </Form>
  );
};

export default Register;
