import { createSlice, configureStore } from '@reduxjs/toolkit';
import * as api from '../api';

const postsSlice = createSlice({
    name: 'posts',
    initialState:[],
    reducers: {
        fetch(state, action){
            return action.payload;
        },
        create(state, action){
            return [...state,action.payload];
        },
        update(state, action){
          return state.map((post) =>(post._id===action.payload._id ? action.payload : post));
        },
        like(state, action){
            return state.map((post) => (post._id === action.payload._id ? action.payload: post));
        },
        delete(state,action){
            return state.filter((post) => post._id!==action.payload);
        }
    }
})  

export const fetch_posts = () => {
    return async(dispatch) => {
        const fetchData = async() => {
            const {data} = await api.fetchPosts();
            return data;
        }

        const posts = await fetchData();
        dispatch(postsActions.fetch(posts));
        
    }
}

export const create_post = (post) => {
    return async(dispatch) => {
        const post_create = async() => {
            const {data} = await api.createPost(post);
            return data;
        }

        const created_post = await post_create();
        dispatch(postsActions.create(created_post));
    }
}

export const update_post = (id,post) => {
    return async(dispatch) => {
        const  post_update = async() => {
            const {data}= await api.updatePost(id,post);
            return data;
        }

        const updated_post = await  post_update();
        dispatch(postsActions.update(updated_post));
    }
}

export const like_post = (id) => {
    return async(dispatch) => {
        const post_like = async() => {
            const {data} = await api.likePost(id);
            return data;
        }

        const liked_post = await post_like();
        dispatch(postsActions.like(liked_post));
    }
}

export const delete_post = (id) => {
    return async (dispatch) => {
        const post_delete = async () => {
            const {data} = await api.deletePost(id);
            return data;
        }

        await post_delete();
        console.log(delete_post);
        dispatch(postsActions.delete(id));
    }
}

const store = configureStore({
    reducer : {posts: postsSlice.reducer}
})

export const postsActions =  postsSlice.actions;
export default store;