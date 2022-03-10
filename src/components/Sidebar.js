import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Sidebar extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        {
          categories.map(
            (category) => (
              <button
                type="button"
                key={ category.id }
                data-testid="category"
              >
                {category.name}
              </button>
            ),
          )
        }
      </div>
    );
  }
}

Sidebar.propTypes = {
  categories: PropTypes.string.isRequired,
};

export default Sidebar;
