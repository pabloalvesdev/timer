import { ThemeProvider } from "styled-components"
import { useAppContext } from "../Context/index"
import Themes from "../Themes";

interface Props { children: React.ReactNode }

const AppTemplate = ({ children }: Props) => {
    const { theme } = useAppContext()
    return <ThemeProvider theme={Themes[theme]}>{children}</ThemeProvider>
};

export default AppTemplate;
