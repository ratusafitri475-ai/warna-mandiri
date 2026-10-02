/* =====================================================
   PREVIEW FOTO BARANG
===================================================== */

const inputGambar = document.getElementById("gambar");

const preview = document.getElementById("preview");


if (inputGambar) {

    inputGambar.addEventListener(
        "change",
        function () {

            const file = this.files[0];


            if (!file) {

                preview.style.display = "none";

                preview.src = "";

                return;
            }


            if (!file.type.startsWith("image/")) {

                alert(
                    "File yang dipilih harus berupa gambar."
                );

                inputGambar.value = "";

                preview.style.display = "none";

                preview.src = "";

                return;
            }


            const alamatFoto =
                URL.createObjectURL(file);


            preview.src = alamatFoto;

            preview.style.display = "block";

        }
    );

}


/* =====================================================
   PREVIEW LOGO
===================================================== */

const inputLogo =
    document.getElementById("logo");

const previewLogo =
    document.getElementById("previewLogo");


if (inputLogo) {

    inputLogo.addEventListener(
        "change",
        function () {

            const file = this.files[0];


            if (!file) {

                previewLogo.style.display =
                    "none";

                previewLogo.src = "";

                return;
            }


            if (!file.type.startsWith("image/")) {

                alert(
                    "File logo harus berupa gambar."
                );

                inputLogo.value = "";

                previewLogo.style.display =
                    "none";

                previewLogo.src = "";

                return;
            }


            const alamatLogo =
                URL.createObjectURL(file);


            previewLogo.src =
                alamatLogo;


            previewLogo.style.display =
                "block";

        }
    );

}


/* =====================================================
   KONFIRMASI HAPUS
===================================================== */

function konfirmasiHapus() {

    const yakin = confirm(
        "Apakah kamu yakin ingin menghapus barang ini?"
    );

    return yakin;
}


function konfirmasiHapusPesanan() {
    return confirm("Apakah kamu yakin ingin menghapus pesanan ini?");
}


/* =====================================================
   MEMBERSIHKAN PENCARIAN
===================================================== */

function bersihkanPencarian() {

    const inputPencarian =
        document.querySelector(
            'input[name="kata_kunci"]'
        );


    if (inputPencarian) {

        inputPencarian.value = "";

        inputPencarian.focus();

    }

}


/* =====================================================
   VALIDASI FORM BARANG
===================================================== */

const formBarang =
    document.getElementById("formBarang");


if (formBarang) {

    formBarang.addEventListener(
        "submit",
        function (event) {

            const nama =
                document.getElementById("nama");

            const kode =
                document.getElementById("kode");


            if (
                nama &&
                kode &&
                (
                    nama.value.trim() === "" ||
                    kode.value.trim() === ""
                )
            ) {

                alert(
                    "Nama dan kode barang harus diisi."
                );

                event.preventDefault();

            }

        }
    );

}


/* =====================================================
   PILIHAN PEMBAYARAN DAN BUKTI PEMBAYARAN
===================================================== */

const pilihanPembayaran =
    document.querySelectorAll('input[name="metode_pembayaran"]');

const panelPembayaran =
    document.querySelectorAll(".payment-method-panel");

const inputBuktiPembayaran =
    document.getElementById("bukti_pembayaran");

const teksBuktiOpsional =
    document.getElementById("proofOptional");


function perbaruiPilihanPembayaran() {
    const pilihan = document.querySelector(
        'input[name="metode_pembayaran"]:checked'
    );

    if (!pilihan) {
        return;
    }

    panelPembayaran.forEach(function (panel) {
        panel.hidden = panel.dataset.paymentMethod !== pilihan.value;
    });

    const bukanCash = pilihan.value !== "Cash";

    if (inputBuktiPembayaran) {
        inputBuktiPembayaran.required = bukanCash;
    }

    if (teksBuktiOpsional) {
        teksBuktiOpsional.textContent = bukanCash
            ? "(wajib untuk pembayaran ini)"
            : "(opsional untuk Cash)";
    }
}


pilihanPembayaran.forEach(function (pilihan) {
    pilihan.addEventListener("change", perbaruiPilihanPembayaran);
});


if (pilihanPembayaran.length > 0) {
    perbaruiPilihanPembayaran();
}