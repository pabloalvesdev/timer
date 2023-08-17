import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import ITask from "../../../Interfaces/ITask";
import { Body, Header, Input, InputLabel, InvalidText, Title } from "./styles";
import { Button } from "../../Button";
import { useAppContext } from "../../../Context";

interface Props {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    item?: ITask;
}

const AddEditModal = ({ visible, setVisible, item }:Props) => {
    const { tasks, setTasks } = useAppContext();
    const [task, setTask] = useState<ITask>({} as ITask);
    const [invalid, setInvalid] = useState<boolean>(false);
    const handleClose = () => {
        setVisible(false);
        setTask({} as ITask);
    }
    const handleSave = () => {
        setTasks(prev => ([...prev, task]));
        handleClose();
    }
    const valid = (e: React.ChangeEvent<HTMLInputElement>) => {  
        if(tasks.map(a => a.title).includes(e.target.value)) setInvalid(true)
        else setInvalid(false)
        setTask(prev => ({...prev, title: e.target.value}))
    };
    return(
        <Modal size="sm" show={visible} onHide={handleClose}>
            <Header>
                <Title>{item ? 'Editar' : 'Nova'}</Title>
            </Header>
            <Body>
                <Row>
                    <Col>
                        <InputLabel>Título</InputLabel>
                        <Input value={task.title} onChange={valid} type="text" />
                        <InvalidText id="text-invalid" className={invalid ? "" : "hide"}>Esta tarefa já existe</InvalidText>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputLabel>Duração</InputLabel>
                        <Input value={task.duration} onChange={(a: any) => setTask(prev => ({...prev, duration: a.target.value}))} type="text" />
                    </Col>
                </Row>
                <br /><br />
                <Button onClick={handleSave}>Salvar</Button>
            </Body>
        </Modal>
    )
}

export default AddEditModal;