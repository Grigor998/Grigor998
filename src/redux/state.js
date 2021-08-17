let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you?', likesCount: 2},
                {id: 2, post: 'it\'s my first post', likesCount: 45},
            ],
            newPostText: ''

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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
    },
    addPost() {
        const newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = (observer)
    }

}

export default store
window.store = store