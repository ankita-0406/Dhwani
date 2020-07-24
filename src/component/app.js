import React from "react";
import style from "../component/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      focus: [],
      k: 1,
    };
    this.textInput = React.createRef();
  }

  componentDidMount = () => {
    console.log("refs ", this.refs);
  };
  focusInput() {
    this.textInput.current.focus();
  }
  onChangeHandler = (e) => {
    if (e.target.value.length == 4) {
      let arr = this.state.focus;
      arr[e.target.name] = false;
      this.setState({
        [e.target.name]: e.target.value,
        focus: arr,
      });
    }
    if (e.target.value.length < 4) {
      let arr = this.state.focus;
      arr[e.target.name] = true;

      this.setState({
        focus: arr,
        [e.target.name]: e.target.value,
      });
    }

    if (this.state.input1.length == 3) {
      this.someName.focus();
    }
    if (this.state.input2.length == 3) {
      this.someName2.focus();
    }
    if (this.state.input3.length == 3) {
      this.someName3.focus();
    }
  };

  onPasetHandler = (e) => {
    let pasteValue = e.clipboardData.getData("Text");
    let k = null;
    let r = null;

    if (pasteValue.length <= 16) {
      if (pasteValue.length > 4) {
        k = parseInt(pasteValue.length / 4);
        r = pasteValue.length % 4;
        for (let i = 1; i <= k; i++) {
          this.setState({
            [`input${i}`]: pasteValue
              .split("")
              .splice(4 * (i - 1), 4)
              .join(""),
          });
        }
        if (4 - k != 0) {
          this.setState({
            [`input${k + 1}`]: pasteValue
              .split("")
              .splice(pasteValue.length - r, r)
              .join(""),
          });
        }
      }
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="string"> Card Number * </div>

          <input
            type="number"
            value={this.state.input1}
            name="input1"
            ref={this.textInput}
            onClick={() => this.focusInput()}
            onPaste={(e) => this.onPasetHandler(e)}
            onChange={(e) => this.onChangeHandler(e)}
            className={
              this.state.focus["input1"] == true ? "card-active" : "card"
            }
          />

          <input
            type="number"
            value={this.state.input2}
            ref={(ref) => (this.someName = ref)}
            name="input2"
            onChange={(e) => this.onChangeHandler(e)}
            className={
              this.state.focus["input2"] == true ? "card-active" : "card"
            }
          />

          <input
            type="number"
            value={this.state.input3}
            name="input3"
            ref={(ref) => (this.someName2 = ref)}
            onChange={(e) => this.onChangeHandler(e)}
            className={
              this.state.focus["input3"] == true ? "card-active" : "card"
            }
          />

          <input
            type="number"
            value={this.state.input4}
            name="input4"
            ref={(ref) => (this.someName3 = ref)}
            onChange={(e) => this.onChangeHandler(e)}
            className={
              this.state.focus["input4"] == true ? "card-active" : "card"
            }
          />
        </div>
      </div>
    );
  }
}
export default App;
