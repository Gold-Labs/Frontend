import ItemList from "../components/item/item-list";
import Navbar from "../components/navbar/navbar";
interface mainPageProps {}
export default function MainPage(props: mainPageProps) {
  return (
    <>
      <Navbar></Navbar>
      <ItemList />
    </>
  );
}
