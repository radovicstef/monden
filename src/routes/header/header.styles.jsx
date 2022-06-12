import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LinkUnstyled = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Logo = styled.h1`
  font-weight: normal;
`;

export const HeaderNavigation = styled.div`
  display: flex;
`;

export const HeaderNavigationItem = styled.h3`
  padding: 1rem;
  font-weight: normal;

  &:after {
    display: block;
    content: "";
    border-bottom: solid 1px black;
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
    transform-origin: 0%;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const HeaderNavigationItemShopBag = styled(HeaderNavigationItem)`
  display: flex;
  align-items: center;
`;

export const ShopBagWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const ShopBagNumber = styled.div`
  position: absolute;
  font-family: "Times New Roman", Times, serif;
  top: 0;
  right: -0.2rem;
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  color: white;
  background-color: teal;
  border-radius: 50%;
  text-align: center;
`;

// .header-wrapper {
//   display: flex;
//   justify-content: space-between;

//   a {
//     text-decoration: none;
//     color: black;
//   }

//   .header-logo {
//     font-weight: normal;
//   }
// }

// .header-navigation {
//   display: flex;

//   a {
//     text-decoration: none;
//     color: black;
//   }

//   .navigation-item {
//     padding: 1rem;
//     font-weight: normal;
//   }

//   .shop-bag {
//     display: flex;
//     align-items: center;
//   }

//   .navigation-item:after {
//     display: block;
//     content: "";
//     border-bottom: solid 1px black;
//     transform: scaleX(0);
//     transition: transform 0.5s ease-in-out;
//     transform-origin: 0%;
//   }

//   .navigation-item:hover:after {
//     transform: scaleX(1);
//   }
// }

// .shop-bag-wrapper {
//   position: relative;
//   cursor: pointer;

//   .shop-bag-number {
//     position: absolute;
//     font-family: "Times New Roman", Times, serif;
//     top: 0;
//     right: -0.2rem;
//     width: 1rem;
//     height: 1rem;
//     line-height: 1rem;
//     color: white;
//     background-color: teal;
//     border-radius: 50%;
//     text-align: center;
//   }
// }
