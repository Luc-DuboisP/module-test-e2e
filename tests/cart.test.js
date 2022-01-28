const timeout = 15000;

// Test des fonctionnalités de gestion du panier
describe("Cart features", () => {
    let page;
    let count;

    test('add to cart', async () => {
        await page.goto(process.env.TESTED_WEBSITE);
        await page.waitForSelector('#login_button_container');
        await page.type('#user-name', process.env.TEST_LOGIN);
        await page.type('#password', process.env.TEST_PASSWORD);
        await page.click('#login-button');
        expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");
        await page.waitForSelector('btn btn_primary btn_small btn_inventory');

    }, timeout);

    test('remove cart', async () => {
        await page.click('#remove-sauce-labs-backpack')
        count = await page.$eval('.shopping_cart_badge', e => e.innerHTML)
        expect(parseInt(count)).toBe(5)
    });


    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
    }, timeout)

});
