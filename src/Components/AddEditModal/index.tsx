import React, { useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import ITask from "../../Interfaces/ITask";
import { Body, CustomRow, Header, Input, InputLabel, InvalidText, TimeInput, Title } from "./styles";
import { Button } from "../Button";
import { useAppContext } from "../../Context";
import CustomSwitch from "../Switch";

interface Props {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    item?: ITask;
}

const AddEditModal = ({ visible, setVisible, item }:Props) => {
    const { tasks, setTasks } = useAppContext();
    const [task, setTask] = useState<ITask>({} as ITask);
    const [time, setTime] = useState({hour:0,minute:0,second:0});
    const [invalid, setInvalid] = useState<boolean>(false);
    const handleClose = () => {
        setVisible(false);
        setTask({} as ITask);
    }
    const availableToPomodoro = (n: number) => (n % 2 === 0 && n % 3 === 0 && n % 5 === 0 && n % 1800 === 0);
    const handleSave = () => {
        alert(JSON.stringify(task));
        // setTasks(prev => ([...prev, task]));
        // handleClose();
    }
    const valid = (e: React.ChangeEvent<HTMLInputElement>) => {  
        if(tasks.map(a => a.title).includes(e.target.value)) setInvalid(true)
        else setInvalid(false)
    setTask(prev => ({...prev, title: e.target.value}))
    };
    const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uni = e.target.id;
        setTime(prev => ({...prev, [uni]: e.target.value }))
    };
    useEffect(()=>console.log(Number(time.hour*3600)+Number(time.minute*60)+Number(time.second)),[time])
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
                        <InputLabel>Tempo (hh:mm:ss)</InputLabel>
                        <CustomRow>
                            <input min={0} value={time.hour} onChange={handleChangeTime} id="hour" max={10} type="number" />
                            <input min={0} value={time.minute} onChange={handleChangeTime} id="minute" max={59} type="number" />
                            <input min={0} value={time.second} onChange={handleChangeTime} id="second" max={59} type="number" />
                        </CustomRow>
                        <br />
                    </Col>
                </Row>
                <br />
                <Row style={{ visibility: availableToPomodoro(Number(time.hour*3600)+Number(time.minute*60)+Number(time.second)) ? 'visible' : 'hidden' }}>
                    <Col>
                        <CustomSwitch onChange={() => setTask(prev => ({...prev, pomodoro: !prev.pomodoro}))} labelToSwitch="Habilitar Pomodoro?" />
                    </Col>
                </Row>
                <Button onClick={handleSave}>Salvar</Button>
            </Body>
        </Modal>
    )
}

export default AddEditModal;