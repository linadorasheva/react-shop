import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateProduct from '../components/modals/CreateProduct';
import CreateType from '../components/modals/CreateType';

const AdminPanel = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);

  return (
    <div className="admin-page">
      <Container className="d-flex flex-column">
        <Button variant={"outline-dark"} className="mb-2" onClick={() => setTypeVisible(true)}>Добавить тип</Button>
        <Button variant={"outline-dark"} className="mb-2" onClick={() => setBrandVisible(true)}>Добавить бренд</Button>
        <Button variant={"outline-dark"} className="mb-2" onClick={() => setProductVisible(true)}>Добавить устройство</Button>
        <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
        <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
        <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
      </Container>
    </div>
  )};

export default AdminPanel;
