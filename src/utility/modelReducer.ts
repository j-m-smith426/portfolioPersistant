import { bio, project } from "../sanitysetup";

type modelInfo =
{
    hidden: boolean;
    content: project | bio
}

enum modelActionsType {
    SHOW ="show",
    HIDE ="hide",
    UPDATE ="updateInfo"
}

type modelActions = {
  type: modelActionsType;
  payload: project | bio;
};

const modelReducer = (model:modelInfo, action:modelActions) => {

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
            newInfo.content = action.payload
            return newInfo;
            break;
        default: 
            throw Error("Invalid Action: " + action);


    }
}