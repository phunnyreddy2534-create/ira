import Link from "next/link";

export default function ProjectCard({ project }: any) {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <strong>{project.price}</strong>

      <Link href={`/projects/${project.id}`}>
        <button>View Project</button>
      </Link>
    </div>
  );
}
