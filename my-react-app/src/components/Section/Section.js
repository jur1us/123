import man_1 from "./../../Images/man_1.png";
import man_2 from "./../../Images/man_2.png";
import man_3 from "./../../Images/man_3.png";
import man_4 from "./../../Images/man_4.png";
import man_5 from "./../../Images/man_5.png";
import man_6 from "./../../Images/man_6.png";
import man_7 from "./../../Images/man_7.png";
import man_8 from "./../../Images/man_8.png";
import man_9 from "./../../Images/man_9.png";
import './style.css'



const Section = () => {
  return (
    <section>
      
      <div className="section_holder">
        <div className="width">
          <div className="smash_sale">
            <div className="year">2023</div>
          </div>

          <div className="mans_holder">
            <div className="mans">
              {[man_1, man_2, man_3, man_4, man_5].map((img, i) => (
                <div className="mns">
                  <a href="@">
                    <img
                      src={img}
                      alt=""
                      className="general_man"
                      style={{ "--man-height": `${300 + i * 30}px` }}
                    ></img>
                  </a>
                </div>
              ))}
              {[man_6, man_7, man_8, man_9].map((img, i) => (
                <div className="mns">
                  <a href="@">
                    <img
                      src={img}
                      alt=""
                      className="general_man"
                      style={{ "--man-height": `${390 - i * 10}px` }}
                    ></img>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sub_title">
        <div className="width">
          <div className="sub_holder">
            <div className="r_sub">SMASH SALE</div>

            <div className="c_sub">
              STREETWEAR НОВОГО ПОКОЛІННЯ, ЯКИЙ ТИ ДАВНО ШУКАВ ІДЕАЛЬНИЙ БАЛАНС
              МІНІМАЛІЗМУ, ДРАЙВОВИХ ПРИНТІВ ТА КОМФОРТУ
            </div>

            <div className="l_sub">
              МІКСУЙ БАЗОВІ РЕЧІ З УНІКАЛЬНИМИ ПРИНТАМИ ЩОБ ЗІБРАТИ СВОЮ
              ІНДИВІДУАЛЬНУ КАПСУЛУ ЦІНИ ЗНИЖЕНО, ПОСПІШАЙ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
