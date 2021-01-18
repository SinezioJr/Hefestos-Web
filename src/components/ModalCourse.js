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
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: { tipo: "" },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    props.handleClose();
  };

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
              style={{ border: errors.titulodaVaga ? "1px solid red" : "" }}
              ref={register({ required: true })}
            />
          </Input>

          <Row>
            <Select>
              <label htmlFor="area">Área</label>

              <select
                defaultValue={""}
                name="area"
                ref={register({ required: true })}
                style={{ border: errors.area ? "1px solid red" : "" }}
              >
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
                style={{ border: errors.Valor ? "1px solid red" : "" }}
                ref={register({ required: true })}
              />
            </Input>
          </Row>

          <Input>
            <label htmlFor="Local">Local</label>
            <input
              type="text"
              name="Local"
              style={{ border: errors.Local ? "1px solid red" : "" }}
              ref={register({ required: true })}
            />
          </Input>

          <Row>
            <Input>
              <label htmlFor="DataInicio">Data de Início</label>
              <input
                type="date"
                name="DataInício"
                style={{ border: errors.DataInício ? "1px solid red" : "" }}
                ref={register({ required: true })}
              />
            </Input>
            <Input style={{ marginRight: 10 }}>
              <label htmlFor="DataTermino">Data de Término</label>
              <input
                type="date"
                style={{ border: errors.DataTermino ? "1px solid red" : "" }}
                name="DataTermino"
                ref={register({ required: true })}
              />
            </Input>

            <Input>
              <label htmlFor="HorarioInicio">Horário de Início</label>
              <input
                type="time"
                style={{ border: errors.HorarioInicio ? "1px solid red" : "" }}
                name="HorarioInicio"
                ref={register({ required: true })}
              />
            </Input>

            <Input>
              <label htmlFor="HorarioTermino">Horário de Término</label>
              <input
                type="time"
                style={{ border: errors.HorarioTermino ? "1px solid red" : "" }}
                name="HorarioTermino"
                ref={register({ required: true })}
              />
            </Input>
          </Row>
          <Input>
            <label htmlFor="Descricao">Informações de Inscrição</label>
            <textarea
              rows={5}
              style={{ border: errors.Descricao ? "1px solid red" : "" }}
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
