        function hitung() {
            // Standar redaman untuk setiap komponen
            const standards = {
                feeder: 0.35,
                dist: 0.35,
                spl2: 4.2,
                spl4: 7.8,
                spl8: 11.4,
                spl16: 15,
                spl32: 18.6,
                kon: 0.25,
                spf: 0.1,
                spd: 0.1
            };
            
            // Ambil nilai input
            const volFeeder = parseFloat(document.getElementById("vol_feeder").value) || 0;
            const volDist = parseFloat(document.getElementById("vol_dist").value) || 0;
            const volSpl2 = parseFloat(document.getElementById("vol_spl2").value) || 0;
            const volSpl4 = parseFloat(document.getElementById("vol_spl4").value) || 0;
            const volSpl8 = parseFloat(document.getElementById("vol_spl8").value) || 0;
            const volSpl16 = parseFloat(document.getElementById("vol_spl16").value) || 0;
            const volSpl32 = parseFloat(document.getElementById("vol_spl32").value) || 0;
            const volKon = parseFloat(document.getElementById("vol_kon").value) || 0;
            const volSpf = parseFloat(document.getElementById("vol_spf").value) || 0;
            const volSpd = parseFloat(document.getElementById("vol_spd").value) || 0;
            
            // Hitung total untuk setiap komponen
            const totFeeder = volFeeder * standards.feeder;
            const totDist = volDist * standards.dist;
            const totSpl2 = volSpl2 * standards.spl2;
            const totSpl4 = volSpl4 * standards.spl4;
            const totSpl8 = volSpl8 * standards.spl8;
            const totSpl16 = volSpl16 * standards.spl16;
            const totSpl32 = volSpl32 * standards.spl32;
            const totKon = volKon * standards.kon;
            const totSpf = volSpf * standards.spf;
            const totSpd = volSpd * standards.spd;
            
            // Hitung total keseluruhan
            const totalAkhir = totFeeder + totDist + totSpl2 + totSpl4 + totSpl8 + 
                             totSpl16 + totSpl32 + totKon + totSpf + totSpd;
            
            // Update hasil utama
            document.getElementById("hasil").innerText = totalAkhir.toFixed(2) + " dB";
            
            // Update detail perhitungan
            document.getElementById("tot_feeder").innerText = totFeeder.toFixed(2) + " dB";
            document.getElementById("tot_dist").innerText = totDist.toFixed(2) + " dB";
            document.getElementById("tot_spl2").innerText = totSpl2.toFixed(2) + " dB";
            document.getElementById("tot_spl4").innerText = totSpl4.toFixed(2) + " dB";
            document.getElementById("tot_spl8").innerText = totSpl8.toFixed(2) + " dB";
            document.getElementById("tot_spl16").innerText = totSpl16.toFixed(2) + " dB";
            document.getElementById("tot_spl32").innerText = totSpl32.toFixed(2) + " dB";
            document.getElementById("tot_kon").innerText = totKon.toFixed(2) + " dB";
            document.getElementById("tot_spf").innerText = totSpf.toFixed(2) + " dB";
            document.getElementById("tot_spd").innerText = totSpd.toFixed(2) + " dB";
            document.getElementById("detail_total").innerText = totalAkhir.toFixed(2) + " dB";
            
            // Update teks detail dengan nilai aktual
            document.getElementById("tot_feeder").previousElementSibling.innerText = 
                `Kabel Feeder (${volFeeder} km × ${standards.feeder} dB/km)`;
            document.getElementById("tot_dist").previousElementSibling.innerText = 
                `Kabel Distribusi (${volDist} km × ${standards.dist} dB/km)`;
            document.getElementById("tot_spl2").previousElementSibling.innerText = 
                `Splitter 1:2 (${volSpl2} × ${standards.spl2} dB)`;
            document.getElementById("tot_spl4").previousElementSibling.innerText = 
                `Splitter 1:4 (${volSpl4} × ${standards.spl4} dB)`;
            document.getElementById("tot_spl8").previousElementSibling.innerText = 
                `Splitter 1:8 (${volSpl8} × ${standards.spl8} dB)`;
            document.getElementById("tot_spl16").previousElementSibling.innerText = 
                `Splitter 1:16 (${volSpl16} × ${standards.spl16} dB)`;
            document.getElementById("tot_spl32").previousElementSibling.innerText = 
                `Splitter 1:32 (${volSpl32} × ${standards.spl32} dB)`;
            document.getElementById("tot_kon").previousElementSibling.innerText = 
                `Konektor SC/UPC (${volKon} × ${standards.kon} dB)`;
            document.getElementById("tot_spf").previousElementSibling.innerText = 
                `Splicing Feeder (${volSpf} × ${standards.spf} dB)`;
            document.getElementById("tot_spd").previousElementSibling.innerText = 
                `Splicing Distribusi (${volSpd} × ${standards.spd} dB)`;
        }
        
        // Hitung saat halaman dimuat pertama kali
        document.addEventListener("DOMContentLoaded", function() {
            hitung();
        });
        
        // Tambahkan efek saat input diubah
        const inputs = document.querySelectorAll('input[type="number"], input[type="text"]');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                this.style.borderColor = '#d32f2f';
                this.style.backgroundColor = '#fff9f9';
                
                // Kembalikan ke normal setelah beberapa detik
                setTimeout(() => {
                    this.style.borderColor = '#ddd';
                    this.style.backgroundColor = '#fff';
                }, 1000);
            });
        });
