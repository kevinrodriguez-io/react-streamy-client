import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

import Header from './Header';

import 'semantic-ui-css/semantic.min.css';

export default class App extends Component {

  _routes = [
    {
      path: '/',
      component: StreamList,
      exact: true
    },
    {
      path: '/streams/new',
      component: StreamCreate,
      exact: true
    },
    {
      path: '/streams/edit',
      component: StreamEdit,
      exact: true
    },
    {
      path: '/streams/delete',
      component: StreamDelete,
      exact: true
    },
    {
      path: '/streams/show',
      component: StreamShow,
      exact: true
    }
  ]

  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <>
            <Header />
            {this._routes.map(route => <Route key={route.path} {...route} />)}
          </>
        </BrowserRouter>
      </div>
    );
  }

}
