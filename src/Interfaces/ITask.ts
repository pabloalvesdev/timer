interface ITask {
    position: number;
    title: string;
    duration: number;
    pomodoro: boolean;
    // started: boolean;
    // finished: boolean;
    state: 'waiting' | 'execute' | 'finished' | 'transition'
};

export default ITask;