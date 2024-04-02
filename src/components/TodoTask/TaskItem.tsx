import {TodoTask} from "../../types.ts";
import React from "react";

type Props = {
    item: TodoTask;
};

export const TaskItem: React.FC<Props> = ({item}) => {
    return(
        <li key={item.id}>
            <h3>{item.title}</h3>
            <div>Status: {!item.completed?'Not yet':'Completed'}</div>
        </li>
    );
};