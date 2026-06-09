/* import {test,expect,Locator} from "playwright/test"

test("Verify text box",async({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/")
   //const textbox:Locator=page.getByPlaceholder("Enter Name")
   const textbox:Locator=page.getByRole("textbox")
   await expect(textbox).toBeVisible();//visible or not
   await expect(textbox).toBeEnabled();//enabled or not
   const maxlength:string|null=await textbox.getAttribute("maxlength") //by using getattribur we can capture any attribute
   expect(maxlength).toBe('15');
   await textbox.fill("Maha");
   const enteredvalue:string=await textbox.inputValue()
   console.log("input value of the First name", enteredvalue)
   expect(enteredvalue).toBe("Maha")
   await page.waitForTimeout(3000)



});
//Radio buttons
test("Verify Radio button",async({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/");
   const maleRadio:Locator=page.getByRole("radio",{name:'Male',exact:true});
   //const maleRadio:Locator=page.locator("#male")
   await expect(maleRadio).toBeVisible()
   await expect(maleRadio).toBeEnabled();
   expect(await maleRadio.isChecked()).toBe(false);
   await maleRadio.check() //select radio button
   //expect(await maleRadio.isChecked()).toBe(true);
   expect(maleRadio).toBeChecked(); //most preferable assertion method

   await page.waitForTimeout(3000)




})
//checkbox
test.only("Verify check box",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    /* const checkBox:Locator=page.getByRole("checkbox",{name:"Sunday"})
    await expect(checkBox).toBeVisible();
    await expect(checkBox).toBeEnabled();
    await checkBox.check();
    await expect(checkBox).toBeChecked(); */
    //Capture all the check boxes
    /* const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const checkboxes:Locator[]=days.map(item=>page.getByLabel(item));
    expect(checkboxes.length).toBe(7);
    //select all checkboxes
    for(const check of checkboxes){

await check.check();
await expect(check).toBeChecked()
    } 
     
  //  uncheck last 3 checkboxes and assert
     for(const check of checkboxes.slice(-3)){

await check.uncheck();
await expect(check).not.toBeChecked() */
    /* } 
    await page.waitForTimeout(3000)
    })  */
     
    import {test,expect,Locator} from "playwright/test"
    test("Verify dropdown values", async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/")
        await page.getByRole("listbox", {name:'country'}).selectOption('India')
        await page.waitForTimeout(3000)
    
    })