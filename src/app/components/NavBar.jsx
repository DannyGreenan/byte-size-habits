import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="/logo.png" />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/home/profile">Profile</Link>
              <ul className="p-2">
                <li>
                  <Link href="/home/profile">Edit Profile</Link>
                </li>
                <li>
                  <a>View Profile</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/home/progress">Progress</Link>
            </li>
          </ul>
        </div>
        <Link href="/home" className="btn btn-ghost text-xl">
          Byte Size Habits
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/home/profile">Profile</Link>
          </li>
          <li>
            <Link href="/home/progress">Progress</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn" href="/home/shop">
          Shop
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
