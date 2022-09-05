import { useState } from "react"
import '../Styles/Tabla.css'

export const ComponentTabla2 = () => {
    const [n1, Setnum1] = useState('')

    const Setn1 = (event) => {
        Setnum1(event.target.value)
    }
    const [n2, Setnum2] = useState('')

    const Setn2 = (event) => {
        Setnum2(event.target.value)
    }
    const [n3, Setnum3] = useState('')

    const Setn3 = (event) => {
        Setnum3(event.target.value)
    }
    const [n4, Setnum4] = useState('')

    const Setn4 = (event) => {
        Setnum4(event.target.value)
    }
    const [n5, Setnum5] = useState('')
    const [n6, Setnum6] = useState('')
    const sumar =() => {
        const num5 = parseInt(n1) + parseInt(n3)
        Setnum5(num5)
        const num6 = parseInt(n2) + parseInt(n4)
        Setnum6(num6)

    }

    return(
        <>
            <div className="body9">
                <div className="titulo9">
                    <h1>10. Tabla 2</h1>
                </div>

                <div className="input9">
                <p>Ingrese número en los campos de la tabla</p>
                   
                    {/* 2 filas TR */}
                    {/* 2 columnas TD */}
                     <table>
                     <tbody>
                <tr>
                    <td> <input type="text" onChange={(event) => Setn1(event)} value={n1} placeholder="Número1" className="form-control form-control-sm"/> </td> 
                    <td> <input type="text" onChange={(event) => Setn2(event)} value={n2} placeholder="Número2" className="form-control form-control-sm"/>  </td> 
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td> <input type="text" onChange={(event) => Setn3(event)} value={n3} placeholder="Número3" className="form-control form-control-sm"/> </td> 
                    <td> <input type="text" onChange={(event) => Setn4(event)} value={n4} placeholder="Número4" className="form-control form-control-sm"/> </td> 
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td> <input type="text" aria-label="Disabled input example" disabled readOnly onChange={(event) => Setn3(event)} value={n5} placeholder={n5} className="form-control form-control-sm"/></td> 
                    <td> <input type="text" aria-label="Disabled input example" disabled readOnly onChange={(event) => Setn3(event)} value={n6} placeholder={n6} className="form-control form-control-sm"/>  </td> 
                </tr>
                </tbody>
            </table> 
            <p></p>
            <button onClick={() => sumar()} className="btn btn-success">Sumar tabla</button>
                </div>

            </div>
        </>
    )
}