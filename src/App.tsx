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
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(186, 220, 88, 1);
  border-radius: 30px;
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

const Switch = styled(motion.button)``;

const BoxVariants = {
  start: { scale: 1 },
  hover: { scale: 1.2 },
};

const Circle = styled(motion.div)`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-self: center;
`;

function App() {
  const [boxId, setBoxId] = useState<string | null>(null);
  /*  const [switch, setSwitch]=useState<boolean>(false);
  const onClick = () => setSwitch((prev) => !prev); */
  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box
            key={n}
            layoutId={n}
            onClick={() => setBoxId(n)}
            variants={BoxVariants}
            initial="start"
            whileHover="hover"
          >
            <Circle layoutId="circle"></Circle>
          </Box>
        ))}
      </Grid>
      {/* <Switch onClick={onClick}>Switch</Switch> */}
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
