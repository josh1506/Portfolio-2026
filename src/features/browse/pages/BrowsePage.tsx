import BrowseUserList from "../components/BrowseUserList";

const BrowsePage = () => {
  return (
    <main className="relative flex min-w-full min-h-screen flex-col items-center justify-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 h-18 w-full bg-linear-to-b from-black/70 to-transparent"
      />

      <section className="relative w-full flex flex-col justify-center items-center z-10">
        <h1 className="text-white text-2xl sm:text-5xl">
          Who&apos;s watching?
        </h1>

        <BrowseUserList />

        <div className="border border-zinc-500 px-8 py-1 text-zinc-500 hover:border-white hover:text-white transition-colors">
          <span className="tracking-widest cursor-default">Portfolio 2026</span>
        </div>
      </section>
    </main>
  );
};

export default BrowsePage;
