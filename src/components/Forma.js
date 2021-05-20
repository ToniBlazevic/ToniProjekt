import React, { Component } from "react";
export default class Forma extends Component {
  state = {
    ime: "",
    prezime: "",
    mail: "",
    poruka: ""
  };

  onSubmit = (e) => {
    e.preventDefault();

    console.log("Poslano", this.state.ime);
    window.alert(this.state.ime);
  };
  render() {
    return (
      <form className="forma">
        <input
          placehoder="ime"
          value={this.state.ime}
          onChange={(e) => this.setState({ ime: e.target.value })}
        />
        <br />
        <br />
        <input
          placehoder="prezime"
          value={this.state.prezime}
          onChange={(e) => this.setState({ prezime: e.target.value })}
        />
        <br />
        <br />
        <input
          placehoder="mail"
          value={this.state.mail}
          onChange={(e) => this.setState({ mail: e.target.value })}
        />
        <br />
        <br />
        <input
          placehoder="poruka"
          value={"Napisi poruku"}
          onChange={(e) => this.setState({ poruka: e.target.value })}
        />
        <br />
        <br />
        <button className="potvrdi" onClick={(e) => this.onSubmit(e)}>
          Potvrdi
        </button>
      </form>
    );
  }
}
