//import * as React from 'react';
import ItemList from "../components/item/item-list";
import Navbar from "../components/navbar/navbar";
import styles from "./item.module.scss";
// import {pathToFileURL} from "url";
interface mainPageProps {}
export default function MainPage(props: mainPageProps) {
  return (
    <>
      <Navbar></Navbar>
      <ItemList />
    </>
  );
}
