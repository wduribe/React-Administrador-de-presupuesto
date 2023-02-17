import React, { useState } from 'react'
import '../estilos/formulario.css'
import Error from './Error';

const Formulario = ({guardarGasto, guardarRestante, guardarCrearGasto}) => {
	const [nombre, guardarNombre] = useState('');
	const [cantidad, guardarCantidad] = useState(0);
	const [error, guardarError] = useState(false);	

	const agregarGasto = e => {
		e.preventDefault();
		
		//Validar
		if (cantidad < 1 || isNaN(cantidad) || cantidad === '' || nombre ==='') {
			guardarError(true);
			return;
		}
		guardarError(false);

		//Construir el gasto
		const gasto = {
			id: Date.now(),
			nombre,
			cantidad,
		}

		//Pasar el gasto al componente principal
		guardarGasto(gasto);
		guardarCrearGasto(true);

		//Resetear el formulario
		guardarNombre('');
		guardarCantidad(0);

		
	}
	return (
		<form
			onSubmit={agregarGasto}>
			<h2 className='titulo-form'>Agrega tus gastos</h2>
			{error
				?
				<Error
					mensaje='Ambos campos son obligatorios o presupuesto Incorrecto'
				/>
				:
				null
			}

			<div className='campo'>
				<label>Nombre Gasto</label>
				<input
					type='text'
					className='mx-100'
					placeholder='Ej. Transporte'
					value={nombre}
					onChange={e => guardarNombre(e.target.value)}
				/>
			</div>
			<div className='campo'>
				<label>Cantidad Gasto</label>
				<input
					type='number'
					className='mx-100'
					placeholder='Ej. 300'
					value={cantidad}
					onChange={e => guardarCantidad(parseInt(e.target.value))}
				/>
			</div>
			<input
				type='submit'
				className='button button-agregar-gasto'
				value='Agregar Gasto'
			/>
		</form>

	);
}
export default Formulario;