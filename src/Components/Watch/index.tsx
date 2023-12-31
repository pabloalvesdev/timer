import React, { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import ITask from "../../Interfaces/ITask";
import { useAppContext } from "../../Context";
import Text from "../Text";
import { Button } from "../Button";
import { formatTime, hexToRGBA } from "../../Utils/utils";
import { Icon } from "../Icon";
import CustomSwitch from "../Switch";
import SelectTheme from "../SelectTheme";
import { useTheme } from "styled-components";
import InputFile from "../InputFIle";
import AllFinishedModal from "../AllFinishedModal";


const Watch = () => {
    const { tasks, setTasks, currentTask, setCurrentTask } = useAppContext();
    const currentTheme = useTheme();
    const [transition, setTransition] = useState(5);
    const [pomodoro, setPomodoro] = useState(0);
    const [leftSeconds, setLeftSeconds] = useState(tasks[currentTask]?.duration || 0);
    const [allFinished, setAllFinished] = useState<boolean>(false);
    
    //functions
    const countDown = () => {
        setTimeout(() => setLeftSeconds(a => a-1), 1000);
    }
    const countDownTransition = () => {
        setTimeout(() => setTransition(a => a-1), 1000);
    }
    const countDownPomodoro = () => {
        setTimeout(() => setPomodoro(a => a-1), 1000);
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
            state: action,
            title: tasks[indice].title,
            pomodoro: tasks[indice].pomodoro
        }; // Atualizando o task específico
        setTasks(novasTasks); // Atualizando o estado com o novo array de alunos
    };

    const availableToPomodoro = (secs: number): boolean => {
        const task = tasks[currentTask];
        if(task.pomodoro) {
            const pomodoroValues = [1,2,3,4,5,6,7,8,9].map(a => task.duration-a*1500).filter(a => a > 0);
            return pomodoroValues.includes(secs);
        } else return false;
    }
    
    useEffect(()=>{
        if(tasks.length !== 0){
            if(leftSeconds === 0 && currentTask === 0 && tasks[currentTask].state === "waiting") setLeftSeconds(tasks[currentTask].duration);
            if(tasks[currentTask].state === 'execute' && leftSeconds >= 1 && pomodoro === 0) countDown();
            if(tasks[currentTask].state === 'execute' && leftSeconds >= 1 && pomodoro > 0) countDownPomodoro();
            if(leftSeconds === 0 && tasks[currentTask].state === "finished" && !allFinished) countDownTransition();
            if(leftSeconds !== tasks[currentTask].duration && availableToPomodoro(leftSeconds) && tasks[currentTask].state === 'execute' && pomodoro === 0 && leftSeconds !== 0) setPomodoro(300);
            if(tasks[currentTask].state === 'execute' && leftSeconds === 0) {
                atualizarEstadoTask(currentTask, 'finished')
                if(tasks[currentTask+1] === undefined) setAllFinished(true)
                else setTimeout(()=>loadNextTask(), 5000)
            }
        }
    },[tasks, leftSeconds, transition, pomodoro])
    
    return(
        <Container>
            {/* <CustomSwitch onChange={() => console.log("change")} /> */}
            <SelectTheme />
            <CircularProgressbarWithChildren
            value={tasks.length === 0 ? 0 : pomodoro > 0 ? 100-((pomodoro/300)*100) : 100-((leftSeconds/tasks[currentTask].duration)*100)}
            styles={{
                path: {
                  stroke: pomodoro > 0 ? currentTheme.cancel : currentTheme.primary,
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
                {(tasks.length !== 0 && tasks[currentTask].state !== 'finished' && pomodoro === 0)&& (
                    <>
                        {/* <Text className="clock bold">{convertToClock(leftSeconds)}</Text> */}
                        <Icon title="Pomodoro Habilitado" className={`fa fa-coffee ${!tasks[currentTask]?.pomodoro ? 'hidden':''}`} />
                        <div style={{display: 'flex', alignItems: 'baseline'}}>
                            <Text className="clock bold">{formatTime(leftSeconds).hour}:{formatTime(leftSeconds).minutes}</Text>
                            <Text className="bold">{formatTime(leftSeconds).seconds} s</Text>
                        </div>
                        <Text className="bold">{tasks[currentTask]?.title}</Text>
                    </>
                )}
                {pomodoro > 0 && (
                    <>
                        <Icon className="fa fa-coffee" />
                        <div style={{display: 'flex', alignItems: 'baseline'}}>
                            <Text className="clock bold">{formatTime(pomodoro).minutes}:{formatTime(pomodoro).seconds}</Text>
                        </div>
                        <Text className="bold">Pomodoro</Text>
                        <Text>Pausa de 5 min, vai tomar um cafe</Text>
                    </>
                )}
                {(leftSeconds === 0 && tasks[currentTask]?.state === "finished" && !allFinished) && (
                    <>
                        <Text><b>{tasks[currentTask].title}</b> finalizada</Text>
                        {/* <Text>Preparando para {tasks[currentTask+1]?.title}</Text> */}
                        <Text><b>{tasks[currentTask+1]?.title}</b> estará pronta em <b>{transition}</b></Text>
                    </>
                )}
                {(leftSeconds === 0 && tasks.length === 0 && (
                    <>
                        <h2 className="title">Sem Tarefas</h2>
                        <Text className="bold">Pra começar adicione novas tarefas</Text>
                        <InputFile />
                        {/* PAREI AQUI: terminar de estilizar isto mais tarde
                        colocando o nome do arquivo quando for selecionado
                        e botoes de limpar e enviar. */}
                    </>
                ))}
                <Button className={tasks[currentTask]?.state === 'waiting' ? '':'hide'} onClick={startTask}>Iniciar</Button>
                <AllFinishedModal visible={allFinished} setVisible={setAllFinished} />
            </CircularProgressbarWithChildren>
        </Container>
    )
};

export default Watch;