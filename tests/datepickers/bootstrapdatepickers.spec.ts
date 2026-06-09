import{test,expect,Locator} from "@playwright/test"

test("Booking.com date pickers", async({page})=>{
await page.goto("https://www.booking.com/?chal_t=1778346098056&force_referer=");
// Put this right after page.goto()
try {
  // Try to close the sign-in popup if it appears
  await page.getByRole('button', { name: 'Dismiss sign-in info.' }).click({ timeout: 3000 });
} catch (e) {
  // If popup doesn't appear, ignore the error and continue
}

//Locate the checkin and check out and click on that
await page.getByTestId("date-display-field-start").click();

//====check in date section====
const checkinYear:string="2026";
const checkinMonth:string="June"
const checkinDate:string="28"

//navigate to the calender to find the desired check in month and year

while(true)
{
    //const checkinMonthYear:string=await page.locator("#bui-calendar-month").first().innerText();
    const checkinMonthYear = await page.getByRole("heading", { level: 3 }).first().innerText();
    const currentMonth=checkinMonthYear.split(" ")[0];
    const currentYear=checkinMonthYear.split(" ")[1];
    if(currentMonth===checkinMonth && currentYear===checkinYear){
        break
    }else{

      await page.getByRole("button", { name: /Next/i }).first().click();


    }


}

//select date

let allDates=await page.locator("table.b8fcb0c66a tbody").nth(0).locator("td").all();
let checkinDateSelected=false;//assertion

for(let dt of allDates){
    const dateText=await dt.innerText();
    if(dateText===checkinDate){
     await dt.click();
     checkinDateSelected=true
     break;
    }
}

expect(checkinDateSelected).toBeTruthy();

//.............checkout..............
const checkOutYear:string="2026";
const checkOutMonth:string="June"
const checkOutDate:string="28"

//navigate to the calender to find the desired check in month and year

while(true)
{
    const checkOutMonthYear:string=await page.locator("h3#bui-calendar-month").last().innerText();
    const currentMonth=checkOutMonthYear.split(" ")[0];
    const currentYear=checkOutMonthYear.split(" ")[1];
    if(currentMonth===checkOutMonth && currentYear===checkOutYear){
        break
    }else{

      await page.locator("button[aria-label=Next month']").click();


    }


}

//select date

 allDates=await page.locator("table.b8fcb0c66a tbody").nth(1).locator("td").all();
let checkOutDateSelected=false;//assertion

for(let dt of allDates){
    const dateText=await dt.innerText();
    if(dateText===checkOutDate){
     await dt.click();
     checkinDateSelected=true
     break;
    }
}

expect(checkOutDateSelected).toBeTruthy();

await page.waitForTimeout(4000)


})