import { makeAutoObservable } from 'mobx';

export default class ProductStore {
  constructor() {
    this.types = [
      {
        id: 1,
        name: 'Холодильники',
      },
      {
        id: 2,
        name: 'Стиральные машины',
      },
      {
        id: 3,
        name: 'Посудомоечные машины',
      },
      {
        id: 4,
        name: 'Микроволновые печи',
      },
      {
        id: 5,
        name: 'Кофемашины',
      },
      {
        id: 6,
        name: 'Телевизоры',
      },
    ];

    this.brands = [
      {
        id: 1,
        name: 'Apple',
      },
      {
        id: 2,
        name: 'Xiaomi',
      },
      {
        id: 3,
        name: 'Samsung',
      },
      {
        id: 4,
        name: 'LG',
      },
      {
        id: 5,
        name: 'BOSH',
      },
      {
        id: 6,
        name: 'Ariston',
      },
    ];

    this.products = [
      {
        id: 10,
        name: '12 pro max',
        price: '100 000',
        rating: 0,
        img: 'img/img1.jpeg',
        basketDeviceId: null,
        brandId: 1,
        typeId: 16,
      },
      {
        id: 11,
        name: '12 mini',
        price: '70 000',
        rating: 0,
        img: 'img/img2.jpeg',
        basketDeviceId: null,
        brandId: 1,
        typeId: 16,
      },
      {
        id: 12,
        name: 'RR39T7475AP',
        price: '15 000',
        rating: 0,
        img: 'img/img3.jpeg',
        basketDeviceId: null,
        brandId: 3,
        typeId: 1,
      },
    ];

    this.selectedType = {};

    this.selectedBrand = {};
    makeAutoObservable(this);
  }

  setBrands(value) {
    this.brands = value;
  }

  setTypes(value) {
    this.types = value;
  }

  setSelectedType(value) {
    this.selectedType = value;
  }

  setSelectedBrand(value) {
    this.selectedBrand = value;
  }

  setProducts(value) {
    this.devices = value;
  }

  get getTypes() {
    return this.types;
  }

  get getSelectedType() {
    return this.selectedType;
  }

  get getBrands() {
    return this.brands;
  }

  get getSelectedBrand() {
    return this.selectedBrand;
  }

  get getProducts() {
    return this.devices;
  }
}
