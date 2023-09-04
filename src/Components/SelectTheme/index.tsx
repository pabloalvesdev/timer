import React from "react";
import { ThemeEnum, useAppContext } from "../../Context";
import { Container, Cor, RowPopover } from "./styles";
import { OverlayTrigger, Popover } from "react-bootstrap";
import Themes from "../../Themes";

interface Props {
    id?: string;
    color1: string;
    color2: string;
}


const SelectTheme = () => {
    const ColoredCircle = ({ color1, color2, id }: Props) => <Container className={id === theme ? 'selected' : ''} id={id}><Cor style={{backgroundColor: color1}} /><Cor style={{backgroundColor: color2}} /></Container>
    const { theme, setTheme } = useAppContext();
    const popoverTop = (
        // dentro desse popover eu jogo as cores
        <RowPopover onClick={(a: any) => setTheme(a.target.parentNode.id || theme)} id="popover-positioned-top" title="Popover top">
            <p>Selecione um Tema</p>
            <div style={{display: "flex", justifyContent: 'space-around'}}>
                {/* {Object.keys(Themes).filter(a => a !== theme).map(a => <ColoredCircle id={a} color1={Themes[a as ThemeEnum].primary} color2={Themes[a as ThemeEnum].background.default} />)} */}
                {Object.keys(Themes).map(a => <ColoredCircle id={a} color1={Themes[a as ThemeEnum].primary} color2={Themes[a as ThemeEnum].background.default} />)}
            </div>
        </RowPopover>
      );
    return(
        <OverlayTrigger trigger="click" placement="right" overlay={popoverTop}>
            <Container><Cor style={{backgroundColor: Themes[theme].primary}} /><Cor style={{backgroundColor: Themes[theme].background.default}} /></Container>
        </OverlayTrigger>
    );
}

export default SelectTheme;