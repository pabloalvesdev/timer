import React from "react";
import ITask from "../../../../Interfaces/ITask";
import { Container } from "./styles";
import Text from "../../../Text";
import { friendlyHour } from "../../../../Utils/Time";

interface Props {
    item: ITask;
}

const ListItem = ({ item }:Props) => {
    return(
        <Container>
            <Text><b>{item.title}</b> {friendlyHour(item.duration)}</Text>
        </Container>
    )
};

export default ListItem;