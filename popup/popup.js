function generateQRCode(url) {
    const urlElement = document.getElementById('url');
    const qrCodeElement = document.getElementById('qrcode');

    urlElement.innerHTML = url;

    new QRCode(qrCodeElement, {
        text: url,
        width: 256,
        height: 256,
        correctLevel: QRCode.CorrectLevel.L,
    });
}

// Get the current tab's URL
browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    const tab = tabs[0];
    const url = tab.url;

    // Generate the QR code using the local library
    generateQRCode(url);
});

browser.runtime.onMessage.addListener(async (message) => {
    if (message.action === 'generateQRCode') {
        const url = message.url;

        generateQRCode(url);
    }
});
