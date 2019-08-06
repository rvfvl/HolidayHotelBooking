import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "theme/theme"
import Home from "pages/Home"
import Hotels from "pages/Hotels"
import SingleHotel from "pages/SingleHotel"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import routes from "config/routes"
import Navbar from "components/Navbar"
import device from "theme/mediaQueries"

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <BrowserRouter>
        <Navbar />
        {console.log(device.medium`border: 1px solid`)}
        <Switch>
          <Route exact path={routes.HOME} component={Home} />
          <Route exact path={routes.HOTELS} component={Hotels} />
          <Route path={routes.SINGLE_HOTEL} component={SingleHotel} />
        </Switch>
      </BrowserRouter>
    </>
  </ThemeProvider>
)

export default App
