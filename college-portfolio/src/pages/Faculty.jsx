import faculty from "../data/faculty.json";
import FacultyCard from "../components/FacultyCard";

export default function Faculty() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Faculty Directory</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {faculty.map((f) => (
          <FacultyCard key={f.id} faculty={f} />
        ))}
      </div>
    </div>
  );
}