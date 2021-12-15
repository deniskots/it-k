import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello, my name is Denis"},
                {id: 2, message: "Hello, it's my first post"},
                {id: 3, message: "Hello, it's my first post"},
                {id: 4, message: "Hello, it's my first post"}
            ],
            newPostText: "it-kamasutra.com",
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Denis'},
                {id: 2, name: 'John'},
                {id: 3, name: 'Anna'},
                {id: 4, name: 'Will'},
                {id: 5, name: 'Sara'}
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Hello,i have something..'},
                {id: 4, message: 'WhatsUp'},
                {id: 5, message: 'London'}
            ],
            newMessageBody: " "
        }

    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

window.state = store;
export default store;