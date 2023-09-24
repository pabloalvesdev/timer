import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import ITask from "../../Interfaces/ITask";
import { Body, ContainerInputs, Header, Input, InputLabel, InvalidText, TimeInput, Title } from "./styles";
import { Button } from "../Button";
import { useAppContext } from "../../Context";
import CustomSwitch from "../Switch";

interface Props {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    item?: ITask;
}

const AllFinishedModal = ({ visible, setVisible, item }:Props) => {
    const { tasks, setTasks } = useAppContext();
    const handleClose = () => {
        setVisible(false);
    }
    return(
        <Modal size="sm" show={visible} onHide={handleClose}>
            <Header>
                <Title>Parabéns!!!</Title>
            </Header>
            <Body>
                <Row>
                    <Col>
                        <h2>Vc chegou ao fim de tudo</h2>
                    </Col>
                </Row>
                <Button onClick={handleClose}>Sair</Button>
            </Body>
        </Modal>
    )
}

export default AllFinishedModal;