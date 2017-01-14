import React, { Component } from 'react';
import Request from 'superagent';
import './App.css';

export default class BoardComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recent: [],
      alltime: []
    };
  }

  componentDidMount() {
    this.GetRecent();
  }

  GetRecent() {
    var url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    var _this = this;
    return Request.get(url).then(function(data) {
      console.log(data.body[0]);
      _this.setState({ recent: data.body });
    });
  }

  GetAlltime() {
    var url = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    var _this = this;
    return Request.get(url).then(function(data) {
      _this.setState({ alltime: data.body });
    });
  }

  render() {
    return (
      <div>
        {this.state.recent.map( (user) => {
          return (
            <div class='name'>{user.username}</div>
          );
        }, this)}
      </div>
    );
  }
}
