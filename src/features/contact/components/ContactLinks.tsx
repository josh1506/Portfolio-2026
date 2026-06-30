import { contactLinks } from "../data/contactData";

function ContactLinks() {
  return (
    <div className="space-y-4 w-full min-w-0 max-w-110">
      <div>
        <span className="text-red-500 uppercase tracking-[8px]">Portfolio</span>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-white">Let's connect!</h1>
        <p className="text-neutral-400">
          Feel free to reach out and connect with me.
        </p>
      </div>
      <hr className="border-red-500 w-16 border" />
      <div>
        <ul className="space-y-3">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li
                key={link.href}
                className="border-b border-neutral-700 pb-3 last:border-b-0"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-white flex items-center space-x-5 px-2 hover:scale-105 transition-transform duration-150"
                >
                  <div className="text-4xl">
                    <Icon />
                  </div>
                  <div className="flex flex-col">
                    <span>{link.label}</span>
                    <span className="text-neutral-400 group-hover:text-white break-all">
                      {link.href}
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ContactLinks;
