/* eslint-disable no-console, no-process-exit */
const dedicatedbrand = require('./sources/dedicatedbrand');
const montlimar = require('./sources/montlimart');

const fs = require('fs');

// obtenir le bon nombre de pages 

    async function sandbox(eshop = 'https://www.dedicatedbrand.com/en/men/all-men') {
        try {
            console.log(`🕵️‍♀️  browsing ${eshop} source`);
            let i = 0;
            do {
                var ok=true
                const products = await dedicatedbrand.scrape(eshop + '?p=' + i);
                console.log(products);
                i++;
                if (products.length <= 1) { ok = false }

                var prod = products.flat();
                var json = JSON.stringify(prod);

            }
            while (ok);
            fs.writeFileSync('products.json', json);

            console.log('done');

            process.exit(0);
        } catch (e) {
            console.error(e);
            process.exit(1);
        }
}
async function sandbox2(eshop = 'https://www.montlimart.com/fabrique-en-france.html?gclid=CjwKCAiAo4OQBhBBEiwA5KWu_7PcgrL82oWV0cHAgBYAlMrLAq4OdyQqrO5MWikIoDhWGuFwZXMjdxoCvBAQAvD_BwE') {
    try {
        console.log(`🕵️‍♀️  browsing ${eshop} source`);
        const products = await montlimar.scrape(eshop);
        console.log(products);

        console.log('done');
        var prod = products.flat();
        var json = JSON.stringify(prod);

        fs.writeFileSync('products.json', json);

        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
    const [, , eshop] = process.argv;

//sandbox(eshop);
sandbox2(eshop);