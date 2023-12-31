export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40">
      <div className="navbar bg-base-100 sticky top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#achievements">Achievements</a>
              </li>
              <li>
                <a href="#photos">Photos</a>
              </li>
              <li>
                <a href="#links">Links</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* eslint-disable-next-line */}
          <a href="#" className="btn btn-ghost normal-case text-xl">
            ICPC
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#achievements">Achievements</a>
            </li>
            <li>
              <a href="#photos">Photos</a>
            </li>
            <li>
              <a href="#links">Links</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
      </div>
    </nav>
  );
}
