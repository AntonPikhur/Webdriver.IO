class mainPage {
    firstStep(){
        browser.url('/');
    }
    cookieClick(){
        const cookie = $('[aria-label="close and deny"]~div>div>button');
        cookie.click();
    }
    get callUs() {
        return $('.bJzgmA');
    }
    get callUsModal() {
        return $('#telnyx-click2call-dialog');
    }
    callUsClick() {
        this.callUs.waitForDisplayed();
        this.callUs.click();
    }
    get supportCntr() {
        return $('.bJzgmA~a:nth-child(3)')
    }
    supportCntrClick() {
        this.supportCntr.waitForDisplayed();
        this.supportCntr.click();
    }
    get login() {
        return $('.bJzgmA~a:nth-child(4)');
    }
    loginClick() {
        this.login.waitForDisplayed();
        this.login.click();
    }
    get signUp(){
        return $('.evHrfb~div:nth-child(2)>div>ul:nth-child(4)>li:nth-child(2)')
    }
    signUpClick(){
        this.signUp.waitForDisplayed();
        this.signUp.click();
    }
    get cLogoDiv(){
        return $('.knQTTI')
    }
    cLogoScroll(){
        this.cLogoDiv.waitForDisplayed();
        this.cLogoDiv.scrollIntoView();
    }
    get cLogo1(){
        return $('.dMWEfk>div:nth-child(1)>div>div>img')
    }
    get cLogo2(){
        return $('.dMWEfk>div:nth-child(2)>div>div>img')
    }
    get cLogo3(){
        return $('.dMWEfk>div:nth-child(3)>div>div>img')
    }
    get cLogo4(){
        return $('.dMWEfk>div:nth-child(4)>div>div>img')
    }
    get cLogo5(){
        return $('.dMWEfk>div:nth-child(5)>div>div>img')
    }
    get voiceApi(){
        return $('.epRMTm>li:nth-child(1)')
    }
    voiceApiClick(){
        this.voiceApi.waitForDisplayed();
        this.voiceApi.click();
    }
    get sipTrunk(){
        return $('.epRMTm>li:nth-child(2)')
    }
    sipTrunkClick(){
        this.sipTrunk.waitForDisplayed();
        this.sipTrunk.click();
    }
    get messApi(){
        return $('.epRMTm>li:nth-child(3)')
    }
    messApiClick(){
        this.messApi.waitForDisplayed();
        this.messApi.click();
    }
    get intNumbrs(){
        return $('.epRMTm>li:nth-child(4)')
    }
    intNumbrsClick(){
        this.intNumbrs.waitForDisplayed();
        this.intNumbrs.click();
    }
    get vidApi(){
        return $('.epRMTm>li:nth-child(5)')
    }
    vidApiClick(){
        this.vidApi.waitForDisplayed();
        this.vidApi.click();
    }
    get wireless(){
        return $('.epRMTm>li:nth-child(6)')
    }
    wirelessClick(){
        this.wireless.waitForDisplayed();
        this.wireless.click();
    }
    get rewords(){
        return $('.kDMByb')
    }
    rewordsScroll(){
        this.rewords.waitForDisplayed();
        this.rewords.scrollIntoView();
    }
    get reword1(){
        return $('.kDMByb>div:nth-child(1)>div>div>img')
    }
    get reword2(){
        return $('.kDMByb>div:nth-child(2)>div>div>img')
    }
    get reword3(){
        return $('.kDMByb>div:nth-child(3)>div>div>img')
    }
    get reword4(){
        return $('.kDMByb>div:nth-child(4)>div>div>img')
    }
    get reword5(){
        return $('.kDMByb>div:nth-child(5)>div>div>img')
    }
}

module.exports = new mainPage()