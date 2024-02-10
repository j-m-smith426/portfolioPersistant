import { useReducer } from "react";
import { bio, project } from "../sanitysetup";
// Reducer State template
export type modelInfo =
{
    hidden: boolean;
    content: project | bio 
}
// Reducer Actions
enum modelActionsType {
    SHOW ="show",
    HIDE ="hide",
    UPDATE ="updateInfo"
}
// Reducer actions template
export type modelActions = {
  type: modelActionsType;
  payload: project | bio ;
};
// Reducer to handle state of Model and Model Contents
export const modelReducer = (model:modelInfo, action:modelActions) => {

    const newInfo:modelInfo = {...model};
    switch (action.type){
        case modelActionsType.SHOW:
            newInfo.hidden = false;
            return newInfo;
            break;
        case modelActionsType.HIDE:
            newInfo.hidden = true;
            return newInfo;
            break;
        case modelActionsType.UPDATE:
            newInfo.hidden = false;
            newInfo.content = action.payload
            return newInfo;
            break;
        default: 
            throw Error("Invalid Action: " + action);


    }
}
// Initial Content for Reducer
const initialContent:project = {
    _id: "Test",
    title: "Initial",
    professional: false,
    description: "",
    Summary: "",
    githuburl: "",
    techstack: []
}

// Initial State for Reducer
export const initialState:modelInfo = {
    hidden: true,
    content: initialContent
}

