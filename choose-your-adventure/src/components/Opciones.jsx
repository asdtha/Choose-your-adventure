import React from "react";

class Opciones extends React.Component {
  render() {
    const {texto} = this.props.texto;
    return (
        <div className="opcion">
            <button className="botones" onClick={this.props.handleClick}>{this.props.letra.toUpperCase()}</button>
            <h2>{texto}</h2>
        </div>
    );
  }
}

export default Opciones;