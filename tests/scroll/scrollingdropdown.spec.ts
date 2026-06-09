import{test,expect,Locator} from "@playwright/test"

test("Validate scrolling dropdown", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/#")
const dropdown:Locator=page.getByPlaceholder("Select an item");
await dropdown.click()
const option=page.locator("#dropdown div:nth-child(25)")
console.log(await option.innerText())
await expect(await option.innerText()).toContain("Item 25")
})