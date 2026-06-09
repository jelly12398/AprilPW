import{test,expect,Locator} from "@playwright/test"

test("Comparing methods",async({page})=>{
await page.goto("https://demowebshop.tricentis.com/")
//const product:Locator=page.locator(".product-title") //CSS
const products:Locator=page.getByRole("heading") //getByRole
//innertext() vs textContent()
console.log(await products.nth(1).innerText()); //$25 Virtual Gift Card
console.log(await products.nth(1).textContent())//    $25 Virtual Gift Card

//first need count for traditional loop
const count=await products.count();

for(let i=0;i<count;i++)
{
    //onst productName:string=await products.nth(i).innerText() //will get exact visible text in UI
    //console.log(productName)

     //const productName:null|string=await products.nth(i).textContent() //it will extract all spaces innertext along with hidden elemetns

    //console.log(productName)

    //use map to trim spaces
    //const productName:null|string=await products.nth(i).textContent()
    //console.log(productName?.trim())
}
//all()
const productsLocator:Locator[]=await products.all(); //want to store locators of all the elements in array use all()
console.log(productsLocator)
//console.log(await productsLocator[1].innerText())
for(let prodloc of productsLocator)
{
    console.log(await prodloc.innerText())
}

for(let i in productsLocator)
{
    console.log(await productsLocator[i].innerText()) //same optput which you got for of loop
}

})