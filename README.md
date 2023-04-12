# QR Code Tool

A simple web extension that helps the user generate QR Codes for quick, off-line, transfer between devices. This tool can create QR Codes from:

-   URL in address bar
-   Web page links
-   Highlighted text

## Preparing Local Environment

If you want get this extension to work on your local environment, follow these steps:

1. Close the repository
1. Run `npm install`
1. Copy the `qrcode.min.js` file from `node_modules/qrcodejs` to the `popup/` folder.
1. Load the extension temporarily by visiting `about:debugging` in your Firefox browser, selecting `This Firefox` from the side nav, clicking the `Load Temporary Add-on…` button, and opening the `manifest.json` file from the project.

## Building the Project

These instruction build the zip file for deploying this tool to the Firefox Add-on market.

```
npm run build
```

_Note: If you are on Windows, you will need to run this in WSL, since it executes Linux shell commands. You will also need the 'zip' tool installed._

This command will build the zip file to: `dist/qrcode_tool.zip`

## Browser Compatibility

Firefox

## License

MIT License

## Contact

https://github.com/bklik
