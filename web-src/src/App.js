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
import React, { useState } from 'react'
import ErrorBoundary from 'react-error-boundary'
import { Home, Vote } from './pages'
import { Nav } from './components';

export const App = () => {
  const onError = (e, componentStack) => { }
  // component to show if UI fails rendering
  const fallbackComponent = ({ componentStack, error }) => (
    <h1 style={{ textAlign: 'center', marginTop: '0' }}>Something went wrong :(</h1>
  )

  const [state, setState] = useState({
    routeIndex: 0 // 0 = HOME, 1 = VOTE
  })

  const changeRoute = (newRouteIndex) => {
    setState({
      routeIndex: newRouteIndex
    })
  }

  return (
    <div style={{ height: '100vh' }}>
      <ErrorBoundary onError={onError} FallbackComponent={fallbackComponent} >
        <Nav navigateTo={changeRoute} />
        {
          state.routeIndex === 0 &&
          <Home/>
        }
        {
          state.routeIndex === 1 &&
          <Vote/>
        }
      </ErrorBoundary>
    </div>
  )
}

export default App;