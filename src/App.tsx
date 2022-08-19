import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100wh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #009432;
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(186, 220, 88, 1);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child {
    transform-origin: right bottom;
  }
  &:last-child {
    transform-origin: left top;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 500px;
    height: 200px;
  }
`;

const Switch = styled(motion.button)`
  border: none;
  margin-top: 20px;
  padding: 8px;
  border-radius: 3px;
  background-color: white;
`;

const BoxVariants = {
  start: { scale: 1 },
  hover: { scale: 1.1, transition: { type: "tween", delay: 0.2 } },
};

const Circle = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
`;

function App() {
  const [boxId, setBoxId] = useState<string | null>(null);
  const [move, setMove] = useState<boolean>(false);
  const onClick = () => setMove((prev) => !prev);
  return (
    <Wrapper>
      <Grid>
        <Box
          layoutId={"1"}
          onClick={() => setBoxId("1")}
          variants={BoxVariants}
          initial="start"
          whileHover={"hover"}
        />
        <Box>{!move ? <Circle layoutId="circle" /> : null}</Box>
        <Box>{move ? <Circle layoutId="circle" /> : null}</Box>
        <Box
          layoutId={"4"}
          onClick={() => setBoxId("4")}
          variants={BoxVariants}
          initial="start"
          whileHover={"hover"}
        />
      </Grid>
      <Switch whileTap={{ scale: 1.1, color: "red" }} onClick={onClick}>
        Switch
      </Switch>
      <AnimatePresence>
        {boxId ? (
          <Overlay
            onClick={() => setBoxId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box layoutId={boxId} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
