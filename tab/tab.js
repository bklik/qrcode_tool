(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get('url');
    const headerElement = document.getElementById('header');
    const qrCodeElement = document.getElementById('qrcode');

    headerElement.innerHTML = url;

    new QRCode(qrCodeElement, {
        text: url,
        width: 256,
        height: 256,
        correctLevel: QRCode.CorrectLevel.L,
    });
})();
