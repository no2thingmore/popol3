import React, { useEffect, useState } from "react";
import "./mypage.css";
import InfoManagement from "./infomanagement";
import InfoEdit from "./infoedit";
import Coupon from "./coupon";
import Reservation from "./reservation";
import Alarm from "./alarm";

function Mypage() {
  const [menu, setMenu] = useState("내 정보 관리");

  const MenuClick = (selectMenu) => {
    setMenu(selectMenu);
  };

  const [end, setEnd] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setEnd("end");
    }, 100);
    return setEnd("")
  }, [menu]);

  let [userInfo, setUSerInfo] = useState({
    nickName: "왔다가",
    userName: "KDT",
    phoneNumber: "010-1234-5678",
  });

  return (
    <div className="backGround">
      <div className="maincontent container">
        <div className="mypage_menu">
          <div>
            <nav>
              <ul>
                <li>
                  <a href="#" onClick={() => MenuClick("내 정보 관리")}>
                    내 정보 관리
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => MenuClick("내 정보 변경")}>
                    내 정보 수정
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => MenuClick("예약 내역")}>
                    예약 내역
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => MenuClick("알림")}>
                    알림
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => MenuClick("쿠폰함")}>
                    쿠폰함
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="menu_info">
          {menu === "내 정보 관리" && (
            <div className={"start " + end}>
              <InfoManagement menu={menu} userInfo={userInfo}></InfoManagement>
            </div>
          )}

          {menu === "내 정보 변경" && (
            <div className={"start " + end}>
              <InfoEdit menu={menu} userInfo={userInfo}></InfoEdit>
            </div>
          )}

          {menu === "예약 내역" && (
            <div className={"start " + end}>
              <Reservation></Reservation>
            </div>
          )}

          {menu === "알림" && (
            <div className={"start " + end}>
              <Alarm></Alarm>
            </div>
          )}

          {menu === "쿠폰함" && (
            <div className={"start " + end}>
              <Coupon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mypage;