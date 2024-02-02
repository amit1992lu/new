describe('Hitting the URLs below', function () {
    it('Url Hitting', async () => {
        await browser.url('https://' + process.env.QUSERNAME + ':' + process.env.QPASSWORD + '@shop-dev4.univarsolutions.com/product-catalog');
        await browser.pause(2000);
        await browser.url('https://' + process.env.QUSERNAME + ':' + process.env.QPASSWORD + '@shop-dev4.univarsolutions.com/product-categories');
        await browser.pause(2000);
        await browser.url('https://' + process.env.QUSERNAME + ':' + process.env.QPASSWORD + '@shop-dev4.univarsolutions.com/industries');
        await browser.pause(2000);
        await browser.url('https://' + process.env.QUSERNAME + ':' + process.env.QPASSWORD + '@shop-dev4.univarsolutions.com/product-categories/essential-chemicals-ingredients/additional-essentials');
        await browser.pause(2000);
        await browser.url('https://' + process.env.QUSERNAME + ':' + process.env.QPASSWORD + '@shop-dev4.univarsolutions.com/');
        await browser.pause(2000);
        await browser.url('https://' + process.env.QUSERNAME + ':' + process.env.QPASSWORD + '@shop-dev4.univarsolutions.com/parent-product-test-10620?v=16118091');
        await browser.pause(2000);
        await browser.url('https://' + process.env.QUSERNAME + ':' + process.env.QPASSWORD + '@shop-dev4.univarsolutions.com/customer/account/login/');
        await browser.pause(2000);
        await browser.url('https://' + process.env.QUSERNAME + ':' + process.env.QPASSWORD + '@shop-dev4.univarsolutions.com/customer/account/forgotpassword/');
        await browser.pause(2000);
    });
});
