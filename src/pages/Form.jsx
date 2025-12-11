
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const TodoForm = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [date, setDate] = useState("");
//   const [success, setSuccess] = useState(false); // NEW

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Form Submitted!");
//     console.log("Title:", title);
//     console.log("Description:", description);
//     console.log("Date:", date);

//     // Show success message
//     setSuccess(true);

//     // Hide after 3 seconds
//     setTimeout(() => {
//       setSuccess(false);
//     }, 3000);

//     // Clear form fields
//     setTitle("");
//     setDescription("");
//     setDate("");
//   };

//   return (
//     <div className="relative min-h-screen flex justify-center items-center bg-green-400">

//       {/* 🔙 Back Button (Outside Form / Bottom-Left) */}
//       <Link to="/Dashboard" className="absolute bottom-5 left-5">
//         <button className="bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-lg shadow-lg">
//           ⬅ Back
//         </button>
//       </Link>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-green-100 p-8 rounded-2xl shadow-lg w-full max-w-md relative"
//       >
//         <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
//           Add Todo
//         </h1>

//         {/* Title */}
//         <div className="mb-4">
//           <label className="block text-gray-900 font-medium mb-2">Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Enter title"
//             className="w-full border border-gray-900 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>

//         {/* Description */}
//         <div className="mb-4">
//           <label className="block text-gray-900 font-medium mb-2">Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Enter description"
//             rows="3"
//             className="w-full border border-gray-900 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           ></textarea>
//         </div>

//         {/* Date */}
//         <div className="mb-4">
//           <label className="block text-gray-900 font-medium mb-2">Date</label>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="w-full border border-gray-900 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-green-600 hover:bg-green-800 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300"
//         >
//           Submit
//         </button>

//         {/* ✅ Success Message */}
//         {success && (
//           <p className="mt-4 text-center bg-green-500 text-white py-2 rounded-lg shadow-md">
//             ✔️ Todo Submitted Successfully!
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default TodoForm;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Form = ({ setTodos, editTodo, setEditTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  // Load data for editing
  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      setDescription(editTodo.description);
      setDate(editTodo.date);
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // EDIT MODE
    if (editTodo) {
      setTodos((prev) =>
        prev.map((item) =>
          item.id === editTodo.id
            ? { ...item, title, description, date }
            : item
        )
      );

      setEditTodo(null); // stop edit mode
    } else {
      // ADD NEW TODO
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now(),
          title,
          description,
          date,
        },
      ]);
    }

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      navigate("/dashboard"); // go back
    }, 1000);
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-green-400">

      <Link to="/dashboard" className="absolute bottom-5 left-5">
        <button className="bg-gray-800 text-white px-5 py-2 rounded-lg">
          ⬅ Back
        </button>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="bg-green-100 p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          {editTodo ? "Edit Todo" : "Add Todo"}
        </h1>

        <input
          type="text"
          className="w-full border p-2 rounded mb-4"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className="w-full border p-2 rounded mb-4"
          placeholder="Enter description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <input
          type="date"
          className="w-full border p-2 rounded mb-4"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg"
        >
          {editTodo ? "Update" : "Submit"}
        </button>

        {success && (
          <p className="mt-4 text-center bg-green-500 text-white py-2 rounded">
            ✔️ {editTodo ? "Updated" : "Added"} Successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;


