
import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard({ todos, setTodos, setEditTodo }) {

  // Delete Function
  const handleDelete = (id) => {
    const updatedList = todos.filter((item) => item.id !== id);
    setTodos(updatedList);
  };

  // Edit Function
  const handleEdit = (todo) => {
    setEditTodo(todo);
  };

  return (
    <div className="min-h-screen bg-green-400 flex flex-col">
      <header className="bg-rose-400 text-white text-center py-4 text-2xl font-bold">
        TODO APP
      </header>

      <main className="flex-grow flex flex-col items-center p-6">

        <Link to="/form">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-9 py-9 rounded-lg shadow-md mb-8">
            ADD ITEM
          </button>
        </Link>

        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-4">  
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-100">
                <th className="border p-2">Title</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {todos.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center p-3">
                    No Items Found
                  </td>
                </tr>
              ) : (
                todos.map((todo) => (
                  <tr key={todo.id} className="hover:bg-gray-50">
                    <td className="border p-2">{todo.title}</td>
                    <td className="border p-2">{todo.description}</td>
                    <td className="border p-2">{todo.date}</td>
                    <td className="border p-2">
                      <Link to="/form">
                        <button
                          onClick={() => handleEdit(todo)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                        >
                          Edit
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDelete(todo.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}







