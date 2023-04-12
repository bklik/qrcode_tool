# QR Code Tool

A simple web extension that helps the user generate QR Codes for quick, off-line, transfer between devices. This tool can create QR Codes from:

-   URL in address bar
-   Web page links
-   Highlighted text

## Local Environment Prerequisites

-   NodeJS/NPM
-   Linux Shell (Windows WSL)
    -   zip
-   Visual Studio Code

## Preparing Local Environment

If you want get this extension to work on your local environment, follow these steps:

1. Close the repository
1. Run `npm install`
1. Copy the `qrcode.min.js` file from `node_modules/qrcodejs` to the `popup/` folder.
1. Load the extension temporarily by visiting `about:debugging` in your Firefox browser, selecting `This Firefox` from the side nav, clicking the `Load Temporary Add-on…` button, and opening the `manifest.json` file from the project.

## Building the Project

Instructions for building the zip files for deploying this tool to the Firefox Add-on market.

```shell
npm run build

# dist/qrcode_tool.zip
# dist/source.zip
```

_Note: If you are on Windows, you will need to run this in WSL, since it executes Linux shell commands. You will also need the 'zip' tool installed._

## Browser Compatibility

Firefox

## License

MIT License

## Contact

https://github.com/bklik
