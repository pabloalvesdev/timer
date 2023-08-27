import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import ITask from "../../Interfaces/ITask";
import { Body, ContainerInputs, Header, Input, InputLabel, InvalidText, TimeInput, Title } from "./styles";
import { Button } from "../Button";
import { useAppContext } from "../../Context";

interface Props {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    item?: ITask;
}

interface ITime {
    hour: number;
    minute: number;
    second: number;
}

const AddEditModal = ({ visible, setVisible, item }:Props) => {
    const { tasks, setTasks } = useAppContext();
    const [task, setTask] = useState<ITask>({} as ITask);
    const [time, setTime] = useState<ITime>({
        hour: 0,
        minute: 0,
        second: 0
    });
    const [invalid, setInvalid] = useState<boolean>(false);
    const handleClose = () => {
        setVisible(false);
        setTask({} as ITask);
    }
    const availableToPomodoro = (n: number) => (n % 2 === 0 && n % 3 === 0 && n % 5 === 0 && n % 1800 === 0);
    const handleSave = () => {
        const totalTime = (time.hour*3600)+(time.minute*60)+Number(time.second);
        debugger;
        setTask(prev => ({...prev, duration: totalTime}))
        availableToPomodoro(totalTime) ? alert("Serve pra fazer pomodoro") : alert("Não serve pra fazer pomodoro");
        alert(JSON.stringify(task));
        // setTasks(prev => ([...prev, task]));
        // handleClose();
    }
    const valid = (e: React.ChangeEvent<HTMLInputElement>) => {  
        if(tasks.map(a => a.title).includes(e.target.value)) setInvalid(true)
        else setInvalid(false)
        setTask(prev => ({...prev, title: e.target.value}))
    };
    const friendlyTime = (e: number) => {
        return e.toString().length > 1 ? e : `0${e}`;
    }
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
                        <InputLabel>Tempo</InputLabel>
                        <br />
                        <ContainerInputs>
                            <TimeInput min={0} maxLength={2} value={friendlyTime(time.hour)} onChange={(a: any) => setTime(prev => ({...prev, hour: a.target.value}))} type="number" />
                            <InputLabel>:</InputLabel>
                            <TimeInput min={0} maxLength={2} max={59} value={friendlyTime(time.minute)} onChange={(a: any) => setTime(prev => ({...prev, minute: a.target.value}))} type="number" />
                            <InputLabel>:</InputLabel>
                            <TimeInput className="seconds" max={59} min={0} maxLength={2} value={friendlyTime(time.second)} onChange={(a: any) => setTime(prev => ({...prev, second: a.target.value}))} type="number" />
                        </ContainerInputs>
                    </Col>
                </Row>
                <br /><br />
                <Button onClick={handleSave}>Salvar</Button>
            </Body>
        </Modal>
    )
}

export default AddEditModal;