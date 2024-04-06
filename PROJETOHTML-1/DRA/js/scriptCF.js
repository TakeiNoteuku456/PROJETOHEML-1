// Função para lidar com o envio do formulário
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Redireciona para a página do administrador
    window.location.href = "PaginaAdministrador.html";
});