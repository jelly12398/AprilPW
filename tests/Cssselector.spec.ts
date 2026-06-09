import {test,expect,Locator} from "playwright/test"

test("Cerify Css selector:", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")

    //tag#id
  /* let searchbox:Locator=  page.locator("input#small-searchterms");
  await expect(searchbox).toBeVisible()
  await searchbox.fill("T-shirts"); */
 // await expect(page.getByPlaceholder("Search store")).toBeVisible()
 // await page.getByPlaceholder("Search store").fill("t-shirt")
 //await page.locator("input[value='Search store']").fill("T-shirt")
 //class and attribute
 //await page.locator("input.search-box-text[value='Search store']").fill("Dress")
 await expect(page.getByRole("textbox",{name:/Search store/i})).toBeVisible()

})