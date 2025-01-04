import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import imgLogo from "../assets/images/logo.png";

const classNames = (...classes) => classes.filter(Boolean).join(" ");

const TopNavbar = ({ routes }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Logout berhasil!");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Disclosure as="nav" className="bg-gray-800 shadow fixed top-0 left-0 w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <div
                  className="flex-shrink-0 cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  <img className="h-8 w-auto" src={imgLogo} alt="Atma Kitchen Logo" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {routes.map((route) => (
                      <a
                        key={route.name}
                        href=""
                        onClick={() => navigate(route.path)}
                        className={classNames(
                          location.pathname === route.path
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium no-underline"
                        )}
                      >
                        {route.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Profile Section */}
              <div className="hidden md:flex items-center space-x-4">
                {user && (
                  <Menu as="div" className="relative">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as="div"
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 no-underline"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 no-underline"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              onClick={handleLogout}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 no-underline"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>

              {/* Mobile menu button */}
              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {routes.map((route) => (
                <Disclosure.Button
                  key={route.name}
                  as="a"
                  href="#"
                  onClick={() => navigate(route.path)}
                  className={classNames(
                    location.pathname === route.path
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {route.name}
                </Disclosure.Button>
              ))}
              {location.pathname === "/dashboard" && (
                <Disclosure.Button
                  onClick={handleLogout}
                  className="block w-full rounded-md bg-red-600 px-3 py-2 text-base font-medium text-white hover:bg-red-500"
                >
                  Logout
                </Disclosure.Button>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default TopNavbar;
