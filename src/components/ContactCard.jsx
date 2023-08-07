export default function ContactCard({ name, link }) {
  return (
    <>
      <div className="items-start justify-center mx-auto w-50 flex ">
        <div className="relative group w-50">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-black to-gray-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt w-50"></div>
          <button
            className={`relative px-7 py-4 bg-white rounded-lg leading-none items-center divide-x divide-gray-600 w-50`}
          >
            <span className="flex items-center">
              <span className="pr-2 text-black font-semibold">{name}</span>
              <div className="">
                <div className="grid grid-cols-1 gap-1">
                  <a href={"mailto:" + link}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
