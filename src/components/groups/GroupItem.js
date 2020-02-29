import React from "react";

export const GroupItem = ({ title, date }) => (
    <div className="group__card">
        <h6 className="group__card--title">{title}</h6>
        <div className="group__card--date">
            {date}
        </div>
    </div>
);
