import LinkPreviewCard from "../components/LinkPreviewCard";
import links from "../data/links.json";

export default function LinkSection() {
  return (
    <>
      <div className="container mt-12 mx-auto px-4 pt-24" id="links">
        <h1 className="flex flex-row text-4xl font-bold text-center content-center justify-center">
          Links
        </h1>
        {links.map((link, index) => {
          return (
            <div
              className="container mt-10 mx-auto px-4 pb-3 border-b-2 border-gray-200"
              key={index}
            >
              <h3 className="flex flex-row text-2xl font-bold text-left justify-start text-gray-600">
                {link.type}
              </h3>

              <div className={`grid grid-cols-1 gap-4 pt-2`}>
                {link.details.map((details, index) => {
                  return (
                    <div className="w-full items-center object-center self-center">
                      <LinkPreviewCard
                        key={index}
                        link={details.link}
                        linkName={details.linkName}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
