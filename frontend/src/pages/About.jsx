import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-primary fx-bold mb-4">About Us</h1>
          <p className="lead mb-4">
            © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở
            KH & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông
            Tin và Truyền Thông cấp ngày 04/06/2020. Địa chỉ: 128 Trần Quang
            Khải, P. Tân Định, Q.1, TP.Hồ Chí Minh. Điện thoại: 028 38125960.
            Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn
            Tốt.
          </p>
          <Link to="/contact" className="btn btn-outline-primary px-3">
            Contact Us
          </Link>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src="/assets/images/about/about.jpg"
            alt="About Us"
            height="400px"
            width="400px"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
