import React, {PropTypes} from 'react';

const Player = (props) => {
    return <div>
        <h4>{props.battleRole}</h4>
        {props.children}
    </div>;
};

Player.PropTypes = {
    role: PropTypes.string.isRequired
};

export default Player;
