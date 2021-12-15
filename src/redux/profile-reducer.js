const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hello, my name is Denis"},
        {id: 2, message: "Hello, it's my first post"},
        {id: 3, message: "Hello, it's my first post"},
        {id: 4, message: "Hello, it's my first post"}
    ],
    newPostText: "it-kamasutra.com"
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText
            };
            state.posts.push(newPost);
            state.newPostText = " ";
            return state;
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
            break;
    }

    return state;
}

export const addPostActionCreator = () => ({type: 'ADD-POST'});
export const updateNewPostTextActionCreator = (text) => ({type: 'UPDATE_NEW_POST_TEXT', newText: text});

export default profileReducer;