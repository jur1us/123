import logo from "./../../Images/logo.png";
import menu from "./../../Images/menu.png";
import find from "./../../Images/find.png";
import cart from "./../../Images/cart.png";
import './style.css'

const Navbar = () => {
  return (
    <nav>
      <div className="width">
        <div className="itm_holder">
          <img src={logo} alt="logo" className="logo"></img>
          <div className="bths">
            <div className="catalog">
              <img src={menu} alt="" className="menu"></img>
              <a href="@">
                <div className="txt">Каталог</div>
              </a>
            </div>

            <a href="@" className="sales">
              <div className="txt">
                <span>Розпродаж</span>
              </div>
            </a>

            <a href="@">
              <div className="txt">Відгуки</div>
            </a>
          </div>

          <a href="@" className="number">
            <div className="num">
              <span>0 800</span> 33 01 06
            </div>
          </a>

          <div className="h_right">
            <img src={find} alt="" className="find"></img>

            <div className="cart_holder">
              <img src={cart} alt="" className="cart"></img>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
