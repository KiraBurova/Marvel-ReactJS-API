import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchSearchedData, fetchData } from '../../../redux/actions/dataActions';

import { SearchInput } from '../../UI/SearchInput/SearchInput';

class searchInputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }
    onChangeValue(e) {
        this.setState({
            inputValue: e.target.value
        });
        if(!e.target.value) {
            this.props.fetchData(this.props.type);
        }
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.fetchSearchedData(this.props.type, this.state.inputValue);
    }
    render() {
        return (
            <SearchInput value={this.state.inputValue} onChangeValue={(e) => this.onChangeValue(e)} onSubmit={(e) => this.onSubmit(e)}/>
        );
    }
}

searchInputContainer.propTypes = {
    fetchSearchedData: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired,
    searched: PropTypes.array,
    type: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    searched: state.data.data
});

export default connect(mapStateToProps, { fetchSearchedData, fetchData })(searchInputContainer);