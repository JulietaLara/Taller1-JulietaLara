import { useState } from "react"
import '../Styles/Alumno.css'
export const ComponentAlumno = () => {
    const [name, setnam] = useState('')
    const [nota1, setnum1] = useState('')
    const [nota2, setnum2] = useState('')
    const [nota3, setnum3] = useState('')

    const [alumno, setAlumno] = useState({})

    const setName = (event) => {
        setnam(event.target.value)
    }

    const setn1 = (event) => {
        setnum1(event.target.value)
    }

    const setn2 = (event) => {
        setnum2(event.target.value)
    }
    const setn3 = (event) => {
        setnum3(event.target.value)
    }

    const calcularNota = () => {
        const alumnito = {
            nombre: name,
            n1: nota1,
            n2: nota2,
            n3: nota3,
            sal: 0.0
        }
        console.log(alumnito)
        alumnito.sal = (alumnito.n1 * .2) + (alumnito.n2 * .2) + (alumnito.n3 * .6)

        setAlumno(alumnito)


    }


    return (

        <>
            <div className="body10">
                <div className="titulo10">
                    <h1>11. Ingrese el nombre del estudiante</h1>  
                </div>

                <div className="input10">
                    <input type="text" onChange={(event) => setName(event)} value={name} placeholder="Nombre" className="form-control" />
                    <h2>Ingrese las notas del estudiante</h2>
                    <input type="text" onChange={(event) => setn1(event)} value={nota1} placeholder="Nota 1" className="form-control" />
                    <input type="text" onChange={(event) => setn2(event)} value={nota2} placeholder="Nota 2" className="form-control" />
                    <input type="text" onChange={(event) => setn3(event)} value={nota3} placeholder="Nota 3" className="form-control" />
                    <p>Nota 1 vale 20%, nota 2 vale 20%, nota 3 vale 60%</p>
                    <button onClick={() => calcularNota()} className="btn btn-success">Calcular nota</button>
                    <p> La nota final  de {alumno.name} es: {alumno.sal} </p>
                </div>
              
            </div>
        </>

    )
}
