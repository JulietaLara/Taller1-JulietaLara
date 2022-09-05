import { useState } from "react"
import '../Styles/Alumno.css'
export const ComponentAlumnos = () => {
    const [name, setnam] = useState('')
    const [nota1, setnum1] = useState('')
    const [nota2, setnum2] = useState('')
    const [nota3, setnum3] = useState('')
    var [sal, set] = useState('')

    const [alumno, setAlumno] = useState({})

    const [alumnos, setAlumnos] = useState([])

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

    const agregarAlumno = () => {
        const alumnito = {
            nombre: name,
            Nota1: nota1,
            Nota2: nota2,
            Nota3: nota3,
            NotaFinal: 0.0
        }
        console.log(alumnito)
        alumnito.NotaFinal = (alumnito.Nota1 * .2) + (alumnito.Nota2 * .2) + (alumnito.Nota3 * .6)

        setAlumno(alumnito)

        setAlumnos([...alumnos, alumnito])
    }
    const mostrarAlumno = () => {
        
        set(JSON.stringify(alumnos))

    }


    return (

        <>
            <div className="body10">
                <div className="titulo10">
                    <h1>12. Ingrese el nombre del estudiante</h1>
                </div>
                
                <div className="input10">
                    <input type="text" onChange={(event) => setName(event)} value={name} placeholder="Nombre" className="form-control" />
                    <h2>Ingrese las notas del estudiante</h2>
                    <input type="text" onChange={(event) => setn1(event)} value={nota1} placeholder="Nota 1" className="form-control" />
                    <input type="text" onChange={(event) => setn2(event)} value={nota2} placeholder="Nota 2" className="form-control" />
                    <input type="text" onChange={(event) => setn3(event)} value={nota3} placeholder="Nota 3" className="form-control" />
                    <p>Nota 1 vale 20%, nota 2 vale 20%, nota 3 vale 60%</p>
                    <button onClick={() => agregarAlumno()} className="btn btn-success">Agregar alumno</button>
                    <p></p>
                    <button onClick={() => mostrarAlumno()} className="btn btn-success">Mostrar alumnos</button>
                    <p>{sal}</p>
                    
                </div>

            </div>
        </>

    )
}