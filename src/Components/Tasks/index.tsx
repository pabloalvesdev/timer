import { Col, Row } from "react-bootstrap";
import Text from "../Text";
import { Card, Container, List } from "./styles";
import { useAppContext } from "../../Context";
import { useEffect, useMemo, useState } from "react";
import ITask from "../../Interfaces/ITask";
import ListItem from "../../Components/ListItem";
import { friendlyHour } from "../../Utils/utils";
import AddEditModal from "../AddEditModal";
import { Icon } from "../Icon";
import { Title } from "../AddEditModal/styles";

const Tasks = () => {
    const { tasks, currentTask } = useAppContext();
    const [nextTask, setNextTask] = useState<ITask>(tasks[currentTask+1]);
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const callModal = () => setVisibleModal(true)
    useEffect(()=>{
        setNextTask(tasks[currentTask+1])
    }, [currentTask])
    return(
        <Row>
            <AddEditModal visible={visibleModal} setVisible={setVisibleModal} />
            <Col>
                <Card>
                    <Title><b>Próxima</b></Title>
                    <ListItem item={nextTask} />
                    {/* <Text className="bold">{`${nextTask.title} - ${friendlyHour(nextTask.duration)}`|| 'Nada'}</Text> */}
                </Card>
                <br />
                <Card className="more-pg">
                    <Row>
                        <Col xs={11}>
                            <Title className="bold"><b>Fila</b></Title>
                        </Col>
                        <Col xs={1}>
                            <Row>
                                <i onClick={callModal} className="fa fa-plus" aria-hidden="true" />
                            </Row>
                        </Col>
                    </Row>
                    <List>
                    {tasks.filter((x, i) => i !== currentTask && i !== (currentTask + 1) && x.state !== "finished").map(a => <ListItem item={a} />)}
                    </List>
                </Card>
            </Col>
        </Row>
    ) 
}

export default Tasks;