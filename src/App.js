import React from "react";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
