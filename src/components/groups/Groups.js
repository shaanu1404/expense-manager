import React from "react";
import {GroupItem} from './GroupItem';

export const Groups = ({groups, addMore}) => (
    <div className="container">
        <h1 className="section-heading">Groups</h1>
        <div className="group-container">
            {groups.length > 0 ?
                groups.map(group =>
                    <GroupItem key={group.id} title={group.name} date={group.createdOn}/>
                )
                : null
            }
            <div className="group__card adder__card" onClick={addMore}>
                <h6 className="group__card--title">Add More</h6>
            </div>
        </div>
    </div>
);
