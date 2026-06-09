import{test,expect,Locator} from "@playwright/test"

test("Mouse hover", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/#")

//get the locator of point me button
const button:Locator=page.getByRole("button", {name:/Point Me/i})
//const button=page.locator("button.dropbtn")

//mouse hover on point me button
await button.hover();

//select the dropdown value

const laptop:Locator=page.getByRole("link",{name:"Laptops"})
//const laptop=page.locator(".dropdown-content a:nth-child(2)")
await laptop.hover();
await page.waitForTimeout(2000)




})