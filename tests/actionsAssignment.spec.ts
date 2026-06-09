import { test, expect, Locator } from 'playwright/test'
test("Validate input box", async ({ page }) => {
    await page.goto("https://www.zoho.com/forms/templates/registration-forms/student-school-registration-form.html ")
    //const textbox:Locator=page.getByLabel("First")
    //const textbox:Locator= page.getByRole("textbox",{name:"/First/i", exact:true})
    //const textbox:Locator=page.locator("input.fieldtext[complink='Name_First']")
    //const textbox = page.locator("input[placeholder*='First']");
    const textbox = page.getByPlaceholder(/First/i);

    await expect(textbox).toBeVisible();
    await expect(textbox).toBeEnabled();
    await textbox.fill("Maha");
    console.log(textbox.inputValue());
    expect(textbox).toBe("Maha");
    await page.waitForTimeout(3000)

})