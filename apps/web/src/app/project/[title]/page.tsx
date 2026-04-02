export default async function ProjectPage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;

  return (
    <div style={{ width: "100%", paddingTop: "80px" }}>
      <h2>Project Page: {title}</h2>
    </div>
  );
}
