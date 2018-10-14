import React from 'react';
import PropTypes from 'prop-types';

export const SearchInput = ({value, onChangeValue, onSubmit}) => (
    <div className="input-field">
        <form onSubmit={(e) => onSubmit(e)}>
            <input id="search" type="text" value={value} onChange={(e) => onChangeValue(e)}></input>
            <button type="submit" className="btn waves-effect">Search</button>
        </form>
    </div>
);

SearchInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};