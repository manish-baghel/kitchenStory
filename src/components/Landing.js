import React from "react";
import AppNavbar from "./Navbar";
import SearchBar from "./SearchBar";
import EventCatalog from "./EventsCatalog";

const Landing = () => {
  return (
    <>
      <AppNavbar />
      <SearchBar />
      <EventCatalog />
    </>
  );
}

export default Landing;
