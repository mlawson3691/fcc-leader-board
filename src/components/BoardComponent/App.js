import React, { Component } from 'react';
import Request from 'superagent';
import RowComponent from './../RowComponent/App.js';
import './App.css';

export default class BoardComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewing: 'recent',
      users: []
    };
  }

  componentDidMount() {
    this.GetRecent();
  }

  GetRecent() {
    var url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    var _this = this;
    return Request.get(url).then(function(data) {
      _this.setState({ users: data.body });
    });
  }

  GetAlltime() {
    var url = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    var _this = this;
    return Request.get(url).then(function(data) {
      _this.setState({ users: data.body });
    });
  }

  _changeDisplay() {
    if (this.state.viewing === 'recent') {
      this.setState({viewing: 'alltime'});
      this.GetAlltime();
    } else {
      this.setState({viewing: 'recent'});
      this.GetRecent();
    }
  }

  render() {
    return (
      <div>
        <div className='switchBtn' onClick={this._changeDisplay.bind(this)}>Switch Ranking</div>
        <div className='chart'>
          <div className='header-row'>
            <div className='rank'>RANK</div>
            <div className='name'>CAMPER</div>
            <div className='month'>LAST 30 DAYS</div>
            <div className='total'>ALL TIME</div>
          </div>
          {this.state.users.map( (user, index) => {
            var rowClass;
            if (index % 2 === 0) {
              rowClass = 'row';
            } else {
              rowClass = 'row shade';
            }
            return (
              <div className={rowClass}>
                <RowComponent
                  user={user}
                  index={index}
                />
              </div>
            );
          }, this)}
        </div>
      </div>
    );
  }
}
