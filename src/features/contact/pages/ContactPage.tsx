import ProfileCard from "../components/ProfileCard";
import ContactLinks from "../components/ContactLinks";

function ContactPage() {
  return (
    <main className="flex justify-center items-center pt-20 px-4 bg-black min-h-screen overflow-x-hidden">
      <div className="flex flex-col items-center justify-center w-full lg:space-x-20 lg:flex-row space-y-10 lg:space-y-0 ">
        <ProfileCard />
        <ContactLinks />
      </div>
    </main>
  );
}

export default ContactPage;
