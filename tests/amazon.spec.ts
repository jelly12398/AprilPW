/* import{test,expect,Locator} from "playwright/test"

test("Verify the adding product to cart in Amazon",async({page})=>{

    await page.goto("https://www.amazon.in/?tag=msndeskabkin-21&hvadid=&hvqmt=&hvbmt=&hvdev=&ref=pd_sl_3if4jjs60e_e&tag=msndeskabkin-21&ref=pd_sl_3nvnap9gn3_e&adgrpid=1319415610409622&hvadid=82463802694468&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=116074&hvtargid=kwd-82464407407007:loc-90&hydadcr=5622_2499441&mcid=e38656c3f41e34238d375bdea9d144ba")
    const searchbox:Locator= page.getByRole("textbox",{name:'Search Amazon.in'})
    await searchbox.fill("pen")
    const searchbutton:Locator= page.getByRole("button",{name:'Go'})
    await searchbutton.click()
    const penproduct:Locator=page.getByRole("link",{name:'Pentonic 0.7 mm Ball Pen Blister Pack | Black Body | Black Ink | Set of 10 Pens'})
    await penproduct.click()
    const addcartbutton:Locator=page.getByRole("button",{name:'Add all 3 to Cart, Pentonic 0.7 mm Ball Pen Blister Pack | Black Body | Black Ink | Set of 10 Pens'})
    await addcartbutton.click()
    const proceedbutton:Locator=await page.getByRole("button",{name:'proceedToRetailCheckout'})
    await proceedbutton.click()





}) */

    import { test, expect } from '@playwright/test';

test('Verify adding product to cart in Amazon', async ({ page }) => {
  await page.goto('https://www.amazon.in',{waitUntil:'domcontentloaded'});

  const searchBox = page.getByRole('textbox', { name: /search amazon\.in/i });
  //await expect(searchBox).toBeVisible();
  await searchBox.fill('pen');

  await page.getByRole('button', { name: /^Go$/i }).click();

  const product = page.getByRole('link', { name: /Pentonic.*Pen/i }).first();
  await expect(product).toBeVisible();
  await product.click();

  await page.getByRole('button', { name: /add to cart/i }).click();
});