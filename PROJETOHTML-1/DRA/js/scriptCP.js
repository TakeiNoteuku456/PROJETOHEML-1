function consultarPagamento(event) {
    event.preventDefault();

    // Simular a resposta do servidor com os detalhes do pagamento
    const invoiceNumber = document.getElementById('invoiceNumber').value;
    const email = document.getElementById('email').value;

    const paymentDetails = {
        invoiceNumber: invoiceNumber,
        email: email,
        amount: 150.00,
        dueDate: '2024-04-30',
        status: 'Pago'
    };

    exibirDetalhesPagamento(paymentDetails);
}

function exibirDetalhesPagamento(paymentDetails) {
    const paymentDetailsDiv = document.getElementById('paymentDetails');
    paymentDetailsDiv.innerHTML = `
        <h2>Detalhes do Pagamento</h2>
        <p><strong>Número da Fatura:</strong> ${paymentDetails.invoiceNumber}</p>
        <p><strong>Email:</strong> ${paymentDetails.email}</p>
        <p><strong>Valor:</strong> R$ ${paymentDetails.amount.toFixed(2)}</p>
        <p><strong>Data de Vencimento:</strong> ${paymentDetails.dueDate}</p>
        <p><strong>Status:</strong> ${paymentDetails.status}</p>
    `;
}
