import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStudents, deleteStudent } from "../slices/studentSlice";
import Loader from "../components/Loader";

const StudentList = () => {
  const dispatch = useDispatch();
  const { list: students, loading } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      dispatch(deleteStudent(id));
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Student List</h2>
      <div className="grid gap-4">
        {students.map((student) => (
         <div
         key={student.id}
         className="bg-gradient-to-r  shadow-md p-4 rounded-lg flex justify-between items-center"
       >
         <div>
           <p className="font-semibold">{student.name}</p>
           <p className="text-gray-600">{student.email}</p>
         </div>
         <div className="space-x-2">
           <Link
             to={`/student/${student.id}`}
             className="bg-yellow-700 text-white px-3 py-1 rounded hover:bg-teal-600"
           >
             View
           </Link>
           <button
             onClick={() => handleDelete(student.id)}
             className="bg-red-600 text-white px-3 py-1 rounded hover:bg-teal-700"
           >
             Delete
           </button>
         </div>
       </div>
       
        ))}
      </div>
    </div>
  );
};

export default StudentList;
