import { EarphoneDTO } from "./earphone.dto";

class EarphonesDTO {
  earphones: EarphoneDTO[];

  constructor (
    earphones: EarphoneDTO[],
  ) {
    this.earphones = earphones;
  }
}

export {EarphonesDTO};