import React, { Component } from 'react';

export default class CatComponent extends Component {
  render() {
    return (
      <div className="bar" id="cat">
        <img src="/cat.gif" alt="cat gif looking left and right" />
      </div>
    );
  }
}