import{test,expect,Locator}from "@playwright/test"

test("Verify JQuery date pickers", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
//const datepicker:Locator=page.getByRole("textbox",{name:/Date Picker 1 \(mm\dd\/yyyy\):/i })
const dateInput:Locator=page.locator("p").filter({hasText:'Date Picker 1'}).getByRole("textbox")
await expect(dateInput).toBeVisible()

//using fill()
dateInput.fill("05/09/2026") //mm/dd/yyyy
await expect(dateInput).toHaveValue("05/09/2026")
console.log(await dateInput.inputValue()) //05/09/2026
await page.waitForTimeout(3000)

})
//Approach2: using date picker.....without using fill() for input 
test.only("JQuery date pickers", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
//const datepicker:Locator=page.getByRole("textbox",{name:/Date Picker 1 \(mm\dd\/yyyy\):/i })
const dateInput:Locator=page.locator("p").filter({hasText:'Date Picker 1'}).getByRole("textbox")
await expect(dateInput).toBeVisible();
await dateInput.click();//opens the date picker

//select target date
const year="2026";
const month="June"; //check in application and follow those format whether number or month name
const date="10"

//first match with month and year then check for target date
//we dont know how many times to click arrow to locate target that the reason give true in while()
while(true)
{
//we cannot use getByText because it is dynamic text so use CSS
//const currentMonth=await page.getByText("May").textContent()
//const currentYear=await page.getByText("2026").textContent()
const currentMonth = await page.locator(".ui-datepicker-month").textContent();
const currentYear = await page.locator(".ui-datepicker-year").textContent();
 if(currentMonth==month && currentYear==year)
   {
   break;
   }

   //Future
// Click the 'Next' arrow using getByRole fail
//Because the text is visually hidden from the user, Playwright's strict accessibility engine removes it from the accessibility tree. As a result, getByRole cannot find it.

    //await page.getByRole("link", { name: /Next/i }).click();
 await page.locator(".ui-datepicker-next").click();  //CSS
}

//now selecting the dates

// Select the date using getByRole (Replaces the entire for-loop!)fail
  await page.getByRole("link", { name: date, exact: true }).click();


 // or we can use below CSS also
  
/* const allDates:Locator[]=await page.locator("ui-datepicker-calendar").all()
for(let dt of allDates)
 {
  const dateText=await dt.innerText()
  if(dateText==date)
  {
    await dt.click()
    break;
  }
 } */

await page.waitForTimeout(3000)
})
