import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import ITask from "../../Interfaces/ITask";
import { Body, ContainerInputs, Header, Icon, Title } from "./styles";
import { Button } from "../Button";
import { useAppContext } from "../../Context";
import CustomSwitch from "../Switch";
import Text from "../Text";

interface Props {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    item?: ITask;
}

const AllFinishedModal = ({ visible, setVisible, item }:Props) => {
    const handleClose = () => {
        setVisible(false);
    }
    return(
        <Modal size="sm" show={visible} onHide={handleClose}>
            <Header>
                <Title>Parabéns!!!</Title>
            </Header>
            <Body>
                <center><Icon className="fa fa-check-circle" aria-hidden="true" /></center>
                <br />
                <Text>Todas as tarefas foram completadas</Text>
                <br />
                <Button onClick={handleClose}>Sair</Button>
            </Body>
        </Modal>
    )
}

export default AllFinishedModal;