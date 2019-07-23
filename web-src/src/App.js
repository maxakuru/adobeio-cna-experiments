/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import React from 'react'
import ErrorBoundary from 'react-error-boundary'
import { Home, Vote } from './pages'

export default class App extends React.Component {
  constructor () {
    super()

    // error handler on UI rendering failure
    this.onError = (e, componentStack) => {}

    // component to show if UI fails rendering
    this.fallbackComponent = ({ componentStack, error }) => (
      <h1 style={{ textAlign: 'center', marginTop: '0' }}>Something went wrong :(</h1>
    )
  }

  render () {
    return (
      <div style={{ height: '100vh' }}>
        <ErrorBoundary onError={this.onError} FallbackComponent={this.fallbackComponent} >
          <Home />
        </ErrorBoundary>
      </div>
    )
  }
}
