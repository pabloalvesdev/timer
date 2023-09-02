import { useEffect, useState } from "react";
import { Body, Footer, Header, Input, ModalBody, ModalCard, ModalFooter, ModalHeader, Paragraph, Rate, Star, Title } from "./styles";
import { useAppContext } from "../../Context";
import { Modal } from "react-bootstrap";
import { Button } from "../Button";

const Dialog = () => {
    const { dialog, setDialog } = useAppContext();
    const clickOut = (a: any) => {
        if(a.target.className.includes('show')) setDialog({ visible: false });
    };

    const confirmAction = async () => {
        if(dialog.callbackConfirm) dialog.callbackConfirm();
        setDialog({ visible: false });
    };

    const cancelAction = async () => {
        if(dialog.callbackCancel) dialog.callbackCancel();
        setDialog({ visible: false });
    }

    const handleClose = () => {
        setDialog({ visible: false })
    }
    
    return(
        <Modal size="sm" show={dialog.visible} onHide={handleClose}>
            <Header>
                <Title>{dialog.title || "Confirmar Ação?"}</Title>
            </Header>
            <Body>
                {<p>{dialog.textBody || "Esta operação é irreversível, tem certeza que deseja continuar?"}</p>}
            </Body>
            <Footer>
                <Button onClick={cancelAction}>Não</Button>
                <Button onClick={confirmAction}>Sim</Button>
            </Footer>
        </Modal>
    );
};

export default Dialog;