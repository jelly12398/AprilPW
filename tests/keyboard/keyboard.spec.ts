import{test,expect,Locator} from "@playwright/test"

test("validate copy,paste, tab keyboard actions",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
//const section=page.locator("p").filter({hasText:"This is a paragraph in Section 1"}).getByRole("textbox")
const section=page.locator("#input1")
await section.focus()//or we can use section.click()
//entering the value
await page.keyboard.insertText("Maha")
//select the text
await page.keyboard.press("Control+A");
//copy
await page.keyboard.press("Control+C")
//tab
await page.keyboard.press('Tab')
await page.keyboard.press('Tab')
//paste
await page.keyboard.press("Control+V")

await page.waitForTimeout(3000)

})