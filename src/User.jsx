import React, { Component } from 'react';

import { UserContext } from './UserContext';

export default class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <div>
            <h1>User info {JSON.stringify(context.user)}</h1>
            <button onClick={context.logout}>logout</button>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
