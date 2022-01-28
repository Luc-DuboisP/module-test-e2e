const timeout = 15000;

// Test des fonctionnalités de gestion du panier
describe("Cart features", () => {
    let page
    let count

    test('add items', async () => {
        await page.waitForSelector('.btn_inventory')
        const buttons = await page.$$('.btn_inventory')

        for (const btn of buttons) {
            await btn.click()
            await page.waitForSelector('.shopping_cart_badge')
        }
        expect(parseInt(count)).toBe(6)
    }, timeout);

    test('remove cart', async () => {
        await page.click('#remove-sauce-labs-backpack')
        count = await page.$eval('.shopping_cart_badge', e => e.innerHTML)
        expect(parseInt(count)).toBe(5)
    }, timeout);

    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
        await page.goto(process.env.TESTED_WEBSITE);
        await page.waitForSelector('#user-name');
        await page.waitForSelector('#login-button')
        await page.type('#user-name', process.env.TEST_LOGIN);
        await page.type('#password', process.env.TEST_PASSWORD);
        await page.click('#login-button')
    }, timeout);
});
