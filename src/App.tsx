import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  MoveToBottom,
  MoveToLeft,
  MoveToRight,
  MoveToTop,
} from "./animation/keyframes";

const BasicStyle = {
  position: "absolute",
  width: "50px",
  height: "50px",
  backgroundColor: "#000",
  borderRadius: "12px",
};

function App() {
  const [turn, setTurn] = useState(0);
  const [block, setBlock] = useState({
    block0: [225, 140],
    block1: [280, 140],
    block2: [225, 195],
    block3: [225, 250],
    block4: [225, 305],
  });

  useEffect(() => {
    const counter = setInterval(() => {
      switch (turn) {
        case 0:
          if (block.block1[0] !== 280) {
            setBlock({ ...block, block0: MoveToRight(block.block0) });
          } else {
            setBlock({ ...block, block1: MoveToRight(block.block1) });
          }
          break;
        case 1:
          if (block.block1[0] !== 280) {
            setBlock({
              ...block,
              block0: MoveToTop(block.block0),
              block2: MoveToTop(block.block2),
            });
          } else {
            setBlock({
              ...block,
              block1: MoveToTop(block.block1),
              block2: MoveToTop(block.block2),
            });
          }
          break;
        case 2:
          setBlock({ ...block, block2: MoveToRight(block.block2) });
          break;
        case 3:
          if (block.block3[1] !== 250) {
            setBlock({
              ...block,
              block2: MoveToBottom(block.block2),
              block4: MoveToBottom(block.block4),
            });
          } else {
            setBlock({
              ...block,
              block2: MoveToBottom(block.block2),
              block3: MoveToBottom(block.block3),
            });
          }

          break;
        case 4:
          if (block.block3[1] !== 250) {
            setBlock({ ...block, block4: MoveToRight(block.block4) });
          } else {
            setBlock({ ...block, block3: MoveToRight(block.block3) });
          }
          break;
        case 5:
          setBlock({
            ...block,
            block3: MoveToTop(block.block3),
            block4: MoveToTop(block.block4),
          });
          break;
        case 6:
          if (block.block3[0] !== 225) {
            setBlock({ ...block, block3: MoveToLeft(block.block3) });
          } else {
            setBlock({ ...block, block4: MoveToLeft(block.block4) });
          }
          break;
        case 7:
          if (block.block3[0] !== 225) {
            setBlock({
              ...block,
              block3: MoveToBottom(block.block3),
              block2: MoveToBottom(block.block2),
            });
          } else {
            setBlock({
              ...block,
              block4: MoveToBottom(block.block4),
              block2: MoveToBottom(block.block2),
            });
          }
          break;
        case 8:
          setBlock({ ...block, block2: MoveToLeft(block.block2) });
          break;
        case 9:
          if (block.block1[1] !== 195) {
            setBlock({
              ...block,
              block2: MoveToTop(block.block2),
              block0: MoveToTop(block.block0),
            });
          } else {
            setBlock({
              ...block,
              block2: MoveToTop(block.block2),
              block1: MoveToTop(block.block1),
            });
          }

          break;
        case 10:
          if (block.block1[1] !== 195) {
            setBlock({ ...block, block0: MoveToLeft(block.block0) });
          } else {
            setBlock({ ...block, block1: MoveToLeft(block.block1) });
          }
          break;
        case 11:
          setBlock({
            ...block,
            block1: MoveToBottom(block.block1),
            block0: MoveToBottom(block.block0),
          });
          break;
        default:
          return null;
      }
      setTurn((turn + 1) % 12);
    }, 200);
    return () => clearInterval(counter);
  }, [block, turn]);

  return (
    <div className="App">
      <Typography variant="h5">{turn}</Typography>
      <Box
        sx={{
          position: "relative",
          width: "500px",
          height: "500px",
          // background:
          //   "linear-gradient(to right,rgba(245,134,45),rgba(255,23,99))",
          border: "1px solid #000",
        }}
      >
        <Box
          sx={{
            ...BasicStyle,
            top: block.block0[0],
            left: block.block0[1],
            transition: "0.2s all ease-in-out",
          }}
        >
          <Typography variant="h5" color={"primary"}>
            0
          </Typography>
        </Box>
        <Box
          sx={{
            ...BasicStyle,
            top: block.block1[0],
            left: block.block1[1],
            transition: "0.2s all ease-in-out",
          }}
        >
          <Typography variant="h5" color={"#fff"}>
            1
          </Typography>
        </Box>
        <Box
          sx={{
            ...BasicStyle,
            top: block.block2[0],
            left: block.block2[1],
            transition: "0.2s all ease-in-out",
          }}
        >
          <Typography variant="h5" color={"#fff"}>
            2
          </Typography>
        </Box>
        <Box
          sx={{
            ...BasicStyle,
            top: block.block3[0],
            left: block.block3[1],
            transition: "0.2s all ease-in-out",
          }}
        >
          <Typography variant="h5" color={"#fff"}>
            3
          </Typography>
        </Box>
        <Box
          sx={{
            ...BasicStyle,
            top: block.block4[0],
            left: block.block4[1],
            transition: "0.2s all ease-in-out",
          }}
        >
          <Typography variant="h5" color={"#fff"}>
            4
          </Typography>
        </Box>

        {position.map((v, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                position: "absolute",
                width: "48px",
                height: "48px",
                border: "1px solid #b6b6b6",
                borderRadius: "12px",
                top: v[0],
                left: v[1],
              }}
            >
              <Typography variant="caption">
                x:{v[1]}, y:{v[0]}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </div>
  );
}

export default App;

const position = [
  [225, 140], //pos1
  [280, 140], //pos1b
  [280, 195], //pos2b
  [225, 195], //pos2
  [170, 195], //pos2t
  [170, 250], //pos3t
  [225, 250], //pos3
  [280, 250], //pos3b
  [280, 305], //pos4b
  [225, 305], //pos4
  [170, 305], //pos4t
  [170, 140], //pos1t
];
