import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./pages/homePage";
import AccountPage from "./pages/accountPage";
import LibraryPage from "./pages/libraryPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import {
  faCog,
  faHome,
  faUser,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Router>
        <a href="/options" id="optionsBtn">
          <span>
            <FontAwesomeIcon icon={faCog} className="fas fa-home" />
          </span>
        </a>
        <Header></Header>
        <Switch>
          <div className="App-header">
            <Route exact path="/" component={HomePage} />
            <Route path="/home" component={HomePage} />
            <Route path="/account" component={AccountPage}>
              my account
              <FontAwesomeIcon icon={faUser} />
            </Route>
            <Route path="/library" component={LibraryPage}>
            </Route>
            <Route path="/options" component={LibraryPage}>
              options
              <FontAwesomeIcon icon={faCog} />
            </Route>
          </div>
        </Switch>
        <Footer></Footer>
      </Router>
    </View>
    
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;