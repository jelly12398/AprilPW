import{test,expect,Locator} from "@playwright/test"

test("Validate double click",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/#")
const button=page.getByRole("button",{name:'Copy Text'})
await button.dblclick()
const field=page.locator("#field2")
console.log(await field.inputValue())
await expect(field).toHaveValue("Hello World!")

})