import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };
  render() {
    const { searchMovies } = this.props;
    const { search, type } = this.state;
    return (
      <div className='row'>
        <div className='input-field'>
          <input
            placeholder='search'
            type='search'
            className='validate'
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            onClick={() => searchMovies(search, type)}
            className='btn search-btn'
          >
            Search
          </button>
        </div>
        <div>
          <label>
            <input
              onChange={this.handleFilter}
              className='with-gap'
              name='type'
              type='radio'
              data-type='all'
              checked={type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              onChange={this.handleFilter}
              className='with-gap'
              name='type'
              type='radio'
              data-type='movie'
              checked={type === 'movie'}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              onChange={this.handleFilter}
              className='with-gap'
              name='type'
              type='radio'
              data-type='series'
              checked={type === 'series'}
            />
            <span>Series Only</span>
          </label>
        </div>
      </div>
    );
  }
}

export default Search;
