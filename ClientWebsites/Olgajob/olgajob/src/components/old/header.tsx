import React from "react";
import Image from "next/image";

interface NavigationItem {
  name: string;
  href: string;
  flyoutMenu?: NavigationItem[];
}

interface HeaderProps {
  logo: string | React.ReactNode;
  navItems: NavigationItem[];
  callToAction?: {
    text: string;
    href: string;
  };
}

const Header: React.FC<HeaderProps> = ({ logo, navItems, callToAction }) => {
  return (
    <header className="flex items-center justify-center w-full">
      <div className="container">
        <div className="flex flex-row items-center justify-between w-full py-4 px-2">
          <div className="flex items-center">
            <div className="h-6 w-24">
              {typeof logo === "string" ? (
                <Image src={logo} alt="Company Logo" width={100} height={25} />
              ) : (
                logo
              )}
            </div>
          </div>
          <div className="lg:flex hidden">
            <nav className="flex items-center">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <a
                    href={item.href}
                    className="px-3 py-2 text-black hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                  {item.flyoutMenu && (
                    <div className="absolute left-0 top-full mt-2 w-48 bg-white backdrop-blur-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.flyoutMenu.map((subItem, subIndex) => (
                        <a
                          href={subItem.href}
                          key={subIndex}
                          className="block px-4 py-2 text-black hover:bg-gray-100/50"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            {callToAction && (
              <a
                href={callToAction.href}
                className="ml-3 px-4 py-2 text-white rounded-md bg-[#2A87F8] hover:opacity-90"
              >
                {callToAction.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
