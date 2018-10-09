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