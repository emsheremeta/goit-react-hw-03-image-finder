import React from 'react';

export default class Modal extends React.Component {
  componentDidMount() {
    // console.log('Open Modal');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Unmount Modal');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    // console.log(e);
    if (e.code === 'Escape') {
      console.log('Escape');
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.url} alt="image" />
        </div>
      </div>
    );
  }
}
