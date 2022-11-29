import React from 'react';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends React.Component {
  static propTypes ={
    onClick: PropTypes.func.isRequired,
    hit: PropTypes.object.isRequired,
  }
  render() {
    const { id, webformatURL, largeImageURL } = this.props.hit;

    return (
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={webformatURL}
          id={id}
          largeimg={largeImageURL}
          onClick={this.props.onClick}
          alt="finding results"
        />
      </li>
    );
  }
}


