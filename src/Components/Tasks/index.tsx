import { Col, Row } from "react-bootstrap";
import Text from "../Text";
import { Card, Container } from "./styles";
import { useAppContext } from "../../Context";
import { useEffect, useMemo, useState } from "react";
import ITask from "../../Interfaces/ITask";
import ListItem from "./Components/ListItem";
import { friendlyHour } from "../../Utils/Time";

const Tasks = () => {
    const { tasks, currentTask } = useAppContext();
    const [nextTask, setNextTask] = useState<ITask>(tasks[currentTask+1]);
    const getNewTask = () => console.log(tasks)
    useEffect(()=>{
        setNextTask(tasks[currentTask+1])
    }, [currentTask])
    return(
        <Row>
            <Col>
                <Text className="bold" onClick={()=>getNewTask()}>Proxima Tarefa</Text>
                <Card className="more-pg">
                    <Text className="bold">{`${nextTask.title} - ${friendlyHour(nextTask.duration)}`|| 'Nada'}</Text>
                </Card>
                <br />
                <Text className="bold">Fila de Tarefas</Text>
                <Card>
                    {tasks.filter((x, i) => i !== currentTask && i !== (currentTask + 1) && x.state !== "finished").map(a => <ListItem item={a} />)}
                </Card>
            </Col>
        </Row>
    ) 
}

export default Tasks;