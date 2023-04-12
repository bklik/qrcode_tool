(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get('url');
    const headerElement = document.getElementById('header');
    const headerText = document.createTextNode(url);
    const qrCodeElement = document.getElementById('qrcode');

    headerElement.append(headerText);

    new QRCode(qrCodeElement, {
        text: url,
        width: 256,
        height: 256,
        correctLevel: QRCode.CorrectLevel.L,
    });
})();
