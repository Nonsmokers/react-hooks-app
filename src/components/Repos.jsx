import React, {Fragment} from 'react'

export const Repos = ({repos}) => (
    <Fragment>
        {repos.map(repo => (
            <div className='card mb-3' key={repo.id}>
                <h5>
                    <a href={repo.html_url}
                       rel='nooper noreferrer'
                       target='_blank'>{repo.name}</a>
                </h5>
            </div>
        ))}
    </Fragment>
)

