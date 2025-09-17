import Navbar from "./Navbar";
import TopBar from "./TopBar";

function Header(props) {
  //   const isMobile = true;

  //   if (isMobile) {
  //     return <span>Header not available in mobile</span>;
  //   }

  return (
    <header>
      <TopBar />
      <Navbar />
    </header>
  );
}

export default Header;
