import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="/hero.png"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover scale-110 animate-slowZoom"
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-blue-900/40"></div>

        {/* FLOATING BLUR SHAPES */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/30 blur-3xl rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-500/20 blur-3xl rounded-full animate-float2"></div>

        {/* CONTENT CARD */}
        <div className="relative z-10 text-center px-6">
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl 
            p-6 md:p-10 
            shadow-2xl max-w-2xl mx-auto animate-fadeUp
            max-h-[70vh] md:max-h-none overflow-hidden">

            <h1 className="text-2xl md:text-6xl font-bold text-white leading-tight">
              Shape Your Future at{" "}
              <span className="text-[#e0c097]">Nestick College</span>
            </h1>
            <div className="mt-4 md:mt-6 flex gap-3 md:gap-4 justify-center flex-col sm:flex-row">
  
              <Link
                to="/programs"
                className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base bg-[#a6140c] hover:bg-[#6a0e09] transition rounded-full text-white shadow-lg"
              >
                Explore Programs
              </Link>

              <Link
                to="/faculty"
                className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base border border-white/40 hover:bg-white/10 transition rounded-full text-white"
              >
                Meet Faculty
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">About Our Institute</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in 1998, Nestick College has built a strong reputation for
          academic excellence and student success. Over the years, the institution
          has grown into a dynamic learning community offering programs designed to
          meet the demands of a rapidly changing world.
        </p>

        <p className="text-gray-600 leading-relaxed mt-4">
          Our vision is to empower students with knowledge, innovation, and
          leadership skills that enable them to make meaningful contributions to
          society. Through experienced faculty, modern facilities, and
          industry-focused education, we strive to prepare graduates for lifelong
          success.
        </p>
      </section>

      {/* QUICK LINKS */}
      <section className="bg-[#efefef]">
      <div className="max-w-5xl mx-auto px-4">

        {/* HEADING */}
        <h2 className="text-3xl font-bold">
          Explore Our Programs
        </h2>

        {/* SUBTITLE */}
        <p className=" text-gray-600 mt-2 mb-10">
          Choose from a wide range of academic disciplines designed for your future.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {["Computer Science", "Electrical Engineering", "Business Administration"].map((item, i) => (
            <Link
              key={i}
              to={`/programs?program=${encodeURIComponent(item)}`}
              className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-bold text-lg text-gray-800 group-hover:text-[#a6140c] transition">
                {item}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Explore {item} programs and career paths
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
    </div>
  );
}