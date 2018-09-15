import React, { Component } from "react";
import Header from "./components/header";
import Image from "./components/images";

class App extends Component {
  
  importAll = r => {
    let images = [];
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    console.log(images);
    return images;
  };
  render() {
    const images = this.importAll(
    require.context("./images/", false, /\.(png|jpe?g|svg)$/)
    );
    
    return (
      <div className="App">
        <Header textColor="white" />
        <Image imageNum={images["Dany_T.jpg"]} />
        <Image imageNum={images["Arya.jpg"]} />
        <Image imageNum={images["Joffery.jpg"]} />
        <Image imageNum={images["john_snow.jpg"]} />
        <Image imageNum={images["Kaldrogo.jpg"]} />
        <Image imageNum={images["Night_king.jpg"]} />
        <Image imageNum={images["Ramsey.jpg"]} />
        <Image imageNum={images["Stannis_B.jpeg"]} />
        <Image imageNum={images["Tirion.jpg"]} />
        <Image imageNum={images["Sansa_stark.jpg"]} />
      </div>
    );
  }
}

export default App;
