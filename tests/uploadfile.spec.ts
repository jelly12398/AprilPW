import{test,expect} from "@playwright/test"

test("validate uploading the file", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

//locate the choose file element and the file
await page.locator("#singleFileInput").setInputFiles("uploadfiles/Promise in js.docx")

//click on upload file

await page.getByRole("button",{name:"Upload Single File"}).click()

const text:string|null=await page.locator("#singleFileStatus").textContent()

expect(text).toContain("Promise")

await page.waitForTimeout(2000)

})
