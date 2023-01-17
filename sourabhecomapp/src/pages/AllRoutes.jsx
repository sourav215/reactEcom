import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../common/header/Header.jsx";
import "./AllRoutes.css";
function AllRoutes() {
  return (
    <div>
      <Header />
      {/* <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
        </Switch>
        <Footer />
      </Router> */}
    </div>
  );
}
export default AllRoutes;
