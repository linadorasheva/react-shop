import React from 'react';
import { Container, Image } from 'react-bootstrap';

const ProductPage = () => {
  const product = {
      id: 10,
      name: '12 pro max',
      price: '100 000',
      rating: 4.8,
      img: '../img/img1.jpeg',
      basketProductId: null,
      brandId: 1,
      typeId: 16,
    };

  const specs = [
    {id:1, title: 'Процессор', value: 'A5'},
    {id:2, title: 'Дисплей', value: '6"'},
    {id:3, title: 'Память', value: '126 Gb'},
    {id:5, title: 'Оперативная память', value: '2 Gb'},
    {id:6, title: 'Карта памяти', value: 'Нет'},
    {id:7, title: 'Камера', value: '32 Мп'},
    {id:8, title: 'Фронтальная камера', value: '5 Мп'},
    {id:9, title: 'Количество сим-карт', value: '2'},
    {id:10, title: 'Страна производитель', value: 'Китай'},
  ]

  return (
    <Container>
      <div className="product-page">
        <div className="product-page__heading">
          <span className="product-page__type">product_type</span>
          <h1 className="product-page__title">{product.name}</h1>
        </div>

        <section className="product-page__top">
          <div className="product-page__wrapper-img">
            <Image className="product-page__img" src={product.img} />
          </div>
          <div className="product-page__rating rating">
            <span className="rating__star">&#9733;&nbsp;</span>
            <span className="rating__value">{product.rating}</span>
          </div>
          <div className="product-page__info">
            <div className="product-page__price">{product.price}&nbsp;₽</div>
            <button type="button" className="product-page__buy">Купить</button>
          </div>
        </section>
        <section className="product-page__bottom specs">
          <h2 className="specs__title">Технические характеристики</h2>
          <ul className="specs__list">
            {
              specs.map((specItem) => (
                <li key={`specs-item-${specItem.id}`} className="specs__item">
                  <div className="specs__name">{specItem.title}</div>
                  <div className="specs__value">{specItem.value}</div>
                </li>
              ))
            }
          </ul>
        </section>
      </div>
    </Container>
)};

export default ProductPage;
