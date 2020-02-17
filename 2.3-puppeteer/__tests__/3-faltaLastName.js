const timeout = 10000;

describe ('Registro', ()=>{
	//const browser;
	//const page;
	beforeAll(async ()=>{
		await page.goto('https://angular-6-registration-login-example.stackblitz.io/register');
		await page.waitForSelector('.form-control');
		await page.type('[ng-reflect-name="firstName"]', 'FirstName');
		await page.type('[ng-reflect-name="username"]', 'usernameTest');
		await page.type('[ng-reflect-name="password"]', 'password');
		await page.screenshot({path: '3-faltaLastName.png'});
		await page.click('.btn-primary');
	},timeout);
	it('Falta Last Name', async () => {
		await expect(page).toMatch('Last Name is required',{ timeout: timeout });
		await page.screenshot({path: '3-faltaLastNameResultado.png'});
  });
});