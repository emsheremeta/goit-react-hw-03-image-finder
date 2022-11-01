import React from 'react';
import SearchBar from './Searchbar';
import { Toaster } from 'react-hot-toast';
import ImageGallery from './ImageGallery';
import css from '../styles.css';
//react-toastify
export class App extends React.Component {
  state = {
    search: '',
  };
  handleFormSubmit = search => {
    console.log(search);
    this.setState({ search });
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <Toaster />
        <ImageGallery search={this.state.search} />
      </div>
    );
  }
}
// prop onSubmit - передача аргументов функции
//при сабмите формы получить в стейт а потом пропом передать в ImageGallery
