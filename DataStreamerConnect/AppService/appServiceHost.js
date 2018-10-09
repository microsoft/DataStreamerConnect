/*
Copyright(c) Microsoft Corp. All rights reserved.

The MIT License(MIT)
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files(the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions :
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

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