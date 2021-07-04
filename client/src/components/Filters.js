import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { ListGroup } from 'react-bootstrap';
import Context from '../store/Context';

const Filters = observer(() => {
  const { productStore } = useContext(Context);
  return (
    <div className="filters">
      <ListGroup variant="flush" className="filters__list">
        { productStore.types.map((type) => (
          <ListGroup.Item
            className="filters__item"
            active={productStore.getSelectedType.id === type.id}
            key={`filter-item-${type.id}`}
            onClick={() => productStore.setSelectedType(type)}
          >
            { type.name }
          </ListGroup.Item>
        )) }
      </ListGroup>
    </div>
  );
});

export default Filters;
