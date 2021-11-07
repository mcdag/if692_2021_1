class EarphoneDTO {
  name: string;
  type: string;
  brand: string;
  price: string;

  constructor (
    name: string,
    type: string,
    brand: string,
    price: string
  ) {
    this.name = name;
    this.type = type;
    this.brand = brand;
    this.price = price;
  }
}

export {EarphoneDTO};