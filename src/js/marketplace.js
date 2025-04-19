document.addEventListener('DOMContentLoaded', function() {
    // ===== Menu Toggle Logic =====
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // ===== Dados de Exemplo =====
    const featuredItems = [
        {
            id: 1,
            name: "M4A1-S | Cyrex",
            game: "CS:GO",
            price: "R$ 129,90",
            image: "../assets/skins/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0kfjmML7VqWZU7Mxkh6eQodr23lKx_BZqZ2vyLIa.webp",
            seller: {
                name: "EliteSkins",
                rating: "4.9",
                sales: "2000",
                badge: "gold"
            },
            quality: "Factory New",
            description: "Skin rara e cobiçada, perfeita para colecionadores. Condição impecável e sem arranhões."
        },
        {
            id: 2,
            name: "AWP | Dragon Lore",
            game: "CS:GO",
            price: "R$ 2.999,90",
            image: "../assets/skins/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTj5X09ujgL-HmOXxDLfYkWNFpp0i07iQpN733wLi_URlZj_xItW.webp",
            seller: {
                name: "RareSkins",
                rating: "5.0",
                sales: "+10000 vendas",
                badge: "platinum"
            },
            quality: "Factory New",
            description: "Uma das skins mais raras e valiosas do CS:GO. Condição perfeita e autenticidade garantida."
        },
        {
            id: 7,
            name: "M4A4 | Howl",
            game: "CS:GO",
            price: "R$ 1.999,90",
            image: "../assets/skins/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FABz7P7YKAJR-N2kmImMn-PLP7LWnn8fvsEn3u3Dotv22FC1_Uc_Ym_yJIO.webp",
            seller: {
                name: "SkinKing",
                rating: "5.0",
                sales: "+5000 vendas",
                badge: "platinum"
            },
            quality: "Minimal Wear",
            description: "Skin lendária e extremamente rara. Uma das mais cobiçadas do jogo."
        },
        {
            id: 8,
            name: "AK-47 | Fire Serpent",
            game: "CS:GO",
            price: "R$ 899,90",
            image: "../assets/skins/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FABz7P7YKAJR-N2kmImMn-PLP7LWnn8fvsEn3u3Dotv22FC1_Uc_Ym_yJIO.webp",
            seller: {
                name: "EliteSkins",
                rating: "4.9",
                sales: "+2000 vendas",
                badge: "gold"
            },
            quality: "Field-Tested",
            description: "Skin icônica com design único. Uma das mais populares do jogo."
        },
        {
            id: 9,
            name: "USP-S | Kill Confirmed",
            game: "CS:GO",
            price: "R$ 159,90",
            image: "../assets/skins/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0lfvhNr_um25V4dB8xLqZoNqn21bkqUM6Zm77J4WUdVU2Y1nW_.webp",
            seller: {
                name: "ProGamerStore",
                rating: "4.8",
                sales: "+2500 vendas",
                badge: "gold"
            },
            quality: "Minimal Wear",
            description: "Skin com design moderno e detalhes impressionantes."
        },
        {
            id: 10,
            name: "Desert Eagle | Blaze",
            game: "CS:GO",
            price: "R$ 299,90",
            image: "../assets/skins/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTj5X09ujgL-HmOXxDLfYkWNFpp0i07iQpN733wLi_URlZj_xItW.webp",
            seller: {
                name: "GameMasterBR",
                rating: "4.9",
                sales: "+1000 vendas",
                badge: "gold"
            },
            quality: "Factory New",
            description: "Skin com design flamejante e cores vibrantes."
        },
        {
            id: 11,
            name: "AWP | Medusa",
            game: "CS:GO",
            price: "R$ 1.499,90",
            image: "../assets/skins/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTj5X09ujgL-HmOXxDLfYkWNFpp0i07iQpN733wLi_URlZj_xItW.webp",
            seller: {
                name: "RareSkins",
                rating: "5.0",
                sales: "+10000 vendas",
                badge: "platinum"
            },
            quality: "Minimal Wear",
            description: "Skin lendária com design inspirado na mitologia grega."
        },
        {
            id: 12,
            name: "AK-47 | Vulcan",
            game: "CS:GO",
            price: "R$ 399,90",
            image: "../assets/skins/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTj5X09ujgL-HmOXxDLfYkWNFpp0i07iQpN733wLi_URlZj_xItW.webp",
            seller: {
                name: "SkinKing",
                rating: "5.0",
                sales: "+5000 vendas",
                badge: "platinum"
            },
            quality: "Field-Tested",
            description: "Skin com design futurista e cores vibrantes."
        }
    ];

    const trendingItems = [
        {
            id: 3,
            name: "AWP | Dragon Lore",
            game: "CS:GO",
            price: "R$ 2.999,90",
            image: "../assets/skins/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTj5X09ujgL-HmOXxDLfYkWNFpp0i07iQpN733wLi_URlZj_xItW.webp",
            quality: "Factory New",
            seller: {
                name: "RareSkins",
                badge: "platinum",
                rating: 5.0,
                sales: 10000
            }
        },
        {
            id: 4,
            name: "AK-47 | Fire Serpent",
            game: "CS:GO",
            price: "R$ 899,90",
            image: "../assets/skins/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FABz7P7YKAJR-N2kmImMn-PLP7LWnn8fvsEn3u3Dotv22FC1_Uc_Ym_yJIO.webp",
            quality: "Minimal Wear",
            seller: {
                name: "EliteSkins",
                badge: "gold",
                rating: 4.9,
                sales: 2000
            }
        },
        {
            id: 5,
            name: "USP-S | Kill Confirmed",
            game: "CS:GO",
            price: "R$ 159,90",
            image: "../assets/skins/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0lfvhNr_um25V4dB8xLqZoNqn21bkqUM6Zm77J4WUdVU2Y1nW_.webp",
            quality: "Minimal Wear",
            seller: {
                name: "ProGamerStore",
                badge: "gold",
                rating: 4.8,
                sales: 2500
            }
        },
        {
            id: 6,
            name: "Desert Eagle | Blaze",
            game: "CS:GO",
            price: "R$ 299,90",
            image: "../assets/skins/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTj5X09ujgL-HmOXxDLfYkWNFpp0i07iQpN733wLi_URlZj_xItW.webp",
            quality: "Factory New",
            seller: {
                name: "GameMasterBR",
                badge: "gold",
                rating: 4.9,
                sales: 1000
            }
        }
    ];

    // ===== Funções de Renderização =====
    function createItemCard(item) {
        return `
            <div class="item-card" data-id="${item.id}">
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-overlay">
                        <span class="item-price">${item.price}</span>
                    </div>
                </div>
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <p>${item.game}</p>
                    <div class="seller-info">
                        <div class="seller-badge ${item.seller.badge}">
                            <i class="fas fa-${item.seller.badge === 'platinum' ? 'gem' : 'crown'}"></i>
                            <span>${item.seller.badge.charAt(0).toUpperCase() + item.seller.badge.slice(1)}</span>
                        </div>
                        <div class="seller-details">
                            <p class="seller-name">${item.seller.name}</p>
                            <div class="seller-stats">
                                <span class="rating"><i class="fas fa-star"></i> ${item.seller.rating}</span>
                                <span class="sales">+${item.seller.sales} vendas</span>
                            </div>
                        </div>
                    </div>
                    <div class="security-badges">
                        <span class="badge"><i class="fas fa-shield-alt"></i> Verificado</span>
                        <span class="badge"><i class="fas fa-lock"></i> Seguro</span>
                    </div>
                    <div class="item-actions">
                        <button class="btn-buy">Comprar</button>
                        <button class="btn-trade">Trocar</button>
                    </div>
                </div>
            </div>
        `;
    }

    function createTrendingCard(item) {
        return `
            <div class="trending-card" data-id="${item.id}">
                <div class="trending-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="trending-info">
                    <h3>${item.name}</h3>
                    <p>${item.game}</p>
                    <span class="trending-price">${item.price}</span>
                </div>
            </div>
        `;
    }

    // ===== Renderização Inicial =====
    function renderFeaturedItems() {
        const featuredGrid = document.getElementById('featured-items-grid');
        featuredGrid.innerHTML = featuredItems.map(createItemCard).join('');
    }

    function renderTrendingItems() {
        const trendingGrid = document.getElementById('trending-grid');
        trendingGrid.innerHTML = trendingItems.map(createTrendingCard).join('');
    }

    // ===== Filtros e Busca =====
    const searchInput = document.getElementById('search-input');
    const filterCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
    const priceInputs = document.querySelectorAll('.price-inputs input');
    const rangeSlider = document.querySelector('.range-slider');
    const sortSelect = document.querySelector('.sort-select');
    const clearFiltersButton = document.querySelector('.clear-filters');

    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedGames = Array.from(document.querySelectorAll('input[name="game"]:checked')).map(cb => cb.value);
        const selectedQualities = Array.from(document.querySelectorAll('input[name="quality"]:checked')).map(cb => cb.value);
        const selectedRarities = Array.from(document.querySelectorAll('input[name="rarity"]:checked')).map(cb => cb.value);
        const selectedSellers = Array.from(document.querySelectorAll('input[name="seller"]:checked')).map(cb => cb.value);
        const minPrice = parseFloat(priceInputs[0].value) || 0;
        const maxPrice = parseFloat(priceInputs[1].value) || Infinity;
        const sortBy = sortSelect.value;

        // Filtragem e ordenação dos itens
        let filteredItems = [...featuredItems];

        // Aplicar filtros
        filteredItems = filteredItems.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm) || 
                                item.game.toLowerCase().includes(searchTerm);
            const matchesGame = selectedGames.length === 0 || selectedGames.includes(item.game.toLowerCase());
            const price = parseFloat(item.price.replace('R$ ', '').replace('.', '').replace(',', '.'));
            const matchesPrice = price >= minPrice && price <= maxPrice;

            return matchesSearch && matchesGame && matchesPrice;
        });

        // Ordenação
        switch(sortBy) {
            case 'price-asc':
                filteredItems.sort((a, b) => {
                    const priceA = parseFloat(a.price.replace('R$ ', '').replace('.', '').replace(',', '.'));
                    const priceB = parseFloat(b.price.replace('R$ ', '').replace('.', '').replace(',', '.'));
                    return priceA - priceB;
                });
                break;
            case 'price-desc':
                filteredItems.sort((a, b) => {
                    const priceA = parseFloat(a.price.replace('R$ ', '').replace('.', '').replace(',', '.'));
                    const priceB = parseFloat(b.price.replace('R$ ', '').replace('.', '').replace(',', '.'));
                    return priceB - priceA;
                });
                break;
            case 'popular':
                filteredItems.sort((a, b) => b.seller.sales - a.seller.sales);
                break;
            case 'newest':
                // Assumindo que os itens mais recentes têm IDs maiores
                filteredItems.sort((a, b) => b.id - a.id);
                break;
            case 'rating':
                filteredItems.sort((a, b) => b.seller.rating - a.seller.rating);
                break;
        }

        // Renderizar itens filtrados
        const featuredGrid = document.getElementById('featured-items-grid');
        featuredGrid.innerHTML = filteredItems.map(createItemCard).join('');
    }

    // Event Listeners para filtros
    searchInput.addEventListener('input', applyFilters);
    filterCheckboxes.forEach(checkbox => checkbox.addEventListener('change', applyFilters));
    priceInputs.forEach(input => input.addEventListener('input', applyFilters));
    rangeSlider.addEventListener('input', function() {
        priceInputs[1].value = this.value;
        applyFilters();
    });
    sortSelect.addEventListener('change', applyFilters);
    clearFiltersButton.addEventListener('click', function() {
        filterCheckboxes.forEach(checkbox => checkbox.checked = false);
        priceInputs.forEach(input => input.value = '');
        rangeSlider.value = 10000;
        sortSelect.value = 'price-asc';
        searchInput.value = '';
        applyFilters();
    });

    // ===== Modal de Produto =====
    const modal = document.getElementById('product-modal');
    const closeModal = document.querySelector('.close-modal');
    const itemCards = document.querySelectorAll('.item-card');

    function openModal(item) {
        document.getElementById('modal-product-name').textContent = item.name;
        document.getElementById('modal-product-game').textContent = item.game;
        document.getElementById('modal-product-price').textContent = item.price;
        document.getElementById('modal-product-image').src = item.image;
        document.getElementById('modal-product-quality').textContent = item.quality;
        document.getElementById('modal-seller-name').textContent = item.seller.name;
        document.getElementById('modal-seller-rating').innerHTML = `<i class="fas fa-star"></i> ${item.seller.rating}`;
        document.getElementById('modal-seller-sales').textContent = `+${item.seller.sales} vendas`;
        document.getElementById('modal-seller-badge').innerHTML = `
            <div class="seller-badge ${item.seller.badge}">
                <i class="fas fa-${item.seller.badge === 'platinum' ? 'gem' : 'crown'}"></i>
                <span>${item.seller.badge.charAt(0).toUpperCase() + item.seller.badge.slice(1)}</span>
            </div>
        `;

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Event Listeners para o modal
    document.addEventListener('click', function(e) {
        const itemCard = e.target.closest('.item-card');
        const trendingCard = e.target.closest('.trending-card');
        
        // Se o clique foi em um botão "Comprar" dentro de um item, abra o modal primeiro
        if (e.target.classList.contains('btn-buy') || e.target.classList.contains('btn-trade')) {
            if (itemCard) {
                const itemId = parseInt(itemCard.dataset.id);
                let item = featuredItems.find(i => i.id === itemId);
                if (!item) {
                    item = trendingItems.find(i => i.id === itemId);
                }
                
                if (item) {
                    // Se for clique em botão de comprar, abrimos o modal primeiro
                    e.preventDefault();
                    openModal(item);
                    return; // Retorna para não executar o restante da função
                }
            }
        }
        
        // Para cliques em outros elementos do card
        if (itemCard && !e.target.classList.contains('btn-buy') && !e.target.classList.contains('btn-trade')) {
            const itemId = parseInt(itemCard.dataset.id);
            const item = featuredItems.find(i => i.id === itemId);
            if (item) openModal(item);
        } else if (trendingCard) {
            const itemId = parseInt(trendingCard.dataset.id);
            const item = trendingItems.find(i => i.id === itemId);
            if (item) openModal(item);
        }
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // ===== Carrinho de Compras =====
    const cartButton = document.getElementById('cart-button');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.querySelector('.close-cart');
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.querySelector('.cart-count');
    const totalPrice = document.querySelector('.total-price');

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartCount.textContent = cart.length;
    }

    function updateCartItems() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.innerHTML = '';
        
        let total = 0;
        
        cart.forEach((item, index) => {
            const price = parseFloat(item.price.replace('R$ ', '').replace('.', '').replace(',', '.'));
            total += price;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>${item.game}</p>
                    <span class="cart-item-price">${item.price}</span>
                </div>
                <button class="remove-item" data-index="${index}">
                    <i class="fas fa-times"></i>
                </button>
            `;
            cartItems.appendChild(cartItem);
        });
        
        totalPrice.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
                updatedCart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                updateCartCount();
                updateCartItems();
            });
        });
    }

    function addToCart(item) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartItems();
    }

    // Event Listeners para o carrinho
    cartButton.addEventListener('click', function() {
        updateCartItems();
        cartModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    closeCart.addEventListener('click', function() {
        cartModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Event Listeners para botões de compra e troca
    document.addEventListener('click', function(e) {
        // Lógica específica para os botões de compra direta e troca fora do modal
        if (e.target.classList.contains('btn-buy') && !e.target.closest('.modal-actions')) {
            // Se o botão está dentro do modal, ignoramos (será tratado por outro listener)
            if (e.target.closest('.modal-content')) return;
            
            const itemCard = e.target.closest('.item-card');
            if (itemCard) {
                const itemId = parseInt(itemCard.dataset.id);
                // Se não conseguirmos encontrar nos featured items, tentamos nos trending items
                let item = featuredItems.find(i => i.id === itemId);
                if (!item) {
                    item = trendingItems.find(i => i.id === itemId);
                }

                if (item) {
                    localStorage.setItem('currentPurchase', JSON.stringify(item));
                    window.location.href = 'payment.html';
                }
            }
        } else if (e.target.classList.contains('btn-trade') && !e.target.closest('.modal-actions')) {
            // Se o botão está dentro do modal, ignoramos (será tratado por outro listener)
            if (e.target.closest('.modal-content')) return;
            
            const itemCard = e.target.closest('.item-card');
            if (itemCard) {
                const itemId = parseInt(itemCard.dataset.id);
                // Se não conseguirmos encontrar nos featured items, tentamos nos trending items
                let item = featuredItems.find(i => i.id === itemId);
                if (!item) {
                    item = trendingItems.find(i => i.id === itemId);
                }

                if (item) {
                    alert(`Proposta de troca para ${item.name} enviada com sucesso! O vendedor irá revisar sua oferta em breve.`);
                }
            }
        }
    });

    // Event Listeners para botões do modal
    document.querySelector('.modal-actions .btn-buy').addEventListener('click', function() {
        const itemName = document.getElementById('modal-product-name').textContent;
        const item = featuredItems.find(i => i.name === itemName) || trendingItems.find(i => i.name === itemName);
        
        if (item) {
            localStorage.setItem('currentPurchase', JSON.stringify(item));
            window.location.href = 'payment.html';
        }
    });

    document.querySelector('.modal-actions .btn-trade').addEventListener('click', function() {
        const itemName = document.getElementById('modal-product-name').textContent;
        alert(`Proposta de troca para ${itemName} enviada com sucesso! O vendedor irá revisar sua oferta em breve.`);
    });

    document.querySelector('.modal-actions .btn-add-to-cart').addEventListener('click', function() {
        const itemName = document.getElementById('modal-product-name').textContent;
        const item = featuredItems.find(i => i.name === itemName) || trendingItems.find(i => i.name === itemName);
        
        if (item) {
            addToCart(item);
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            alert('Item adicionado ao carrinho!');
        }
    });

    // ===== Carrossel de Tendências =====
    const carousel = document.querySelector('.trending-grid');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    let currentIndex = 0;
    let itemsPerSlide = 4;
    const itemWidth = 250;
    const gap = 16;
    
    function createDots() {
        const totalItems = document.querySelectorAll('.trending-grid .trending-card').length;
        const totalSlides = Math.ceil(totalItems / itemsPerSlide);
        
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dotsContainer.appendChild(dot);
        }
    }
    
    function updateCarousel() {
        const offset = currentIndex * (itemsPerSlide * (itemWidth + gap));
        carousel.style.transform = `translateX(-${offset}px)`;
        
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= Math.ceil(carousel.children.length / itemsPerSlide) - 1;
    }
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        const maxIndex = Math.ceil(carousel.children.length / itemsPerSlide) - 1;
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    function adjustItemsPerSlide() {
        const width = window.innerWidth;
        if (width < 768) {
            itemsPerSlide = 1;
        } else if (width < 1024) {
            itemsPerSlide = 2;
        } else if (width < 1400) {
            itemsPerSlide = 3;
        } else {
            itemsPerSlide = 4;
        }
        updateCarousel();
    }
    
    window.addEventListener('resize', adjustItemsPerSlide);

    // ===== Inicialização =====
    renderFeaturedItems();
    renderTrendingItems();
    updateCartCount();
    createDots();
    updateCarousel();
    adjustItemsPerSlide();
}); 