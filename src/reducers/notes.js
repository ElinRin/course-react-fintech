export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const REORDER_NOTE = 'REORDER_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_ALL_NOTES = 'DELETE_ALL_NOTES';

export default (state = [], {type, note, id, fromId, toId}) => {
    switch (type) {
    case DELETE_ALL_NOTES:
        return [];
    case ADD_NOTE:
        return [...state, note];
    case UPDATE_NOTE:
        let newState = state;
        const index = state.findIndex(oldNote => oldNote.id === note.id);
        if (index !== -1) {
            newState[index].name = note.name;
        };
    return newState;
    case REMOVE_NOTE:
        return state.filter(oldNote => oldNote.id !== id);
    case REORDER_NOTE:
        return state.map(note => {
            if (note.id === fromId) {
                return state[state.findIndex(note => note.id === toId)];
            } else if (note.id === toId) {
                return state[state.findIndex(note => note.id === fromId)];
            } else 
                return note;
            });
    default:
        return state;
    }
};