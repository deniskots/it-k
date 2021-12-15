const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = ' ';
            state.messages.push({id: 6, message: body});
            return state;
            break;
    }

    return state;
}

export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'});
export const updateNewMessageBodyCreator = (body) => ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body});

export default dialogsReducer;