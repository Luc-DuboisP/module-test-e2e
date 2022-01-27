const timeout = 15000;

// Test des fonctionnalités d'authentification
describe("Auth features", () => {
    let page;

    test('login', async () => {
        await page.goto(process.env.TESTED_WEBSITE);
        await page.waitForSelector('#login_button_container');
        await page.type('#user-name', process.env.TEST_LOGIN);
        await page.type('#password', process.env.TEST_PASSWORD);
        await page.click('#login-button');
        expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");
    }, timeout);

    test('logout', async () =>{
        await page.goto(process.env.TESTED_WEBSITE);
        await page.waitForSelector('#login_button_container');
        await page.type('#user-name', process.env.TEST_LOGIN);
        await page.type('#password', process.env.TEST_PASSWORD);
        await page.click('#login-button');
        await page.click('.bm-burger-button');
        await page.waitForSelector('#bm-item-list');
        await page.waitFor(500);
        await page.click('#bm-item menu-item');
        expect(page.url()).toBe("https://www.saucedemo.com");

    }, timeout);

    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
    }, timeout)

});
