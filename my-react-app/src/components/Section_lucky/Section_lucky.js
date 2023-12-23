import './style.css'


const Sectionlucky = () => {
    return ( 
        <div className="lucky_section">
        <div className="lucky_box_holder">
          <div className="lucky_box">
            <div className="lucky_box1">Lucky</div>
            <div className="lucky_box2">Box</div>
          </div>
          <div className="lucky_box_txt">
            <div className="small_txt_1">
              5 рандомних речей на суму <b>4’000</b> грн всього за{" "}
              <span>2`999</span> грн{" "}
            </div>
            <a href="@">Перевірити успіх</a>
          </div>
        </div>

        <div className="lucky_r"></div>
      </div>
     );
}
 
export default Sectionlucky;