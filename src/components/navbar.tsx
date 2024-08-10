import { NavLinks } from "./nav-links ";
import { Navsearch } from "./nav-search";

export const Navbar = () => {
  console.log("Navbar rendered");
  return (
    <div>
      <NavLinks />
      <Navsearch />
    </div>
  );
};
