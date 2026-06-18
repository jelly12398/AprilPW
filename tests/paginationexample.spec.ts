import { test, expect, Locator } from "@playwright/test"

test("Verify pagination example", async ({ page }) => {
    test.setTimeout(60000)
    await page.goto("https://www.amazon.in/", { waitUntil: 'domcontentloaded' })

    const searchbox: Locator = page.getByRole("searchbox", { name: 'Search Amazon.in' })
    await expect(searchbox).toBeVisible()
    await searchbox.fill("pen")
    console.log(await searchbox.inputValue());
    await searchbox.press('Enter')
    let hasmorepages = true;
    let pagenumber = 1
    while (hasmorepages) {
        console.log("page number is", `${pagenumber}`)
        pagenumber++
        const nextbutton: Locator = page.getByRole("button", { name:'Next' })
        //await page.waitForTimeout(2000)
        await expect(nextbutton).toBeVisible()
        await nextbutton.click();
        const disable = await nextbutton.getAttribute("class")
        if (disable?.includes('s-pagination-disabled')) {
            hasmorepages = false;
        }
        else {
            await nextbutton.click();
        }

    }






})