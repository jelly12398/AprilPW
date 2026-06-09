import{test,expect} from "@playwright/test"

test("Authentication pop up", async({page})=>
{
await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth")
await page.waitForLoadState()
await expect(page.getByText("Congratulations! You must have the proper credentials.")).toBeVisible()


})