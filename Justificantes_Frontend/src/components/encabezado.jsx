import { useState } from 'react';

export default function Encabezado() {
  const [count, setCount] = useState(0);

  return (
    <header class="bg-red-800 p-5 w-screen">
        <img class="w-auto h-20" src="/CBTIS86logo.png" alt="Encabezado de la Página" />
    </header>
  );
}
