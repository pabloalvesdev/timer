import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Themes from "../../Themes";
import { useAppContext } from "../../Context";
import { WatchContainer } from "./styles";

interface Props {
    children: any;
}

const MobileLayout = ({ children }: Props) => {
    const { theme } = useAppContext();
    return(
        <Container>
            <br /><br />
            <WatchContainer>
                {children[0]}
                {children[1]}
            </WatchContainer>
            {/* <Col />
            <WatchContainer>{children[0]}</WatchContainer>
            <Col>{children[1]}</Col>
            <Col /> */}
    </Container>
    );
}

export default MobileLayout;