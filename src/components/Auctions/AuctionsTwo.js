import React, { Component } from "react";

const initData = {
  pre_heading: "Auctions",
  heading: "Live Auctions",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
  btnText: "Load More",
};

const data = [
  {
    id: "1",
    img: "/cards_img/7.jpg",
    date: "2021-12-09",
    title: "Card 7",
    seller_thumb: "/img/icon.png",
    seller: "@Nereus",
    price: "1.5 BNB",
    count: "1 of 1",
  },
  {
    id: "2",
    img: "/cards_img/8.jpg",
    date: "2021-10-05",
    title: "Card 8",
    seller_thumb: "/img/icon.png",
    seller: "@Nereus",
    price: "2.7 BNB",
    count: "1 of 1",
  },
  {
    id: "3",
    img: "/cards_img/9.jpg",
    date: "2021-09-15",
    title: "Card 9",
    seller_thumb: "/img/icon.png",
    seller: "@Nereus",
    price: "2.3 BNB",
    count: "1 of 1",
  },
  {
    id: "4",
    img: "/cards_img/10.jpg",
    date: "2021-12-29",
    title: "Card 10",
    seller_thumb: "/img/icon.png",
    seller: "@Nereus",
    price: "1.8 BNB",
    count: "1 of 1",
  },
  {
    id: "5",
    img: "/cards_img/11.jpg",
    date: "2022-01-24",
    title: "Card 11",
    seller_thumb: "/img/icon.png",
    seller: "@Nereus",
    price: "1.7 BNB",
    count: "1 of 1",
  },
  {
    id: "6",
    img: "/cards_img/12.jpg",
    date: "2022-03-30",
    title: "Card 12",
    seller_thumb: "/img/icon.png",
    seller: "@Nereus",
    price: "1.7 BNB",
    count: "1 of 1",
  },
  {
    id: "7",
    img: "/cards_img/13.jpg",
    date: "2022-01-24",
    title: "Card 13",
    seller_thumb: "/img/icon.png",
    seller: "@Nereus",
    price: "1.7 BNB",
    count: "1 of 1",
  },
  {
    id: "8",
    img: "/cards_img/14.jpg",
    date: "2022-03-30",
    title: "Card 14",
    seller_thumb: "/img/icon.png",
    seller: "@Nereus",
    price: "1.7 BNB",
    count: "1 of 1",
  },
  {
    id: "9",
    img: "/cards_img/15.jpg",
    date: "2022-03-30",
    title: "Card 15",
    seller_thumb: "/img/icon.png",
    seller: "@Nereus",
    price: "1.7 BNB",
    count: "1 of 1",
  },
  {
    id: "10",
    img: "/cards_img/16.jpg",
    date: "2022-03-30",
    title: "Card 16",
    seller_thumb: "/img/icon.png",
    seller: "@Nereus",
    price: "1.7 BNB",
    count: "1 of 1",
  },
  {
    id: "11",
    img: "/cards_img/17.jpg",
    date: "2022-01-24",
    title: "Card 17",
    seller_thumb: "/img/icon.png",
    seller: "@Nereus",
    price: "1.7 BNB",
    count: "1 of 1",
  },
  {
    id: "12",
    img: "/cards_img/18.jpg",
    date: "2022-03-30",
    title: "Card 18",
    seller_thumb: "/img/icon.png",
    seller: "@Nereus",
    price: "1.7 BNB",
    count: "1 of 1",
  },
];

class AuctionsTwo extends Component {
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
      <section className="live-auctions-area load-more">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-7">
              {/* Intro */}
              <div className="intro text-center">
                <span>{this.state.initData.pre_heading}</span>
                <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                <p>{this.state.initData.content}</p>
              </div>
            </div>
          </div>
          <div className="row items">
            {this.state.data.map((item, idx) => {
              return (
                <div
                  key={`auct_${idx}`}
                  className="col-12 col-sm-6 col-lg-3 item"
                >
                  <div className="card">
                    <div className="image-over">
                      <a href="/item-details">
                        <img className="card-img-top" src={item.img} alt="" />
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
                          href="/author"
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
          <div className="row">
            <div className="col-12 text-center">
              <a id="load-btn" className="btn btn-bordered-white mt-5" href="#">
                {this.state.initData.btnText}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AuctionsTwo;
