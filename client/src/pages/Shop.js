import React from 'react';
import { Container } from 'react-bootstrap';
import Filters from '../components/Filters';
import Sorting from '../components/Sorting';
import ProductsList from '../components/ProductsList';

const Shop = () => (
  <Container>
    <section className="shop-page">
      <h1 className="shop-page__title">Каталог</h1>
      <div className="shop-page__content">
        <aside className="shop-page__aside">
          <Filters />
        </aside>
        <div className="shop-page__main">
          <Sorting />
          <div className="shop-page__listing">
            <ProductsList />
          </div>
        </div>
      </div>
    </section>
  </Container>
);

export default Shop;
