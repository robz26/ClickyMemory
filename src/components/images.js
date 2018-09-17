import React from "react";

class Image extends React.Component {
  state = {
    value: false
  };
  onClickHandler = () => {
    if (!this.state.value) {
      this.setState({
        value: true
      });
    //   this.props.shuffle(this.props.name);
    } //callback that sets app state of game lost to true
      else {
    }
  };
  render() {
    return (
      <div className="hovereffect" onClick={this.props.shuffleArr}>
        <img
          src={this.props.imageNum}
          alt={this.props.name}
          onClick={this.onClickHandler}
          data-value={this.state.value}
        />
        <div className="overlay">
          <h2>{this.props.name}</h2>
        </div>
      </div>
    );
  }
}

export default Image;
