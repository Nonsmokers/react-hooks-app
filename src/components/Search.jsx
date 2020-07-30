import React, {useContext, useState} from 'react'
import {AlertContext} from "../context/alert/alertContext";
import {GithubContext} from "../context/github/githubContext";

export const Search = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const github = useContext(GithubContext)

    const onSubmit = e => {
        if (e.key !== 'Enter') {
            return
        }
        alert.hide();
        github.clearUsers();
        value.trim() ? github.search(value.trim()) : alert.show('Введите данные пользователя')
    }

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник пользователя..."
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}

            />
        </div>
    )
}
