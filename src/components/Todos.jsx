// commit: componente Todos.jsx con fetch inicial usando useEffect

import { useState, useEffect } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch inicial de todos desde la API
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        if (!response.ok) throw new Error("Error al obtener los todos");
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // Toggle de estado completado / pendiente
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Eliminar todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  if (loading) return <p>Cargando todos...</p>;
  if (error) return <p>Error: {error}</p>;
// commit: función para marcar todos como completado o pendiente

  return (
    <div>
      <h2>Lista de todos</h2>
      <input type="text" placeholder="Filtrar tareas (por implementar)" disabled />
      {todos.map((todo) => (
        <div key={todo.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <h3>{todo.title}</h3>
          <p>{todo.completed ? "Completado" : "Pendiente"}</p>
          <button onClick={() => toggleTodo(todo.id)}>Alternar</button>
          <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
          <button onClick={() => alert("Función editar por implementar")}>Editar</button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
// commit: implementación de listado de todos desde API
