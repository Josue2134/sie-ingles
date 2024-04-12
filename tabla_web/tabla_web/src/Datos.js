import React, { useState } from "react";
//import { Button } from "antd";
import axios from 'axios'


export default function Datos(){

    const [formData,setFormData] = useState({
        periodo:'',
        horas:'',
        calificacion:'',
        estatus:'',
        docente:'',
    })

    const handleChange= (e) => {
        setFormData({ ...formData,[e.target.name]:e.target.value })
    };

    const handleSudmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            await axios.post('http://localhost:3000/api/saveData', formData);

            console.log('Datos emviados correctamente');
        } catch (error) {    
            console.error('error de sintaxis', error);

        }
    }

    return(
        <div>
            <form className="" onSubmit={handleSudmit}>
                <div className="input_periodo">
                <input type="text" required=" " name="periodo" onChange={handleChange} />
                <span className="span_periodo">periodo</span>
                <i className="i_periodo"></i>
                </div>

                <div className="input_horas">
                <input type="number" required=" " name="horas" onChange={handleChange} />
                <span className="span_horas">horas</span>
                <i className="i_horas"></i>
                </div>

                <div className="input_calificacion">
                <input type="number" required=" " name="calificacion" onChange={handleChange} />
                <span className="span_calificacion">calificacion</span>
                <i className="i_calificacion"></i>
                </div>

                <div className="input_estatus">
                <input type="text" required=" " name="estatus" onChange={handleChange} />
                <span className="span_estatus">estatus</span>
                <i className="i_estatus"></i>
                </div>

                <div className="input_docente">
                <input type="text" required=" " name="docente" onChange={handleChange} />
                <span className="span_docente">docente</span>
                <i className="i_docente"></i>
                </div>
                
            </form>
        </div>
    )
}