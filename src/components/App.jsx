import React, { Component } from 'react';
import { ImageGallery, Searchbar } from './index';
import { Button, Loader } from '../common/components';

import { getImageApi } from '../api/image';

import './index.css';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: '',
    searchValue: '',
    page: 1,
  };

  componentDidMount() {
    this.getImages();
  }

  componentDidUpdate(prevProps, prevState) {
    const { page, searchValue } = this.state;

    if (prevState.page !== page || prevState.searchValue !== searchValue) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { searchValue, page } = this.state;

    if (!searchValue) return;

    try {
      this.setState({ isLoading: true, error: '' });

      const data = await getImageApi(searchValue, page);

      this.setState((prevState) => ({
        images: [...prevState.images, ...data.hits],
        isLoading: false,
        maxResults: data.totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };

  handleSearch = (newSearchValue) => {
    if (this.state.searchValue.toLowerCase() === newSearchValue.toLowerCase()) return;

    this.setState({
      searchValue: newSearchValue,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState((prev) => ({
      page: prev.page + 1,
    }));
  };

  render() {
    const { images, isLoading, maxResults, error } = this.state;
    const showLoadMore = !isLoading && images.length > 0;

    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSearch} />
        {error && <h1>{error}</h1>}
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {
          showLoadMore && (maxResults > images.length
            ? <Button name="Load more" onCLick={this.handleLoadMore} />
            : <h3>The end</h3>)
        }
      </div>
    );
  }
}

export default App;
