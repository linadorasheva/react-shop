import React, { useContext, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import Context from '../../store/Context';

const CreateProduct = ({show, onHide}) => {
  const { productStore } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, {title: '', value: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo(info.filter((item) => item.number !== number));
  }

  return (
    <Modal
      size="lg"
      show={show}
      onHide={onHide}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый продукт
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="d-flex mb-4">
            <Dropdown className="mr-2">
              <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
              <Dropdown.Menu>
                {
                  productStore.getTypes.map((type) => (
                    <Dropdown.Item key={`dropdown-item-${type.id}`}>{type.name}</Dropdown.Item>
                  ))
                }
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
              <Dropdown.Menu>
                {
                  productStore.getBrands.map((brand) => (
                    <Dropdown.Item key={`dropdown-item-${brand.id}`}>{brand.name}</Dropdown.Item>
                  ))
                }
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-flex mb-4">
            <Form.Control className="mr-2" placeholder="Введите название устройства"/>
            <Form.Control className="mr-2" type="number" placeholder="Введите стоимость устройства"/>
          </div>
            <Form.Control className="mb-4" type="file" />
            <hr/>

            <div>
              <Button className="mb-4" variant={'outline-dark'} onClick={addInfo}>Добавить новое свойство</Button>
              {
                info.map((item) => (
                  <Row key={item.number}>
                    <Col className="mb-2" md={4}>
                      <Form.Control placeholder="Введите название" />
                    </Col>

                    <Col className="mb-2" md={4}>
                      <Form.Control placeholder="Введите описание" />
                    </Col>

                    <Col md={4}>
                      <Button variant={"outline-danger"} onClick={() => removeInfo(item.number)} >Удалить</Button>
                    </Col>
                  </Row>
                ))
              }
            </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'danger'} onClick={onHide}>Закрыть</Button>
        <Button variant={'info'} onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateProduct;
