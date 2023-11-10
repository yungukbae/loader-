import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const BasicStyle = {
  position: "absolute",
  width: "50px",
  height: "50px",
  backgroundColor: "#000",
  borderRadius: "12px",
  opacity: 0.4,
};

function App() {
  const [turn, setTurn] = useState<{ count: number; direction: boolean }>({
    count: 0,
    direction: true,
  });

  useEffect(() => {
    const counter = setInterval(() => {
      if (turn.direction) {
        setTurn({
          count: turn.count + 1,
          direction: turn.count + 1 >= 11 ? false : true,
        });
      } else {
        setTurn({
          count: turn.count - 1,
          direction: turn.count - 1 <= 0 ? true : false,
        });
      }
    }, 1000);

    return () => clearInterval(counter);
  }, [turn]);

  return (
    <div className="App">
      <Typography variant="h5">{turn.count}</Typography>
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
        {[0, 1, 3, 6, 9].map((v) => (
          <Box
            sx={{
              ...BasicStyle,
              top: position[v][0],
              left: position[v][1],
              // animation: turn.count == 0 && `${Animation(turn)} 2s ease-in-out`,
              // animationDelay: "1s",
            }}
          ></Box>
        ))}
        {position.map((v) => {
          return (
            <Box
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
