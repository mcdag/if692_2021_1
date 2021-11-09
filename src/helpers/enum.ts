export enum xpath {
  NAME_AMAZON = '/html/body/div[2]/div[2]/div[6]/div[3]/div[4]/div[1]/div/h1/span/',
  PRICE_AMAZON = '/html/body/div[2]/div[2]/div[6]/div[3]/div[1]/div[3]/div/div/div/form/div/div/div/div/div[2]/div/div/span/span[1]',
  TYPE_AMAZON = '/html/body/div[2]/div[2]/div[6]/div[3]/div[4]/div[33]/div/table/tbody/tr[3]/td[2]/span',
  BRAND_AMAZON = '/html/body/div[2]/div[2]/div[6]/div[3]/div[4]/div[33]/div/table/tbody/tr[1]/td[2]/span',

  NAME_ML = '/html/body/main/div[2]/div[2]/div[1]/div[1]/div/div[1]/div[2]/div[1]/div[1]/div[2]/h1/',
  PRICE_ML = '/html/body/main/div[2]/div[2]/div[1]/div[1]/div/div[1]/div[2]/div[3]/div[1]/span/span[2]/span[2]',
  TYPE_ML = '/html/body/main/div[2]/div[2]/div[1]/div[1]/div/div[3]/div/section/div[2]/div/div[1]/div[1]/div/div[2]/p/span[2]',
  BRAND_ML = '/html/body/main/div[2]/div[2]/div[1]/div[1]/div/div[3]/div/section/div[3]/div/div/div/div[1]/div[1]/table/tbody/tr[1]/td/span',

  NAME_OLX = '/html/body/div[1]/div/div[4]/div[2]/div/div[2]/div[1]/div[14]/div/div/h1',
  PRICE_OLX = '/html/body/div[1]/div/div[4]/div[2]/div/div[2]/div[1]/div[12]/div/div/div/div/div[1]/div/h2',
  TYPE_OLX = '',
  BRAND_OLX = '',

  NAME_NETSHOES= '/html/body/main/div[2]/section/div[1]/section/h1',
  PRICE_NETSHOES = '/html/body/main/div[2]/section/section[2]/div[2]/div[2]/div/span/strong',
  TYPE_NETSHOES = '/html/body/main/div[2]/section/div[1]/section/div[2]/section/ul/li[3]/',
  BRAND_NETSHOES = '/html/body/main/section[1]/ul/li[4]/a'
}

export enum link {
  JBL = 'https://www.jbl.com.br/',
  AMAZON = 'https://www.amazon.com.br/',
  MERCADO_LIVRE = 'https://www.mercadolivre.com.br/',
  NETSHOES = 'https://www.netshoes.com.br/',
  OLX = 'https://www.olx.com.br/',
  MAGAZINE_LUIZA = 'https://www.magazineluiza.com.br/',
  AMERICANAS = 'https://www.americanas.com.br/',
  EXTRA = 'https://www.extra.com.br/',
  SUBMARINO = 'https://www.submarino.com.br/',
  SHOPEE = 'https://shopee.com.br/',
}
