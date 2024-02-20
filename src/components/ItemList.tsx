import React from "react";
import './styles.css';

import { IListItem } from "../types/Items";

const ItemList: React.FC<IListItem> = ({title, description}) => (
    <div className="item__list">
        <header className="title__product">{title}</header>
        <span>{description}</span>
    </div>
)

export default ItemList