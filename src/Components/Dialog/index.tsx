import { useEffect, useState } from "react";
import { Button, Container, Input, ModalBody, ModalCard, ModalFooter, ModalHeader, Paragraph, Rate, Star, Title } from "./styles";
import { useAppContext } from "../../Context";

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
    
    return(
        <Container onClick={clickOut} className={dialog.visible ? 'show' : 'hidden'}>
            <ModalCard style={{justifyContent: 'space-around'}}>
                <ModalHeader>
                    <Title>{dialog.title || "Confirmar Ação?"}</Title>
                </ModalHeader>
                <ModalBody>
                    {dialog.textBody && <p>{dialog.textBody}</p>}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={cancelAction} className="cancel">Cancelar</Button>
                    <Button onClick={confirmAction} className="confirm">Confirmar</Button>
                </ModalFooter>
            </ModalCard>
        </Container>
    );
};

export default Dialog;