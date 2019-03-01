import { IChallenge } from "../model/IChallenge";
import { FormService } from "../services/FormServices";

export const CREATE_NEW_CHALLENGE = 'CREATE_NEW_CHALLENGE';
export const DID_SAVE_CHALLENGE = 'DID_SAVE_CHALLENGE';
export const WILL_SAVE_CHALLENGE = 'WILL_SAVE_CHALLENGE';
export const DID_GET_CHALLENGES = 'DID_GET_CHALLENGES';
export const WILL_GET_CHALLENGES = 'WILL_GET_CHALLENGES';


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
        FormService.Save(challenge).then((id) => {
            setTimeout(() =>
                dispatch(didSaveChallenge(challenge))
                , 2000)
        })
    }
}

export function willGetChallenges() {
    return {
        type: WILL_GET_CHALLENGES,
    }
}

export function didGetChallenges(challenges: IChallenge[]) {
    return {
        type: DID_GET_CHALLENGES,
        challenges
    }
}

export function fetchGetChallenges() {
    return function (dispatch: any) {
        dispatch(willGetChallenges());
        FormService.Get().then((challenges) => {
            setTimeout(() =>
                dispatch(didGetChallenges(challenges))
                , 2000);
        });
    }
}