import { CourseCard } from "../styles/card";
import { ButtonCard } from "../styles/forms";

export const CardCourse = () => (
  <CourseCard>
    <div className="timetable">
      <div className="date">
        1 - 3 <br /> Out
      </div>
      <div className="time">06:30 à 10:30</div>
    </div>

    <div className="informations">
      <div className="title">Curso de operador de caixa</div>
      <div className="local">
        Rua Landoufo Alves, 26, Santo Antonio de Jesus - BA
      </div>
      <div className="value">Gratuito</div>
      <div className="buttons">
        <ButtonCard>EDITAR CURSO</ButtonCard>
        <ButtonCard color="#0086C3">VER CURSO</ButtonCard>
      </div>
    </div>
  </CourseCard>
);
