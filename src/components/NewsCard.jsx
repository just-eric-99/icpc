export default function NewsCard({ date, description, links }) {
  //   const [showAll, setShowAll] = useState(false);

  return (
    <>
      <div
        className="grid grid-cols-4 lg:grid-cols-6 items-center w-full p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow space-x hover:scale-105 ease-in-out duration-300 outline-gray-100 outline relative"
        role="alert"
        data-theme="light"
      >
        <div className="col-span-1 text-center place-items-center mx-4">
          {"[" + date + "]"}
        </div>
        <div className="col-span-3 lg:col-span-5 pl-4">
          {description + " "}

          {links &&
            links.length > 0 &&
            links.map((link, index) => {
              return (
                <a
                  className="text-blue-500"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <p className="font-semibold inline-block">
                    {"#" + (index + 1)}
                  </p>
                </a>
              );
            }).reduce((prev, curr) => [prev, " ", curr])}
        </div>
      </div>
    </>
  );
}
