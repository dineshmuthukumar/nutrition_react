import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Collections from "../components/collections";
import HotCollections from "../components/hot-collections";
import TopSellers from "../components/top-sellers";
import ShowAll from "../components/show-all";

const Home = () => {
    return ( < >
        <Header />
        <Banner />
        <Collections />
        <HotCollections />
        <TopSellers />
        <ShowAll />
        <Footer />
        </>
    );
};

export default Home;