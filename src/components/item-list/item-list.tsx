import * as React from 'react';
import styles from './item-list.module.scss';
import Item from "../item/item";

export default function ItemList () {
    const count = [1,2,3,4,5,6,7,8]

    return (
        <ul className={styles.item_list}>
            {count.map((item)=>
                    <Item count={item}/>)}
        </ul>
    );
}
