import React from "react";
import styled from "styled-components";

export default function BidList() {
  return (
    <Container>
      <div class="activity__item d-md-flex align-items-center justify-content-between mb-10">
        <div class="activity__item-inner d-flex align-items-center">
          <div class="activity__thumb mr-20">
            <a href="/product-details">
              <img
                src="https://react-bitakon.netlify.app/assets/img/activity/user-1.jpg"
                alt=""
              />
            </a>
            <span class="activity__tag ">#1</span>
          </div>
          <div class="activity__content">
            <h3 class="activity__title">
              <a className="n" href="/product-details">
                0.289 ETH
              </a>
            </h3>
            <p>
              by <a href="/profile"> @xander_hall</a>
            </p>
          </div>
        </div>
        <div class="activity__status">
          <p>just now</p>
        </div>
      </div>
      <div class="activity__item d-md-flex align-items-center justify-content-between mb-10">
        <div class="activity__item-inner d-flex align-items-center">
          <div class="activity__thumb mr-20">
            <a href="/product-details">
              <img
                src="https://react-bitakon.netlify.app/assets/img/activity/user-3.jpg"
                alt=""
              />
            </a>
            <span class="activity__tag ">#2</span>
          </div>
          <div class="activity__content">
            <h3 class="activity__title">
              <a className="n" href="/product-details">
                0.210 ETH
              </a>
            </h3>
            <p>
              by <a href="/profile"> @Mary Rose</a>
            </p>
          </div>
        </div>
        <div class="activity__status">
          <p>5 mins ago</p>
        </div>
      </div>
      <div class="activity__item d-md-flex align-items-center justify-content-between mb-10">
        <div class="activity__item-inner d-flex align-items-center">
          <div class="activity__thumb mr-20">
            <a href="/product-details">
              <img
                src="https://react-bitakon.netlify.app/assets/img/activity/user-2.jpg"
                alt=""
              />
            </a>
            <span class="activity__tag ">#3</span>
          </div>
          <div class="activity__content">
            <h3 class="activity__title">
              <a className="n" href="/product-details">
                0.189 ETH
              </a>
            </h3>
            <p>
              by <a href="/profile"> @Ling</a>
            </p>
          </div>
        </div>
        <div class="activity__status">
          <p>2 hours ago</p>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .activity__item {
    padding: 15px 30px;
    border: 1px solid hsla(0, 0%, 100%, 0.18);
    box-shadow: 0 1px 2px rgba(4, 18, 38, 0.1);
    border-radius: 10px;
  }
  .n {
    color: white;
    transition: all 0.5s ease-in-out;
  }
  .activity__item-inner {
    gap: 18px;
  }
  span,
  a {
    font-size: 14px;
    text-decoration: none;
  }
  p {
    font-size: 12px;
  }
  .product__bid .activity__thumb img {
    width: 50px;
    height: 50px;
  }
  .activity__thumb img {
    border-radius: 50%;
  }
  .activity__tag {
    display: inline-block;
    position: absolute;
    top: -6px;
    left: -6px;
    width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border-radius: 50%;
    background: linear-gradient(110.22deg, #00c6fb 6.52%, #005bea 91%);
  }
  .activity__content {
    p {
      color: #bec4d2;
      margin-bottom: 0;
    }
  }
  .activity__content > p a {
    color: #3771fe;
    font-weight: 600;
  }
  .activity__content {
    p {
      a:hover {
        color: #3771fe;
      }
    }
  }
`;
