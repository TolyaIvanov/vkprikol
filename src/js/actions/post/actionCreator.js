import {
    SWITCH_POST_VIEW
} from "../../constants/defaultConstants";

export const switchPostView = (postView) => ({
    type: SWITCH_POST_VIEW,
    postView
});

