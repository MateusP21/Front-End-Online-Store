import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Sidebar extends React.Component {
  render() {
    const { categories, getCategoryId } = this.props;

    return (
      <>
        {
          categories.map(
            (category) => (
              <button
                type="button"
                key={ category.id }
                data-testid="category"
                onClick={ () => getCategoryId(category.id) }
              >
                {category.name}
              </button>
            ),
          )
        }
      </>
    );
  }
}

Sidebar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCategoryId: PropTypes.func.isRequired,
};

export default Sidebar;
