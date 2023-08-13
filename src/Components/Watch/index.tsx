import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

interface Props {
    recSeconds: number;
}

const Watch = ({ recSeconds }: Props) => {
    const [seconds, setSeconds] = useState(recSeconds);
    const convertToClock = (sec: number): string => {
        const hour = Math.trunc(sec/3600).toString().length > 1 ? Math.trunc(sec/3600).toFixed() : `0${Math.trunc(sec/3600).toFixed()}`;
        const minutes = Math.trunc(sec/60).toString().length > 1 ? Math.trunc(sec/60).toFixed() : `0${Math.trunc(sec/60).toFixed()}`;;
        const seconds = Math.trunc(((sec/60)-Math.trunc(sec/60))*60).toString().length > 1 ? ((sec/60)-Math.trunc(sec/60))*60 : `0${((sec/60)-Math.trunc(sec/60))*60}`;
        if(sec === 0){
            return "Fim da Tarefa"
        }
        else return `Tarefa ${hour}:${minutes}:${seconds}`;
    }
    const decrescente = () => {
        setTimeout(() => setSeconds(a => a-1), 1000);
    }

   
    useEffect(()=>{
        if(seconds >= 1) decrescente();
    },[seconds])

    return(
        <Container>
            <CircularProgressbar
            value={100-((seconds/recSeconds)*100)}
            text={convertToClock(seconds)}
            styles={buildStyles({
            
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0,
          
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'round',
          
              // Text size
              textSize: '8px',
          
              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,
          
              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',
          
              // Colors
              pathColor: `rgba(62, 152, 199, 1)`,
              textColor: '#f88',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
            />;
        </Container>
    )
};

export default Watch;