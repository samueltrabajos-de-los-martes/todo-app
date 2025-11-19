
{/* commit: formulario para crear nuevos todos con validación básica */}

import { useState } from 'react';

function Registro() {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.trim() === '') return alert('Escribe un título');
    console.log({ title });
    setTitle('');
  };

  return (
    <div>
      <h1>Registro de un nuevo Todo</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          placeholder="Nuevo todo"
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default Registro; // <-- Muy importante
