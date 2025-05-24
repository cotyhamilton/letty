import { expect, test } from "@playwright/test";

test("buttons", async ({ page }) => {
  await page.goto("/");
  const originalCount = +(await (page.locator("#count")).innerText());

  await page.getByRole("button", { name: "+" }).click();
  expect(page.locator("#count")).toHaveText(`${originalCount + 1}`);

  await page.getByRole("button", { name: "-" }).click();
  expect(page.locator("#count")).toHaveText(`${originalCount}`);
});
