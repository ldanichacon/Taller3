const timeout = 10000;

describe ('Registro', ()=>{
	//const browser;
	//const page;
	beforeAll(async ()=>{
		await page.goto('https://angular-6-registration-login-example.stackblitz.io/register');
		await page.waitForSelector('.form-control');
		await page.type('[ng-reflect-name="firstName"]', 'FirstName');
		await page.type('[ng-reflect-name="lastName"]', 'LastName');
		await page.type('[ng-reflect-name="username"]', 'usernameTest');
		await page.type('[ng-reflect-name="password"]', 'password');
		await page.screenshot({path: '1-registroExitoso.png'});
		await page.click('.btn-primary');
	},timeout);
	it('Debio registrar bien', async () => {
		await expect(page).toMatch('Registration successful',{ timeout: timeout });
		await page.screenshot({path: '1-registroExitosoResultado.png'});
  });
});