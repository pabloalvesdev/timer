import React, { createContext, useContext, useMemo, useState } from "react";
import { IDialog, ITheme } from "../Interfaces";
import ITask from "../Interfaces/ITask";
import DefaultJson from "../defalttasks.json";
import Pallete from "../Themes";

interface ThemeConfig {
    primary: string;
    mode: 'light' | 'dark'
} 

interface IAppContext {
    theme: ThemeConfig;
    setTheme: React.Dispatch<React.SetStateAction<ThemeConfig>>;
    tasks: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    currentTask: number;
    setCurrentTask: React.Dispatch<React.SetStateAction<number>>;
    dialog: IDialog;
    setDialog: React.Dispatch<React.SetStateAction<IDialog>>;
};

interface Props {
    children: React.ReactNode;
};

const AppContext = createContext<IAppContext>({} as IAppContext);

const AppContextProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState<ThemeConfig>({mode: 'dark', primary: Pallete.primary[0]});
    const [dialog, setDialog] = useState<IDialog>({} as IDialog);
    const [tasks, setTasks] = useState<ITask[]>(DefaultJson.tasks as ITask[]);
    const [currentTask, setCurrentTask] = useState(0);
    const values = useMemo<IAppContext>(()=>({
        theme,
        setTheme,
        tasks,
        setTasks,
        currentTask,
        setCurrentTask,
        dialog,
        setDialog
    }), [theme, setTheme, tasks, setTasks, currentTask, setCurrentTask, dialog,setDialog]);
    return(
        <AppContext.Provider value={values}>{children}</AppContext.Provider>
    )
}

export function useAppContext(): IAppContext {
    return useContext(AppContext);
}

export default AppContextProvider;
