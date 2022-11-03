import React from 'react';
import css from '../styles.css';

export default class ImageGalleryItem extends React.Component {
  render() {
    const { id, webformatURL, largeImageURL } = this.props.hit;

    return (
      <li className="ImageGalleryItem">
        <img
          key={id}
          src={webformatURL}
          id={id}
          largeimg={largeImageURL}
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}
