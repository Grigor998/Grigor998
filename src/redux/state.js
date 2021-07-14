let rerenderEntireTree = () => {

}

let state = {
    profilePage: {
        posts: [
            {id: 1, post: 'Hi, how are you?', likesCount: 2},
            {id: 2, post: 'it\'s my first post', likesCount: 45},
        ],
        newPostText: 'Your new post here...'

    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Ani'},
            {id: 2, name: 'Arev'},
            {id: 3, name: 'Anush'},
            {id: 4, name: 'Artur'},
            {id: 5, name: 'Andre'},
            {id: 6, name: 'Angel'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yes'},
            {id: 4, message: 'How are you?'},
            {id: 5, message: 'Like you'},
            {id: 6, message: 'Like Me'},
        ],
    },
    sidebar: {}
}
export const addPost = () => {
    const newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}
export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}
export const subscribe = (observer) => {
    rerenderEntireTree = (observer)
}

export default state