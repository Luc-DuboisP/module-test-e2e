const timeout = 15000;

// Test des fonctionnalités de prise de commande
describe("Checkout process", () => {
    let page;

    test('checkout', async () => {
        await page.waitForSelector('.shopping_cart_link')
        await page.click('.shopping_cart_link')
        expect(page.url()).toBe('https://www.saucedemo.com/cart.html')

    }, timeout);

    test('checkout  complete', async () => {
        await page.waitForSelector('#finish')
        await page.click('#finish')
        expect(page.url()).toBe('https://www.saucedemo.com/checkout-complete.html')
    }, timeout);

    test('info form', async () => {
        await page.waitForSelector('#checkout')
        await page.click('#checkout')
        expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html')
    }, timeout);

    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()

        await page.goto(process.env.TESTED_WEBSITE);
        await page.waitForSelector('#user-name');
        await page.waitForSelector('#login-button')
        await page.type('#user-name', process.env.TEST_LOGIN_SUCCESS);
        await page.type('#password', process.env.TEST_PASSWORD);
        await page.click('#login-button')
        expect(page.url()).toBe('https://www.saucedemo.com/inventory.html')
    }, timeout)

});
