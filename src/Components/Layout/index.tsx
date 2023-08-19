import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Themes from "../../Themes";
import { useAppContext } from "../../Context";

interface Props {
    children: any;
}

const Layout = ({ children }: Props) => {
    const { theme } = useAppContext();
    return(
    <Container>
      <br /><br />
      <Row>
        <Col />
        <Col
            lg={5}
            sm={12}
            style={{
                backgroundColor: Themes[theme].background.alternative,
                borderRadius: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
          {children[0]}
        </Col>
        <Col lg={5} sm={12}>
          {children[1]}
        </Col>
        <Col />
      </Row>
    </Container>
    )
}

export default Layout;