import React from 'react';
import css from '../styles.css';
export default class Button extends React.Component {
  render() {
    return (
      <button className="Button" onClick={this.props.loadNextPage}>
        Load More
      </button>
    );
  }
}
