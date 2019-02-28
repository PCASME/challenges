import { IChallenge } from "../model/IChallenge";
import { FormService } from "../services/FormServices";

export const CREATE_NEW_CHALLENGE = 'CREATE_NEW_CHALLENGE';
export const DID_SAVE_CHALLENGE = 'DID_SAVE_CHALLENGE';
export const WILL_SAVE_CHALLENGE = 'WILL_SAVE_CHALLENGE';


export function createNewChallenge() {
    return {
        type: CREATE_NEW_CHALLENGE
    }
}

export function didSaveChallenge(challenge: IChallenge) {
    return {
        type: DID_SAVE_CHALLENGE,
        challenge
    }
}

export function willSaveChallenge(challenge: IChallenge) {
    return {
        type: WILL_SAVE_CHALLENGE,
        challenge
    }
}

export function fetchSaveChallenge(challenge: IChallenge) {
    return function (dispatch: any) {
            dispatch(willSaveChallenge(challenge));
            FormService.Save(challenge).then((id)=>{
                setTimeout(()=>
                    dispatch(didSaveChallenge(challenge))
                ,2000)
            })
    }
}