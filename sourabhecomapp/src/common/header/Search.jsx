import { Link } from "react-router-dom";
import logo from "./navbarlogo.jpg";
function Search() {
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img style={{ width: "100px" }} src={logo} alt="logo" />
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
                <span>4</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Search;
