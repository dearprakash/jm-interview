import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AudioPlayer from '../../src';

const songs = [
  {
    url: 'http://tegos.kz/new/mp3_full/Redfoo_-_New_Thang.mp3',
    cover:
      'https://jemo.sgp1.cdn.digitaloceanspaces.com/wp-content/uploads/2022/11/IMG-20221119-WA0027.jpg',
    artist: {
      name: 'Jeyamohan',
      song: 'Interview',
    },
  }
];

ReactDOM.render(
  <div className="container">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,400,700"
      rel="stylesheet"
      type="text/css"
    />

    <h1>Interview with Jeyamohan</h1>
    <AudioPlayer songs={songs} />

    <div class="footer">Copyright &copy; 2018 Cezar Luiz.</div>
  </div>,
  document.querySelector('#demo')
);
