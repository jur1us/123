import lamp from "./../../Images/lamp.png";
import bigright from "./../../Images/bigRight.png";
import './style.css'

const Header = () => {
  return (
    <header>
      <img src={lamp} alt="" className="lamp"></img>

      <div className="width">
        <div className="header_holder">
          <div className="txt_holder">
            <div className="txt_big_holder">
              <div className="big_txt">
                <div className="welcome_white">ЗУСТРІЧАЙ</div>{" "}
              </div>
              <div className="big_txt">ОСІННІЙ </div>
              <div className="big_txt">
                <div className="pack_orange">PACK</div>
              </div>
              <div className="big_txt">2023 </div>
            </div>

            <div className="txt_small_holder">
              <div className="small_txt">
                Вриваємось в осінь 2023 з новою колекцією одягу. Поєднуй базові
                речі з кольоровими позиціями.
              </div>
            </div>
          </div>
          <img src={bigright} alt="" className="bg_right"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
