 import{test,expect,Locator} from "@playwright/test"

test("Validate right click ", async({page})=>{
await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html")
const button=page.locator("span.context-menu-one")
await button.click({button:'right'})
await page.waitForTimeout(2000)
//print all menu items
const menu=await page.locator("ul.context-menu-list li").all()
for(const op of menu){
    console.log(await op.textContent())
}

}) 


