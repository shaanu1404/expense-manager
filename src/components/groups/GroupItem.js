import React from "react";
import {useHistory} from 'react-router-dom';

export const GroupItem = ({ id, title, date }) => {

    const history = useHistory();

    const gotoItems = () => history.push('/' + id);

    return (
        <div className="group__card" onClick={gotoItems}>
            <h6 className="group__card--title">{title}</h6>
            <div className="group__card--date">
                {date}
            </div>
        </div>
    )
};
