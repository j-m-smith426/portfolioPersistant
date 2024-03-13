import { Dispatch, createContext } from "react";
import { modelActions } from "./modelReducer";
import { NULL } from "sass";

export const DispatchContext = createContext<Dispatch<any>>(() => {});