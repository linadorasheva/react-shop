import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Button } from 'react-bootstrap';
import Context from '../store/Context';

const Sorting = observer(() => {
  const { productStore } = useContext(Context);

  return (
    <ul className="sorting">
      { productStore.brands.map((brand) => {
        const activeClassName = productStore.getSelectedBrand.id === brand.id ? 'sorting__item active' : 'sorting__item';

        return (<li key={`sorting-item-${brand.id}`} className={activeClassName}><Button variant="light" onClick={() => productStore.setSelectedBrand(brand)} className="sorting__btn">{ brand.name }</Button></li>);
      }) }
    </ul>
  );
});

export default Sorting;
