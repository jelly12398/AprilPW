import {test,expect,Locator} from "@playwright/test";
test("Verify dropdown values", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //await page.getByRole("combobox", {name:/country/i}).selectOption('India')//visble text
    //await page.getByRole("combobox", {name:/country/i}).selectOption({label:'France'}) //by using label
    //await page.getByRole("combobox", {name:/country/i}).selectOption({value:'australia'}) //by using value attribute
    //await page.getByRole("combobox", {name:/countryy/i}).selectOption({index:3})//by using index

 //2-check number of options in the dropdown(count)
 let alloptions:Locator= page.locator("#country>option")
 await expect(alloptions).toHaveCount(10)

    await page.waitForTimeout(3000)

//3-check an option present in the dropdown
const optionsText:string[]= (await alloptions.allTextContents()).map(item=>item.trim())
console.log(optionsText)
expect(optionsText).toContain("Japan")

//print all options
for(let op of optionsText)
{
    console.log(op)
}

})