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

const Shop = (props) => {
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

          {/* RENDERING PRODUCTS HERE FROM NEWARRIVAL SECTION API */}
          {newArrivalCard.map((product) => (
            <ProductCard
              id={product.id}
              img={product.img}
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
