// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('paymentForm');
    const paymentList = document.getElementById('payment-list');

    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const alamat = document.getElementById('alamat').value;
        const telp = document.getElementById('telp').value;
        const norek = document.getElementById('norek').value;
        const amount = document.getElementById('amount').value;
        const jenis = document.getElementById('jenis').value;
        const method = document.getElementById('method').value;

        const li = document.createElement('li');
        li.innerHTML = `<span>${name} - ${alamat} - ${telp}  ((${jenis}) - ${method} - ${norek} - Rp.${amount})</span>`;
        paymentList.appendChild(li);

        paymentForm.reset();
    });
});

function goBack() {
    window.location.href = "kasensokudo.html";
}
