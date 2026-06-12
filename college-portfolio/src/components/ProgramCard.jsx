export default function ProgramCard({ program }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition">
      <h2 className="font-bold text-lg text-[#a6140c]">{program.name}</h2>

      <ul className="mt-3 list-disc pl-5 text-gray-600">
        {program.courses.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}