import { IState,Screens } from "../model/IState";
import { CREATE_NEW_CHALLENGE } from "../actions";

export function reducer(state:IState,action:any):any{
    switch(action.type){
        case CREATE_NEW_CHALLENGE:
            return Object.assign({},state,{screen:Screens.CREATE_NEW_CHALLENGE})
        default:
            return state;
    }
}