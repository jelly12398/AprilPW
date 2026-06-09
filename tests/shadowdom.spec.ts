import{test,expect} from "@playwright/test"

test("Validate shadow elements", async({page})=>{
await page.goto("https://shop.polymer-project.org/")
await page.getByRole("link",{name:"Men's Outerwear Shop Now"}).click()
const heading= page.getByRole("heading",{name:"Men's Outerwear"})

const headingtitle=await heading.innerText()
expect(headingtitle).toContain("Men's Outerwear")

//no of products
const allproducts=await page.locator("img#img").all()
console.log("length", allproducts.length)
//get the title of all products
for(let tit of allproducts){

    console.log(await tit.getAttribute('alt'))
}


})