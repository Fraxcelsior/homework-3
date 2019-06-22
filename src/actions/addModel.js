export const ADD_MODEL = 'ADD_MODEL'

export function addModel (computer) {
    return {
        type: "ADD_MODEL",
        payload: computer
    }
}