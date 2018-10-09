(function () {

    //
    // The background task instance's activation parameters are available via Windows.UI.WebUI.WebUIBackgroundTaskInstance.current
    //
    var backgroundTaskInstance = Windows.UI.WebUI.WebUIBackgroundTaskInstance.current;
    var deferral = backgroundTaskInstance.getDeferral();
    var details = backgroundTaskInstance.triggerDetails;
    var windowsAppService = Windows.ApplicationModel.AppService;
    var dataService = new DSConnectAppService.DataAppService();

    console.log("Background " + backgroundTaskInstance.task.name + " Starting...");

    backgroundTaskInstance.addEventListener("canceled", onCanceled);

    if (details instanceof windowsAppService.AppServiceTriggerDetails) {
        var appService = details.appServiceConnection;
        appService.addEventListener("requestreceived", onRequestReceived);
    }

    function onRequestReceived(args) {
        dataService.onRequestReceived(args.target, args);
        console.log("Background " + backgroundTaskInstance.task.name + " RequestRecieved");
    }

    function onCanceled(cancelEventArg) {
        console.log("Background " + backgroundTaskInstance.task.name + " Reason: " + cancelEventArg);
        backgroundTaskInstance.succeeded = true;
        if (deferral !== null)
            deferral.complete();
        close();
    }

})();