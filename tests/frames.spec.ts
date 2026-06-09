import{test,expect,Locator} from "@playwright/test"

test("frames deom", async({page})=>
{
await page.goto("https://ui.vision/demo/webtest/frames/");
//total no of pages present in the web page

const frames=page.frames();

console.log("no.of frames :", frames.length);

//...Approach 1:using page.frame()....
const frame=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})

if(frame) //frame is exist
{
   const frame1Text= frame.getByRole("textbox") //capture element from frame
   await frame1Text.fill("Hello") //enetering text by using fill()
   expect(frame1Text).toHaveValue("Hello") //assertion
   console.log("text:", await frame1Text.inputValue()) //printing the input value
}else{
    console.log("frame is not avaiable") //if frame is null 
}
//...Approach2 using frameLocator()
const inputbox=page.frameLocator("[src='frame_1.html']").getByRole("textbox");
await inputbox.fill("Maha");
await page.waitForTimeout(3000)


})

//...Child frame
test.only("inner frames demo", async({page})=>
{
await page.goto("https://ui.vision/demo/webtest/frames/");
//total no of pages present in the web page

const frames=page.frames();

console.log("no.of frames :", frames.length);

//...Approach2...using framelocator()

const frame3=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
if(frame3){
await frame3.getByRole("textbox").fill("Welcome");
//childframes
const childframe=frame3.childFrames();
console.log("child frames inside the Frame3", childframe.length) //only 1 child frame exist

const radio=childframe[0].getByLabel("I am a human")
await radio.check()//select radio button
await expect(radio).toBeChecked() //assertion


}else{
    console.log("Frame3 not found")
}
await page.waitForTimeout(2000)
}) 