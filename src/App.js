import React, { Component } from 'react'
import "antd/dist/antd.css";
import AppRouter from './components/routers/index'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <AppRouter/>
      </div>
    )
  }
}
