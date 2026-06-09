import{test,expect,Locator} from "@playwright/test"

test("Verify dropdown is sorted", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
const dropdownOptions:Locator= page.locator("#colors>option");
const optionsText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
const myset=new Set<string>();
const duplicate:string[]=[];
for(const text of optionsText)
{
    if(myset.has(text))
    {
        duplicate.push(text)
    }
    else{
        myset.add(text)
    }

}
console.log("duplicate options::",duplicate)
if(duplicate.length>0)
{
    console.log("duplicates are found", duplicate)
}
else{
    console.log("unique values are found")
}
expect(duplicate.length).not.toBe(0)
})