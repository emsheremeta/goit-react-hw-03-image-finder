import React from 'react';
import css from '../styles.css';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader';
import Button from './Button';

const KEY = '27790361-d52fedb5b14fb71941e53259d';
export default class ImageGallery extends React.Component {
  state = {
    images: null,
    // loading: false,
    error: null,
    status: 'idle',
    page: 1,
  };

  loadNextPage = event => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.search;
    const nextName = this.props.search;
    if (prevName !== nextName) {
      this.setState({ page: 1 });
    }
    if (prevName !== nextName || this.state.page !== prevState.page) {
      console.log('Changing');
      this.setState({ status: 'pending' });
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${nextName}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(response => response.json())
          .then(images => {
            if (images && images.hits.length === 0) {
              this.setState({ status: 'rejected' });
            } else {
              if (prevState.images === null) {
                this.setState({ images: images.hits });
              } else {
                console.log(prevState.images);
                this.setState(prevState => ({
                  images: [...prevState.images, ...images.hits],
                }));
              }
              this.setState({ status: 'resolved' });
            }
          })
          .catch(error => {
            this.setState({ error, status: 'rejected' });
          });
        // .finally(this.setState({ loading: false }));
      }, 2000);
    }
  }

  render() {
    // const { loading, images, error, status } = this.state;
    const { images, error, status } = this.state;
    if (status === 'idle') {
      return <div>Please, type the name </div>;
    }

    // if (status === 'pending') {
    //   // return <div>Loading...</div>;
    //   return <Loader />;
    // }
    if (status === 'rejected') {
      return <div>ERROR! {this.props.search} does not exist!</div>;
    }

    if (status === 'resolved' || status === 'pending') {
      return (
        <div>
          <ul className="ImageGallery">
            {this.state.images &&
              images.map(hit => <ImageGalleryItem hit={hit} />)}
          </ul>
          {this.state.status === 'resolved' && (
            <Button loadNextPage={this.loadNextPage} />
          )}
          {this.state.status === 'pending' && <Loader />}
        </div>
      );
    }
  }
}
