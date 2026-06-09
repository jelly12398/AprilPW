import{test,expect,Locator} from "@playwright/test"

test("Simple Dialog",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
//enable the alert handling
page.on('dialog',(dialog)=>{
    console.log("dialog type is:", dialog.type()) //return type of dialog
    console.log("dialog text:", dialog.message())  //return message from dialog
    expect(dialog.message()).toContain("I am an alert box!")
    dialog.accept() //clicking on ok button
})

const simpleAlert=page.getByRole("button",{name:"Simple Alert"})
await expect(simpleAlert).toBeVisible();
await expect(simpleAlert).toBeEnabled();

//click the simple alert button
await simpleAlert.click();

await page.waitForTimeout(2000)

 

})

//Confirm alert
test("Confirmation dialog", async({page})=>{
    
await page.goto("https://testautomationpractice.blogspot.com/")
//enable the alert handling
page.on('dialog',(dialog)=>{
    console.log("dialog type is:", dialog.type()) //return type of dialog
    expect(dialog.type()).toContain("confirm")
    console.log("dialog text:", dialog.message())  //return message from dialog
    expect(dialog.message()).toContain("Press a button!")
    dialog.accept() //close dialog by accepting
    //dialog.dismiss()// close dialog by dismissing
})

const confirmationAlert=page.getByRole("button",{name:"Confirmation Alert"})
await confirmationAlert.click();//opens the confirmation dialog
const text:string=await page.getByText("You pressed OK!").innerText()
 expect(text).toContain("You pressed OK!")
await page.waitForTimeout(2000);
})

//prompt alert
test.only("Prompt dialog", async({page})=>{
    
await page.goto("https://testautomationpractice.blogspot.com/")
//enable the alert handling
page.on('dialog',(dialog)=>{
    console.log("dialog type is:", dialog.type()) //return type of dialog
    expect(dialog.type()).toContain("prompt")
    console.log("dialog text:", dialog.message())  //return message from dialog
    expect(dialog.message()).toContain("Please enter your name:")
    expect(dialog.defaultValue()).toContain("Harry Potter");//checks the default value

    dialog.accept("Maha") //close dialog by accepting by given text
    
    //dialog.dismiss()// close dialog by dismissing
})
const promptAlert=await page.getByRole("button",{name:"Prompt Alert"}).click()

const promptAlertText=await page.getByText("Hello Maha! How are you today?").innerText();

expect(promptAlertText).toContain("Hello Maha! How are you today?")

})