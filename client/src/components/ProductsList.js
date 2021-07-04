import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Context from '../store/Context';
import ProductItem from './ProductItem';

const ProductsList = observer(() => {
  const { productStore } = useContext(Context);

  return (
    <ul className="listing">
      { productStore.getProducts.map((product) => (
        <li key={`listing-item-${product.id}`} className="listing__item">
          <ProductItem product={product} />
        </li>
      )) }
    </ul>
  );
});

export default ProductsList;
