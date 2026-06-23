import HeroActions from "./HeroActions";

function HeroContent() {
  return (
    <div className="flex flex-col items-start gap-4 text-white">
      <h1 className="text-4xl font-bold">Joshua Michael Jabor</h1>
      <div className="w-full sm:w-5/6 lg:w-4/6 xl:w-3/6">
        <p className="text-xl">
          Full-Stack Developer with 4+ years of experience building scalable web
          applications using Django, FastAPI, React, and PostgreSQL. Experienced
          in REST API development, authentication systems, Dockerized
          deployments, and cloud hosting (AWS, DigitalOcean, Vercel). Passionate
          about writing clean, maintainable code and improving system
          performance. Seeking a backend-focused or full-stack role in a
          collaborative engineering team.
        </p>
      </div>
      <HeroActions />
    </div>
  );
}

export default HeroContent;
