interface ITask {
    position: number;
    title: string;
    duration: number;
    // started: boolean;
    // finished: boolean;
    state: 'waiting' | 'execute' | 'finished' | 'transition'
};

export default ITask;