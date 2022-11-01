import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default class SearchBar extends React.Component {
  state = {
    search: '',
  };

  handleInputChange = event => {
    this.setState({ search: event.currentTarget.value.toLowerCase() });
  };
  handleInputSubmit = event => {
    event.preventDefault();

    if (this.state.search.trim() === '') {
      toast.error('Please, add the name! ');
      return;
    }
    this.props.onSubmit(this.state.search);
    // при submit формы мы вызываем метод onSubmit из App и передаю ему значение state from SearchBar таким образом state from SearchBar доходит до App во время сабмита формы
    this.setState({ search: '' });
  };
  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleInputSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleInputChange}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.search}
          />
        </form>
      </header>
    );
  }
}
// class SearchBar
