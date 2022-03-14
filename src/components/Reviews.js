import React from 'react';
import PropTypes from 'prop-types';

class Reviews extends React.Component {
  render() {
    const { email, rating, review } = this.props;
    return (
      <div>
        <p>{email}</p>
        <span>{rating}</span>
        <p>{review}</p>
      </div>
    );
  }
}

Reviews.propTypes = {
  email: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

export default Reviews;
