import {expect, test} from '@playwright/test';


test.only('Verify the page title',async({page})=>{
   await page.goto('/',{waitUntil: 'load'})
   await expect(page).toHaveTitle('App')
})

test.skip('Skip test case',async({page})=>{
    console.log('Skip this test')
})

test('Test only',async({page})=>{
    console.log('Test only this test')
})

test.fail('Fail test case',async({page})=>{
    console.log('Mark this test as Fail')
})

test.skip('Slow execution',async({page, browserName})=>{
   test.slow((browserName === 'firefox'), 'This feature slow in safari ')
    console.log('Slow test execution')
})

