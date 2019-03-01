import { IChallenge } from "./IChallenge";

export enum Screens {
    CREATE_NEW_CHALLENGE = 'CREATE_NEW_CHALLENGE',
    CHALLENGES_LIST = 'CHALLENGES_LIST'
}

export interface IState {
    screen: Screens;
    isLoading: boolean;
    challenges: IChallenge[],
    challengeForm?: IChallenge
}