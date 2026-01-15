import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Build. Learn. Earn.
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          IRA is a student-powered project marketplace where you can
          learn from real projects, download ready-made solutions,
          and earn by selling your own work.
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <a
            href="/projects"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            Explore Projects
          </a>
          <a
            href="/apply"
            className="border border-gray-600 px-6 py-3 rounded-lg"
          >
            Sell Your Project
          </a>
        </div>
      </main>
    </>
  );
}
