import React from "react";
import data from './data.json';
import Recordatorio from "./Recordatorio";
import Opciones from './Opciones';
import Swal from 'sweetalert2';

class Historia extends React.Component {
    constructor( props ){
        super( props );
        this.state = {
            data,  
            historiaActual: { },    
            historial: [ ],        
            maximoHistorias:  5,
            numeroHistoria: 1,      
            ultimaSeleccion: "",      
                   
        };
        this.handleClick = this.handleClick.bind(this);
    }

    obtenerHistoriaPorId = ( id ) => {
        return this.state.data.find( data => data.id === id )
    }

    componentWillMount(){
        this.setState( { historiaActual: this.obtenerHistoriaPorId( this.state.numeroHistoria + this.state.ultimaSeleccion )})
    }

   
    handleClick = (e) => {
        if( this.state.numeroHistoria >= this.state.maximoHistorias)
        {
            Swal.fire({
                  title: "FIN",   
                  confirmButtonText: "Aceptar",
                });
            return;
        }

        this.setState( state => { 
            let { historial, numeroHistoria } = state;
            numeroHistoria = this.state.numeroHistoria + 1; 
            const letraElegida = e.target.textContent;
            return {
                numeroHistoria,
                ultimaSeleccion: letraElegida, 
                historial : [ ...historial, letraElegida ],
                historiaActual: this.obtenerHistoriaPorId( numeroHistoria + letraElegida.toLowerCase() )
            }
         })
    }
    render(){
        const { historia,  opciones } = this.state.historiaActual;
        return (
        <div className="layout">
                <h1 className="historia">{ historia }</h1>
                <div className="opciones">
                    <Opciones key={ "a" } handleClick={ this.handleClick } letra={ "a" } texto={ opciones.a }/>
                    <Opciones key={ "b" } handleClick={ this.handleClick } letra={ "b" } texto={ opciones.b }/>
                </div>                                
                <Recordatorio ultima={ this.state.ultimaSeleccion } historial={ this.state.historial } />
        </div>
        )
    }
}

export default Historia;
