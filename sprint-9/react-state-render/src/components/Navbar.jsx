import Button from "./Button";
import Image from "./Image";
import MenuLink from "./MenuLink";

function Navbar() {
  return (
    <nav>
      <Image
        src="https://images.unsplash.com/photo-1617611413968-537a2ba4986d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Nike Logo"
      />
      <ul>
        <MenuLink description="New" />
        <MenuLink description="Men" />
        <MenuLink description="Women" />
        <MenuLink description="Kids" />
        <MenuLink description="Jordan" />
        <MenuLink description="Sports" />
        <MenuLink description="Sale" />
      </ul>
      <Button icon="search" />
      <Button icon="like" />
      <Button icon="bag" />
    </nav>
  );
}

export default Navbar;
