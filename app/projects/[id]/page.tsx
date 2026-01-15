interface Props {
  params: { id: string };
}

export default function ProjectPreview({ params }: Props) {
  return (
    <main className="container">
      <h1>Project Preview</h1>
      <p>Project ID: {params.id}</p>

      <ul>
        <li>✔ Full Source Code</li>
        <li>✔ Documentation</li>
        <li>✔ Viva Q&A</li>
        <li>✔ Setup Guide</li>
      </ul>

      <button className="buy-btn">Buy & Download</button>
    </main>
  );
}
