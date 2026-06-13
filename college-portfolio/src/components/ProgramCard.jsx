export default function ProgramCard({ program, highlighted }) {
  return (
    <div
      className={`rounded-xl p-5 transition-all duration-300 ${
        highlighted
          ? "bg-white border-2 border-[#a6140c] shadow-xl scale-[1.02]"
          : "bg-white shadow-md hover:shadow-xl"
      }`}
    >
      <h2 className="font-bold text-lg text-[#a6140c]">{program.name}</h2>

      <ul className="mt-3 list-disc pl-5 text-gray-600">
        {program.courses.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}