// Simulando os dados do paciente
var patients = [
    { username: "teste", password: "teste", nome: "Paciente", email: "paciente@example.com", telefone: "(00) 1234-5678", cpf: "123.456.789-00", endereco: "Rua Exemplo, 123" },
    { username: "a", password: "a", nome: "Paciente", email: "paciente@example.com", telefone: "(00) 1234-5678", cpf: "123.456.789-00", endereco: "Rua Exemplo, 123" },
    { username: "1", password: "1", nome: "Paciente", email: "paciente@example.com", telefone: "(00) 1234-5678", cpf: "123.456.789-00", endereco: "Rua Exemplo, 123" },
    { username: "usuario1", password: "senha1", nome: "Paciente 1", email: "paciente1@example.com", telefone: "(00) 1234-5678", cpf: "123.456.789-00", endereco: "Rua Exemplo, 123" },
    { username: "usuario2", password: "senha2", nome: "Paciente 2", email: "paciente2@example.com", telefone: "(00) 9876-5432", cpf: "987.654.321-00", endereco: "Avenida Teste, 456" }
];

// Função para lidar com o envio do formulário de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores de usuário e senha do formulário
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Procura pelo paciente com o nome de usuário correspondente
    var patient = patients.find(function(patient) {
        return patient.username === username && patient.password === password;
    });

    if (patient) {
        // Se o paciente for encontrado, exibe suas informações
        displayPatientInfo(patient);
    } else {
        alert("Usuário ou senha incorretos.");
    }
});

// Função para exibir as informações do paciente
function displayPatientInfo(patient) {
    var loginForm = document.getElementById("loginForm");
    var patientInfoDiv = document.getElementById("patientInfo");

    // Oculta o formulário de login
    loginForm.style.display = "none";

    // Exibe a ficha do paciente
    patientInfoDiv.innerHTML = `
        <h2>Ficha do Paciente</h2>
        <p><strong>Nome:</strong> ${patient.nome}</p>
        <p><strong>Email:</strong> ${patient.email}</p>
        <p><strong>Telefone:</strong> ${patient.telefone}</p>
        <p><strong>CPF:</strong> ${patient.cpf}</p>
        <p><strong>Endereço:</strong> ${patient.endereco}</p>
    `;
    patientInfoDiv.style.display = "block"; // Exibe o div de informações do paciente
}
