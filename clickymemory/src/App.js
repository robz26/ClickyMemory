import React, { Component } from "react";
import Header from "./components/header";
import Image from "./components/images";
import Lostgame from "./components/lostgame";
import characters from "./Characters.json";
import "./App.css";

class App extends Component {
  state = {
    count: 1,
    gameLost: false
  };

  importAll = r => {
    let images = [];
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    // console.log(images);
    return images;
  };
  shuffle = imgArr => {
    let shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
    shuffleArray(imgArr);
  };

  clickValue = () => {
    this.state.value ? (
      <Lostgame />
    ) : (
      this.setState({ count: this.state.count + 1 })
    );
    console.log(this.state.count);
  };

  render() {
    let images = this.importAll(
      require.context("./images/", false, /\.(png|jpe?g|svg)$/)
    );
    let imgArr = [
      { img: images["Dany_T.jpg"], name: "Daenerys Targaryen" },
      { img: images["Arya.jpg"], name: "Arya Stark" },
      { img: images["Joffery.jpg"], name: "Joffery Baratheon" },
      { img: images["john_snow.jpg"], name: "Jon Snow" },
      { img: images["Kaldrogo.jpg"], name: "Khal Drogo" },
      { img: images["Night_king.jpg"], name: "The Night King" },
      { img: images["Ramsey.jpg"], name: "Ramsay Bolton" },
      { img: images["Stannis_B.jpeg"], name: "Stannis Baratheon" },
      { img: images["Tirion.jpg"], name: "Tyrion Lannister" },
      { img: images["Sansa_stark.jpg"], name: "Sansa Stark" },
      { img: images["Cersei.jpeg"], name: "Cersei Lannister" },
      { img: images["Davos.jpg"], name: "Davos Seaworth" },
      { img: images["Hound.jpeg"], name: "Sandor Clegane" },
      { img: images["Samwell.jpeg"], name: "Samwell Tarly" },
      { img: images["Roose.jpeg"], name: "Roose Bolton" },
      { img: images["Tywin.jpg"], name: "Tywin Lannister" },
      { img: images["Ned.jpg"], name: "Ned Stark" },
      { img: images["Jamie.png"], name: "Jamie Lannister" },
      { img: images["Ygritte.jpg"], name: "Ygritte" },
      { img: images["Walder.jpeg"], name: "Walder Frey" },
      { img: images["Varys.jpg"], name: "Varys" },
      { img: images["Pod.jpg"], name: "Podrick Payne" },
      { img: images["Tormund.jpg"], name: "Tormund" },
      { img: images["Tommen.jpg"], name: "Tommen Baratheon" },
      { img: images["Rob.jpg"], name: "Rob Stark" },
      { img: images["Peter.jpg"], name: "Petyr Baelish" },
      { img: images["Olenna.jpg"], name: "Olenna Tyrell" },
      { img: images["Melisandre.jpg"], name: "Melisandre" },
      { img: images["Hodor.jpeg"], name: "Hodor" },
      { img: images["Gilly.jpg"], name: "Gilly" },
      { img: images["Catelyn.jpg"], name: "Catelyn Stark" },
      { img: images["Gendry.jpg"], name: "Gendry" },
      { img: images["Bronn.jpg"], name: "Bronn" },
      { img: images["Theon.png"], name: "Theon Greyjoy" },
      { img: images["Margery.png"], name: "Margery Tyrell" },
      { img: images["jorah.png"], name: "Jorah Mormont" },
      { img: images["Jaqen.png"], name: "Jaqen H'ghar" },
      { img: images["Brienne.png"], name: "Brienne of Tarth" },
      { img: images["Bran.png"], name: "Bran Stark" },
      { img: images["Messandei.png"], name: "Messandei" }
    ];

    // console.log(imgArr);

    const imgStyle = { margin: "auto", width: "87%" };
    return (
      <div className="App">
        <Header textColor="white" />
        <div className="container-fluid mx-auto" style={imgStyle}>
          <Image
            imageNum={imgArr[0].img}
            name={imgArr[0].name}
            value={this.state.value}
            shuffleArr={this.clickValue}
            shuffle={this.shuffle(imgArr)}
          />
          <Image
            imageNum={imgArr[1].img}
            name={imgArr[1].name}
            value={this.state.value}
            shuffleArr={this.clickValue}
            shuffle={this.shuffle(imgArr)}
          />
          <Image
            imageNum={imgArr[2].img}
            name={imgArr[2].name}
            value={this.state.value}
            shuffleArr={this.clickValue}
            shuffle={this.shuffle(imgArr)}
          />
          <Image
            imageNum={imgArr[3].img}
            name={imgArr[3].name}
            value={this.state.value}
            shuffleArr={this.clickValue}
            shuffle={this.shuffle(imgArr)}
          />
          <Image
            imageNum={imgArr[4].img}
            name={imgArr[4].name}
            value={this.state.value}
            shuffleArr={this.clickValue}
            shuffle={this.shuffle(imgArr)}
          />
          <Image
            imageNum={imgArr[5].img}
            name={imgArr[5].name}
            value={this.state.value}
            shuffleArr={this.clickValue}
            shuffle={this.shuffle(imgArr)}
          />
          <Image
            imageNum={imgArr[6].img}
            name={imgArr[6].name}
            value={this.state.value}
            shuffleArr={this.clickValue}
            shuffle={this.shuffle(imgArr)}
          />
          <Image
            imageNum={imgArr[7].img}
            name={imgArr[7].name}
            value={this.state.value}
            shuffleArr={this.clickValue}
            shuffle={this.shuffle(imgArr)}
          />
          <Image
            imageNum={imgArr[8].img}
            name={imgArr[8].name}
            value={this.state.value}
            shuffleArr={this.clickValue}
            shuffle={this.shuffle(imgArr)}
          />
          <Image
            imageNum={imgArr[9].img}
            name={imgArr[9].name}
            value={this.state.value}
            shuffleArr={this.clickValue}
            shuffle={this.shuffle(imgArr)}
          />
          <Image
            imageNum={imgArr[10].img}
            name={imgArr[10].name}
            value={this.state.value}
            shuffleArr={this.clickValue}
            shuffle={this.shuffle(imgArr)}
          />
          <Image
            imageNum={imgArr[11].img}
            name={imgArr[11].name}
            value={this.state.value}
            shuffleArr={this.clickValue}
            shuffle={this.shuffle(imgArr)}
          />
          <Image
            imageNum={imgArr[12].img}
            name={imgArr[12].name}
            value={this.state.value}
            shuffleArr={this.clickValue}
            shuffle={this.shuffle(imgArr)}
          />
          <Image
            imageNum={imgArr[13].img}
            name={imgArr[13].name}
            value={this.state.value}
            shuffleArr={this.clickValue}
            shuffle={this.shuffle(imgArr)}
          />
          <Image
            imageNum={imgArr[14].img}
            name={imgArr[14].name}
            value={this.state.value}
            shuffleArr={this.clickValue}
            shuffle={this.shuffle(imgArr)}
          />
        </div>
      </div>
    );
  }
}

export default App;
