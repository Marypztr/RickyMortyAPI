import React, { Component } from 'react'
import  styles from "./Register.module.css"



export default class Register extends Component {

    render() {
    const { handleChange, handleSubmit, value } = this.context;

        
        return (
            <div className={styles.formContainer}>
                <h1>Registrate para tener toda la información de "Rick y Morty" en un solo lugar</h1>
                <form onSubmit={handleSubmit}>
                     <div>
                         <label>Nombre</label>
                        <input placeholder="Ej.Rodrigo" type="text" value={value} onChange={handleChange} />
                     
                     </div>
                     <div>
                        <label>Correo Electrónico</label>
                        <input type="email"  placeholder="Ej.morty@mail.com"/>
                     </div>
                     <div>
                        <label>Contraseña</label>
                        <input type="password" placeholder="Contraseña"/>
                     </div>
                        <input type="submit" value="Submit" />

                     {/* <button type="submit" value="Submit">Registrarme</button> */}
                </form> 
            </div>
        )
    }
}
