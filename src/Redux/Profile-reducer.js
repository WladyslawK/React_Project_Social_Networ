const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
    if(action.type === ADD_POST){
        let newPost = {
            id: 5,
            text: state.newPostText,
            likes: 0,
        }
        state.postsData.push(newPost);
        state.newPostText = "";
        console.log(state.newPostText)
    }else if(action.type === UPDATE_NEW_POST_TEXT){
        state.newPostText = action.newText;
        console.log("Console.log", state.newPostText);
    }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST,});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,});

export default profileReducer;
