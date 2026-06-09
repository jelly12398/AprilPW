import{test,expect} from "@playwright/test"

test('test1', async({page})=>{
await page.goto("https://demowebshop.tricentis.com/register")
 //expect(await page.screenshot()).toMatchSnapshot('home.png') //approach1
 await expect(page).toHaveScreenshot()//approach2
 //specific element
 //const logo= page.getByRole("link",{name:'Tricentis Demo Web Shop'})
 //expect(await logo.screenshot()).toMatchSnapshot('logo.png')

})