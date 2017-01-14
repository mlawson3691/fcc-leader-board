import React, { Component } from 'react';
import './App.css';

export default class RowComponent extends Component {
  render() {
    return (
      <div>
        <div className='rank'>{this.props.index+1}</div>
        <div className='name'>
          <img className='avatar' src={this.props.user.img} alt='Avatar' />
          {this.props.user.username}
        </div>
        <div className='month'>{this.props.user.recent}</div>
        <div className='total'>{this.props.user.alltime}</div>
      </div>
    );
  }
}
