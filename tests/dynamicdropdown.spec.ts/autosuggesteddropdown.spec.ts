import { test, expect, Locator } from "@playwright/test";

test("autodropdown", async ({ page }) => {
    await page.goto("https://www.flipkart.com/");
    
    // Update the name to match the actual text box label/placeholder
    
    const searchBox = page.getByPlaceholder("Search for Products, Brands and More" ).first();
    //first() is used to explicitly select the very first element from a list of matching elements.
    // Wait for it to be visible (good practice before filling)
    await expect(searchBox).toBeVisible();
    
    await searchBox.fill("smart");
//await pontent() to safely grab text without triggering visibility checks
        const text = await options.nth(i).textContent(); 
        //console.log(`Option ${i + 1}: ${text?.trim()}`);
    }

    // Click the 3rd option (Index 2)
    if (count >= 3) {
        // Use { force: true } if a hidden overlay is blocking the click
        await options.nth(2).click({ force: true });
    } else {
        console.log("Less than 3 options found, cannot click the 3rd option.");age.locator("input[name='q']").fill("smart")
//await page.waitForTimeout(5000);
const options:Locator= page.locator("ul>li")
await page.waitForTimeout(3000);
const count=await options.count();
console.log("count is :", count) //8
   
    /* await searchBox.pressSequentially("smart", { delay: 200 });
    await expect(page.locator("ul > li:visible").first()).toBeVisible();
    
    // Press Arrow Down to navigate to the first option, then Enter to select
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter"); */
//await options.filter({ hasText: /smartphone/i }).first().click();

//priniting all the suggested option in the console

//for(let i=0;i<count; i++)
//{
 //console.log("innertext:",await options.nth(i).innerText())
 //console.log("textcontent:",await options.nth(i).textContent())
 //console.log(await options.nth(i).allTextContents())
 //const text=await options.nth(i).innerText()
 //select /click on the smartphone option
 //if(text=="smartphone")
/*  {
    options.nth(i).click()
    break
 } */
 
//}


})
