import React from "react";

class Recordatorio extends React.Component {     
    render(){
        const {ultima, historial } = this.props;
        return(
            <div className="recordatorio">
                <h3>Selección anterior: { ultima } </h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>
                    {
                        historial.map( (item, index) => {
                            return <li key={index.toString()}>{ item }</li>
                        })
                    }
                </ul>
            </div>
        )
    }


}

export default Recordatorio;