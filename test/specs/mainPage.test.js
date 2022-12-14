const mainPage = require('../pages/main.page.js');

describe('Testing of Telnyx main page using Webdriver.IO', () => {
    beforeEach(async () => {
        await mainPage.firstStep();
    })
    it('1. Should click on "Call Us" and modal window appears',async() => {
        await mainPage.cookieClick();
        await mainPage.callUsClick();
        await expect(mainPage.callUsModal).toBeDisplayed();
    })
    it('2. Should click on "Support Center" and transfer to support page', async() => {
        await mainPage.supportCntrClick();
        await expect(browser).toHaveUrl('https://support.telnyx.com/en/');
    })
    it('3. Should click on "Log in" and transfer to log in page', async() => {
        await mainPage.loginClick();
        await expect(browser).toHaveUrlContaining('/login/sign-in');
    })
    it('4. Should click on "Sign Up" and transfer to sign up page', async() =>{
        await mainPage.signUpClick();
        await expect(browser).toHaveUrl('https://telnyx.com/sign-up');
    })
    it('5. Should check if Customer logo of Cisco is displayed', async() => {
        await mainPage.cLogoScroll();
        await mainPage.cLogo1.isDisplayedInViewport();
    })
    it('6. Should check if Customer logo of Philips is displayed', async() => {
        await mainPage.cLogoScroll();
        await mainPage.cLogo2.isDisplayedInViewport();
    })
    it('7. Should check if Customer logo of HP is displayed', async() => {
        await mainPage.cLogoScroll();
        await mainPage.cLogo3.isDisplayedInViewport();
    })
    it('8. Should check if Customer logo of American Red Cross is displayed', async() => {
        await mainPage.cLogoScroll();
        await mainPage.cLogo4.isDisplayedInViewport();
    })
    it('9. Should check if Customer logo of Talkdesk is displayed', async() => {
        await mainPage.cLogoScroll();
        await mainPage.cLogo5.isDisplayedInViewport();
    })
    it('10. Should click on "Voice API" button and transfer to correct page', async() => {
        await mainPage.voiceApiClick();
        await expect(browser).toHaveUrl('https://telnyx.com/products/voice-api');
    })
    it('11. Should click on "Elastic SIP Trunking" button and transfer to correct page', async() => {
        await mainPage.sipTrunkClick();
        await expect(browser).toHaveUrl('https://telnyx.com/products/sip-trunks');
    })
    it('12. Should click on "Messaging API" button and transfer to correct page', async() => {
        await mainPage.messApiClick();
        await expect(browser).toHaveUrl('https://telnyx.com/products/sms-api');
    })
    it('13. Should ??lick on "International Numbers" button and transfer to correct page', async() => {
        await mainPage.intNumbrsClick();
        await expect(browser).toHaveUrl('https://telnyx.com/use-cases/international-numbers');
    })
    it('14. Should click on "Explore Video API" button and transfer to correct page', async() => {
        await mainPage.vidApiClick();
        await expect(browser).toHaveUrl('https://telnyx.com/products/video-api');
    })
    it('15. Should ??lick on "Wireless" button transfer to correct page', async() => {
        await mainPage.wirelessClick();
        await expect(browser).toHaveUrl('https://telnyx.com/products/iot-sim-card');
    })
    it('16. Should check if Best Result award is displayed', async() => {
        await mainPage.rewordsScroll();
        await mainPage.reword1.isDisplayedInViewport();
    })
    it('17. Should check if Best Usability award is displayed', async() => {
        await mainPage.rewordsScroll();
        await mainPage.reword2.isDisplayedInViewport();
    })
    it('18. Should check if Leader award is displayed', async() => {
        await mainPage.rewordsScroll();
        await mainPage.reword3.isDisplayedInViewport();
    })
    it('19. Should check if Momentum Leader award is displayed', async() => {
        await mainPage.rewordsScroll();
        await mainPage.reword4.isDisplayedInViewport();
    })
    it('20. Should check if Users Most Likely To Recommend award is displayed', async() => {
         await mainPage.rewordsScroll();
         await mainPage.reword5.isDisplayedInViewport();
    })
})
