import React, { Component } from "react";

const initData = {
  pre_heading: "Auctions",
  heading: "Live Auctions",
  btnText: "View All",
};

const data = [
  {
    id: "1",
    img: "/cards_img/19.jpg",
    date: "2021-12-09",
    title: "Card 19",
    seller_thumb: "/img/icon.png",
    seller: "@Nereus",
    price: "1.5 BNB",
    count: "1 of 1",
  },
  {
    id: "2",
    img: "/cards_img/20.jpg",
    date: "2021-10-05",
    title: "Card 20",
    seller_thumb: "/img/icon.png",
    seller: "@Nereus",
    price: "2.7 BNB",
    count: "1 of 1",
  },
  {
    id: "3",
    img: "/cards_img/21.jpg",
    date: "2021-09-15",
    title: "Card 21",
    seller_thumb: "/img/icon.png",
    seller: "@Nereus",
    price: "2.3 BNB",
    count: "1 of 1",
  },
  {
    id: "4",
    img: "/cards_img/22.jpg",
    date: "2021-12-29",
    title: "Card 22",
    seller_thumb: "/img/icon.png",
    seller: "@Nereus",
    price: "1.8 BNB",
    count: "1 of 1",
  },
  {
    id: "5",
    img: "/cards_img/23.jpg",
    date: "2022-01-24",
    title: "Card 23",
    seller_thumb: "/img/icon.png",
    seller: "@Nereus",
    price: "1.7 BNB",
    count: "1 of 1",
  },
  {
    id: "6",
    img: "/cards_img/24.jpg",
    date: "2022-03-30",
    title: "Card 24",
    seller_thumb: "/img/icon.png",
    seller: "@Nereus",
    price: "3.5 BNB",
    count: "1 of 1",
  },
];

class AuctionsThree extends Component {
  state = {
    initData: {},
    data: [],
  };
  componentDidMount() {
    this.setState({
      initData: initData,
      data: data,
    });
  }
  render() {
    return (
      <section className="live-auctions-area pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Intro */}
              <div className="intro d-flex justify-content-between align-items-end m-0">
                <div className="intro-content">
                  <span>{this.state.initData.pre_heading}</span>
                  <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                </div>
                <div className="intro-btn">
                  <a className="btn content-btn" href="/auctions">
                    {this.state.initData.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="auctions-slides">
            <div className="swiper-container slider-mid items">
              <div className="swiper-wrapper">
                {/* Single Slide */}
                {this.state.data.map((item, idx) => {
                  return (
                    <div key={`auc_${idx}`} className="swiper-slide item">
                      <div className="card">
                        <div className="image-over">
                          <a href="/item-details">
                            <img
                              className="card-img-top"
                              src={item.img}
                              alt=""
                            />
                          </a>
                        </div>
                        {/* Card Caption */}
                        <div className="card-caption col-12 p-0">
                          {/* Card Body */}
                          <div className="card-body">
                            <div className="countdown-times mb-3">
                              <div
                                className="countdown d-flex justify-content-center"
                                data-date={item.date}
                              />
                            </div>
                            <a href="/item-details">
                              <h5 className="mb-0">{item.title}</h5>
                            </a>
                            <a
                              className="seller d-flex align-items-center my-3"
                              href="/item-details"
                            >
                              <img
                                className="avatar-sm rounded-circle"
                                src={item.seller_thumb}
                                alt=""
                              />
                              <span className="ml-2">{item.seller}</span>
                            </a>
                            <div className="card-bottom d-flex justify-content-between">
                              <span>{item.price}</span>
                              <span>{item.count}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AuctionsThree;
