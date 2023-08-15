import React, { createContext, useContext, useMemo, useState } from "react";
import { ITheme } from "../Interfaces";
import ITask from "../Interfaces/ITask";

type ThemeEnum = "light" | "dark";

interface IAppContext {
    theme: ThemeEnum;
    setTheme: React.Dispatch<React.SetStateAction<ThemeEnum>>;
    tasks: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    currentTask: number;
    setCurrentTask: React.Dispatch<React.SetStateAction<number>>;
};

interface Props {
    children: React.ReactNode;
};

const AppContext = createContext<IAppContext>({} as IAppContext);

const AppContextProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState<ThemeEnum>("dark");
    const [tasks, setTasks] = useState<ITask[]>([
        { position: 1, title: 'Primeira Task', duration: 10, state: 'waiting' },
        { position: 2, title: 'Segunda Task', duration: 90, state: 'waiting' },
        { position: 3, title: 'Terceira Task', duration: 70, state: 'waiting' }
    ]);
    const [currentTask, setCurrentTask] = useState(0);
    const values = useMemo<IAppContext>(()=>({
        theme,
        setTheme,
        tasks,
        setTasks,
        currentTask,
        setCurrentTask
    }), [theme, setTheme, tasks, setTasks, currentTask, setCurrentTask]);
    return(
        <AppContext.Provider value={values}>{children}</AppContext.Provider>
    )
}

export function useAppContext(): IAppContext {
    return useContext(AppContext);
}

export default AppContextProvider;
