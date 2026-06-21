import ContentRow from "../components/content-row/ContentRow";
import HeroBackground from "../components/hero-row/HeroBackground";
import HeroContent from "../components/hero-row/HeroContent";

function HomePage() {
  const selectedRole = "Creator";
  return (
    <main className="w-full h-screen relative overflow-x-hidden bg-black">
      <HeroBackground />

      <section className="relative z-10 h-10/12 flex items-end px-14 pb-16">
        <HeroContent />
      </section>

      <ContentRow
        title={`Today's Top Picks for ${selectedRole}`}
        selectedRole={selectedRole}
      />

      <ContentRow
        title={`Today's Top Picks for ${selectedRole}`}
        selectedRole={selectedRole}
      />
    </main>
  );
}

export default HomePage;
