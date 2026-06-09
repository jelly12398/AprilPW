import{test,expect,Locator} from "@playwright/test"

test("Verify Dynamic table", async({page})=>{
await page.goto("https://practice.expandtesting.com/dynamic-table")
const table:Locator=page.locator("table.table tbody")
await expect(table).toBeVisible();

//select all the rows and find number of rows
const rowslocators:Locator[]=await table.locator("tr").all();

//find the length of rowslocators array
console.log("Number of rows in a table:", rowslocators.length)//4
expect(rowslocators).toHaveLength(4);


//Step1: for chrome process and get the CPU
//Read each row to check chrome presesnce
let cpuLoad;
for(let row of rowslocators)
    {
    const processName=await row.locator("td").nth(0).innerText();//locatate the column and first column and then text
    if(processName=="Chrome")
        {
        //cpuLoad=await row.locator('td:has-text("%")').innerText(); //CSS syntax
    cpuLoad=await row.locator("td",{hasText:'%'}).innerText();
    console.log("Cpu load of chrome:",cpuLoad)
    break;
        }
   }

   //step2:comapare with yellow lable 
 let yellowbox:Locator=page.getByText("Chrome CPU: 4.1%")
 let yellowboxtext:string=await yellowbox.innerText()
   console.log(yellowboxtext)
   if(yellowboxtext.includes("cpuLoad"))
   {
     console.log("cpuload of chrome is equal")
   }else{
    console.log("cpuload of chrome is not equal")
   }

   expect(yellowboxtext).toContain(cpuLoad)




})