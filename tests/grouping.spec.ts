import { test, expect } from "@playwright/test"

test.describe("Group1", async () => {

    test("test1", async ({ page }) => {

        console.log("this is test1")
    });

    test("test2", async () => {

        console.log("this is test2")

    });

    test("test3", async ({ page }) => {

        console.log("this is test3")
    })


})
test.describe("Group2", async () => {

    test("test4", async ({ page }) => {

        console.log("this is test4")
    });

    test("test5", async () => {

        console.log("this is test5")

    });

    test("test6", async ({ page }) => {

        console.log("this is test6")
    })


})

