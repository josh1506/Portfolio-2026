// Assets
import type { rowData } from "../../types/content-row.types";

type PreviewPosition = {
  left: number;
  origin: string;
  top: number;
  width: number;
};

const ESTIMATED_POPOUT_HEIGHT = 360;

function ContentRowCard({ data }: { data: rowData[] }) {
  const getPreviewPosition = (card: HTMLDivElement): PreviewPosition => {
    const rect = card.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const margin = 16;
    const previewWidth = Math.min(400, viewportWidth - margin * 2);

    let left = rect.left + rect.width / 2 - previewWidth / 2;
    let origin = "center center";

    if (left < margin) {
      left = rect.left;
      origin = "center left";
    }

    if (left + previewWidth > viewportWidth - margin) {
      left = rect.right - previewWidth;
      origin = "center right";
    }

    left = Math.max(
      margin,
      Math.min(left, viewportWidth - previewWidth - margin),
    );

    const top = Math.max(
      margin,
      Math.min(
        rect.top + rect.height / 2 - ESTIMATED_POPOUT_HEIGHT / 2,
        viewportHeight - ESTIMATED_POPOUT_HEIGHT - margin,
      ),
    );

    return { left, origin, top, width: previewWidth };
  };

  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="group h-40 min-w-60 max-w-60 shrink-0 snap-start"
          onMouseEnter={(event) => {
            const position = getPreviewPosition(event.currentTarget);
            event.currentTarget.style.setProperty(
              "--preview-left",
              `${position.left}px`,
            );
            event.currentTarget.style.setProperty(
              "--preview-origin",
              position.origin,
            );
            event.currentTarget.style.setProperty(
              "--preview-top",
              `${position.top}px`,
            );
            event.currentTarget.style.setProperty(
              "--preview-width",
              `${position.width}px`,
            );
          }}
        >
          <img
            src={item.image}
            alt={`${item.title} Thumbnail`}
            className="w-full h-full object-cover rounded-sm"
            loading="lazy"
          />

          <div
            className="invisible fixed z-50 flex flex-col scale-75 overflow-hidden rounded-lg bg-zinc-900 text-white opacity-0 shadow-2xl shadow-black/80 transition-all delay-0 duration-300 ease-out group-hover:visible group-hover:scale-100 group-hover:opacity-100 group-hover:delay-300"
            style={{
              left: "var(--preview-left)",
              top: "var(--preview-top)",
              transformOrigin: "var(--preview-origin)",
              width: "var(--preview-width)",
            }}
          >
            {/* Thumbnail */}
            <div className="aspect-video w-full shrink-0">
              <img
                src={item.image}
                alt={`${item.title} Thumbnail`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Action buttons row */}
            <div className="flex items-center justify-between px-4 pt-3 pb-1">
              <div className="flex items-center gap-2">
                {/* Play / View Live */}
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-colors duration-200 hover:bg-white/80"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5 translate-x-px"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-full bg-white/20 text-white/40"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5 translate-x-px"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}

                {/* Add to list */}
                <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-zinc-500 text-white transition-colors duration-200 hover:border-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>

                {/* Like */}
                <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-zinc-500 text-white transition-colors duration-200 hover:border-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                    />
                  </svg>
                </button>
              </div>

              {/* More info */}
              <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-zinc-500 text-white transition-colors duration-200 hover:border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>

            {/* Project info */}
            <div className="px-4 pb-4 pt-2">
              <h3 className="text-base font-bold leading-tight">
                {item.title}
              </h3>
              <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-zinc-300">
                {item.description}
              </p>
              <div className="mt-3 flex flex-wrap items-center text-xs text-zinc-400">
                {item.additionalInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <span>{info}</span>
                    {index < item.additionalInfo.length - 1 && (
                      <span className="mx-2 text-zinc-600">•</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ContentRowCard;
