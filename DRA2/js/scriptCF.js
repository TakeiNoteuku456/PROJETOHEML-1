document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Exibe a mensagem de sucesso
    document.getElementById("successMessage").style.display = "block";
    
    // Redireciona para a página do administrador após 3 segundos (3000 milissegundos)
    setTimeout(function() {
        window.location.href = "PaginaAdministrador.html";
    }, 3000);
});