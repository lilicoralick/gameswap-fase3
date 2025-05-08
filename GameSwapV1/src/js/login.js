document.addEventListener('DOMContentLoaded', function() {
    // Alternar visibilidade da senha
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.querySelector('#password');
    
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.querySelector('i').classList.toggle('fa-eye');
            this.querySelector('i').classList.toggle('fa-eye-slash');
        });
    }

    // Formulário de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de login - dados em produção viriam do backend
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;
            
            // Validações básicas
            if (!email || !password) {
                alert('Por favor, preencha todos os campos!');
                return;
            }
            
            // Simular autenticação
            setTimeout(function() {
                // Simular armazenamento de token de autenticação
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', email);
                
                // Simular resposta de autenticação bem-sucedida
                alert('Login realizado com sucesso!');
                
                // Redirecionar para a página inicial
                window.location.href = '../../index.html';
            }, 1000);
        });
    }

    // Botões de login social
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.classList.contains('google') ? 'Google' : 'Steam';
            alert(`Autenticação com ${provider} não implementada nesta versão.`);
        });
    });

    // Animação de fundo
    createBackgroundAnimation();
});

// Função para criar a animação de fundo
function createBackgroundAnimation() {
    const bgAnimation = document.querySelector('.background-animation');
    if (!bgAnimation) return;
    
    const colors = ['color1', 'color2', 'color3', 'color4', 'color5'];
    const shapes = ['square', 'triangle', 'diamond', 'cross'];
    
    for (let i = 0; i < 30; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        
        // Adicionar forma aleatória
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        pixel.classList.add(randomShape);
        
        // Adicionar cor aleatória
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        pixel.classList.add(randomColor);
        
        // Definir posição aleatória
        pixel.style.left = `${Math.random() * 100}%`;
        pixel.style.top = `${Math.random() * 100}%`;
        
        // Definir tamanho aleatório
        const size = Math.random() * 30 + 10;
        pixel.style.width = `${size}px`;
        pixel.style.height = `${size}px`;
        
        // Adicionar animação
        pixel.style.animationDuration = `${Math.random() * 10 + 10}s`;
        pixel.style.animationDelay = `${Math.random() * 5}s`;
        
        bgAnimation.appendChild(pixel);
    }
} 