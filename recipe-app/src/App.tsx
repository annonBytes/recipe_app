import React, { useEffect } from 'react'
import { BrowserRouter, Route, RouteComponentProps, Switch } from 'react-router-dom'
import routes from './config/routes'
import AuthRoute from './components/AuthRoute'
import { useStateValue } from './StateProvider'
import { auth } from './config/firebase'
import { Inventory } from './pages/shared/Inventory'
import { Provider } from 'react-redux'
import { store } from './store'


function App() {

  const [{ }, dispatch] = useStateValue()

  useEffect(() => {
    //runs only once when the component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>>", authUser)

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      }
      else {
        //user get's logged out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) =>
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(routeProps: RouteComponentProps<any>) => {
                if (route.protected)
                  return <AuthRoute><route.component  {...routeProps} /></AuthRoute>;

                return <route.component  {...routeProps} />;
              }}
            />)}

          <Provider store={store}>
            <Inventory />
          </Provider>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
