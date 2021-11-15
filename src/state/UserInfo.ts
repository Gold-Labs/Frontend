import { atom } from "recoil";
import { UserInfo } from "../type/UserInfo";

export default atom<UserInfo | undefined>({
  key: "userInfo",
  default: undefined,
});
