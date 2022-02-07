const fetch = require('node-fetch');
const cheerio = require('cheerio');

/**
 * Parse webpage e-shop
 * @param  {String} data - html response
 * @return {Array} products
 */
const parse = data => {
    const $ = cheerio.load(data);

    return $('.item') // document.querySelectorAll('.productList')
        .map((i, element) => {
            const name = $(element)
                .find('.product-name a').attr('title');

            const link = $(element).find('.product-name a').attr('href');

            const price = parseInt($(element).find('.price-box').text());

            const picture = $(element).find('.product-image a').attr('href')
            /*

            const picture = $(element).find('.productList-image img').attr('data-src');
            );*/
            const brand = 'montlimart';
            return { brand, name, price, link, picture};
        })
        .get();
};

/**
 * Scrape all the products for a given url page
 * @param  {[type]}  url
 * @return {Array|null}
 */
module.exports.scrape = async url => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const body = await response.text();

            return parse(body);
        }
        console.error(response);

        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
};
