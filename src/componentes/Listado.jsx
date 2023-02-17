import React from 'react'
import Gastos from './Gastos'
import Error from './Error';

const Listado = ({gastos, guardarGastos,guardarRestante,presupuesto,restante}) => (

    <div className='gastos-realizados'>
        {restante <=0
            ?
            <Error
                mensaje={'Saldo insuficiente, debe borrar un gasto'}
            />
            :
            <h2 className='titulo-form'>Listado</h2>
        }
        {gastos.map(gasto => (
            <Gastos
                key={gasto.id}
                gasto={gasto}
                presupuesto={presupuesto}
                guardarGastos={guardarGastos}
                gastos={gastos}
                guardarRestante={guardarRestante}
                restante={restante}


            />
        ))}

    </div>

);
export default Listado;