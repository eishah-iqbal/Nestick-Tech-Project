export default function FacultyCard({ faculty }) {
  return (
    <div className="bg-white shadow-md rounded-2xl border border-gray-100 p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* IMAGE */}
      <img
        src={faculty.image}
        className="w-full h-60 object-cover rounded-xl"
        alt={faculty.name}
      />

      {/* NAME */}
      <h2 className="font-bold mt-4 text-lg text-gray-800">
        {faculty.name}
      </h2>

      {/* DESIGNATION */}
      <p className="text-[#a6140c] font-medium">
        {faculty.designation}
      </p>

      {/* DEPARTMENT */}
      <p className="text-sm text-gray-500 mt-1">
        {faculty.department}
      </p>
    </div>
  );
}