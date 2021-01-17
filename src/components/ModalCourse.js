import Modal from "../styles/modais";
import styled from "styled-components";

import { useForm } from "react-hook-form";

import { Input, Row, Select, LongButton } from "../styles/forms";

const Title = styled.div`
  width: 100%;
  text-align: center;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  /* identical to box height, or 100% */
  letter-spacing: 0.15px;

  color: #000000;
`;

export default function App(props) {
  const { register, handleSubmit } = useForm({
    defaultValues: { tipo: "" },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Modal {...props}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title>Cadastrar Cursos</Title>
          <Input>
            <label htmlFor="titulodaVaga">Título da Curso</label>
            <input
              type="text"
              name="titulodaVaga"
              ref={register({ required: true })}
            />
          </Input>

          <Row>
            <Select>
              <label htmlFor="area">Área</label>

              <select value={""} name="area" ref={register({ required: true })}>
                <option value="" style={{ display: "none" }}>
                  Selecione
                </option>
                <option value="Tecnologia">Tecnologia</option>
                <option value="Manutencao">Manutenção</option>
              </select>
              <div className="select_arrow" />
            </Select>

            <Input>
              <label htmlFor="Valor">Valor</label>
              <input
                type="text"
                name="Valor"
                ref={register({ required: true })}
              />
            </Input>
          </Row>

          <Input>
            <label htmlFor="Local">Local</label>
            <input
              type="text"
              name="Local"
              ref={register({ required: true })}
            />
          </Input>

          <Row>
            <Input>
              <label htmlFor="DataInicio">Data de Início</label>
              <input
                type="date"
                name="DataInício"
                ref={register({ required: true })}
              />
            </Input>
            <Input style={{ marginRight: 10 }}>
              <label htmlFor="DataTermino">Data de Término</label>
              <input
                type="date"
                name="DataTermino"
                ref={register({ required: true })}
              />
            </Input>

            <Input>
              <label htmlFor="Horario">Horário de Início</label>
              <input
                type="time"
                name="titulodaVaga"
                ref={register({ required: true })}
              />
            </Input>

            <Input>
              <label htmlFor="Horario">Horário de Término</label>
              <input
                type="time"
                name="titulodaVaga"
                ref={register({ required: true })}
              />
            </Input>
          </Row>
          <Input>
            <label htmlFor="Descricao">Informações de Inscrição</label>
            <textarea
              rows={5}
              name="Descricao"
              ref={register({ required: true })}
            />
          </Input>
          <LongButton>CADASTRAR CURSO</LongButton>
        </form>
      </Modal>
    </>
  );
}
