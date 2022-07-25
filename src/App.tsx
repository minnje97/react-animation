import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-500, 500], [-360, 360]);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const bgGradient = useTransform(
    x,
    [-500, 500],
    [
      "linear-gradient(135deg, rgb(155, 89, 182), rgb(142, 68, 173))",
      "linear-gradient(135deg, rgb(230, 126, 34), rgb(241, 196, 15))",
    ]
  );
  return (
    <Wrapper style={{ background: bgGradient }}>
      <Box style={{ x, rotateZ: rotate, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
