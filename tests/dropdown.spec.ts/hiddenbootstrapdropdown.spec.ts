import{test, expect, Locator} from "@playwright/test"

test("verify bootstrap dropdown", async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//Login steps
//username
const username:Locator=page.getByRole("textbox",{name:'username'})
await expect(username).toBeVisible();
await username.fill("Admin")
console.log("Entered username details:",await username.inputValue())

//password
const password:Locator=page.getByRole("textbox",{name:"password"})
await expect(password).toBeVisible()
await password.fill("admin123")
await page.waitForTimeout(2000)
 //Use toHaveValue() for input fields
await expect(password).toHaveValue("admin123");
    
console.log("Entered password details are:", await password.inputValue())

//Login button

const login:Locator= page.getByRole("button",{name:" Login "})
await expect(login).toBeVisible();
await expect(login).toBeEnabled();
await login.click();

//PIM
const pim:Locator=page.getByRole("link",{name:"PIM"})
await expect(pim).toBeVisible();
await expect(pim).toBeEnabled();
await pim.click();

//select job title dropdown and click
const jobtitle:Locator=page.locator("form i").nth(2)
await expect(jobtitle).toBeVisible()
await expect(jobtitle).toBeEnabled()
await jobtitle.click()
await page.waitForTimeout(2000)

//capture all the options from dropdown:use ctrl+shft+p and enter emulate a focused page for hidden items
//const options:Locator=page.locator("div[role='listbox'] span")
//Inside the listbox you just found, find all elements that have role="option"
const options: Locator = page.getByRole("listbox").getByRole("option");
const count:number=await options.count();
console.log("no of options in a dropdown:", count)
console.log(await options.allTextContents())

//print all the elements
for(let i=0;i<count;i++)
{
    console.log(await options.nth(i).innerText())
    //console.log(await options.nth(i).textContent())
}

//select particular option
await page.getByRole("listbox").getByRole("option",{name:'Chief Executive Officer'}).click()

})