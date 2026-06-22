// Assets
import imagePNG from "../../../../assets/images/profile/creator.png";

function ContentRowCard({ selectedRole }: { selectedRole: string }) {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="h-40 min-w-60 max-w-60 shrink-0 snap-start">
          <img
            src={imagePNG}
            alt={`${selectedRole} Profile`}
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
      ))}
    </>
  );
}

export default ContentRowCard;
