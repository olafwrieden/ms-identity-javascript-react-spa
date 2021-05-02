import React from "react";

/**
 * Renders information about the user obtained from MS Graph
 * @param props 
 */
export const ProfileData = (props) => {
    console.log(props.graphData);

    return (
        <div id="profile-div">
            <p><strong>First Name: </strong> {props.graphData.first_name}</p>
            <p><strong>Last Name: </strong> {props.graphData.last_name}</p>
            <p><strong>Email: </strong> {props.graphData.email}</p>
            <p><strong>Id: </strong> {props.graphData.id}</p>
        </div>
    );
};