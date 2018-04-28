import React from 'react';

export const FormAlert = (props) => {
    if (props.hide) {
        return null;
    } else {
        return(
            <div className={props.class}>
                {props.text}
            </div>
        );
    }
}