import { test, expect } from "@playwright/test"; 
import { PageManager } from "../page-objects/pageManager";
import taskData from "../test-data/taskAndTagsData.json";

test.beforeEach(async ({ page }) => {
    await page.goto(process.env.BASE_URL!);
    const pageManager = new PageManager(page);
      await pageManager
        .getLoginPage()
    .login(process.env.USER_NAME!, process.env.PASSWORD!);
   
});
test.describe("Check columns and tags for tasks", () => {
  for(const { task, column, tags, app } of taskData){
       test(`Check task "${task}" is in column "${column}" and has tags "${tags}"`, async ({ page }) => {
      const pageManager = new PageManager(page);
      await pageManager.getMainPage().navigateToProject(app);
      const taskCard = pageManager.getMainPage().getTaskCard(column, task);
      const taskTags = pageManager.getMainPage().getTaskTags(taskCard);

      await expect.soft(taskCard,'task is in correct column').toContainText(task);
      await expect.soft(taskTags,'task has correct tags').toContainText(tags.join(""));
    });
  }
 
  });
