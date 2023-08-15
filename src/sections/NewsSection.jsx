import { useEffect, useState } from "react";
import news from "../data/news.json";
import NewsCard from "../components/NewsCard";

export default function NewsSection() {
  const [showAll, setShowAll] = useState(true);

  return (
    <>
      <div className="container mt-12 mx-auto px-4 pt-24" id="news">
        <h1 className="text-4xl font-bold text-center">News</h1>
        <div className="mt-8 grid grid-cols-1 gap-4">
          {news.map((newss, index) => {
            if (index >= 5 && showAll) {
              return <></>;
            } else {
              return (
                <div key={newss.id}>
                  <NewsCard
                    date={newss.date}
                    description={newss.description}
                    links={newss.links}
                  />
                </div>
              );
            }
          })}
        </div>
        <div className="flex flex-auto align-middle items-center justify-center mt-3">
          {news.length > 5 && !showAll ? (
            <button
              key={1}
              className="btn"
              onClick={() => {
                setShowAll(!showAll);
              }}
            >
              show less
            </button>
          ) : (
            <></>
          )}

          {news.length > 5 && showAll ? (
            <button
              key={2}
              className="btn"
              onClick={() => {
                setShowAll(!showAll);
              }}
            >
              show more
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
