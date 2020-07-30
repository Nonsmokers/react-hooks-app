import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import CircularProgress from "@material-ui/core/CircularProgress";
import {GithubContext} from "../context/github/githubContext";

export const Card = ({user}) => {
    const {loading} = useContext(GithubContext)

    return <div className="card">
        {loading ? <CircularProgress /> : <img src={user.avatar_url} alt={''} className="card-img-top"/>}
     {/*   <img src={user.avatar_url} alt={''} className="card-img-top"/>*/}
        <div className="card-body">
            <h5 className="card-title">{user.login}</h5>
            <Link to={'/profile/'+ user.login} className="btn btn-primary">Открыть</Link>
        </div>
    </div>
}
