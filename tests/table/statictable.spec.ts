import{test,expect,Locator} from "@playwright/test"

test("static table",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")
//const table:Locator=page.getByRole("table").filter({hasText:"Learn Java"})
//const row:Locator=page.locator("tbody tr")

const table:Locator=page.locator("table[name='BookTable'] tbody");//table
await expect(table).toBeVisible()

//count the rows
const rows:Locator=page.locator("table[name='BookTable'] tbody tr")//rows
const rowcount=await rows.count();
await expect(rows).toHaveCount(7)//approach1
// expect(rowcount).toBe(7)//approach2

console.log(rowcount)

//count no.of columns
const columns:Locator=rows.locator("th")

let columncount= await columns.count()
expect(columncount).toBe(4)
await expect(columns).toHaveCount(4)


//Read all data from 2nd row(index2 means 3rd row including header)
const secondrowCell:Locator=rows.nth(2).locator('td');
const secondrowTexts:string[]=await secondrowCell.allInnerTexts();
console.log(secondrowTexts) //[ 'Learn Java', 'Mukesh', 'Java', '500' ]

await expect(secondrowCell).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ])

//print all data
console.log("Printing 2nd row data")
for(let text of secondrowTexts)
{
    console.log(text) 
    //output
    //Learn Java
/*Mukesh
Java
500 */
}

//Read all data from the table(excluding header)

const allRowData:Locator[]=await rows.all(); //it contains locators of all row

for(let row of allRowData.slice(1))//it skip header
{
    const cols:string[]=await row.locator('td').allInnerTexts();
    console.log(cols.join('\t')) //tab space between text in all rows
}

//I want print booknames where author is Mukesh
console.log("Books written By Mukesh............")
const mukeshBooks:string[]=[];
for(let row of allRowData.slice(1))
{
    const cell:string[]=await row.locator('td').allInnerTexts();
    const author=cell[1];
    const book:string=cell[0]
    if(author=='Mukesh')
        {
            console.log(`${author} is ${book}`)
            mukeshBooks.push(book);

        }
    
}
      expect(mukeshBooks).toHaveLength(2)
     //calculate all the total price
     let totalPrice:number=0
     for(let row of allRowData.slice(1))
     {
        const cells:string[]=await row.locator('td').allInnerTexts();
        const price=cells[3];
         totalPrice=totalPrice+parseInt(price);
     }
     console.log("Total price:", totalPrice)
     expect(totalPrice).toBe(7100)


     


            })