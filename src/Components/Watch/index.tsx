import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "./styles";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import ITask from "../../Interfaces/ITask";
import { useAppContext } from "../../Context";
import Themes from "../../Themes";
import Text from "../Text";


const Watch = () => {
    const { theme, tasks, setTasks, currentTask, setCurrentTask } = useAppContext();
    const currentTheme = Themes["dark"];
  
    const [transition, setTransition] = useState(5);
    const [leftSeconds, setLeftSeconds] = useState(tasks[currentTask].duration || 0);
    const [allFinished, setAllFinished] = useState<boolean>(false);
    
    //functions
    const hexToRGBA = (hex: string, alpha: number = 1): string => {
        hex = hex.replace('#', '');
        if (hex.length === 3) {
            hex = hex
            .split('')
            .map(char => char + char)
            .join('');
        }
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    const formatTime = (time: number) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
      
        const formattedTime = {
          hour: hours < 10 ? `0${hours}` : `${hours}`,
          minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
          seconds: seconds < 10 ? `0${seconds}` : `${seconds}`
        };
      
        return formattedTime;
    }
    const countDown = () => {
        setTimeout(() => setLeftSeconds(a => a-1), 1000);
    }
    const countDownTransition = () => {
        setTimeout(() => setTransition(a => a-1), 1000);
    }

    const startTask = () => {
        atualizarEstadoTask(currentTask, 'execute')
    }
    const loadNextTask = () => {
        const newTask = currentTask + 1;
        if(tasks[newTask] !== undefined){
            console.log(`Carregando próxima task: ${tasks[newTask]}`);
            setCurrentTask(newTask);
            setLeftSeconds(tasks[newTask].duration);
            setTransition(5);
        } else {
            setAllFinished(true)
        }
    }
    
    const atualizarEstadoTask = (indice: number, action: "waiting" | "execute" | "finished" | "transition") => {
        const novasTasks = [...tasks]; // Criando uma cópia do array de tasks
        novasTasks[indice] = {
            duration: tasks[indice].duration,
            position: tasks[indice].position,
            state: action,
            title: tasks[indice].title
        }; // Atualizando o task específico
        setTasks(novasTasks); // Atualizando o estado com o novo array de alunos
      };
    useEffect(()=>{
        if(tasks[currentTask].state === 'execute' && leftSeconds >= 1) countDown();
        if(leftSeconds === 0 && tasks[currentTask].state === "finished" && !allFinished) countDownTransition()
        if(tasks[currentTask].state === 'execute' && leftSeconds === 0) {
            atualizarEstadoTask(currentTask, 'finished')
            if(tasks[currentTask+1] === undefined) setAllFinished(true)
            else setTimeout(()=>loadNextTask(), 5000)
        }
        console.log(`Task atual é: ${tasks[currentTask].title} e está ${tasks[currentTask].state}`);
    },[tasks, leftSeconds, transition])

    return(
        <Container>
            <CircularProgressbarWithChildren
            value={100-((leftSeconds/tasks[currentTask].duration)*100)}
            styles={{
                path: {
                  stroke: currentTheme.primary,
                  strokeLinecap: 'round',
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                  transform: 'rotate(1turn)',
                  transformOrigin: 'center center',
                },
                trail: {
                  stroke: hexToRGBA(currentTheme.primary, 0.3),
                  strokeLinecap: 'butt',
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                background: {
                  fill: '#3e98c7',
                },
              }}
            >
                {tasks[currentTask].state !== 'finished' && (
                    <>
                        {/* <Text className="clock bold">{convertToClock(leftSeconds)}</Text> */}
                        <div style={{display: 'flex', alignItems: 'baseline'}}>
                            <Text className="clock bold">{formatTime(leftSeconds).hour}:{formatTime(leftSeconds).minutes}</Text>
                            <Text className="bold">{formatTime(leftSeconds).seconds} s</Text>
                        </div>
                        <Text className="bold">{tasks[currentTask].title}</Text>
                    </>
                )}
                {(leftSeconds === 0 && tasks[currentTask].state === "finished" && !allFinished) && (
                    <>
                        <Text><b>{tasks[currentTask].title}</b> finalizada</Text>
                        {/* <Text>Preparando para {tasks[currentTask+1]?.title}</Text> */}
                        <Text><b>{tasks[currentTask+1]?.title}</b> estará pronta em <b>{transition}</b></Text>
                    </>
                )}
                <Button className={tasks[currentTask].state === 'waiting' ? '':'hide'} onClick={startTask}>Iniciar</Button>
                {allFinished && <Text>Parabéns!!! Você finalizou tudo. Insira novas tasks</Text>}
            </CircularProgressbarWithChildren>
        </Container>
    )
};

export default Watch;