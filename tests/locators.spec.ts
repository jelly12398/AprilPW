/* import {test, expect,Locator} from "playwright/test"
test("Verify playwirght built in locators", async({page})=>{
 await page.goto("https://demo.nopcommerce.com/")
   // await page.goto("https://www.amazon.in/?tag=msndeskabkin-21&ref=pd_sl_8m0512m97v_e&adgrpid=1317216540160148&hvadid=82326299627209&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=259772&hvtargid=kwd-82326918609608:loc-90&hydadcr=5623_2377284&mcid=f13fcffd1964377ea436bb8da9e6f147&msclkid=65953f7bad761357d6c756a0d01223cc")
   const logo:Locator=page.getByText("Welcome to our store");
   await expect(logo).toBeVisible();
  const logo1:Locator=page.getByAltText("nopCommerce demo store");
  await expect(logo1).toBeVisible()

  const title:Locator=page.getByText("Welcome to our store")
  await expect(title).toBeVisible()

  await page.getByRole("link",{name:"Register"}).click()
  await expect(page.getByRole("heading",{name:"Register"})).toBeVisible();


}) */
import { test, expect } from "@playwright/test";

test("Verify Playwright built‑in locators", async ({ page }) => {
  //await page.goto("https://demo.nopcommerce.com/");
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2Fapple-iphone-16-128gb")
  //await page.goto("http://localhost:5000/"); 

  // Verify home‑page text and logo
  //await expect(page.getByText("Welcome to our store")).toBeVisible();
  //await expect(page.getByAltText("nopCommerce demo store")).toBeVisible();

  // Click Register link (no second visibility check on the same link)
  //await page.getByRole("link", { name: "Register" }).click();

  // Assert that you are on the Register page instead
  //await expect(page.getByRole("heading", { name: "Register" })).toBeVisible();
  await page.getByLabel("FirstName").fill("Maha")

})
