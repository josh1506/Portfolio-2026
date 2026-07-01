// Components
import { useParams } from "react-router-dom";
import { PROFILE_ROLES } from "../../../data/profileRoles";
import type { ProfileRole } from "../../../types/profile.role";
import ContentRow from "../components/content-row/ContentRow";
import HeroBackground from "../components/hero-row/HeroBackground";
import HeroContent from "../components/hero-row/HeroContent";

// Data
import { contentRowData } from "../data/contentRowData";

function HomePage() {
  const { role } = useParams<{ role: string }>();
  const selectedRole: ProfileRole = PROFILE_ROLES.includes(role as ProfileRole)
    ? (role as ProfileRole)
    : "recruiter";

  return (
    <main className="w-full relative overflow-x-hidden bg-black">
      <HeroBackground />

      <section className="relative z-10 h-10/12 flex items-end px-14 pb-16 pt-70">
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
