const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        // Encontra o passo ATUAL visível
        const atual = document.querySelector('.ativo');
        
        // Determina o ID do próximo passo a partir do atributo data-proximo
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        // Remove a classe "ativo" do passo atual para escondê-lo
        atual.classList.remove('ativo');
        
        // Adiciona a classe "ativo" ao próximo passo para exibi-lo
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})
