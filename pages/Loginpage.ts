/* import{Page,Locator} from "@playwright/test"

class LoginPage{
    //define the variables
private readonly page:Page;


constructor(page:Page){
    this.page=page
}

} */

import{test,expect} from "@playwright/test"
test("testing", async({page})=>{
await page.goto("https://demo.nopcommerce.com/")
await page.getByRole("link",{name:'Register'}).click()
await expect(page.getByRole("heading",{name:/Register/})).toBeVisible()

})