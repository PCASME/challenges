import { IChallenge } from "../model/IChallenge";

export const CREATE_NEW_CHALLENGE = 'CREATE_NEW_CHALLENGE';
export const SAVE_CHALLENGE = 'SAVE_CHALLENGE';


export function createNewChallenge() {
    return {
        type: CREATE_NEW_CHALLENGE
    }
}

export function saveChallenge(challenge: IChallenge) {
    return {
        type: SAVE_CHALLENGE,
        challenge
    }
}