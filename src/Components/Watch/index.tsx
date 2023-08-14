import React, { useEffect, useState } from "react";
import { Container, Text } from "./styles";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import ITask from "../../Interfaces/ITask";

interface Props {
    t: ITask[];
}

const Watch = ({ t }: Props) => {
    const [tasks, setTasks] = useState<ITask[]>(t);
    const [actualTask, setActualTask] = useState(0);
    const [leftSeconds, setLeftSeconds] = useState(tasks[actualTask].duration);
    const [taskTransition, setTaskTransition] = useState(5);
    const convertToClock = (sec: number): string => {
        const hour = Math.trunc(sec/3600).toString().length > 1 ? Math.trunc(sec/3600).toFixed() : `0${Math.trunc(sec/3600).toFixed()}`;
        const minutes = Math.trunc(sec/60).toString().length > 1 ? Math.trunc(sec/60).toFixed() : `0${Math.trunc(sec/60).toFixed()}`;;
        const leftSeconds = Math.trunc(((sec/60)-Math.trunc(sec/60))*60).toString().length > 1 ? (((sec/60)-Math.trunc(sec/60))*60).toFixed() : `0${(((sec/60)-Math.trunc(sec/60))*60).toFixed()}`;
        return `${hour}:${minutes}:${leftSeconds}`;
    }
    const countDown = () => {
        setTimeout(() => setLeftSeconds(a => a-1), 1000);
    }

    const startTask = () => {
        atualizarEstadoTask(actualTask, tasks[actualTask], 'execute')
    }
    const loadNextTask = () => {
        const newTask = actualTask + 1;
        console.log(`Carregando próxima task: ${tasks[newTask]}`);
        setActualTask(newTask);
        setLeftSeconds(tasks[newTask].duration);
    }

    // const verifyMode = () => {
    //     let result;
    //     if(actualTask.started) result = 'executando';
    //     //leftSeconds zerado, transicao maior que 0
    //     if(taskTransition > 0 && leftSeconds === 0) result = 'em transicao';
    //     //transicao zerada, leftSeconds igual duration, nao pode ter sido iniciado, nao pode ter sido terminado
    //     if(leftSeconds === actualTask.duration && !actualTask.started && taskTransition === 0 && !actualTask.finished) result = 'aguardando'; 
    //     console.log(result);
    //     return result
    // }
    const atualizarEstadoTask = (indice: number, novaTask: ITask, action: "waiting" | "execute" | "finished" | "transition") => {
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
        if(tasks[actualTask].state === 'execute' && leftSeconds >= 1) countDown();
        if(tasks[actualTask].state === 'execute' && leftSeconds === 0) {
            atualizarEstadoTask(actualTask, tasks[actualTask], 'finished')
            setActualTask(a => a+1);
            loadNextTask();
        }
        // if(tasks[actualTask].state === 'finished'){
        //     loadNextTask();
        // }
        console.log(`Task atual é: ${tasks[actualTask].title} e está ${tasks[actualTask].state}`);
    },[tasks, leftSeconds])

    return(
        <Container>
            <CircularProgressbarWithChildren
            value={100-((leftSeconds/tasks[actualTask].duration)*100)}
            styles={{
                path: {
                  stroke: `rgba(62, 152, 199, 1)`,
                  strokeLinecap: 'round',
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                  transform: 'rotate(1turn)',
                  transformOrigin: 'center center',
                },
                trail: {
                  stroke: '#d6d6d6',
                  strokeLinecap: 'butt',
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                background: {
                  fill: '#3e98c7',
                },
              }}
            >
                {tasks[actualTask].state === 'waiting' && <button onClick={startTask}>Iniciar</button>}
                {tasks[actualTask].state !== 'finished' && (
                    <>
                        <Text>{convertToClock(leftSeconds)}</Text>
                        <Text>{tasks[actualTask].title}</Text>
                    </>
                )}
                {tasks[actualTask].state === 'finished' && (
                    <>
                        <Text>{convertToClock(taskTransition)}</Text>
                        <Text>Preparando para a prox TASK</Text>
                    </>
                )}
                {/* {(leftSeconds === 0 && taskTransition === 0) && (
                    <>
                        <Text>Fim da Tarefa</Text>
                    </>
                )} */}
            </CircularProgressbarWithChildren>;
        </Container>
    )
};

export default Watch;