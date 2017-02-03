import React, {PropTypes} from 'react';

const DataList = (props) => {
    return <datalist id={props.list}>
        {props.items.map((item) => {
            return <option key={item} value={item} />;
        })}
    </datalist>;
};

DataList.PropTypes = {
    list: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DataList;
