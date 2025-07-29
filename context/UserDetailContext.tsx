// import { UsersDetail } from "@/app/provider";
// import { createContext } from "react";


// export const UserDetailContext = createContext<UsersDetail | undefined>({undefined});



// context/UserDetailContext.ts
import { createContext } from "react";
import type { UserDetailContextType } from "../app/provider";

export const UserDetailContext = createContext<UserDetailContextType>({
  userDetail: null,
  setUserDetail: () => {},
});
