export default function ProjectCard({ project }: any) {
  return (
    <div className="border border-gray-800 rounded-xl p-5">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-gray-400 text-sm mt-2">{project.tech}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="font-bold">{project.price}</span>
        <a
          href={`/project/${project.id}`}
          className="text-sm underline"
        >
          View
        </a>
      </div>
    </div>
  );
}
