import React from 'react';
import { Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PRODUCT_ROUTE_PATH } from '../utils/constants';

const ProductItem = ({ product }) => {
  const history = useHistory();

  return (
    <div className="product">
      <div className="product__bg"/>
      <div className="product__top">
        <div className="product__aside">
          <div className="product__wrapper-img">
            <Image className="product__img" src={product.img} onClick={() => history.push(`${PRODUCT_ROUTE_PATH}/${product.id}`)}/>
          </div>
          <div className="product__rating rating">
            <span className="rating__star">&#9733;&nbsp;</span>
            <span>{product.rating}</span>
          </div>
        </div>

        <div className="product__heading">
          <p className="product__type">product type</p>
          <p className="product__name" onClick={() => history.push(`${PRODUCT_ROUTE_PATH}/${product.id}`)}>{product.name}</p>
        </div>
      </div>
      <div className="product__bottom">
        <p className="product__price">{product.price}&nbsp;₽</p>
        <button type="button" className="product__buy">Купить</button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
