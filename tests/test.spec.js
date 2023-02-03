import { test, expect } from "@playwright/test";
import fs from "fs";
const assert = require('assert');


async function getProductCount(page) {
    const productList = await page.$("#products");
    const products = await productList.$$(".product");
    return products.length;
}

async function getFiveCheapestProducts(page) {
    const testData = JSON.parse(fs.readFileSync("./test-data.json"));
    const actualCheapestFive = testData.sort((a, b) => a.price - b.price).slice(0, 5).map((item) => item.price);
    const productList = await page.$("#products");
    const productElements = await productList.$$(".product");
    const displayedPrices = await Promise.all(
      productElements.map(async (product) => {
        const priceElement = await product.$(".price");
        return parseFloat(await priceElement.innerText());
      })
    );
    expect(actualCheapestFive).toEqual(displayedPrices);
}

async function getProductName(page) {
    const product = await page.$(".item");
    return product.innerText();
}

test("spaces test", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    // On render, verify that the checkbox is checked, that the number of items is 5 and it's the cheapest 5 items
    const checkbox = await page.$("#checkbox");
    assert(await checkbox.getProperty('checked'));
    const initialCount = await getProductCount(page);
    expect(initialCount).toBe(5);
    await getFiveCheapestProducts(page);

    // toggle button
    await page.click("#checkbox");
    const newCount = await getProductCount(page);
    expect(newCount).toBeGreaterThan(5);
    await page.click("#checkbox");
    const finalCount = await getProductCount(page);
    expect(finalCount).toBe(5);
    await getFiveCheapestProducts(page);

    // Locate text box and search for 'Audi' should display all Audi cars
    const searchText = "Audi";
    const input = await page.$('input[type="text"]');
    await input.type(searchText);

    const productName = await getProductName(page);
    expect(productName).toContain(searchText);
});
