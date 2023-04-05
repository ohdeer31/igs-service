import React from "react";
import jim from "../../images/Subject3.png";
import pasu from "../../images/Subject2.png";
import $ from "jquery";

export default function AboutUs() {
  $(window).on("load resize scroll", function () {
    $(".bg-static").each(function () {
      var windowTop = $(window).scrollTop();
      var elementTop = $(this).offset().top;
      var leftPosition = windowTop - elementTop;
      $(this).find(".bg-move").css({ left: leftPosition });
    });
  });

  return (
    <div>
      <header>
        <div className="bgIGS">
          <h1 className="p-3">This is about us page</h1>
          <h5 className="px-5">
            Sint duis aute proident proident laborum deserunt cupidatat nostrud.
            Adipisicing do consectetur irure Lorem cillum qui excepteur mollit
            est nisi excepteur reprehenderit duis cillum. Enim ipsum quis amet
            et ex laborum elit veniam duis. Tempor magna laborum commodo aliquip
            proident nulla non elit non tempor id cillum ullamco laboris.
            Laborum in mollit velit ex ut do voluptate elit ipsum reprehenderit
            incididunt incididunt do.
          </h5>
          <img src={jim} alt="finger heart given by jim"></img>
        </div>
      </header>
      <div className="section bg-static">
        <div className="bg-move"></div>
      </div>
      <div>
        <img src={pasu} alt="im uncomfortable" className="facilityPic"></img>
      </div>
    </div>
  );
}
