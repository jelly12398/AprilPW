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

test('capture Sri Lanka score from Cricbuzz', async ({ page }) => {
  await page.goto('https://www.cricbuzz.com/cricket-match/live-scores');

  const sriLankaName = page.getByText('Sri Lanka', { exact: true }).first();
  await expect(sriLankaName).toBeVisible();

  const sriLankaScore = page.locator('span', { hasText: /^SL\s+\d+/ }).first();
  await expect(sriLankaScore).toBeVisible();

  const teamName = await sriLankaName.innerText();
  const score = await sriLankaScore.innerText();

  console.log(teamName);   // Sri Lanka
  console.log(score);      // Example: SL 549-9 d
});