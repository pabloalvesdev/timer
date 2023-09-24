import React, { useEffect, useState } from "react";
import { Icon } from "../Icon";
import Text from "../Text";
import { useAppContext } from "../../Context";
import ITask from "../../Interfaces/ITask";
import { Button, Label } from "./styles";

const InputFile = () => {
    const [file, setFile] = useState({content: '', name: ''});
    const { setTasks } = useAppContext();
    const handleFileChange = (event: any) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            
            reader.onload = (e: any) => {
                const name = event.target.value.split('\\')[event.target.value.split('\\').length-1];
                const content = e.target.result
                setFile({name, content});
          };
    
          reader.onerror = (error) => {
            console.error('Erro ao ler o arquivo:', error);
          };
    
          reader.readAsText(selectedFile);
        }
    };
    const setList = () => {
        let tasks: ITask[] = [];
        const lines = file.content.split('\n').filter(a => a.length)
        tasks = lines.map(l => {
            const fragments = l.split(' | ');
            console.log(fragments)
            return ({
                title: fragments[0],
                duration: Number(fragments[1]),
                state: 'waiting',
                pomodoro: fragments[2] === 'pomodoro'
            })
        });
        setTasks(tasks)
    }
    const resetFile = () => {
        setFile({content: '', name: ''});
    }
    return(
        <>
            <input type="file" onChange={handleFileChange} id="input-file" style={{display: 'none'}} />
            <Label htmlFor="input-file">
                {file.name || 'Nenhum arquivo'}
                <Icon className="fa fa-upload" />
                <br />
                <div>
                    <Button onClick={setList} hidden={file.content.length===0} className="submit">
                        Enviar
                        <Icon className="fa fa-check" />
                    </Button>
                    <Button onClick={resetFile} hidden={file.content.length===0} className="delete">
                        Apagar
                        <Icon className="fa fa-close" />
                    </Button>
                </div>
            </Label>
        </>
    )
}

export default InputFile;