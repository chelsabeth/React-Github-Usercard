import React from "react";
import "./App.css";

import axios from "axios";

import MyCard from "./components/MyCard";
// import Followers from "./components/Followers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myCard: [],
      followers: []
    }
  }

  fetchUser = () => {
    axios
    .get("https://api.github.com/users/chelsabeth")
    .then(res => {
      this.setState({
        myCard: res.data})
    })
    console.log("My Github Data: ", this.state.myCard);
  }

  componentDidMount() {
    this.fetchUser("chelsabeth")
    axios
    .get("https://api.github.com/chelsabeth/followers")
    .then(res => {
      this.setState({
        followers: res.data})
    });
    console.log("My Github Followers Data: ", this.state.followers);
}

  render() {
    return (
      <div className="App">
        <h1>Github UserCard App</h1>
        <MyCard data={this.state.myCard}/>
      </div>
    );
  }
}

export default App;
