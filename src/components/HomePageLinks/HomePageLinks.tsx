import React from "react";
import { useWidthBreakpoint } from "../../util/breakpoint";
import HomePageLinksLg from "./HomePageLinksLg";
import HomePageLinksMd from "./HomePageLinksMd";

const HomePageLinks = () => {
  const md = useWidthBreakpoint(900);

  return md ? <HomePageLinksMd /> : <HomePageLinksLg />;
};

export default HomePageLinks;
