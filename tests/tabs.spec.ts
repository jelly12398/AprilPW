import{test,expect,chromium} from "@playwright/test"

test("validate the tabs by using context concept", async({})=>{
const browser=await chromium.launch();
const context=await browser.newContext();
const parentpage=await context.newPage();
await parentpage.goto("https://testautomationpractice.blogspot.com/");
const [childpage]=await Promise.all([context.waitForEvent('page'), parentpage.getByRole("button",{name:"New Tab"}).click()])
//await parentpage.waitForTimeOut(2000)
//get the title of the pages
console.log("parent page title",await parentpage.title())
console.log("child page title", await childpage.title())

//approach2

const pages=context.pages(); //will find the how many pages created in the context, returns no.of pages created 
console.log(await pages[0].title())
console.log(await pages[1].title())
})