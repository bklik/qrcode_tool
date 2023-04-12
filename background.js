browser.contextMenus.create({
    id: 'generate-qr-code',
    title: 'Generate QR Code For Link',
    contexts: ['link'],
});

browser.contextMenus.create({
    id: 'generate-qr-code-from-selection',
    title: 'Generate QR Code From Selection',
    contexts: ['selection'],
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    // Converts the link into a QRCode and opens it in a tab
    if (info.menuItemId === 'generate-qr-code') {
        const url = info.linkUrl;
        browser.tabs.create({
            url: `tab/tab.html?url=${encodeURIComponent(url)}`,
        });
    }

    // Converts selected text into a QRCode and opens it in a tab
    if (info.menuItemId === 'generate-qr-code-from-selection') {
        const text = info.selectionText;
        browser.tabs.create({
            url: `tab/tab.html?url=${encodeURIComponent(text)}`,
        });
    }
});
