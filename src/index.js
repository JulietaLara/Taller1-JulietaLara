import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {Hora}  from './components/Hora';
import { Componentllamada } from './components/Componentllamada';
import { Nombrehora } from './components/Nombre Hora';
import { Componentnumeros } from './components/Componentnumeros';
import { Componentlistanumeros } from './components/Componentlistanumeros';
import { Componentimpares } from './components/Componentimpares';
import { ComponentAlumno } from './components/ComponentAlumno';
import { ComponentSalario } from './components/ComponentSalario';
import { ComponentNumeroAleatorio } from './components/ComponentNumeroAleatorio';
import { ComponentTabla } from './components/ComponentTabla';
import { ComponentAlumnos } from './components/ComponentAlumnos';
import { ComponentTabla2 } from './components/ComponentTabla2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
      <Hora/>
      <Componentllamada/>
      <Nombrehora/>
      <Componentnumeros/>
      <Componentimpares/>
      <ComponentSalario/>
      <ComponentNumeroAleatorio/>
      <ComponentTabla/>
      <ComponentTabla2/>
      <ComponentAlumno/>
      <ComponentAlumnos/> 
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"></script>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
