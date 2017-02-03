import React, {PropTypes} from 'react';
import Input from '../basic/Input';

const Selector = (props) => {
    return <div>
            <h6>{props.header}</h6>
            <form>
                <Input placeholder="Ship name" list={props.autocompletion}/>
                <Input placeholder="1"/>
            </form>
        </div>
};

Selector.PropTypes = {
    header: PropTypes.string.isRequired,
    autocompletion: PropTypes.string.isRequired,
};

export default Selector;
