document.getElementById('calculateBtn').addEventListener('click', calculateLoss);

function calculateLoss() {
    // Ambil input pengguna
    const measurementIn = parseFloat(document.getElementById('measurementIn').value) || 0;
    const connectorCount = parseInt(document.getElementById('connectorCount').value) || 0;
    const spliceCount = parseInt(document.getElementById('spliceCount').value) || 0;
    const cableLength = parseFloat(document.getElementById('cableLength').value) || 0;
    const splitter1to2 = parseInt(document.getElementById('splitter1to2').value) || 0;
    const splitter1to4 = parseInt(document.getElementById('splitter1to4').value) || 0;
    const splitter1to8 = parseInt(document.getElementById('splitter1to8').value) || 0;
    const splitter1to16 = parseInt(document.getElementById('splitter1to16').value) || 0;

    // FIX: panjang gelombang 1550 nm saja
    const cableLossRate = 0.22; // dB/km untuk 1550 nm (standar Telkom)

    // Redaman standar Telkom FTTH
    const lossConnector = connectorCount * 0.25;   // SC/UPC = 0.25 dB
    const lossSplice = spliceCount * 0.1;           // Fusion splice = 0.1 dB
    const lossCable = (cableLength / 1000) * cableLossRate;

    // Splitter loss (standar resmi Telkom)
    const lossSplitter =
          splitter1to2 * 3.8 +
          splitter1to4 * 7.25 +
          splitter1to8 * 10.38 +
          splitter1to16 * 15;

    // Total redaman pasif
    const totalLoss = lossConnector + lossSplice + lossCable + lossSplitter;

    // Prediksi OUT (teori)
    const predictedOut = measurementIn - totalLoss;

    // Tampilkan ke UI
    document.getElementById('lossConnector').textContent = lossConnector.toFixed(2) + ' dB';
    document.getElementById('lossSplice').textContent = lossSplice.toFixed(2) + ' dB';
    document.getElementById('lossCable').textContent = lossCable.toFixed(2) + ' dB';
    document.getElementById('lossSplitter').textContent = lossSplitter.toFixed(2) + ' dB';
    document.getElementById('totalLoss').textContent = totalLoss.toFixed(2) + ' dB';

    document.getElementById('predictedOut').textContent = predictedOut.toFixed(2) + ' dBm';

    // STATUS ODN berdasarkan total loss (bukan dari OUT)
    const statusElement = document.getElementById('statusText');
    statusElement.className = 'result-status';

    if (totalLoss <= 28) {
        statusElement.textContent = 'LAYAK (GPON B+)';
        statusElement.classList.add('very-good');
    } else if (totalLoss <= 32) {
        statusElement.textContent = 'LAYAK (GPON C+)';
        statusElement.classList.add('good');
    } else if (totalLoss <= 35) {
        statusElement.textContent = 'LAYAK (XG-PON)';
        statusElement.classList.add('warning');
    } else if (totalLoss <= 37) {
        statusElement.textContent = 'LAYAK (XGS-PON)';
        statusElement.classList.add('warning');
    } else {
        statusElement.textContent = 'TIDAK LAYAK (Loss Melebihi Batas ODN)';
        statusElement.classList.add('danger');
    }
}
