import { test, expect } from "@playwright/test";

test("autodropdown", async ({ page }) => {
    await page.goto("https://www.flipkart.com/");
    
    const searchBox = page.getByPlaceholder("Search for Products, Brands and More").first();
    await expect(searchBox).toBeVisible();
    
    // Best Practice: Type keystrokes sequentially to reliably trigger the auto-suggest API
        await searchBox.pressSequentially("smart", { delay: 200 });
    await expect(page.locator("ul > li:visible").first()).toBeVisible();
    
    // Press Arrow Down to navigate to the first option, then Enter to select
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
});