import React, { Component } from 'react';
import './Myapp.css';

class Myapp extends Component {
  render() {
    return (
      <div className='myInfo'>
        <img className='photo' src='/profile.png' alt='photo' />
        <table>
          <tr>
            <td><label>Name</label></td>
            <td><label>Para Sree Nithya </label></td>
          </tr>
          <tr>
            <td><label>Program</label></td>
            <td><label>B.Tech. - CSE</label></td>
          </tr>
          <tr>
            <td><label>Mobile No.</label></td>
            <td><label>701398XXXX</label></td>
          </tr>
          <tr>
            <td><label>Email ID</label></td>
            <td><label>2400031738@kluniversity.in</label></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Myapp;