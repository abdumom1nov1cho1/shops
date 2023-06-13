import React from "react";
import { Link } from "react-router-dom";
import "../View_Page/View_Page.css";
const View_Page = () => {
  return (
    <div className="collect">
      <div className="container">
        <h1 className="collect__h1" data-aos="zoom-in-up">Collections</h1>
        <div className="collect__cards">
          <Link to="/airdopes" className="collect__card" data-aos="zoom-in-up">
            <img
              className="collect__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_100x.png?v=1680609959"
              alt=""
            />
            <h6 className="collect__card__h6">Wireless Earbuds</h6>
          </Link>
          <Link to="/nescbands" className="collect__card" data-aos="zoom-in-up">
            <img
              className="collect__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_100x.png?v=1678362141"
              alt=""
            />
            <h6 className="collect__card__h6">Rockerz Wireless</h6>
          </Link>
          <Link to="/earphones" className="collect__card" data-aos="zoom-in-up">
            <img
              className="collect__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_100x.png?v=1663753167"
              alt=""
            />
            <h6 className="collect__card__h6">Wired Earphones</h6>
          </Link>
          <Link to="/smartwatch" className="collect__card" data-aos="zoom-in-up">
            <img
              className="collect__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/smartwatches_100x.png?v=1680609917"
              alt=""
            />
            <h6 className="collect__card__h6">Smart Watches</h6>
          </Link>
          <Link to="/speaker" className="collect__card" data-aos="zoom-in-up">
            <img
              className="collect__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_100x.png?v=1663753243"
              alt=""
            />
            <h6 className="collect__card__h6">Bluetooth Speakers</h6>
          </Link>
          <Link to="/soundbars" className="collect__card" data-aos="zoom-in-up">
            <img
              className="collect__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_100x.png?v=1663753280"
              alt=""
            />
            <h6 className="collect__card__h6">Home Theatre Systems</h6>
          </Link>
          <Link to="/airdopes" className="collect__card" data-aos="zoom-in-up">
            <img
              className="collect__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/New-Category-Banners_with-Trebal_09_100x.png?v=1675683871"
              alt=""
            />
            <h6 className="collect__card__h6">T.Rebel</h6>
          </Link>
          <Link to="/accessories" className="collect__card" data-aos="zoom-in-up">
            <img
              className="collect__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/cables_1_100x.png?v=1678374618"
              alt=""
            />
            <h6 className="collect__card__h6">
              Mobile Accessories
            </h6>
          </Link>
          <Link to="/headphones" className="collect__card" data-aos="zoom-in-up">
            <img
              className="collect__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-limited-edition_100x.png?v=1675683940"
              alt=""
            />
            <h6 className="collect__card__h6">Limited Edition</h6>
          </Link>
          <Link to="/trimmer" className="collect__card" data-aos="zoom-in-up">
            <img
              className="collect__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/MISFIT-shop_100x.png?v=1663753379"
              alt=""
            />
            <h6 className="collect__card__h6">Misfit - Best </h6>
          </Link>
          <Link to="/headphones" className="collect__card" data-aos="zoom-in-up">
            <img
              className="collect__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Immortal_category_Image_100x.png?v=1663753419"
              alt=""
            />
            <h6 className="collect__card__h6">Immortal Gaming</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View_Page;
