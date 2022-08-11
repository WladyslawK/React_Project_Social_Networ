const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let InitialState = {
    postsData: [
        {id: 1, text: "Post 1", likes: 10 },
        {id: 2, text: "Post 2", likes: 15 },
        {id: 3, text: "Post 3", likes: 35 },
    ],
    newPostText: "",
}

const profileReducer = (state = InitialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.newPostText,
                likes: 0,
            }
            state.postsData.push(newPost);
            state.newPostText = "";
            console.log(state.newPostText)
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            console.log("Console.log", state.newPostText);
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST,});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,});

export default profileReducer;
