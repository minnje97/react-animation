import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 10px;
  background-color: pink;
`;

const boxVariants = {
  start: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, y: -20 },
  exit: { opacity: 0, scale: 0, y: 20 },
};

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <Wrapper>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="start"
            animate="visible"
            exit="exit"
          />
        ) : null}
      </AnimatePresence>
      <button onClick={onClick}>button</button>
    </Wrapper>
  );
}

export default App;
