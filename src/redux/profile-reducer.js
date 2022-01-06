const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: "Hello, my name is Denis"},
        {id: 2, message: "Hello, it's my first post"},
        {id: 3, message: "Hello, it's my first post"},
        {id: 4, message: "Hello, it's my first post"}
    ],
    newPostText: "it-kamasutra.com",
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
            break;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
            break;
        };
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
            break;
        };
    }

    return state;
}

export const addPostActionCreator = () => ({type: 'ADD-POST'});
export const updateNewPostTextActionCreator = (text) => ({type: 'UPDATE_NEW_POST_TEXT', newText: text});
export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile});

export default profileReducer;