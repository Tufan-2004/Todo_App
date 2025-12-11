
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Login from "./Login";
// import Dashboard from "./pages/Dashboard";
// import Form from "./pages/Form";


// function App() {
// ;
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/dashboard" element={<Dashboard  />}/>
//       <Route path="/form" element={<Form />} />
//     </Routes>
//   );
// }

// export default App;

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import Dashboard from "./pages/Dashboard";
import Form from "./pages/Form";

function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null); // for editing

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <Dashboard
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        }
      />

      <Route
        path="/form"
        element={
          <Form
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        }
      />
    </Routes>
  );
}

export default App;



