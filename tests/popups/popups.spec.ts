/* import{test,expect} from "@playwright/test"

test("Handle the popups", async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole("button",{name:"Popup Windows"}).click()
    //await Promise.all([page.waitForEvent('popup'),page.getByRole("button",{name:"Popup Windows"}).click()])
    const allpages=context.pages();

    //length
    console.log("all the pages",allpages.length)
  
    //title
    const parentpage=allpages[0].url()
    console.log("parentpage:",parentpage)
    
    const popup1= allpages[1].url();
    console.log("first popup", popup1)

    const popup2= allpages[2].url();
    console.log("second popup", popup2)

    for(let p of allpages){
const title= await p.title()
if(title.includes('playwright')){
    await p.getByRole("link",{name:"Get started"}).click()
    await page.waitForTimeout(2000)
    await p.close();

}

    }await page.waitForTimeout(2000)
}) */

    import { test, expect } from "@playwright/test"

test("Handle the popups", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    // Click the button that opens multiple popups
    await page.getByRole("button", { name: "Popup Windows" }).click();
    
    // Wait briefly to ensure ALL popups have time to open and register in the context
    await page.waitForTimeout(3000); 

    // Now grab all pages in the context
    const allpages = context.pages();
    
    // length
    console.log("all the pages:", allpages.length);
  
    // URL fetching (Notice: removed 'await' because url() is synchronous)
    // Added safety checks to prevent 'undefined' errors
    if (allpages.length > 0) {
        console.log("parentpage:", allpages[0].url());
    }
    
    if (allpages.length > 1) {
        console.log("first popup:", allpages[1].url());
    }

    if (allpages.length > 2) {
        console.log("second popup:", allpages[2].url());
    }

    // Loop through the pages to find the specific one
    for (let p of allpages) {
        // title() is asynchronous, so we keep 'await' here
        const title = await p.title();
        
        // Note: ensure case-sensitivity matches the actual title (e.g., 'Playwright')
        if (title.toLowerCase().includes('playwright')) {
            await p.getByRole("link", { name: "Get started" }).click();
            await p.waitForTimeout(2000);
            await p.close();
        }
    }
    
    await page.waitForTimeout(2000);
});