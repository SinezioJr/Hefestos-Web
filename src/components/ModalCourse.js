import Modal from "../styles/modais";

import { useForm } from "react-hook-form";

import { Input, Row, Select, LongButton } from "../styles/forms";

export default (props) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { tipo: "" },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Modal {...props}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <Input>
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
            <label htmlFor="Descricao">Inscrição</label>
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
};
