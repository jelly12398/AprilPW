import{test,expect,Locator} from "@playwright/test"

test("Verify dropdown is sorted", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
//const animalDropDown:Locator=page.getByRole("listbox",{name:"animals"})
//const dropdownOptions:Locator=animalDropDown.locator("options")
//console.log(dropdownOptions.allInnerTexts())
const dropdownOptions:Locator=page.locator("#animals>option")
//console.log(await dropdownOptions.allTextContents())
const optionsText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
const originalList:string[]=[...optionsText]
const sortedList:string[]=[...optionsText].sort(); //it updated the original list also bcs sort() is mutable it updates the array

await expect(originalList).toEqual(sortedList)


})