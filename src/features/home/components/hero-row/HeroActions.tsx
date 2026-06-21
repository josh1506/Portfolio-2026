function HeroActions() {
  return (
    <div className="flex items-center gap-4 mt-3">
      <button className="flex items-center gap-2 text-1xl font-bold bg-white text-black px-6 py-2 rounded-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-9"
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clipRule="evenodd"
          />
        </svg>
        Resume
      </button>
      <a
        href="https://www.linkedin.com/in/joshjabor"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-1xl font-bold bg-gray-400/70 text-white px-6 py-2 rounded-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
        LinkedIn
      </a>
    </div>
  );
}

export default HeroActions;
