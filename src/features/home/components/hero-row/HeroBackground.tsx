import imageGIF from "../../../../assets/gifs/recruiter.gif";

function HeroBackground() {
  return (
    <div className="w-full h-full absolute z-0 top-0 left-0">
      <img
        src={imageGIF}
        alt="Recruiter GIF"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 w-full h-56 bg-linear-to-t from-black via-black/70 to-transparent" />
    </div>
  );
}

export default HeroBackground;
