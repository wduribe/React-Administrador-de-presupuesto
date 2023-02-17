import React from 'react';
import '../estilos/gastos.css'

const Gastos = ({ gasto,guardarGastos,gastos,guardarRestante,presupuesto,restante }) => {

	const eliminarGastos = e =>{
	
		let ids =parseInt(e.target.getAttribute('data-id'))
		
		 let nuevoGasto = gastos.filter(gasto => gasto.id !== ids );
		 guardarGastos(nuevoGasto);
		 if(nuevoGasto.length > 0){
			let nuevaCantidad = nuevoGasto.reduce((totalCantidad,objeto) =>{
				return totalCantidad + objeto.cantidad
			},0);
			let nuevoRestante = presupuesto - restante - nuevaCantidad
				restante+=nuevoRestante;
				guardarRestante(restante)
			return
		 }else {
			guardarRestante(presupuesto);
			return;
		 }
	}
	return (
		<li className='gastos'>
		<p >
			<span className='nombre'>{gasto.nombre}</span>
			<span className='cantidad'>$ {gasto.cantidad}</span>
			<a href='#'
				data-id={gasto.id}
				onClick={eliminarGastos}
				
			>X</a>
		</p>
	</li>



	);
};


export default Gastos;