import React, {PropTypes} from 'react';
import Player from './Player';
import Selector from './Selector';
import DataList from '../basic/DataList';

const Overview = (props) => {
    return <div>
            <Player battleRole="Attacker">
                <Selector header="Ships" autocompletion="ships" />
            </Player>
            <Player battleRole="Defender">
                <Selector header="Ships/Defense" autocompletion="all" />
            </Player>
            <DataList list="ships" items={props.ships} />
            <DataList list="all" items={props.ships.concat(props.defense)}/>
        </div>;
};

Overview.PropTypes = {
    ships: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Overview;
