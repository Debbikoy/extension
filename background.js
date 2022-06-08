current_tab = null;

//When you switch to a tab an event occurs

browser.tabs.onActivated.addListener((e)=>{
    console.log("Tab id")
    console.log(e.tabId)
})