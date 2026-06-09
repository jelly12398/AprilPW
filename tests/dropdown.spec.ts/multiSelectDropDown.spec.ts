import{test,expect,Locator} from "@playwright/test"
test("Validate multiselect dropdown", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
//select options in 4 ways
//await page.getByRole("listbox",{name:/colors/i}).selectOption(["Red","Blue","Green"])//using visible text
//await page.getByRole("listbox",{name:/colors/i}).selectOption(["red","blue","green"]) //using value attribute
//await page.getByRole("listbox",{name:/colors/i}).selectOption([{label:"Red"},{label:"Blue"},{label:"Green"}])
//await page.getByRole("listbox",{name:/colors/i}).selectOption([{index:0},{index:2},{index:4}])//using index
//using getByLable 
//await page.getByLabel("Colors:").selectOption(["Red","Blue","Green"])
 //await expect(colorsdropdown).toBeVisible()

//check no.of options in the dropdown
/* const allOptions:Locator= page.locator("#colors>option")
await expect(allOptions).toHaveCount(7)
await page.waitForTimeout(3000) */

//check an option present in the dropdown
/* const optionsText:string[]=(await allOptions.allTextContents()).map(item=>item.trim())
console.log(optionsText)
expect(optionsText).toContain("Green") //check if the array contain "Japan" */

//printing options from the dropdown
/* for(const op of optionsText)
{
console.log(op)
} */


})