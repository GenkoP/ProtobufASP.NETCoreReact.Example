import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { WeatherLayoutJSON } from './components/WeatherLayoutJSON';
import { WeatherLayoutProtobuf } from './components/WeatherLayoutProtobuf';

import { Counter } from './components/Counter';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data-json' component={WeatherLayoutJSON} />
        <Route path='/fetch-data-protobuf' component={WeatherLayoutProtobuf} />
      </Layout>
    );
  }
}
