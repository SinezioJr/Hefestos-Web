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
            <label htmlFor="titulodaVaga">Título da Vaga</label>
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

            <Select>
              <label htmlFor="Tipo">Tipo</label>

              <select value={""} name="Tipo" ref={register({ required: true })}>
                <option value="" style={{ display: "none" }}>
                  Selecione
                </option>
                <option value="Emprego">Emprego</option>
                <option value="Estagio">Estágio</option>
                <option value="Estagio">Temporario</option>
                <option value="Estagio">Bico</option>
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
              <label htmlFor="Horario">Horário</label>
              <input
                type="time"
                name="titulodaVaga"
                ref={register({ required: true })}
              />
            </Input>
          </Row>
          <Input>
            <label htmlFor="Descricao">Descrição</label>
            <textarea
              rows={5}
              name="Descricao"
              ref={register({ required: true })}
            />
          </Input>
          <LongButton>CADASTRAR VAGA</LongButton>
        </form>
      </Modal>
    </>
  );
};
