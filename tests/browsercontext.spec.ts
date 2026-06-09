import{test,expect,Locator,chromium} from "@playwright/test"

test("Browser context", async({})=>{
 const browser=await chromium.launch();
 const context=await browser.newContext();
 const page=await context.newPage();
 const page1=await page.goto("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
 await page.waitForTimeout(2000)
 const page2=await page.goto("https://www.booking.com/?chal_t=1778346098056&force_referer=")
 await page.waitForTimeout(2000)
  console.log(page1?.url())


})