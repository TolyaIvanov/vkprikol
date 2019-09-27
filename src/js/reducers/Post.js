import {
    SWITCH_POST_VIEW
} from './../constants/defaultConstants'

const initialState = {
    postView: 'vk'
};

export const post = (state = initialState, {type, data}) => {
    switch (type) {
        case SWITCH_POST_VIEW:
            return {
                ...state,
                ...data
            };
        default:
            return state;
    }
};
