import React from "react";
import ITask from "../../Interfaces/ITask";
import { Container } from "./styles";
import Text from "../Text";
import { friendlyHour } from "../../Utils/utils";
import { Icon } from "../Icon";
import { Col, Row } from "react-bootstrap";
import { useAppContext } from "../../Context";

interface Props {
    item: ITask;
}

const ListItem = ({ item }:Props) => {
    const { tasks, setTasks, setDialog } = useAppContext();
    const deleteTask = () => {
        const newTasks = tasks.filter(a => !(a.title === item.title));
        setTasks(newTasks);
    }
    const confirmDelete = () => {
        setDialog({ visible: true, callbackConfirm: deleteTask })
    }
    return(
        <Container>
            <Row>
                <Col xs={11}>
                    <Text><b>{item.title}</b> {friendlyHour(item.duration)}</Text>
                </Col>
                <Col xs={1}>
                    <Icon onClick={confirmDelete} className="fa fa-close red" />
                </Col>
            </Row>
        </Container>
    )
};

export default ListItem;