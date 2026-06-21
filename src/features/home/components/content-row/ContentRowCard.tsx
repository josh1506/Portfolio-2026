import imagePNG from "../../../../assets/images/profile/creator.png";

function ContentRowCard({ selectedRole }: { selectedRole: string }) {
  return (
    <div className="flex gap-3 px-14 mt-4 overflow-x-auto scrollbar-none">
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="h-40 min-w-60 max-w-60">
          <img
            src={imagePNG}
            alt={`${selectedRole} Profile`}
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
      ))}
    </div>
  );
}

export default ContentRowCard;
