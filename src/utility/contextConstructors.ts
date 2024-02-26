import { Dispatch, createContext } from "react";
import { modelActions } from "./modelReducer";

export const DispatchContext = createContext<Dispatch<any>>(null);