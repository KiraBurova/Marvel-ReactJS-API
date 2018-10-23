import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchSingleItem, fetchAdditionalData } from '../../../redux/actions/dataActions';

import { DetailedCard } from './Card/Card';
import { Popup } from '../../UI/Popup/Popup'

class Character extends Component {
    componentDidMount() {
        this.props.fetchSingleItem('characters', +this.props.url);
    }
    onGetData(url, type) {
        const myRegexp = new RegExp(`${type}/(.*)`);
        const match = myRegexp.exec(url)[1];
        this.props.fetchAdditionalData(type, match);
    }
    render() {
        const character = this.props.character;
        const additional = this.props.additional;
        console.log(additional)

        return (
            <div className="row">
                <div className="col s12">{character ? <DetailedCard character={character} key={character.id} onGetData={(url, type) => this.onGetData(url, type)}/> : <span>Loading data</span>}</div>
                <div>{additional && <Popup info={additional}/>}</div>
            </div>
        );
    }
}

Character.propTypes = {
    fetchSingleItem: PropTypes.func.isRequired,
    fetchAdditionalData: PropTypes.func.isRequired,
    character: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    character: state.data.item,
    additional: state.data.additional
});

export default connect(mapStateToProps, { fetchSingleItem, fetchAdditionalData })(Character);