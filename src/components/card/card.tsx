import * as React from 'react';
import styles from './card.module.scss';
// import {pathToFileURL} from "url";
interface  itemProps{
    count: number
}
export default function Item (props:itemProps) {
    return (
            // <!-- A card with given width -->
            <li className={styles.item} >
                <img className={styles.item_img} src="https://img-cf.kurly.com/shop/data/main/3/pc_img_1631688770.jpg" alt=""/>
            </li>
            // <!-- Repeat other cards -->
    );
}



