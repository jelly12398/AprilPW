/* //we have beforeAll(),afterAll(),beforeEach(),afterEach() and we can use in grouping also
import{test,expect,Page,Browser} from "@playwright/test"
let page:Page; //global page. we will use same page for overall teasts
//navigate to the application is common in all tests 
test.beforeAll("This is Before All", async({browser})=>{

page=await browser.newPage()
await page.goto("https://www.demoblaze.com/index.html")

});

//close the page
test.afterAll("this is afterAll()", async()=>{
    await page.close();
});

//login to the application
test.beforeEach("this is before each()", async()=>{
page.getByRole("link",{name:'Log in'}).click() //login 
//await page.getByLabel("Username:").fill("pavanol")//username
//await page.getByLabel("Username:").fill("pavanol")//username
await page.getByRole("textbox",{name:/username/i}).fill("pavanol")
await page.getByRole("textbox",{name:/password/i}).fill("test@123")
await page.waitForTimeout(2000)

})
//logout
test.afterEach("this is afterEach()", async()=>{

 await page.getByRole("link",{name:'Log out'}).click()

})
test.describe("grouping", async()=>{
test("find all products",async()=>{
    const allproducts=page.locator(".col-lg-4")
    console.log("count of products are:", await allproducts.count())
    await expect(allproducts).toHaveCount(11);
})


test("Add to cart", async()=>{
//select the item
await page.getByRole("link",{name:'Samsung galaxy s6'}).click()
page.on("dialog",async(dialog)=>{
    expect(dialog.message()).toContain("Product added.")
    await dialog.accept()

})
await page.getByRole("link",{name:'Add to cart'}).click()

})
}) */

import { test, expect } from "@playwright/test";

// Use 'serial' if tests depend on one another, otherwise default parallel is fine
test.describe.serial("grouping", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");

    // 1. Added missing 'await'
    await page.getByRole("link", { name: "Log in" }).click();

    // 2. Use ID locators because the site's accessibility tree is broken
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");

    // 3. Added the missing click to actually submit the login form
    await page.getByRole("button", { name: "Log in" }).click();

    // 4. Wait for login to complete to prevent race conditions
    await expect(page.locator("#nameofuser")).toContainText("Welcome pavanol");
  });

  test.afterEach(async ({ page }) => {
    await page.getByRole("link", { name: "Log out" }).click();
  });

  test("find all products", async ({ page }) => {
    const allproducts = page.locator("#tbodyid .card");
    // Demoblaze displays 9 products on the homepage by default, not 11
    await expect(allproducts).toHaveCount(9);
  });

  test("Add to cart", async ({ page }) => {
    // Setup dialog handler before triggering the action
    page.on("dialog", async (dialog) => {
      expect(dialog.message()).toContain("Product added.");
      await dialog.accept();
    });

    await page.getByRole("link", { name: "Samsung galaxy s6" }).click();
    await page.getByRole("link", { name: "Add to cart" }).click();
  });
});