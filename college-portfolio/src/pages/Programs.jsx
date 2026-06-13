import programs from "../data/programs.json";
import ProgramCard from "../components/ProgramCard";
import { useSearchParams } from "react-router-dom";

export default function Programs() {
  const [searchParams] = useSearchParams();
  const selectedProgram = searchParams.get("program");

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Programs & Courses</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {programs.map((p) => (
          <ProgramCard key={p.id} program={p} 
          highlighted={selectedProgram === p.name}
          />
        ))}
      </div>
    </div>
  );
}