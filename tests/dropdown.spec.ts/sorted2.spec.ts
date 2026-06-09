import { test, expect, Locator } from "@playwright/test";

test("Verify dropdown is sorted", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    // 1. Use the ACTUAL label text seen on the screen: "Sorted List"
    const animalsDropdown = page.getByRole("listbox", { name: /sorted list:/i });
    
    // 2. ALWAYS assert it is visible first, so the test doesn't jump ahead!
    await expect(animalsDropdown).toBeVisible();
    
    // 3. Grab the options and extract the text
    const dropdownOptions = animalsDropdown.locator("option");
    const optionsText = await dropdownOptions.allTextContents();
    
    // 4. Print the cleaned text
    console.log(optionsText.map(item => item.trim()));
});