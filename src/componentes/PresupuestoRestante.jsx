import React from 'react'
import {revisarPresupuesto} from'../helper.js';
import '../estilos/presupuestoRestante.css'

const PresupuestoRestante = ({ presupuesto,restante }) => {



	
	return (
		<div className='presupuesto-restante'>
			<p className='alert alert-primary'>Presupuesto <span className='cantidads'> $ {presupuesto}</span></p>
			<p className={revisarPresupuesto(presupuesto,restante)}>Restante <span className='cantidads'> $ {restante}</span></p>
		</div>
	);
}

export default PresupuestoRestante;