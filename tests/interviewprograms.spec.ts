import { test, expect } from "@playwright/test"

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

