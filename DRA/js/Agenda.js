// Função para carregar eventos do backend e exibir no calendário
function loadEvents() {
    // Aqui você faria uma requisição AJAX para o backend para carregar os eventos do banco de dados
    // Exemplo:
    // fetch('backend/load_events.php')
    //     .then(response => response.json())
    //     .then(data => {
    //         // Processar os eventos e exibir no calendário
    //     });
}

// Abrir o modal ao clicar no botão "Adicionar Evento"
document.getElementById('addEvent').onclick = function() {
    // Configurar o modal para adicionar novo evento
    document.getElementById('modalTitle').textContent = 'Novo Evento';
    document.getElementById('eventId').value = '';
    document.getElementById('eventName').value = '';
    document.getElementById('eventDate').value = '';
    document.getElementById('deleteEvent').style.display = 'none';
    document.getElementById('modal').style.display = 'block';
}

// Fechar o modal ao clicar no botão "Fechar" (X)
document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

// Fechar o modal ao clicar fora do modal
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
}

// Adicionar ou editar evento ao calendário
document.getElementById('eventForm').onsubmit = function(event) {
    event.preventDefault();
    let eventId = document.getElementById('eventId').value;
    let eventName = document.getElementById('eventName').value;
    let eventDate = document.getElementById('eventDate').value;
    // Aqui você faria uma requisição AJAX para o backend para salvar/editar o evento no banco de dados
    // Exemplo:
    // fetch('backend/save_event.php', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ id: eventId, name: eventName, date: eventDate })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     // Atualizar o calendário com os novos eventos
    //     loadEvents();
    // });
    document.getElementById('modal').style.display = 'none';
}

// Excluir evento ao clicar no botão "Excluir"
document.getElementById('deleteEvent').onclick = function() {
    let eventId = document.getElementById('eventId').value;
    // Aqui você faria uma requisição AJAX para o backend para excluir o evento do banco de dados
   
}