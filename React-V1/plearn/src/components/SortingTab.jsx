import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { setSearch } from "../Store/Slice/userSlice";

export default React.memo(function SortingTab() {
  var Name = useSelector((state) => state.Blog.Name);
  const location = useLocation();
  const isSearch = location.pathname !== "/marketplace";
  const dispatch = useDispatch();
  const search = useSelector((state) => state.tools.currentSearch);
  return (
    <Container className="container">
      <div className="lft">
        <h1>SHOP</h1>
      </div>
      <div
        className="wrapper"
        style={{ display: `${isSearch ? "None" : "Inherit "}` }}
      >
        <div className="input-wrapper">
          <button className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="25px"
              width="25px"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="1.5"
                stroke="#fff"
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              ></path>
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="1.5"
                stroke="#fff"
                d="M22 22L20 20"
              ></path>
            </svg>
          </button>
          <input
            placeholder="search.."
            className="input"
            name="text"
            type="text"
            value={search}
            onChange={(e) => {
              dispatch(setSearch(e.target.value));
            }}
          />
        </div>
      </div>
      <>
        <div className="details">
          <span> Home / Shop {Name !== "" ? `/${Name}` : ""}</span>
        </div>
      </>
    </Container>
  );
});
const Container = styled.div`

background:black;
  padding-top: 2vh;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  align-content: flex-end;
  border-bottom: 1px solid white;
  .lft {
    h1 {
      font-family: Rubik, sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--qode-main-color);
      font-size: 50px;
      line-height: 1.1em;
      margin: 20px 0;
      -ms-word-wrap: break-word;
      word-wrap: break-word;
    }
  }
  .wrapper {
    display: flex;
    justify-content: flex-end;
  }
  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    position: relative;
  }
  .details {
    span {
      font-size: 16px;
      color: #ccc;
      text-transform: lowercase;
    }
  }

  .input {
    border-style: none;
    height: 50px;
    width: 50px;
    padding: 10px;
    outline: none;
    border-radius: 50%;
    transition: 0.5s ease-in-out;
    background-color: #7e4fd4;
    box-shadow: 0px 0px 3px #f3f3f3;
    padding-right: 40px;
    color: #fff;
  }

  .input::placeholder,
  .input {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 17px;
  }

  .input::placeholder {
    color: #8f8f8f;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    outline: none;
    border-style: none;
    border-radius: 50%;
    pointer-events: painted;
    background-color: transparent;
    transition: 0.2s linear;
  }

  .icon:focus ~ .input,
  .input:focus {
    box-shadow: none;
    width: 250px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 3px solid #7e4fd4;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
`;
