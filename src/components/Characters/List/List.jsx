import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchData } from '../../../redux/actions/dataActions';

import { CharactersCard }  from '../Card/Card';
import { Loader } from '../../UI/Loader/Loader.jsx';
 
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';


class CharactersList extends Component {
    componentDidMount() {
        this.fetchData();
    }
    fetchData(page) {
        this.props.fetchData('characters', { page });
        window.scrollTo(0, 0);
    }
    render() {
        const { characters, options } = this.props;

        return (
            <div>
                <div className="row">{characters ? characters.map((character) => {
                    return <CharactersCard character={character} key={character.id}/>;
                }) : <Loader />}</div>
                {options.count && <Pagination current={options.page || 1} total={options.totalPages} pageSize={options.count} onChange={(page) => this.fetchData(page)}/>};
            </div>
        );
    }
}

CharactersList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired,
    options: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    characters: state.data.data,
    options: state.data.options
});

export default connect(mapStateToProps, { fetchData })(CharactersList);