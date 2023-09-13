import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAppContext } from "../../Context";
import { useTheme } from "styled-components";

interface Props {
    children: any;
}

const Layout = ({ children }: Props) => {
    const theme = useTheme();
    return(
    <Container>
      <br /><br />
      <Row>
        <Col />
        <Col
            lg={5}
            sm={12}
            style={{
                backgroundColor: theme.background.alternative,
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