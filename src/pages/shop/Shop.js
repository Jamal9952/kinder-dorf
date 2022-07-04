import React from "react";
import "./Shop.css";
// import HeaderTop from '../../components/headerTop/HeaderTop';
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Sidebar from "../../components/sidebar/Sidebar";
import CategorySection from "../../components/categorySection/CategorySection";
import { shopBannerData } from "../../Utils/Services";
import Footer from "../../components/footer/Footer";
import FilterSection from "../../components/filterSection/FilterSection";
import ProductCard from "../../components/productCard/ProductCard";
import { newArrivalCard } from "../../Utils/Services";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "./../../features/product/productSlice";
import { resolvePath, useParams } from "react-router-dom";

const Shop = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const productData = useSelector((state) => state.product.entities);
  const loading = useSelector((state) => state.product.isLoading);
console.log(loading);
  const filterAgainst = params.title;
  let filterBy = ``;
  switch (filterAgainst) {
    case "girls":
      filterBy = `women's clothing`;
      break;
    case "boys":
      filterBy = `men's clothing`;
      break;
    case "shoes":
      filterBy = `jewelery`;
      break;
    case "toys":
      filterBy = `electronics`;
      break;
    default:
      console.log("all products");
  }
  const relatedData = productData.filter((item) => item.category == filterBy);
  const showProducts = relatedData != 0 ? relatedData : productData;
  return (
    <div className="shop">
      {/* <HeaderTop /> */}
      <Header />
      {shopBannerData.map((data) => (
        <Banner
          link={data.link}
          home={data.home}
          page={data.page}
          heading={data.heading}
        />
      ))}
      <div className="shop-page-content">
        <Sidebar />
        <div className="shop-content-holder">
          <CategorySection />
          <FilterSection />
          {filterBy ? <h1>{filterBy}</h1> : <h1>Products</h1>}

          {loading === true ? <p className="shop-products-loading">Loading...</p> : ''}
          {showProducts.map((product) => (
            <ProductCard
              id={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
          {/* RENDERING PRODUCTS HERE FROM NEWARRIVAL SECTION API */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
