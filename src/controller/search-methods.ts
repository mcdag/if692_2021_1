import { link, xpath } from "../helpers/enum";

export interface Data {
  nameXPath: string;
  typeXpath: string;
  brandXpath: string;
  priceXpath: string;
  siteUrl: string;
}

export function getDataInformation (site: string): Data {
  let nameXpath: string, typeXpath: string, brandXpath: string, priceXPath: string, siteUrl: string;

  switch (site) {
    case 'amazon':
      nameXpath = xpath.NAME_AMAZON;
      typeXpath = xpath.TYPE_AMAZON;
      brandXpath = xpath.BRAND_AMAZON;
      priceXPath = xpath.PRICE_AMAZON;
      siteUrl = link.AMAZON;
      break;
    case 'americanas':
      nameXpath = xpath.NAME_AMAZON;
      typeXpath = xpath.TYPE_AMAZON;
      brandXpath = xpath.BRAND_AMAZON;
      priceXPath = xpath.PRICE_AMAZON;
      siteUrl = link.AMAZON;
      break;
    case 'extra':
      nameXpath = xpath.NAME_AMAZON;
      typeXpath = xpath.TYPE_AMAZON;
      brandXpath = xpath.BRAND_AMAZON;
      priceXPath = xpath.PRICE_AMAZON;
      siteUrl = link.AMAZON;
      break;
    case 'jbl':
      nameXpath = xpath.NAME_AMAZON;
      typeXpath = xpath.TYPE_AMAZON;
      brandXpath = xpath.BRAND_AMAZON;
      priceXPath = xpath.PRICE_AMAZON;
      siteUrl = link.AMAZON;
      break;
    case 'magazine-luiza':
      nameXpath = xpath.NAME_AMAZON;
      typeXpath = xpath.TYPE_AMAZON;
      brandXpath = xpath.BRAND_AMAZON;
      priceXPath = xpath.PRICE_AMAZON;
      siteUrl = link.AMAZON;
      break;
    case 'mercado-livre':
      nameXpath = xpath.NAME_AMAZON;
      typeXpath = xpath.TYPE_AMAZON;
      brandXpath = xpath.BRAND_AMAZON;
      priceXPath = xpath.PRICE_AMAZON;
      siteUrl = link.AMAZON;
      break;
    case 'netshoes':
      nameXpath = xpath.NAME_AMAZON;
      typeXpath = xpath.TYPE_AMAZON;
      brandXpath = xpath.BRAND_AMAZON;
      priceXPath = xpath.PRICE_AMAZON;
      siteUrl = link.AMAZON;
      break;
    case 'olx':
      nameXpath = xpath.NAME_AMAZON;
      typeXpath = xpath.TYPE_AMAZON;
      brandXpath = xpath.BRAND_AMAZON;
      priceXPath = xpath.PRICE_AMAZON;
      siteUrl = link.AMAZON;
      break;
    case 'shopee':
      nameXpath = xpath.NAME_AMAZON;
      typeXpath = xpath.TYPE_AMAZON;
      brandXpath = xpath.BRAND_AMAZON;
      priceXPath = xpath.PRICE_AMAZON;
      siteUrl = link.AMAZON;
      break;
    case 'submarino':
      nameXpath = xpath.NAME_AMAZON;
      typeXpath = xpath.TYPE_AMAZON;
      brandXpath = xpath.BRAND_AMAZON;
      priceXPath = xpath.PRICE_AMAZON;
      siteUrl = link.AMAZON;
      break;
    default:
      console.log('error');
      break;
  }
  const data: Data = {
    nameXPath: nameXpath,
    typeXpath: typeXpath,
    brandXpath: brandXpath,
    priceXpath: priceXPath,
    siteUrl: siteUrl,
  }

  return data;
}
