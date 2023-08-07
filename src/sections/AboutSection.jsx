export default function AboutSection() {
  return (
    <div className="container mt-12 mx-auto px-4 pt-24" id="about">
      <h1 className="text-4xl font-bold text-center">About</h1>
      <div className="mt-8 grid grid-cols-1 gap-4">
        <div className="shadow-md p-8 rounded-lg">
          <p className="mb-3 text-lg text-gray-500 dark:text-gray-400 leading-loose">
            <strong className="font-semibold text-gray-900">
              {"International Collegiate Programming Contest (ICPC)" + " "}
            </strong>
            is an algorithmic programming contest for college students, known as
            the oldest, largest, and most prestigious programming contest in the
            world. During each contest, the teams of three participants are
            given 5 hours to solve between nine and thirteen programming
            problems. The winner is the team that correctly solves the most
            problems. ICPC traces its roots to a competition held at Texas A&M
            in 1970 hosted by the Alpha Chapter of the UPE Computer Science
            Honor Society. The idea quickly gained popularity within the United
            States and Canada as an innovative initiative to challenge the top
            students in the emerging field of computer science. The contest
            evolved into a multi-tier competition with the first Finals held at
            the ACM Computer Science Conference in 1977. Operating under the
            auspices of ACM and headquartered at Baylor University since 1989,
            the contest has expanded into a global network of universities
            hosting regional competitions that advance teams to the ACM-ICPC
            World Finals. HKBU-ICPC team recruits all students, who are
            interested in programming, algorithms (COMP2015), and math.
            Participators are expected to attend regular training seminars
            weekly. You can gain lots from attending our ICPC seminars:
          </p>
          <ul className="mt-8 text-left space-y-5 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-gray-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>
                Advised by an experienced coach, who is a Gold medal winner in
                East Asia Continent Final.
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-gray-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>
                Improve coding skills and problem-solving abilities. Expected to
                solve Leetcode problems easily after the training.
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-gray-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>
                Learn advanced algorithms and data structures. Lay a solid
                foundation for further graduate study and research.
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-gray-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Travel to participate in regional contests.</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-gray-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>
                Enrich your resume. Enjoy exempt interviews in some hirings.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
