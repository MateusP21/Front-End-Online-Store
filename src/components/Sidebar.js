import React from 'react';
import '../styles/Sidebar.css';
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
                className="sidebar-btn"
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
