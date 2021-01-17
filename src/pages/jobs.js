import Frame from "../components/Frame";

import { Container, FloatButton } from "../styles/forms";
import { CardCourse } from "../components/cards";

function App() {
  return (
    <>
      <Frame>
        <Container>
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
        </Container>
        <FloatButton />
      </Frame>
    </>
  );
}

export default App;
