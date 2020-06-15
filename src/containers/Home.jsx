import React from 'react';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Carousel from '../Components/Carousel';
import CarouselItem from '../Components/CarouselItem';
import Categories from '../Components/Categories';
import Search from '../Components/Search';
import '../assets/styles/Home.scss';

const Home = ({ myList, trends, originals }) => (
    <>
        <Header />
        <Search isHome />
        {myList.length > 0 && (
            <Categories title="Mi lista">
                <Carousel>
                    {myList.map(item => (
                        <CarouselItem
                            key={item.id}
                            {...item}
                            isList
                        />
                    ))}
                </Carousel>
            </Categories>
        )}
        <Categories title="Tendencias">
            <Carousel>
                {trends.map(item => (
                    <CarouselItem key={item.id} {...item} />
                ))}
            </Carousel>
        </Categories>
        <Categories title="Originales de Platzi">
            <Carousel>
                {originals.map(item =>
                    <CarouselItem key={item.id} {...item} />
                )}
            </Carousel>
        </Categories>
        <Footer />
    </>
);

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    };
};

export default connect(mapStateToProps, null)(Home);
