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
		await page.screenshot({path: '5-faltaPassword.png'});
		await page.click('.btn-primary');
	},timeout);
	it('Falta Password', async () => {
		await expect(page).toMatch('Password is required',{ timeout: timeout });
		await page.screenshot({path: '5-faltaPasswordResultado.png'});
  });
});