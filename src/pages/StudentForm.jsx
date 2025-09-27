import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addStudent, updateStudent } from "../slices/studentSlice";

const StudentForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list: students } = useSelector((state) => state.students);
  const existingStudent = students.find((s) => s.id.toString() === id);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    if (existingStudent) setFormData(existingStudent);
  }, [existingStudent]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("All fields are required");
      return;
    }
    if (!validateEmail(formData.email)) {
      alert("Invalid email format");
      return;
    }

    if (existingStudent) {
      dispatch(updateStudent({ ...formData, id: existingStudent.id }));
    } else {
      dispatch(addStudent(formData));
    }

    navigate("/");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gradient-to-r from-teal-100 via-teal-200 to-teal-100 shadow-md rounded-lg">
    <h2 className="text-xl font-bold mb-4">
      {existingStudent ? "Edit Student" : "Add Student"}
    </h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
      />
      <button
        type="submit"
        className="w-full bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
      >
        {existingStudent ? "Update" : "Add"}
      </button>
    </form>
  </div>
  
  );
};

export default StudentForm;
