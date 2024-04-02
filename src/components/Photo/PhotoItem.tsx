import React from "react";
import {PhotoType} from "../../types.ts";

type Props = {
    item: PhotoType;
};


export const PhotoItem: React.FC<Props> = ({item})=> {
    return(
        <li key={item.id}>
            <img src={item.url} alt='image'/>
            <h3>{item.title}</h3>
        </li>
    );
};