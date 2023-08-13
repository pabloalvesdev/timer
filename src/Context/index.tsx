import React, { createContext, useContext, useMemo, useState } from "react";
import { ITheme } from "../Interfaces";

type ThemeEnum = "light" | "dark";

interface IAppContext {
    theme: ThemeEnum;
    setTheme: React.Dispatch<React.SetStateAction<ThemeEnum>>;
};

interface Props {
    children: React.ReactNode;
};

const AppContext = createContext<IAppContext>({} as IAppContext);

const AppContextProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState<ThemeEnum>("dark");
    const values = useMemo<IAppContext>(()=>({
        theme,
        setTheme
    }), [theme, setTheme]);
    return(
        <AppContext.Provider value={values}>{children}</AppContext.Provider>
    )
}

export function useAppContext(): IAppContext {
    return useContext(AppContext);
}

export default AppContextProvider;
