import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopHeader from "@/components/TopHeader";
import ProductCards from "@/components/ProductCard";
import CollectionSection from "@/components/collectionSection";
import Productionsection5 from "@/components/productsection5";
import FeatureProductSection from "@/components/featureProductSection";
import ProductCard123 from "@/components/productCard123";
import Cardsesection from "@/components/Cardsesection";

export default function Home() {
  return (
    <div>
      <TopHeader/>
      <Header/>
      <CollectionSection/>
      <Productionsection5/>
      <ProductCards/>
      <FeatureProductSection/>
      <ProductCard123/>
      <Cardsesection/>
     <Footer/>
    </div>
  );
}
