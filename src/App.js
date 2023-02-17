import React, { useState, useEffect } from 'react'
import Preguntar from './componentes/Preguntar';
import './estilos/preguntar.css';
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';
import PresupuestoRestante from './componentes/PresupuestoRestante';

function App() {
  
  
  const [presupuesto, guardarPresupuesto]= useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false)


  


  //useEffect que actualiza el restante
  useEffect(()=>{
    if(creargasto){
      //Agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ]);  
      
      //Resta el presupuesto actual
      let nuevoRestante =  restante - gasto.cantidad;
      guardarRestante(nuevoRestante);     
      guardarCrearGasto(false);
    }
    
  }, [gasto,creargasto,gastos,restante]);
 
  
  return (
    <div className='container'>
      <header className='header'>
        <h1 className='titulo'>
          Gasto Semanal
        </h1>
        <div className='contenido-principal'>
        {mostrarpregunta 
        
          ?(<Preguntar
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            actualizarPregunta={actualizarPregunta}
        />)
          :(<div className='row'>
              <div className='col-md-12 col-sm-12 col-lg-6'>
                <Formulario
                  guardarGasto ={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
              />
              </div>
              <div className='col-md-12 col-sm-12 col-lg-6'>
                <Listado
                  gastos={gastos}
                  presupuesto={presupuesto}
                  restante={restante}
                  guardarGastos={guardarGastos}
                  guardarRestante={guardarRestante}

                />
                <PresupuestoRestante
                  presupuesto={presupuesto}
                  restante={restante}


                />

                <></>
              </div>
            </div>)
        }
        
        </div>
      </header>
    </div>
  );
}
export default App;
