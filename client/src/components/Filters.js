import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { ListGroup } from 'react-bootstrap';
import Context from '../store/Context';

const Filters = observer(() => {
  const { deviceStore } = useContext(Context);
  return (
    <div className="filters">
      <ListGroup variant="flush" className="filters__list">
        { deviceStore.types.map((type) => (
          <ListGroup.Item
            className="filters__item"
            active={deviceStore.getSelectedType.id === type.id}
            key={`filter-item-${type.id}`}
            onClick={() => deviceStore.setSelectedType(type)}
          >
            { type.name }
          </ListGroup.Item>
        )) }
      </ListGroup>
    </div>
  );
});

export default Filters;
