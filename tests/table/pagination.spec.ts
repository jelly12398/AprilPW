/* import{test,expect,Locator} from "@playwright/test"

test("pagination", async({page})=>{
     page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")
      
     let hasmorepages=true;
     while(hasmorepages)
     {
      const rows:Locator[]=await page.locator("#example tbody tr").all();
      for(let row of rows){
        console.log(await row.innerText())
      }
      //await page.waitForTimeout(2000)
     //next button after all pages text got

     const next:Locator=page.locator("button[aria-label='Next']")
     const isDisabled:string|null= await next.getAttribute('class')
     if(isDisabled?.includes('disabled')){

        hasmorepages=false;
        console.log("No more pages")

     }else{
        await next.click()
     }



     }




})
 */
import { test, expect, Locator } from "@playwright/test"

/* test("pagination", async ({ page }) => {
    // 1. FIX: Added missing 'await' before page.goto
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    let hasmorepages = true;
    
    // 2. FIX: Replaced while(true) with while(hasmorepages) to break the loop properly
    while (hasmorepages) {
        // 3. IMPROVEMENT: Added 'tbody' to only get data rows and avoid printing header/footer rows
        const rows: Locator[] = await page.locator("#example tbody tr").all();
        
        for (let row of rows) {
            console.log(await row.innerText());
        }
        
        // Note: Hardcoded timeouts are generally discouraged, but kept here as per your original script
        await page.waitForTimeout(2000);

        // Locate the next button
        const next: Locator = page.locator("button[aria-label='Next']");
        const isDisabled: string | null = await next.getAttribute('class');
        
        // 4. Check if the "Next" button contains the 'disabled' class
        if (isDisabled?.includes('disabled')) {
            hasmorepages = false;
            console.log("No more pages");
        } else {
            await next.click();
        }
    }
})
 */
   /* test("Filter the rows and check the rows count", async({page})=>{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    const dropdown:Locator=page.getByRole("combobox")
    //const dropdown:Locator=page.locator("#dt-length-0")
    await dropdown.selectOption({label:'25'}); //it will select the value from dropdwon
    
   await expect(dropdown).toHaveValue('25')//assertion

   //get all rows of the 
   //array
   const rows:Locator[]=await page.locator("#example tbody tr").all()
   expect(rows.length).toBe(25)
   //normal rows count(approach2)

   const rows2:Locator=page.locator("#example tbody tr")
   await expect(rows2).toHaveCount(25)
   
 //
   }) */

   test("Search for specific data in a table", async({page})=>{
  await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
  const searchbox:Locator=page.getByRole("searchbox",{name:/search/i})//getbyrole 
  await searchbox.fill('paul Byrd') //searching with by using fill
  const rows:Locator[]=await page.locator("#example tbody tr").all()
  if(rows.length>=1)
  {
   for(let row of rows)
   {
    let matchFound=false;
    const text:string=await row.innerText()
    if(text.includes("paul Byrd"))
    {
        console.log("The value exist ")
        matchFound=true;
        break
    }
    expect(matchFound).toBeTruthy()

   }
  }else{
    console.log("no rows found with searched text")
  }

   })


