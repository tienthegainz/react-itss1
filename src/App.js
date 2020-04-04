import React, { Component } from 'react';
import './App.css';
import SongIcon from './SongIcon.js';
import Profile from './Profile.js';
import Search from './Search.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          name: "Four Season",
          image: "https://avatar-nct.nixcdn.com/song/2019/03/24/9/3/e/d/1553436192079_640.jpg",
          description: "The Korean's Beyonce returns!!!!",
        },
        {
          name: "Don't start now",
          image: "https://xonefm.com/wp-content/uploads/2019/11/EHo4IkgX0AAiv2z-1024x1024.jpg",
          description: "Dua Lipa's new ablum. Party all night long",
        },
        {
          name: "Four Season",
          image: "https://avatar-nct.nixcdn.com/song/2019/03/24/9/3/e/d/1553436192079_640.jpg",
          description: "The Korean's Beyonce returns!!!!",
        },
        {
          name: "Don't start now",
          image: "https://xonefm.com/wp-content/uploads/2019/11/EHo4IkgX0AAiv2z-1024x1024.jpg",
          description: "Dua Lipa's new ablum. Party all night long",
        },
        {
          name: "Kill this love",
          image: "https://avatar-nct.nixcdn.com/playlist/2017/08/29/6/8/4/e/1503941624343_500.jpg",
          description: "BLACKPINK IN YOUR AREA. Newest single",
        },
        {
          name: "Duyen Am",
          image: "https://media.ex-cdn.com/EXP/media.homeaz.vn/files/content/2019/10/23/tf8tj-so-15715778039661027443493-1108.jpeg",
          description: "Vietnamese top chart single.",
        },
        {
          name: "Kill this love",
          image: "https://avatar-nct.nixcdn.com/playlist/2017/08/29/6/8/4/e/1503941624343_500.jpg",
          description: "BLACKPINK IN YOUR AREA. Newest single",
        },
        {
          name: "Duyen Am",
          image: "https://media.ex-cdn.com/EXP/media.homeaz.vn/files/content/2019/10/23/tf8tj-so-15715778039661027443493-1108.jpeg",
          description: "Vietnamese top chart single.",
        },
      ]
    };
  }

  render_songs() {
    // console.log(this.state.songs);
    var songs = this.state.songs.map((item, idx) =>
      <div className="App-grid-item">
        <SongIcon
          index={idx}
          name={item.name}
          image={item.image}
          description={item.description}
          onClick={() => this.play_song(idx)}
        />
      </div>
    );
    songs = <div className="App-grid-container">{songs}</div>;
    return songs;
  }

  play_song(index) {
    console.log('Play song: ', index);
  }

  render() {
    var row1 = this.render_songs();
    return (
      <div className="App">
        <div className="App-profile">
          <Profile />
        </div>
        
      <div className="App-grid-container" style={{width: 250}}>
        <Search songs={this.state.songs}/>
      </div>
        {row1}
        
        {console.log(this.state.songs)}
        
      </div>
    );
  }
}


export default App;
