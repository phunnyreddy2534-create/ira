import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "AI Phishing Detection",
      tech: "Python · ML · Security",
      price: "₹499",
    },
    {
      id: 2,
      title: "Face Recognition Attendance",
      tech: "OpenCV · Python",
      price: "₹399",
    },
  ];

  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
