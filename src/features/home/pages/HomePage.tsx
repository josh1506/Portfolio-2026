// Components
import ContentRow from "../components/content-row/ContentRow";
import HeroBackground from "../components/hero-row/HeroBackground";
import HeroContent from "../components/hero-row/HeroContent";

// Data
import { contentRowData } from "../data/contentRowData";

function HomePage() {
  const selectedRole = "Recruiter";

  return (
    <main className="w-full h-screen relative overflow-x-hidden bg-black">
      <HeroBackground />

      <section className="relative z-10 h-10/12 flex items-end px-14 pb-16">
        <HeroContent />
      </section>

      {contentRowData.map((row) => (
        <ContentRow
          key={row.title}
          title={`${row.title} ${selectedRole}`}
          data={[...row.data].reverse()} // Reverse the data array to display the most recent items first
        />
      ))}
    </main>
  );
}

export default HomePage;
