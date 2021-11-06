import * as React from 'react';
import styles from './item.module.scss';
// import {pathToFileURL} from "url";
interface  itemProps{
    count: number
}
export default function Item (props:itemProps) {
    return (
            // <!-- A item with given width -->
            <li className={styles.goods_container} >
                <div className={styles.goods_img_container}>
                <img className={styles.goods_img} src="assets/images/product/product-image.jpg" alt=""/>
                </div>
                <div className={styles.info_goods}>
                    <span className={styles.name}>전통주</span>
                    <span className={styles.price}>
                    <span className={styles.dc}>3%</span>
                        5200원
                    </span>
                    <span className={styles.cost}>5400원</span>
                </div>
            </li>
            // <!-- Repeat other cards -->
    );
}



