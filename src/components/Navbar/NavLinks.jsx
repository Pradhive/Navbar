import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

function NavLinks() {
  const [heading, setHeading] = useState("");
  const [subheading, setSubHeading] = useState("");
  return (
    <>
      {links.map((Links) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex items-center justify-between md:pr-0 pr-5 group"
              onClick={() => {
                heading !== Links.name
                  ? setHeading(Links.name)
                  : setHeading("");
                setSubHeading("");
              }}
            >
              {Links.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading !== subheading ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2 inline md:pr-0 pr-5 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon
                  name="chevron-down"
                ></ion-icon>
              </span>
            </h1>
            {Links.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="p-5 bg-white grid grid-cols-3 gap-10">
                    {Links.sublinks.map((myLink) => (
                      <div>
                        <h1 className="text-lg font-semibold ">
                          {myLink.Head}
                        </h1>
                        {myLink.sublink.map((slink) => (
                          <li className="text-sm text-gray-600 my-2.5 ">
                            <Link
                              to={slink.link}
                              className="hover:text-primary "
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={`${heading === Links.name ? "md:hidden" : "hidden"}`}>
            {Links.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subheading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex items-center justify-between"
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline ">
                      <ion-icon
                        name={`${
                          subheading !== slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>

                  <div
                    className={`${
                      subheading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14 ">
                        <Link to={slink.link} className="hover:text-primary">{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default NavLinks;
