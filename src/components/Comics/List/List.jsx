import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchData } from '../../../redux/actions/dataActions';

import { ComicsCard } from '../Card/Card';

import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

class ComicsList extends Component {
    componentDidMount() {
        this.fetchData();
    }
    fetchData(page) {
        this.props.fetchData('comics', {page});
        window.scrollTo(0, 0);
    }
    render() {
        const {comics, options} = this.props;

        return (
            <div>
                <div className="row">{comics ? comics.map((comic) => {
                    return <ComicsCard comic={comic} key={comic.id}/>;
                }) : <span>Loading data</span>}</div>
                <Pagination current={options.page || 1} total={options.totalPages} pageSize={options.count} onChange={(page) => this.fetchData(page)}/>;
            </div>
        );
    }
}

ComicsList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    comics: PropTypes.array.isRequired,
    options: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    comics: state.data.data,
    options: state.data.options
});

export default connect(mapStateToProps, { fetchData })(ComicsList);