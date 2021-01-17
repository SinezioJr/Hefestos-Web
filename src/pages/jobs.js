import { useState } from "react";
import Frame from "../components/Frame";

import { Container, FloatButton } from "../styles/forms";
import { CardJobs } from "../components/cards";

import Add from "../assets/icons/sum";
import AddCourseModal from "../components/ModalCourse";

function App() {
  //Modais:
  const [addCourse, setAddCourse] = useState(false);

  const showManualCourse = () => setAddCourse(true);
  const closeManualCourse = () => setAddCourse(false);

  return (
    <>
      <Frame barTitle="Vagas">
        <Container>
          <CardJobs />
          <CardJobs />
          <CardJobs />
          <CardJobs />
        </Container>
        <FloatButton onClick={showManualCourse}>
          <Add />
        </FloatButton>
      </Frame>
      <AddCourseModal show={addCourse} handleClose={closeManualCourse} />
    </>
  );
}

export default App;
