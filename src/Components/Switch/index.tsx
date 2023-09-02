import { useAppContext } from "../../Context";
import { Container, IFormSwitch, Icon, InputFormSwitch, LabelFormSwitch } from "./styles";
// import { DarkMode, LightMode } from '@mui/icons-material';
import Themes from "../../Themes";

interface Props {
    labelToSwitch?: string;
    onChange: () => void
}

const CustomSwitch = ({ labelToSwitch, onChange }: Props) => {
    return(
        <Container>
            <LabelFormSwitch>
                <InputFormSwitch onChange={onChange} type="checkbox"/>
                <IFormSwitch />
            </LabelFormSwitch>
            <p>{labelToSwitch}</p>
        </Container>
    );
};

export default CustomSwitch;