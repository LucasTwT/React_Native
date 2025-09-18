
// Context & Reducer Types

// CTX:
export interface QuestionnaireContextType {
    state: InitialState,
    updateQData: (payload: UpdatePayload) => void
}

export interface UserQData {
    genderValue: GenderValue
} 

export enum GenderValue {
    woman = 0,
    man = 1,
    initial = -1,
}

// Reducer:

export interface InitialState {
    userQData: UserQData
}

type UpdatePayload = { [ K in keyof UserQData ] : { field: K, value: UserQData[K]}}[keyof UserQData]

export type Action =  
    | { type: 'UPDATE_USER_Q_DATA', payload: UpdatePayload }
    