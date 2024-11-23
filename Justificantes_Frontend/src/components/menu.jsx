import { useState } from 'react';

export default function Menu() {
  const [count, setCount] = useState(0);

  return (
    <nav class="menu">
      <ul class="w-screen grid grid-cols-5 bg-gray-800 p-4 text-white font-bold gap-4 text-center">
          <li ><a href="/PagPrincipal">Documentación del Programa</a></li>
          <li><a href="/NuevoJustificante">Nuevo Justificante</a></li>
          <li><a href="/Estadisticas">Estadisticas</a></li>
          <li><a href="/MovAdministrativos">Movimientos Administrativos</a></li>
          <li><a href="/ActDB">Actualizar Bases de Datos</a></li>
      </ul>
    </nav>
  );
}
