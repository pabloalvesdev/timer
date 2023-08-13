interface ITask {
    id?: number;
    title: string;
    placerate: number;
    servicerate: number;
    foodrate: number;
    tags?: string;
    attrs?: string;
    visited: boolean;
};

export default ITask;