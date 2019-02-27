import { IChallenge } from "./IChallenge";

export enum Screens{
    CREATE_NEW_CHALLENGE='CREATE_NEW_CHALLENGE'
}

export interface IState {
    screen?:Screens;
    challenges:IChallenge[],
    challengeForm?:IChallenge
}