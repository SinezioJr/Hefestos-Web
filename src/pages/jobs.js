import { useState } from "react";
import Frame from "../components/Frame";

import { Container, FloatButton } from "../styles/forms";
import { CardJobs, Tooltip } from "../components/cards";

import Add from "../assets/icons/sum";
import AddJobsModal from "../components/ModalJobs";

function App() {
  //Modais:
  const [addJobs, setAddJobs] = useState(false);
  const showManualJobs = () => setAddJobs(true);
  const closeManualJobs = () => setAddJobs(false);

  return (
    <>
      <Frame barTitle="Vagas">
        <Container>
          <CardJobs />
          <CardJobs />
          <CardJobs />
          <CardJobs />
        </Container>
        <FloatButton onClick={showManualJobs}>
          <Tooltip msg="Adicionar Vaga">
            <Add />
          </Tooltip>
        </FloatButton>
      </Frame>
      <AddJobsModal show={addJobs} handleClose={closeManualJobs} />
    </>
  );
}

export default App;
