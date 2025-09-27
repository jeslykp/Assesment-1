import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import StudentList from "./pages/StudentList";
import StudentDetail from "./pages/StudentDetail";
import StudentForm from "./pages/StudentForm";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-teal-600 text-white p-4 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold"> Student Management</h1>
          <div className="space-x-4">
            <Link
              to="/"
              className="px-3 py-2 rounded-md hover:bg-teal-700 transition bg-red-500"
            >
              Home
            </Link>

          </div>

        </div>
      </nav>
      <Link
        to="/add"
        className="px-3 py-1 rounded-md bg-teal-500 hover:bg-teal-700 transition mx-auto flex justify-center w-[400px] mt-8"
      >
        Add Student
      </Link>
      <main className="max-w-5xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/student/:id" element={<StudentDetail />} />
          <Route path="/add" element={<StudentForm />} />
          <Route path="/edit/:id" element={<StudentForm />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
