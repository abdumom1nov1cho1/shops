import { Context } from "../Context";
import { Link, useParams } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "react-use-cart";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "../Daily_cards/Daily_Cards.scss"
import Navbar_Strt from "../Components/Navbar_Start/Navbar_Strt";

const Daily_Cards = () => {
  const { addItem, getItem, removeItem } = useCart();
  const [setData] = useState([]);
    const {data} = useContext(Context)
    const { _id } = useParams();

 const paramsFind = data?.find((el) => {
    return el._id === _id
 })

  return (
    <div>
      <Navbar_Strt/>
      <Navbar />
      <div className="container">
        <div style={{marginTop:"170px"}} className="maped_card">
          <div className="cardPlants_card" key={paramsFind?._id}>
            <img data-aos="zoom-in-down" className="cardPlants_card__img" src={paramsFind?.image} alt="" />
            <div className="ggg_card"data-aos="fade-left">
              <h1 className="cardPlants_card__h1">{paramsFind?.title}</h1>
              <hr />
             <div className="texts_card">
             <p className="cardPlants_card__p">{paramsFind?.desc}</p>
              <div className="prices_card">
                <p className="prices_card__1">{paramsFind?.oldPrice} $</p>
                <p className="prices_card__2">{paramsFind?.price} $</p>
              </div>
              {!getItem(paramsFind._id) ? (
                    <button
                      onClick={() => addItem({ ...paramsFind, id: paramsFind._id })}
                      className="price_card__btn"
                    >
                      ADD TO CARD
                    </button>
                  ) : (
                    <button
                      className="price_card__btn1"
                      onClick={() => removeItem(paramsFind._id)}
                    >
                      REMOVE TO CARD
                    </button>
                  )}
             </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Daily_Cards;
