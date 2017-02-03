import React, {Component, PropTypes} from 'react';
import Overview from '../components/players/Overview';

class PlayerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ships: ['Test Ship'],
            defense: ['Test Defense'],
        };
    }
    render() {
        return (
            <Overview ships={this.state.ships} defense={this.state.defense} />
        );
    }
}

PlayerContainer.PropTypes = {};

export default PlayerContainer;
