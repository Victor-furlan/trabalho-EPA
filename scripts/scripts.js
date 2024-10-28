const search = document.getElementById('search');
const form = document.querySelector('form')
const cont = document.querySelector('.cards');
// quando eu uso chaves {} estou criando um objeto
// cada objeto dessa array é um card
const cards = [

    // Cursos no youtube
    {
        title:'curso de Lógica de Programação do Zero - canal no youtube: Cida Castello',
        content:'Um curso simples para pessoas que estão começando agora na área de programação',
        link: '<a href= "https://www.youtube.com/watch?v=gpt7Y3gZXGA&list=PLLaQioUGFzGMELNttW9gXP87WuoLjpozR" target= "new">Clique aqui para acessar o curso no youtube</a>',
        youtube_icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg>'
    },
    {
        title:'Curso de Lógica de programação - canal no youtube: Cataline',
        content:'Neste curso de lógica de programação, você aprenderá sobre conceitos básicos, algoritmos, variáveis, tipos de dados, operadores, estruturas de controle, funções e operações práticas como calcular médias e excluir usuários.',
        link: '<a href= "https://www.youtube.com/playlist?list=PLfzRxaru7YPtu8TPQChFnLN9rGXoXfNUQ" target= "new">Clique aqui para acessar o curso no youtube</a>',
        youtube_icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg>'
    },
    {
        title:'Curso de lógica de programação com portugol - canal no youtube: Bóson Treinamentos',
        content:'Curso de Lógica de Programação completo e atualizado, usando português estruturado e o software Portugol Studio.',
        link: '<a href= "https://www.youtube.com/playlist?list=PLucm8g_ezqNp_ubuH4XraJRwvUJogsyiF" target= "new">Clique aqui para acessar o curso no youtube</a>',
        youtube_icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg>'
    },
    {
        title:'Curso de lógica de programação - canal no youtube: Pietro Martins De Oliveira',
        content:'Aprenda Algoritmos e Lógica de Programação com um material atual, enxuto e didático.',
        link: '<a href= "https://www.youtube.com/playlist?list=PLpaKFn4Q4GMNlLZQcOjt_-xxz6BTmugdU" target= "new">Clique aqui para acessar o curso no youtube</a>',
        youtube_icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg>'
    },
    {
        title:'Lógica de Programação | CURSO GRATUITO - canal no youtube: Trybe',
        content:'Neste curso você aprenderá o conceito de lógica de programação e como pode ser usado na pratica, o curso tambem fornece algumas atividades praticas.',
        link: '<a href= "https://www.youtube.com/playlist?list=PLP6Z8YhN_d5QtwbnsTG9MkSwaikpCy9ks" target= "new">Clique aqui para acessar o curso no youtube</a>',
        youtube_icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg>'
    },
    {
        title:'Lógica de Programação - canal no youtube: Programador BR',
        content:'O curso de Lógica de Programação do canal Programador BR ensina os conceitos básicos de algoritmos, variáveis, operadores, condicionais, loops, arrays, funções e procedimentos, preparando você para criar seus próprios programas.',
        link: '<a href= "https://www.youtube.com/playlist?list=PLVzrOYTg7zYDNdLJbnmhPtPcDaNWoxYVT" target= "new">Clique aqui para acessar o curso no youtube</a>',
        youtube_icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg>'
    },
    
    // Cursos em sites
    {
        title:'curso de lógica de programação | trybe',
        content:'Construa uma base sólida de lógica de programação de graça e no seu ritmo, e se prepare para aprender programação e tecnologia de forma efetiva.',
        link:'<a href= "https://betrybe.com/cursos/logica-de-programacao#:~:text=Domine%20os%20conceitos%20b%C3%A1sicos%20de%20l%C3%B3gica%20de" target = "new">link para o curso da Trybe</a>'
    },
    {
        title:'Lógica de Programação e Algoritmos | Alura',
        content:'Neste curso da Alura, você podera aprender o que é lógica de programação e qual a sua importancia',
        link:'<a href= "https://www.alura.com.br/artigos/algoritmos-e-logica-de-programacao" target = "new">link para o curso da Alura</a>'
    },
    {
        title:'Noções básicas de programação | Eu Capacito',
        content:'Neste curso você aprendera sobre os conceitos básicos da programação, tudo que alguem que esta iniciando precisa saber.',
        link:'<a href= "https://www.eucapacito.com.br/cursos/nocoes-basicas-de-programacao/" target = "new">link para o curso da EuCapacito</a>'
    },
    {
        title:'Cursos Gratuitos de Programação e Desenvolvimento | iPED',
        content:'Neste você encontrará diversos cursos na área de programação, ótimo para as pessoas que estão iniciando agora.',
        link:'<a href= "https://www.iped.com.br/programacao-e-desenvolvimento" target = "new">link para o curso da iPED</a>'
    },
]

function render(filter) {
    cards.forEach((card)=>{
        if (card.title.includes(filter)) {
            cont.innerHTML += `
                <div class="card">
                    <h3>
                        ${card.title+' '+card.youtube_icon}
                    </h3>
                    <p>
                        ${card.content}
                    </p>
                    ${card.link}
                </div>
            `;
        }

    })
}
function searchF() {
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        cont.innerHTML = '';
        render(search.value)
    })
}

render('')
searchF()
