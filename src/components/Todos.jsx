import { useState, useEffect } from 'react';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => res.json())
      .then(data => { setTodos(data); setLoading(false); })
      .catch(err => { setError(err); setLoading(false); });
  }, []);

  if(loading) return <p>Cargando...</p>;
  if(error) return <p>Error al cargar todos</p>;

  const toggleCompleted = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id} style={{border:'1px solid #ccc', margin:'5px', padding:'5px'}}>
          <p>{todo.title}</p>
          <p>{todo.completed ? 'Completado' : 'Pendiente'}</p>
          <button onClick={() => toggleCompleted(todo.id)}>Toggle</button>
          <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
