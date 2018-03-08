import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

  componentDidMount() {
    this.setState({ dummyData });
  }

  render() {
    return (
      <div className="App">
        <div>
        <SearchBar />
        </div>
        {this.state.dummyData.map((post, index) => {
          return (
          <div key={index}>
          <PostContainer insta={post} />;
          </div>
          );
        })};
      </div>
    );
  }
}

export default App;
