import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SortingTab from "../SortingTab";
export default React.memo(function Buy() {
  const price = useSelector((state) => state.Blog.price);
  const Name = useSelector((state) => state.Blog.Name);
  const desc = useSelector((state) => state.Blog.desc);
  const Category = useSelector((state) => state.Blog.Category);
  return (
    <Container>
      <SortingTab />
      <div className="head container">
        <div className="right ">
          <div className="blockMain">
            <div className="Imgblock">
              <div className="Image">
                <img
                  src="https://artorias.qodeinteractive.com/wp-content/uploads/2022/10/product-list15-img-1.jpg"
                  alt=""
                />
              </div>
              <div className="imgGrid">
                <div className="img1">
                  <img
                    src="https://artorias.qodeinteractive.com/wp-content/uploads/2022/10/product-single-17-img-1.jpg"
                    alt=""
                  />
                </div>
                <div className="img1">
                  <img
                    src="https://artorias.qodeinteractive.com/wp-content/uploads/2022/10/product-single-17-img-2.jpg"
                    alt=""
                  />
                </div>
                <div className="img1">
                  <img
                    src="https://artorias.qodeinteractive.com/wp-content/uploads/2022/10/product-single-17-img-3.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left">
          <h1 className="name">{Name}</h1>
          <span className="price">{price}</span>
          <div className="description">
            <p className="desc">{desc}</p>
          </div>
          <div className="Categor">
            <h2>Category :</h2>
            <span className="ca">{Category}</span>
          </div>
          <div className="buyNow">
            <button>
              <span>Buy Now!</span>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
});
const Container = styled.div`
  background: black;
  .head {
    padding-top: 5vh;
    display: flex;
    grid-gap: 6%;
  }
  .right {
    max-width: 60%;
  }
  .left {
    display: flex;
    flex-direction: column;
    grid-gap: 4%;
    h1 {
      font-family: Rubik, sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: white;
      font-size: 50px;
      line-height: 1.1em;
      margin: 25px 0 0 0;
      word-wrap: break-word;
    }
    max-width: 40%;
  }
  img {
    border: 2px solid white;
  }
  .imgGrid {
    display: grid;
    width: 14vw;
  }
  .Imgblock {
    display: flex;
    flex-direction: row;
    .img1 {
      img {
        height: 100%;
        object-fit: cover;
        display: block;
        width: 100%;
      }
    }
  }
  .price {
    font-family: "Space Mono", sans-serif;
    font-size: 27px;
    line-height: 1.03704em;
    font-weight: 400;
    letter-spacing: normal;
    margin-top: 13px;
  }
  .ca {
    font-size: 17px;
    text-transform: uppercase;
    cursor: pointer;
  }
  h2 {
    font-family: Rubik, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-size: 19px;
    line-height: 1.36842em;
    flex-shrink: 0;
  }
  .desc {
    font-family: "Space Mono", sans-serif;
    font-size: 16px;
    line-height: 1.6875em;
    font-weight: 400;
    color: #cacaca;
  }
  .buyNow {
    margin-top: 10px;
    button {
      padding: 0.1em 0.25em;
      width: 13em;
      height: 4.2em;
      background-color: #212121;
      border: 0.08em solid #fff;
      border-radius: 0.3em;
      font-size: 12px;
    }

    button span {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 0.4em;
      width: 8.25em;
      height: 2.5em;
      background-color: #212121;
      border-radius: 0.2em;
      font-size: 1.5em;
      color: #fff;
      border: 0.08em solid #fff;
      box-shadow: 0 0.4em 0.1em 0.019em #fff;
    }

    button span:hover {
      transition: all 0.5s;
      transform: translate(0, 0.4em);
      box-shadow: 0 0 0 0 #fff;
    }

    button span:not(hover) {
      transition: all 1s;
    }
  }
`;