import React from 'react';
import { ColorRing } from 'react-loader-spinner';

export default class Loader extends React.Component {
  render() {
    return (
      <div>
        <ColorRing />
        Loading...
      </div>
    );
  }
}
