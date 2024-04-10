"use client";
import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar
      className="site-header fixed top-0 bg-white z-40 flex justify-between items-center w-full h-[100px] xl:h-[118px]"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="relative flex justify-between items-center w-full h-[100px] xl:h-[118px]">
        <NavbarContent className=" pr-3 justify-center">
          <div className="xl:w-[300px] 2xl:w-[420px] flex items-center justify-center">
            <NavbarBrand>
              <a href="/" className="">
                <div className="sr-only">Anning-Johnson Company</div>
                <img
                  src="https://anningjohnson.com/wp-content/themes/anson/resources/images/anson-logo-dark.png"
                  alt=""
                  className="mx-8 w-[205px] xl:w-[250px]"
                />
              </a>
            </NavbarBrand>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
          </div>
        </NavbarContent>

        <NavbarContent className="hidden xl:flex bg-black text-white px-16 flex-grow items-center justify-end h-full">
          <NavbarContent className="hidden bg-gray-100 mt-4 p-4 lg:mt-0 lg:p-0 lg:bg-transparent lg:flex">
            <NavbarItem>
              <Link color="foreground" href="#">
                Locations
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Portfolio
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Safety
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Services
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Careers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                About
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarItem className="btn btn-white ml-[100px]">
            <Button as={Link} href="#" variant="solid" className="bg-white text-black border-none text-xl rounded-none py-3 px-5">
              Contact Us
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      {/* <NavbarContent className="" justify="start">
        <div class="xl:hidden h-full aspect-square bg-black text-white flex items-center justify-center">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className=""
          />
        </div>
      </NavbarContent> */}

      {/* <div className="hidden xl:flex bg-black text-white px-16 flex-grow items-center justify-end h-full">
              <div
                id="primary-menu-desktop"
                className="hidden bg-gray-100 mt-4 p-4 lg:mt-0 lg:p-0 lg:bg-transparent lg:block"
              >
                <ul id="menu-primary" className="lg:flex lg:-mx-4">
                  <li
                    id="menu-item-35"
                    className="locations-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-35 "
                  >
                    <a href="https://anningjohnson.com/locations/">
                      <span>Locations</span>
                    </a>
                    <div className="submenu-wrapper">
                      <ul className="submenu">
                        <li
                          id="menu-item-4341"
                          className="menu-item menu-item-type-post_type menu-item-object-location menu-item-4341 "
                        >
                          <a href="https://anningjohnson.com/locations/atlanta/">
                            <span>
                              <div className="primary-menu-item-icon-wrapper">
                                <img src="https://anningjohnson.com/wp-content/uploads/2023/03/atlanta.png" />
                              </div>{" "}
                              Atlanta
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-4340"
                          className="menu-item menu-item-type-post_type menu-item-object-location menu-item-4340 "
                        >
                          <a href="https://anningjohnson.com/locations/chicago/">
                            <span>
                              <div className="primary-menu-item-icon-wrapper">
                                <img src="https://anningjohnson.com/wp-content/uploads/2023/03/chicago.png" />
                              </div>{" "}
                              Chicago – HQ
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-4339"
                          className="menu-item menu-item-type-post_type menu-item-object-location menu-item-4339 "
                        >
                          <a href="https://anningjohnson.com/locations/las-vegas/">
                            <span>
                              <div className="primary-menu-item-icon-wrapper">
                                <img src="https://anningjohnson.com/wp-content/uploads/2023/03/las-vegas.png" />
                              </div>{" "}
                              Las Vegas
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-4338"
                          className="menu-item menu-item-type-post_type menu-item-object-location menu-item-4338 "
                        >
                          <a href="https://anningjohnson.com/locations/northern-california/">
                            <span>
                              <div className="primary-menu-item-icon-wrapper">
                                <img src="https://anningjohnson.com/wp-content/uploads/2023/03/Northern-Cal.png" />
                              </div>{" "}
                              Northern California
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-4337"
                          className="menu-item menu-item-type-post_type menu-item-object-location menu-item-4337 "
                        >
                          <a href="https://anningjohnson.com/locations/portland/">
                            <span>
                              <div className="primary-menu-item-icon-wrapper">
                                <img src="https://anningjohnson.com/wp-content/uploads/2023/03/portland.png" />
                              </div>{" "}
                              Portland
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-4336"
                          className="menu-item menu-item-type-post_type menu-item-object-location menu-item-4336 "
                        >
                          <a href="https://anningjohnson.com/locations/seattle/">
                            <span>
                              <div className="primary-menu-item-icon-wrapper">
                                <img src="https://anningjohnson.com/wp-content/uploads/2023/03/seattle.png" />
                              </div>{" "}
                              Seattle
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-4335"
                          className="menu-item menu-item-type-post_type menu-item-object-location menu-item-4335 "
                        >
                          <a href="https://anningjohnson.com/locations/southern-california/">
                            <span>
                              <div className="primary-menu-item-icon-wrapper">
                                <img src="https://anningjohnson.com/wp-content/uploads/2023/03/Southern-Cal.png" />
                              </div>{" "}
                              Southern California
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-4334"
                          className="menu-item menu-item-type-post_type menu-item-object-location menu-item-4334 "
                        >
                          <a href="https://anningjohnson.com/locations/washington-dc/">
                            <span>
                              <div className="primary-menu-item-icon-wrapper">
                                <img src="https://anningjohnson.com/wp-content/uploads/2023/03/washington-dc.png" />
                              </div>{" "}
                              Washington DC
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    id="menu-item-34"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-34 "
                  >
                    <a href="https://anningjohnson.com/portfolio/">
                      <span>Portfolio</span>
                    </a>
                  </li>
                  <li
                    id="menu-item-33"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-33 "
                  >
                    <a href="https://anningjohnson.com/safety/">
                      <span>Safety</span>
                    </a>
                  </li>
                  <li
                    id="menu-item-32"
                    className="services-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-32 "
                  >
                    <a href="https://anningjohnson.com/services/">
                      <span>Services</span>
                    </a>
                    <div className="submenu-wrapper">
                      <ul className="submenu">
                        <li
                          id="menu-item-4449"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4449 "
                        >
                          <a href="https://anningjohnson.com/services/preconstruction/">
                            <span>
                              <div className="primary-menu-item-icon-wrapper">
                                <img src="https://anningjohnson.com/wp-content/uploads/2023/04/Pre-Construction.png" />
                              </div>{" "}
                              PreConstruction
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-4445"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4445 "
                        >
                          <a href="https://anningjohnson.com/services/exterior-wall-systems/">
                            <span>
                              <div className="primary-menu-item-icon-wrapper">
                                <img src="https://anningjohnson.com/wp-content/uploads/2023/04/Exterior-Wall-Systems.png" />
                              </div>{" "}
                              Exterior Wall Systems
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-4447"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4447 "
                        >
                          <a href="https://anningjohnson.com/services/interior-walls-and-ceilings/">
                            <span>
                              <div className="primary-menu-item-icon-wrapper">
                                <img src="https://anningjohnson.com/wp-content/uploads/2023/04/Interior-Walls-_-Ceilings.png" />
                              </div>{" "}
                              Interior Walls and Ceilings
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-4448"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4448 "
                        >
                          <a href="https://anningjohnson.com/services/metal-decking/">
                            <span>
                              <div className="primary-menu-item-icon-wrapper">
                                <img src="https://anningjohnson.com/wp-content/uploads/2023/04/Metal-Decking.png" />
                              </div>{" "}
                              Metal Decking
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-4443"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4443 "
                        >
                          <a href="https://anningjohnson.com/services/commercial-roofing/">
                            <span>
                              <div className="primary-menu-item-icon-wrapper">
                                <img src="https://anningjohnson.com/wp-content/uploads/2023/04/Roofing.png" />
                              </div>{" "}
                              Commercial Roofing
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-4451"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4451 "
                        >
                          <a href="https://anningjohnson.com/services/spray-fireproofing/">
                            <span>
                              <div className="primary-menu-item-icon-wrapper">
                                <img src="https://anningjohnson.com/wp-content/uploads/2023/04/Spray-Fireproofing.png" />
                              </div>{" "}
                              Spray Fireproofing
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-4450"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4450 "
                        >
                          <a href="https://anningjohnson.com/services/prefabrication/">
                            <span>
                              <div className="primary-menu-item-icon-wrapper">
                                <img src="https://anningjohnson.com/wp-content/uploads/2023/04/prefabrication.png" />
                              </div>{" "}
                              Prefabrication
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-4446"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4446 "
                        >
                          <a href="https://anningjohnson.com/services/insulating-products/">
                            <span>
                              <div className="primary-menu-item-icon-wrapper">
                                <img src="https://anningjohnson.com/wp-content/uploads/2023/04/Insulating-Products.png" />
                              </div>{" "}
                              Mechanical Insulation
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    id="menu-item-36"
                    className="careers-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-36 "
                  >
                    <a href="https://anningjohnson.com/careers/">
                      <span>Careers</span>
                    </a>
                    <div className="submenu-wrapper">
                      <ul className="submenu">
                        <li
                          id="menu-item-142"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-142 "
                        >
                          <a href="https://anningjohnson.com/careers/construction-and-engineering-internships/">
                            <span>
                              <div className="primary-menu-item-icon-wrapper">
                                <img src="https://anningjohnson.com/wp-content/uploads/2023/04/students.png" />
                              </div>{" "}
                              Internships
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-141"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-141 "
                        >
                          <a href="https://anningjohnson.com/careers/construction-management-jobs-for-experienced-hires/">
                            <span>
                              <div className="primary-menu-item-icon-wrapper">
                                <img src="https://anningjohnson.com/wp-content/uploads/2023/04/Experienced-Hires.png" />
                              </div>{" "}
                              Construction Management
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-140"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-140 "
                        >
                          <a href="https://anningjohnson.com/careers/jobs-for-construction-workers-and-trade-professionals/">
                            <span>
                              <div className="primary-menu-item-icon-wrapper">
                                <img src="https://anningjohnson.com/wp-content/uploads/2023/04/Trade-pros.png" />
                              </div>{" "}
                              Construction Jobs
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    id="menu-item-37"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-37 "
                  >
                    <a href="https://anningjohnson.com/about/">
                      <span>About</span>
                    </a>
                  </li>
                </ul>
              </div>{" "}
              <a
                href="https://anningjohnson.com/contact/"
                className="btn btn-white ml-[100px]"
                target=""
              >
                Contact Us
              </a>
            </div> */}
    </Navbar>
  );
};

export default Header;
