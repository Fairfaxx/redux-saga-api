import React from 'react';
import { connect } from 'react-redux';
import {getUsersRequest} from '../actions/users';
function App() {
  
	return <div>Hello world</div>;
}

export default connect(null,
  getUsersRequest())(App);
