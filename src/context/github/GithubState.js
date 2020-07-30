import React, {useReducer} from "react";
import {GithubContext} from "./githubContext";
import {githubReducer} from "./githubReducer";
import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../types";
import * as axios from "axios";

const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

const instance = axios.create({
    baseURL: 'https://api.github.com/',
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET
})

export const GithubState = ({children}) => {
    let initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const search = async value => {
        setLoading()
        const response = await instance.get(`/search/users?q=${value}&client_id&client_secret}`)

        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        })
    }

    const getUser = async name => {
        setLoading()
        const response = await instance.get(`/users/${name}?client_id&client_secret`)

        dispatch({
            type: GET_USER,
            payload: response.data
        })
    }

    const getRepos = async name => {
        setLoading()
        const response = await instance.get(`/users/${name}/repos?per_page=5&client_id&client_secret`)

        dispatch({
            type: GET_REPOS,
            payload: response.data
        })
    }

    const {user, users, repos, loading} = state;
    const clearUsers = () => dispatch({type: CLEAR_USERS})
    const setLoading = () => dispatch({type: SET_LOADING})

    return (
        <GithubContext.Provider value={{
            setLoading, clearUsers, getRepos, getUser, search, user, users, repos, loading
        }}>
            {children}
        </GithubContext.Provider>
    )
}


