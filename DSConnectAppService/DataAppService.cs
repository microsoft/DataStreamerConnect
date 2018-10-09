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

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Windows.ApplicationModel.AppService;
using Windows.ApplicationModel.Background;
using Windows.Foundation.Collections;

namespace DSConnectAppService
{
    public sealed class DataAppService
    {
        private static AppServiceConnection _dataStreamerConnection;
        private static AppServiceConnection _dataConnectConnection;

        public async void OnRequestReceived(AppServiceConnection sender, AppServiceRequestReceivedEventArgs args)
        {
            // Get a deferral because we use an awaitable API below to respond to the message
            // and we don't want this call to get cancelled while we are waiting.
            var messageDeferral = args.GetDeferral();

            ValueSet message = args.Request.Message;
            ValueSet returnData = new ValueSet();

            string command = message["Command"] as string;

            switch (command)
            {
                case "Connect":
                    if (message["Role"] as string == "DataStreamer")
                        _dataStreamerConnection = sender;
                    else if (message["Role"] as string == "DataStreamerConnect")
                        _dataConnectConnection = sender;
                    returnData.Add("Result", "OK");
                    break;
                case "Read":
                    // DataStreamerConnect is asking for data from the dataStreamer
                    returnData = await ReadDataAsync();
                    break;
                case "Write":
                    // DataStreamerConnect is sending data to the dataStreamer
                    await WriteDataAsync(message["Data"] as string);
                    break;

            }
            try
            {
                await args.Request.SendResponseAsync(returnData); // Return the data to the caller.
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
            }
            finally
            {
                // Complete the deferral so that the platform knows that we're done responding to the app service call.
                // Note for error handling: this must be called even if SendResponseAsync() throws an exception.
                messageDeferral.Complete();
            }
        }

        // Write data to the DataStreamer
        private async Task<ValueSet> WriteDataAsync(string data)
        {
            if (_dataStreamerConnection != null)
            {
                ValueSet message = new ValueSet();
                AppServiceResponse response = null;

                message.Add("Command", "Write");
                message.Add("Data", data);

                try
                {
                    response = await _dataStreamerConnection.SendMessageAsync(message);

                    if (response.Status == AppServiceResponseStatus.Success)
                    {
                        return response.Message;
                    }
                    else
                    {
                        return new ValueSet { { "Failed to send", response.Status.ToString() } };
                    }
                }
                catch (Exception ex)
                {
                    return new ValueSet { { "Exception on sending", ex.Message } };
                }
            }
            else
            {
                return new ValueSet { { "Connection error", "DataStreamer not connected" } };
            }

        }

        // Read data from the DataStreamer and return it to DataStreamerConnect
        private async Task<ValueSet> ReadDataAsync()
        {
            if (_dataStreamerConnection != null)
            {
                // Let's ask the DataStreamer for data
                ValueSet message = new ValueSet();
                AppServiceResponse response = null;

                message.Add("Command", "Read");

                try
                {
                    response = await _dataStreamerConnection.SendMessageAsync(message);

                    if (response.Status == AppServiceResponseStatus.Success)
                    {
                        return response.Message;
                    }
                    else
                    {
                        return new ValueSet { { "Failed to send", response.Status.ToString() } };
                    }
                }
                catch (Exception ex)
                {
                    return new ValueSet { { "Exception on sending", ex.Message } };
                }
             }
            else
            {
                return new ValueSet { { "Connection error", "DataStreamer not connected" } };
            }
        }
    }
}
