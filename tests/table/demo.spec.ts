import{test,expect,Locator} from "@playwright/test"

test("pagination",async({page})=>{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    await page.waitForTimeout(10000)

});