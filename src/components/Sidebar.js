import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        {
          categories.map(
            (category) => <button key={ category.id } data-testid="category">{category.name}</button>,
          )
        }
      </div>
    );
  }
}

export default Sidebar;
