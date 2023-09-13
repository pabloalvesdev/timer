import React, { useEffect, useState } from "react";
import { useAppContext } from "../../Context";
import { Button, Container, Cor, RowPopover } from "./styles";
import { OverlayTrigger, Popover } from "react-bootstrap";
import Themes from "../../Themes";
import { useTheme } from "styled-components";
import Pallete from "../../Themes";
import { Icon } from "../Icon";

interface Props {
    id?: string;
    color: string;
}


const SelectTheme = () => {
    const { setTheme } = useAppContext();
    const theme = useTheme();
    const ColoredCircle = ({ color, id }: Props) => <Container className={id === newTheme.primary ? 'selected' : ''} id={id} style={{backgroundColor: color}}/>
    const [newTheme, setNewTheme] = useState<{mode: 'light' | 'dark', primary: string}>({mode: 'dark', primary: Pallete.primary[0]});
    const toogleMode = (e: any) => {
        const elementId = e.target.parentElement.id || e.target.id;
        setNewTheme(a => ({...a, mode: elementId}));
    }
    const tooglePrimary = (e: any) => {
        const element = e.target;
        setNewTheme(a => ({...a, primary: element.id}));
    }
    const setDefiniteTheme = () => {
        setTheme(newTheme)
    }
    const popoverTop = (
        // dentro desse popover eu jogo as cores
        <RowPopover id="popover-positioned-top" title="Popover top">
            <p style={{margin: 0}}>Modo</p>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <Button onClick={toogleMode} className={newTheme.mode === 'light' ? 'selected' : ''} id="light"><Icon onClick={toogleMode} className="fa fa-moon-o" /></Button>
                <Button onClick={toogleMode} className={newTheme.mode === 'dark' ? 'selected' : ''} id="dark"><Icon onClick={toogleMode} className="fa fa-sun-o" /></Button>
            </div>
            <p style={{margin: 0}}>Cor Principal</p>
            <div onClick={tooglePrimary} style={{display: "flex", justifyContent: 'center', columnGap: 10}}>
                {/* {Object.keys(Themes).filter(a => a !== theme).map(a => <ColoredCircle id={a} color1={Themes[a as ThemeEnum].primary} color2={Themes[a as ThemeEnum].background.default} />)} */}
                {Pallete.primary.map(a => <ColoredCircle id={a} color={a} />)}
            </div>
        </RowPopover>
      );
    return(
        <OverlayTrigger onExiting={setDefiniteTheme} rootClose trigger="click" placement="right" overlay={popoverTop}>
            <Container><Cor style={{backgroundColor: theme.primary}} /><Cor style={{backgroundColor: theme.background.default}} /></Container>
        </OverlayTrigger>
    );
}

export default SelectTheme;