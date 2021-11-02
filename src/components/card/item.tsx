import * as React from 'react';
import styles from './item.module.scss';
// import {pathToFileURL} from "url";
interface  itemProps{
    count: number
}
export default function Item (props:itemProps) {
    return (
            // <!-- A card with given width -->
            <li className={styles.item} >
                <img className={styles.item_img} src="assets/images/product/product-image.jpg" alt=""/>
            </li>
            // <!-- Repeat other cards -->
    );
}



