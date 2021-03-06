import { useState } from "react";
import Frame from "../components/Frame";

import { Container, FloatButton } from "../styles/forms";
import { CardCourse, Tooltip } from "../components/cards";

import Add from "../assets/icons/sum";
import AddCourseModal from "../components/ModalCourse";

function App() {
  //Modais:
  const [addCourse, setAddCourse] = useState(false);

  const showManualCourse = () => setAddCourse(true);
  const closeManualCourse = () => setAddCourse(false);

  return (
    <>
      <Frame barTitle="Cursos">
        <Container>
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
        </Container>
        <FloatButton onClick={showManualCourse}>
          <Tooltip msg="Adicionar Curso">
            <Add />
          </Tooltip>
        </FloatButton>
      </Frame>
      <AddCourseModal show={addCourse} handleClose={closeManualCourse} />
    </>
  );
}

export default App;
