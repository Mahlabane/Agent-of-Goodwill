// All your original product data with all images
const products = [
    {
      id: 1,
      name: "NIKE AIR",
      price: 1300.00,
      image: "images 1/image 1.jpg"
    },
    {
      id: 2,
      name: "NIKE AIR",
      price: 1300.00,
      image: "images 1/image 2.jpg"
    },
    {
      id: 3,
      name: "NIKE AIR",
      price: 1299.99,
      image: "images 1/image 3.jpg"
    },
    {
      id: 4,
      name: "NIKE AIR",
      price: 1300.00,
      image: "images 1/image 4.jpg"
    },
    {
      id: 5,
      name: "NIKE AIR",
      price: 1300.00,
      image: "images 1/image 5.jpg"
    },
    {
      id: 6,
      name: "NIKE AIR",
      price: 1300.00,
      image: "images 1/image 6.jpg"
    },
    {
      id: 7,
      name: "NIKE AIR",
      price: 1300.00,
      image: "images 1/image 7.jpg"
    },
    {
      id: 8,
      name: "NIKE AIR",
      price: 1300.00,
      image: "images 1/image 8.jpg"
    },
    {
      id: 9,
      name: "NIKE",
      price: 1300.00,
      image: "images 1/image 9.jpg"
    },
    {
      id: 10,
      name: "NIKE",
      price: 1300.00,
      image: "images 1/image 10.jpg"
    },
    {
      id: 11,
      name: "NIKE",
      price: 1099.99,
      image: "images 1/image 11.jpg"
    },
    {
      id: 12,
      name: "JORDAN NIKE",
      price: 1300.00,
      image: "image 2/image 2-1.jpg"
    },
    {
      id: 13,
      name: "JORDAN NIKE",
      price: 1300.00,
      image: "image 2/image 2-2.jpg"
    },
    {
      id: 14,
      name: "JORDAN NIKE",
      price: 1300.00,
      image: "image 2/image 2-3.jpg"
    },
    {
      id: 15,
      name: "JORDAN NIKE",
      price: 1300.00,
      image: "image 2/image 2-4.jpg"
    },
    {
      id: 16,
      name: "JORDAN NIKE",
      price: 1300.00,
      image: "image 2/image 2-5.jpg"
    },
    {
      id: 17,
      name: "JORDAN NIKE",
      price: 1300.00,
      image: "image 2/image 2-6.jpg"
    },
    {
      id: 18,
      name: "JORDAN NIKE",
      price: 1300.00,
      image: "image 2/image 2-7.jpg"
    },
    {
      id: 19,
      name: "JORDAN NIKE",
      price: 1300.00,
      image: "image 2/image 2-8.jpg"
    },
    {
      id: 20,
      name: "JORDAN NIKE",
      price: 1300.00,
      image: "image 2/image 2-9.jpg"
    },
    {
      id: 21,
      name: "JORDAN NIKE",
      price: 1300.00,
      image: "image 2/image 2-10.jpg"
    }
  ];
  
  // DOM Elements
  const productContainer = document.getElementById('productContainer');
  const cartCount = document.querySelector('.cart-count');
  let cart = [];
  
  // Initialize when page loads
  function init() {
    renderProducts();
    updateCartCount();
    
    // Cart modal setup
    const cartModal = document.getElementById('cartModal');
    const cartIcon = document.querySelector('.cart-icon');
    const closeCart = document.querySelector('.close-cart');
    
    cartIcon.addEventListener('click', () => {
      cartModal.style.display = 'block';
      renderCartItems();
    });
    
    closeCart.addEventListener('click', () => {
      cartModal.style.display = 'none';
    });
  }
  
  // Render all products with their images
  function renderProducts() {
    productContainer.innerHTML = products.map(product => `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-price">R${product.price.toFixed(2)}</p>
          <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    `).join('');
  }
  
  function updateCartCount() {
    cartCount.textContent = cart.length;
  }
  
  // Add to cart functionality
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
      const productId = parseInt(e.target.getAttribute('data-id'));
      const product = products.find(p => p.id === productId);
      cart.push(product);
      updateCartCount();
      
      // Button animation
      e.target.textContent = "Added!";
      e.target.style.backgroundColor = "#4CAF50";
      setTimeout(() => {
        e.target.textContent = "Add to Cart";
        e.target.style.backgroundColor = "";
      }, 1000);
      
      // Update cart display
      renderCartItems();
    }
  });
  
  // Render cart items
  function renderCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
      cartItems.innerHTML = '<p>Your cart is empty.</p>';
      cartTotal.textContent = 'R0';
      return;
    }
  
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <p><strong>${item.name}</strong></p>
          <p>R${item.price.toLocaleString('en-ZA')}</p>
          <p class="remove-item" data-id="${item.id}">Remove</p>
        </div>
      </div>
    `).join('');
  
    // Calculate total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = `R${total.toLocaleString('en-ZA')}`;
  
    // Add remove functionality
    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', (e) => {
        const id = parseInt(e.target.getAttribute('data-id'));
        cart = cart.filter(item => item.id !== id);
        updateCartCount();
        renderCartItems();
      });
    });
  }
  
  // Start the app
  init();
  // Update renderCartItems function
function renderCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
      cartItems.innerHTML = '<p>Your cart is empty.</p>';
      cartTotal.textContent = 'R0';
      return;
    }
  
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <p><strong>${item.name}</strong></p>
          <p>R${item.price.toLocaleString('en-ZA')}</p>
          <p class="remove-item" data-id="${item.id}">Remove</p>
        </div>
      </div>
    `).join('');
  
    // Calculate total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = `R${total.toLocaleString('en-ZA')}`;
  
    // Add remove functionality
    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', (e) => {
        const id = parseInt(e.target.getAttribute('data-id'));
        cart = cart.filter(item => item.id !== id);
        updateCartCount();
        renderCartItems();
      });
    });
  
    // Add order now functionality
    const checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.addEventListener('click', () => {
      if (cart.length > 0) {
        const orderedShoes = cart.map(item => item.name).join(', ');
        const whatsappMessage = `Hello, I would like to order the following shoes: ${orderedShoes}.`;
        const whatsappNumber = "0646023171"; // Your WhatsApp number
        const encodedMessage = encodeURIComponent(whatsappMessage);
  
        // Generate the WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
  
        // Optional: Clear the cart after order
        cart = [];
        updateCartCount();
        renderCartItems();
      }
    });
  }