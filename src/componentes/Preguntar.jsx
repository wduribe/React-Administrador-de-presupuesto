import React, { Fragment, useState } from 'react';
import Error from './Error';


const Preguntar = ({ guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

	//Definir el state
	const [cantidad, guardarCantidad] = useState(0)
	const [error, guardarError] = useState(false)

	const definirPresupuesto = e => {
		guardarCantidad(parseInt(e.target.value, 10))
	}

	//Submit form
	const agregarPresupuesto = e => {
		e.preventDefault();

		//Validando la cantidad
		if (cantidad < 1 || isNaN(cantidad)) {
			guardarError(true);
			return;
		}
		//Cuando se ingrese el valor ideal
		guardarError(false);
		guardarPresupuesto(cantidad);	
		guardarRestante(cantidad);
		actualizarPregunta(false);
	
	}
	return (
		<Fragment>
			<h2 className='titulo-form'>Ingrese su presupuesto</h2>

			{error ? <Error mensaje='El presupuesto es incorrecto' /> : null}

			<form
				onSubmit={agregarPresupuesto}
				className='form'
			>
				<input
					type='number'
					className='presupuesto mx-100'
					placeholder='Ingresa tu presupuesto'
					onChange={definirPresupuesto}
				/>
				<input
					type='submit'
					className='button'
					value='Definir Presupuesto'
				/>
			</form>

		</Fragment>
	);
}

export default Preguntar;