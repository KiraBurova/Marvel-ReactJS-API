import React, {Component} from 'react';

import { connect } from 'react-redux';
import { fetchData } from '../../../redux/actions/dataActions';

class CharactersList extends Component {
    componentDidMount() {
        this.props.fetchData('characters')
    }
    render() {
        return (
            <div>ddd</div>
        )
    }
}

const mapStateToProps = state => ({
    characters: state.data.data
});

export default connect(mapStateToProps, { fetchData })(CharactersList);