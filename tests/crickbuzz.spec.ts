/* import { test, expect } from '@playwright/test';

test('verify exact Cricbuzz title', async ({ page }) => {
  await page.goto('https://www.cricbuzz.com');

  const title = await page.title();
  console.log(title);

  expect(title).toContain('Cricbuzz');

  //click on live score

  let livescorelink= page.getByRole("link", { name: "Live Scores" });
  await expect(livescorelink).toBeVisible();
  await livescorelink.click();
  let livepage=page.getByTitle("live cricket score")
  await expect(livepage).toBeVisible();
  //first ODL
  const firstMatch = page.getByRole('link', {
    name: /Sri Lanka vs West Indies 2nd Test/i,
  });

  await expect(firstMatch).toBeVisible();
  console.log(await firstMatch.innerText());




 
}); */

import { test, expect } from '@playwright/test';

test('print Sri Lanka and score', async ({ page }) => {
  await page.goto('https://www.cricbuzz.com/cricket-match/live-scores');

  const row = page.locator('div.flex.items-center.gap-4.justify-between').first();

  const teamName = row.locator('span').filter({ hasText: 'Sri Lanka' });
  const score = row.locator('span.font-medium');

  await expect(teamName).toBeVisible();
  await expect(score).toBeVisible();

  console.log(await teamName.innerText());
  console.log(await score.innerText());
});

test('print second batsman name and score', async ({ page }) => {
  await page.goto('https://www.cricbuzz.com/live-cricket-scorecard/152427/sl-vs-wi-2nd-test-sri-lanka-tour-of-west-indies-2026');
  await page.waitForLoadState();
  const batsmen = page.locator('div.grid.scorecard-bat-grid:visible');
  const secondBatsman = batsmen.nth(1);

  const name = secondBatsman.locator('a').nth(1);
  const score = secondBatsman.locator('div.font-bold').nth(1);

  console.log(await name.innerText());
  console.log(await score.innerText());
});



test.only('print second batsman full details', async ({ page }) => {
  await page.goto('https://www.cricbuzz.com/live-cricket-scorecard/152427/sl-vs-wi-2nd-test-sri-lanka-tour-of-west-indies-2026');

  const batsmanRows = page.locator('div.grid.scorecard-bat-grid:visible');
  const secondBatsmanRow = batsmanRows.nth(1);

  await expect(secondBatsmanRow).toBeVisible();
  console.log(await secondBatsmanRow.innerText());
});

test("Print third batsman full details", async({page})=>{

    await page.goto("https://www.cricbuzz.com/live-cricket-scorecard/152427/sl-vs-wi-2nd-test-sri-lanka-tour-of-west-indies-2026")
    await page.waitForLoadState()
    let thirdbatman=page.locator("div.grid.scorecard-bat-grid:visible").nth(3)
    await expect(thirdbatman).toBeVisible();
    //get the entire row text
    console.log(await thirdbatman.innerText())
    //get only the batsman balls
    let balls=thirdbatman.locator("div").nth(3)
    console.log("only ball score:",await balls.innerText())

    //get the total

   let total= page.locator("div.flex.justify-between.p-2.border-b.border-solid.border-cbBorderGrey.wb:text-sm",{hasText:"Total"})
   
   await expect(total).toBeVisible();
   console.log("total score:", await total.innerText())

});
