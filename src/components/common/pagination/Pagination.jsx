import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Pagination extends Component {
    setPage(i) {
        this.props.onSetPage(i);
    }
    render() {
        const { totalPages } = this.props;
        const createPages = () => {
            let pages = [];
            for(let i = 1; i <= totalPages; i++) {
                pages.push(
                    <li className="waves-effect" key={i} onClick={() => this.setPage(i)}><a>{i}</a></li>
                );
            }
            return pages;
        };
        return (
            <ul className="pagination">
                <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                { createPages() }
                <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
            </ul>
        );
    }
}

Pagination.propTypes = {
    onSetPage: PropTypes.func,
    totalPages: PropTypes.number
};