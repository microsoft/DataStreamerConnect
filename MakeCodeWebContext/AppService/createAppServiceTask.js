(function () {
    'use strict';

    var task = null;
    var trigger = new Windows.ApplicationModel.Background.ApplicationTrigger();
    var backgroundTaskName = "DataStreamerConnectTask";

    function registerNewBackgroundTask() {

        // Check to see if we're registered
        var allTasks = Windows.ApplicationModel.Background.BackgroundTaskRegistration.allTasks;

        var iter = allTasks.first();
        while (iter.hasCurrent) {
            var bgTask = iter.current.value;

            if (bgTask.name === backgroundTaskName) {
                bgTask.unregister(true);
                break;
            }

            iter.moveNext();
        }

        var builder = new Windows.ApplicationModel.Background.BackgroundTaskBuilder();

        builder.name = backgroundTaskName;
        builder.taskEntryPoint = "appService\\appServiceHost.js";
        builder.setTrigger(trigger, false);
        // Set isNetworkRequested so that the running task 
        builder.isNetworkRequested = true;
        task = builder.register();

        // run the task
        trigger.requestAsync();
    }

    registerNewBackgroundTask();
})();