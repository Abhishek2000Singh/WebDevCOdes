// Example JavaScript code for adding interactivity, such as updating cart count or handling product additions to cart.
document.addEventListener('DOMContentLoaded', function() {
    const products = {
        electronics: [
            { name: 'Smartphone 1', price: '$499.99', image: 'phone1.jpg' },
            { name: 'Laptop 1', price: '$999.99', image: 'laptop1.jpg' },
            { name: 'Headphones 1', price: '$149.99', image: 'headphones1.jpg' },
            { name: 'Camera 1', price: '$799.99', image: 'camera1.jpg' }
        ],
        clothing: [
            { name: 'T-Shirt 1', price: '$29.99', image: 'tshirt1.jpg' },
            { name: 'Jeans 1', price: '$59.99', image: 'jeans1.jpg' },
            { name: 'Dress 1', price: '$79.99', image: 'dress1.jpg' },
            { name: 'Jacket 1', price: '$99.99', image: 'jacket1.jpg' }
        ],
        books: [
            { name: 'Fiction Book 1', price: '$19.99', image: 'fiction1.jpg' },
            { name: 'Non-Fiction Book 1', price: '$29.99', image: 'nonfiction1.jpg' },
            { name: 'Thriller Book 1', price: '$24.99', image: 'thriller1.jpg' },
            { name: 'Self-Help Book 1', price: '$34.99', image: 'selfhelp1.jpg' }
        ]
    };

    const featuredProductsContainer = document.getElementById('featured-products');

    // Function to display products based on category
    function displayProducts(category) {
        const categoryProducts = products[category];
        if (categoryProducts) {
            featuredProductsContainer.innerHTML = ''; // Clear previous products
            categoryProducts.forEach(product => {
                const productCard = createProductCard(product);
                featuredProductsContainer.appendChild(productCard);
            });
        }
    }

    // Create product card HTML
    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('product-card');

        const imageDiv = document.createElement('div');
        imageDiv.classList.add('product-image');
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        imageDiv.appendChild(img);

        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('product-details');
        const title = document.createElement('h3');
        title.classList.add('product-title');
        title.textContent = product.name;
        const price = document.createElement('p');
        price.classList.add('product-price');
        price.textContent = product.price;
        const addToCartBtn = document.createElement('button');
        addToCartBtn.classList.add('add-to-cart-btn');
        addToCartBtn.textContent = 'Add to Cart';

        detailsDiv.appendChild(title);
        detailsDiv.appendChild(price);
        detailsDiv.appendChild(addToCartBtn);

        card.appendChild(imageDiv);
        card.appendChild(detailsDiv);

        return card;
    }

    // Handle click on category links
    const categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');
            displayProducts(category);
        });
    });

    // Initial display of featured products (all categories)
    displayProducts('electronics'); // Example: Start with electronics category
});
