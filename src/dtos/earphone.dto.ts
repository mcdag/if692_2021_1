class EarphoneDTO {
  name: string;
  type: string;
  brand: string;
  price: string;
  site: string;

  constructor (
    name: string,
    type: string,
    brand: string,
    price: string,
    site: string
  ) {
    this.name = name;
    this.type = type;
    this.brand = brand;
    this.price = price;
    this.site = site;
  }
}

export {EarphoneDTO};