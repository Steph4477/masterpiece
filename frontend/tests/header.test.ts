import { expect, test } from '@playwright/test';

test.describe('Header Component', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.evaluate(() => localStorage.clear());
    });

    test('should render login button in red when logged out', async ({ page }) => {
        const buttonColor = await page.evaluate(() => {
            const button = document.querySelector('.fa-user');
            return button ? getComputedStyle(button).color : null;
        });
        expect(buttonColor).toBe('rgb(255, 0, 0)'); 
    });

    test('should render login button in green when logged in', async ({ page }) => {
        await page.evaluate(() => localStorage.setItem('accessToken', 'testToken'));
        await page.reload();
        const buttonColor = await page.evaluate(() => {
            const button = document.querySelector('.fa-user');
            return button ? getComputedStyle(button).color : null;
        });
        expect(buttonColor).toBe('rgb(0, 128, 0)'); 
    });
});