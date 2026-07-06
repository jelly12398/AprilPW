/* import { test, expect } from "@playwright/test"

test.describe("Interview Programs", () => {

    test("string reverse", async ({ page }) => {

        let srt: string = "Maha"
        let rev: string = ""
        for (let i = 0; i < srt.length; i++) {
            rev = srt[i] + rev;
        }

        console.log(rev)
    })
    
 






})

 */
//reverse array
/* const reversearray = (arr: number[]) => {

    let start = 0;
    let end = arr.length - 1
    while (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    return arr

}
let arr = [7, 4, 9.0]
console.log(reversearray(arr)) */

//reverse number
const reversestring = (num: number) => {
    let rev = 0;
    while(num > 0) 
        {
 let rem=num%10;
 rev=rev*10+rem;
    }
    return rev
}
let num=1234
console.log(reversestring(num))
