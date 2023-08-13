import IPlace from "./ITask";

interface IModal {
    visible: boolean;
    title?: string;
    textBody?: string;
    callbackConfirm?: () => void;
    callbackCancel?: () => void;
};

export default IModal;