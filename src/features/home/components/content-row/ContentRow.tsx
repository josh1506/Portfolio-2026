import ContentRowButton from "./ContentRowButton";
import ContentRowCard from "./ContentRowCard";

function ContentRow({
  selectedRole,
  title,
}: {
  selectedRole: string;
  title: string;
}) {
  return (
    <section className="relative z-10 text-white py-8">
      <h2 className="text-2xl font-bold px-14">{title}</h2>
      <div className="relative">
        <ContentRowButton direction="left" />

        <ContentRowCard selectedRole={selectedRole} />

        <ContentRowButton direction="right" />
      </div>
    </section>
  );
}

export default ContentRow;
