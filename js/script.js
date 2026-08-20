// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', () => {
    
    // Captura o formulário de contato
    const form = document.getElementById('form-contato');

    // Adiciona um evento de escuta para quando o usuário clicar em "Enviar"
    form.addEventListener('submit', function(evento) {
        // Evita que a página recarregue padrão do HTML
        evento.preventDefault();
        
        // Simula o envio
        alert('Miau! Sua mensagem foi enviada com sucesso. Em breve nossa equipe entrará em contato!');
        
        // Limpa os campos do formulário
        form.reset();
    });

});