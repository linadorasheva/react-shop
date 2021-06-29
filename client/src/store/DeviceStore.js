import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this.types = [
      {
        id: 1,
        name: 'Холодильники',
      },
      {
        id: 6,
        name: '"Телевизоры"',
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
    ];

    this.devices = [
      {
        id: 10,
        name: '12 pro max',
        price: 100000,
        rating: 0,
        img: '481337f1-62e6-48c6-b2ac-63c34199f416.jpg',
        basketDeviceId: null,
        brandId: 1,
        typeId: 16,
      },
      {
        id: 11,
        name: '12 mini',
        price: 70000,
        rating: 0,
        img: 'e99a90ee-dff5-4bda-b802-5aa64960146b.jpg',
        basketDeviceId: null,
        brandId: 1,
        typeId: 16,
      },
      {
        id: 12,
        name: 'RR39T7475AP',
        price: 15000,
        rating: 0,
        img: '79c87ff8-e9b1-4794-a2ba-e57bd276cc90.jpg',
        basketDeviceId: null,
        brandId: 3,
        typeId: 1,
      },
    ];
    makeAutoObservable(this);
  }

  setBrands(value) {
    this.brands = value;
  }

  setTypes(value) {
    this.types = value;
  }

  setDevices(value) {
    this.devices = value;
  }

  get getTypes() {
    return this.types;
  }

  get getBrands() {
    return this.brands;
  }

  get getDevices() {
    return this.devices;
  }
}
