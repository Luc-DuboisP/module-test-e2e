const timeout = 15000;

// Test des fonctionnalités d'authentification
describe("Auth features", () => {
    let page;

    test('login', async () => {
        await page.waitForSelector('#login_button_container');
        await page.type('#user-name', process.env.TEST_LOGIN);
        await page.type('#password', process.env.TEST_PASSWORD);
        await page.click('#login-button');
        expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");
    }, timeout);

    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
    }, timeout)

    beforeEach(async () => {
        await page.goto(process.env.TESTED_WEBSITE);
        await page.waitForSelector('#user-name');
        await page.waitForSelector('#login-button')
    });

});
