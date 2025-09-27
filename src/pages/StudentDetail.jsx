import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const StudentDetail = () => {
  const { id } = useParams();
  const student = useSelector((state) =>
    state.students.list.find((s) => s.id.toString() === id)
  );

  if (!student) return <p className="p-6">Student not found</p>;

  return (
    <div className="p-6 bg-gradient-to-r from-teal-100 via-teal-200 to-teal-100 shadow-md rounded-lg max-w-md mx-auto">
    <h2 className="text-2xl font-bold mb-4">Student Details</h2>
    <p><strong>Name:</strong> {student.name}</p>
    <p><strong>Email:</strong> {student.email}</p>
    <p><strong>Phone:</strong> {student.phone}</p>
    <Link
      to="/"
      className="block mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
    >
      ⬅ Back to List
    </Link>
  </div>
  
  );
};

export default StudentDetail;
