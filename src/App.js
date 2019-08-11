import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "theme/theme"
import Home from "pages/Home"
import Hotels from "pages/Hotels"
import FavouriteHotels from "pages/FavouriteHotels"
import SingleHotel from "pages/SingleHotel"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import routes from "config/routes"
import Navbar from "components/Navbar"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Arial', sans-serif;
  }

  a {
    text-decoration: none;
  }
`

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path={routes.HOME} component={Home} />
          <Route exact path={routes.HOTELS} component={Hotels} />
          <Route path={routes.SINGLE_HOTEL} component={SingleHotel} />
          <Route exact path={routes.FAVOURITES} component={FavouriteHotels} />
        </Switch>
      </BrowserRouter>
    </>
  </ThemeProvider>
)

export default App
