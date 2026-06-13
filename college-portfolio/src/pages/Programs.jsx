import programs from "../data/programs.json";
import ProgramCard from "../components/ProgramCard";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function Programs() {
  const [searchParams] = useSearchParams();
  const selectedProgram = searchParams.get("program");

  useEffect(() => {
  if (selectedProgram) {
    const element = document.getElementById(selectedProgram);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }
}, [selectedProgram]);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Programs & Courses</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {programs.map((p) => (
          <div id={p.name}>
          <ProgramCard key={p.id} program={p} 
          highlighted={selectedProgram === p.name}
          />
        </div>
        ))}
      </div>
    </div>
  );
}