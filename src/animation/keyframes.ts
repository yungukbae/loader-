import { keyframes } from "@mui/material";

export const MoveToBottom = (top: number, left: number) => keyframes`
0%{ 
    top:${top}px;
    left:${left}px;
 }
100%{
    top:${top + 55}px;
    left:${left}px;
}`;

export const MoveToTop = (top: number, left: number) => keyframes`
0%{ 
    top:${top}px;
    left:${left}px;
 }
100%{
    top:${top - 55}px;
    left:${left}px;
}`;

export const MoveToRight = (top: number, left: number) => keyframes`
0%{ 
    top:${top}px;
    left:${left}px;
 }
100%{
    top:${top}px;
    left:${left + 55}px;
}`;

export const MoveToLeft = (top: number, left: number) => keyframes`
0%{ 
    top:${top}px;
    left:${left}px;
 }
100%{
    top:${top}px;
    left:${left - 55}px;
}`;
