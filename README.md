# Description
Data Streamer Connect is an Open Source Project and Sample that demonstrates the following:

1. Wrapping [Microsoft MakeCode](https://github.com/Microsoft/pxt) in a Windows UWP application
2. Adding Blocks and JavaScript for the Arudino UNO using the [Windows Provider Model](https://github.com/ms-iot/BusProviders/tree/develop/Arduino) and [RemoteArduino](https://github.com/ms-iot/remote-wiring/blob/develop/README.md) built on the [Firmata Protocol](http://firmata.org/wiki/Main_Page)
3. Adding a [Windows AppService](https://docs.microsoft.com/en-us/windows/uwp/launch-resume/how-to-create-and-consume-an-app-service) to a MakeCode UWP App to communicate with the [Microsoft Hacking STEM Data Streamer Excel Plugin](https://www.microsoft.com/en-us/download/details.aspx?id=56976)
4. Adding example Blocks and JavaScript to communicate with Windows 10 platform API
5. Upgrade Arudino Uno firmware programatticaly with a pre-defined hex program

# Setting up the development environment

To setup your development machine you will need to install:

1. Visual Studio Community 2017 or better
    * Install the Universal Windows Platform development workload
    * Ensure that the following optional components are selected
        * C++ Universal Windows Platform tools
        * Windows 10 SDK (10.0.15063.0)

# Updating the embedded Microsoft MakeCode instance
Data Streamer Connect is built using Microsoft MakeCode. To update the instance you will need to:

1. Clone this repository
    * You should create your own branch to contain the changes
2. Open DataStreamerConnect.sln and build the project (either x86 or x64)
3. Install [Node.js](https://nodejs.org/dist/v8.12.0/node-v8.12.0-x64.msi)
    * Ensure that Node.js is added to the path
4. Install [Visual Studio Code](https://code.visualstudio.com/)
5. Download the [Sample PXT target](https://github.com/Microsoft/pxt-sample)
    * Data Streamer Connect uses the sample PXT implementation as the base for its instance
6. Open the ZIP file and copy the files from the pxt-sample-master folder to the PXT folder in the Data Streamer Connect repository
    * **NOTE:** There are existing files in this folder that should not be overwritten:
        * package.json
        * pxtarget.json
        * targetconfig.json
        * docs/static/hero.png
        * libs/core/ns.ts
        * sim/api.ts
        * sim/apiwinrt.ts
        * sim/simulator.ts
7. Open the PXT folder in Visual Studio Code and then open a CMD Terminal for that folder location
8. In the terminal window run the following commands:
    * npm install -g pxt
    * npm install
9. Build the static package that Data Streamer Connect uses by running "pxt staticpkg" in the terminal window
    * The first pass will generate a number of "Skipped data-uri" warning. These can be ignored.
10. Copy the files from PXT\built\packaged **except** for index.html into the DataStreamerConnect\DataStreamerConnect (this is the root folder of the UWP JavaScript application)
11. Build the DataStreamerConnect solution


# Streaming data to Microsoft Excel

To use [Microsoft Data Streamer](https://support.office.com/en-us/article/data-streamer-c90aebcf-3d44-47ab-a068-549a0b9edfc6) you will need to have [Microsoft Office ](https://products.office.com/en-US/) installed as well.

# Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
