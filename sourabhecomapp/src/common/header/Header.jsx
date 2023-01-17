import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";
import "./Header.css";

function Header() {
  return (
    <div>
      <Head />
      <Search />
      <Navbar />
    </div>
  );
}
export default Header;
