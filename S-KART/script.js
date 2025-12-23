const INR_RATE = 83;

const adminCreds = { username: 'Admin', password: '3511' };

const employeeCreds = {
  token: '4632',
  passwords: {
    Arun: '1108',
    Priya: '0312',
    Mohammed: '1234',
    Chris: '5678'
  }
};

const state = {
  isAdmin: false,
  employee: null
};

const catalog = {
  fruits: [
    { name: 'Apple', price: 2.5, image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&w=400&q=80' },
    { name: 'Banana', price: 0.5, image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&w=400&q=80' },
    { name: 'Orange', price: 1.2, image: 'https://images.unsplash.com/photo-1611080626761-1a4360d3cde0?auto=format&w=400&q=80' },
    { name: 'Mango', price: 2.0, image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&w=400&q=80' },
    { name: 'Grapes', price: 2.3, image: 'https://images.unsplash.com/photo-1615485747528-162b9436d9b0?auto=format&w=400&q=80' },
    { name: 'Pineapple', price: 3.0, image: 'https://images.unsplash.com/photo-1502741126161-b048400d08f0?auto=format&w=400&q=80' },
    { name: 'Strawberry', price: 3.5, image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&w=400&q=80' },
    { name: 'Blueberry', price: 4.0, image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&w=400&q=80&sat=-100' },
    { name: 'Watermelon', price: 5.0, image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&w=400&q=80&crop=entropy' },
    { name: 'Papaya', price: 2.1, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&w=400&q=80' },
    { name: 'Kiwi', price: 1.8, image: 'https://images.unsplash.com/photo-1470622859874-5f26a59c3e47?auto=format&w=400&q=80' },
    { name: 'Pomegranate', price: 3.2, image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&w=400&q=80' },
    { name: 'Pear', price: 1.9, image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&w=400&q=80&crop=focalpoint&fp-x=0.4&fp-y=0.3' },
    { name: 'Avocado', price: 2.8, image: 'https://images.unsplash.com/photo-1522184216315-dc2f5e074ceb?auto=format&w=400&q=80' },
    { name: 'Cherry', price: 4.5, image: 'https://images.unsplash.com/photo-1576399854231-3f2bbf5c7609?auto=format&w=400&q=80' }
  ],
  grocery: [
    { name: 'Basmati Rice (5kg)', price: 10.0, image: 'https://images.unsplash.com/photo-1604908177035-0ac1c9bb646e?auto=format&w=400&q=80' },
    { name: 'Whole Wheat Flour (5kg)', price: 8.0, image: 'https://images.unsplash.com/photo-1584367369853-8be4d8c081ab?auto=format&w=400&q=80' },
    { name: 'Granulated Sugar (2kg)', price: 5.0, image: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&w=400&q=80' },
    { name: 'Iodized Salt (1kg)', price: 1.0, image: 'https://images.unsplash.com/photo-1604908177444-653b5da77c6f?auto=format&w=400&q=80' },
    { name: 'Sunflower Oil (1L)', price: 12.0, image: 'https://images.unsplash.com/photo-1467293622093-9f15c96be70f?auto=format&w=400&q=80' },
    { name: 'Olive Oil (1L)', price: 14.0, image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&w=400&q=80&sat=-40' },
    { name: 'Toor Dal (1kg)', price: 6.0, image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&w=400&q=80' },
    { name: 'Chana Dal (1kg)', price: 5.5, image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&w=400&q=80' },
    { name: 'Moong Dal (1kg)', price: 6.5, image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&w=400&q=80&sat=-30' },
    { name: 'Masoor Dal (1kg)', price: 5.8, image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&w=400&q=80&sat=-60' },
    { name: 'Whole Black Pepper (200g)', price: 3.5, image: 'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?auto=format&w=400&q=80' },
    { name: 'Turmeric Powder (200g)', price: 2.2, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&w=400&q=80' },
    { name: 'Red Chili Powder (200g)', price: 2.5, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&w=400&q=80&sat=20' },
    { name: 'Cumin Seeds (200g)', price: 3.0, image: 'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?auto=format&w=400&q=80&sat=-10' },
    { name: 'Garam Masala (100g)', price: 4.0, image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&w=400&q=80' },
    { name: 'Tea Powder (500g)', price: 6.5, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&w=400&q=80' },
    { name: 'Ground Coffee (250g)', price: 7.0, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&w=400&q=80' },
    { name: 'Breakfast Oats (1kg)', price: 5.2, image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&w=400&q=80&crop=entropy' },
    { name: 'Corn Flakes (1kg)', price: 4.6, image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&w=400&q=80&sat=-20' },
    { name: 'Pasta (500g)', price: 3.8, image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&w=400&q=80' },
    { name: 'Penne (500g)', price: 3.9, image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&w=400&q=80&sat=-30' },
    { name: 'Spaghetti (500g)', price: 4.1, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&w=400&q=80&crop=entropy' },
    { name: 'Tomato Ketchup (1kg)', price: 3.2, image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&w=400&q=80' },
    { name: 'Soy Sauce (500ml)', price: 3.0, image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&w=400&q=80&sat=-50' },
    { name: 'Chickpeas (1kg)', price: 4.0, image: 'https://images.unsplash.com/photo-1522184216315-dc2f5e074ceb?auto=format&w=400&q=80&sat=-20' },
    { name: 'Kidney Beans (1kg)', price: 4.5, image: 'https://images.unsplash.com/photo-1522184216315-dc2f5e074ceb?auto=format&w=400&q=80&crop=entropy' },
    { name: 'Green Peas (1kg)', price: 3.5, image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&w=400&q=80&sat=10' },
    { name: 'Jaggery (1kg)', price: 3.6, image: 'https://images.unsplash.com/photo-1522184216315-dc2f5e074ceb?auto=format&w=400&q=80&sat=-60' },
    { name: 'Poha/Flattened Rice (1kg)', price: 2.8, image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&w=400&q=80&sat=-50' },
    { name: 'Brown Sugar (1kg)', price: 4.2, image: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&w=400&q=80&sat=10' }
  ],
  electronics: [
    { name: '14" Budget Laptop', price: 550, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&w=400&q=80' },
    { name: '13" Ultrabook', price: 950, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&w=400&q=80&sat=-30' },
    { name: 'Bluetooth Headphones', price: 120, image: 'https://images.unsplash.com/photo-1518449007433-1b0f9c9eb6c7?auto=format&w=400&q=80' },
    { name: 'Wireless Earbuds', price: 90, image: 'https://images.unsplash.com/photo-1589387554140-516dee8f9e0d?auto=format&w=400&q=80' },
    { name: 'Smartwatch', price: 150, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&w=400&q=80' },
    { name: 'Fitness Band', price: 60, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&w=400&q=80&sat=-40' },
    { name: 'Bluetooth Speaker', price: 80, image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&w=400&q=80' },
    { name: '32" LED TV', price: 220, image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&w=400&q=80' },
    { name: '50" 4K TV', price: 480, image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&w=400&q=80&sat=-40' },
    { name: 'DSLR Camera', price: 600, image: 'https://images.unsplash.com/photo-1473654729523-203e25dfda10?auto=format&w=400&q=80' },
    { name: 'Portable Hard Drive 2TB', price: 70, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&w=400&q=80&sat=-80' },
    { name: 'SSD 1TB', price: 110, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&w=400&q=80&blur=0' },
    { name: 'Gaming Console', price: 400, image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&w=400&q=80' },
    { name: 'Wi‑Fi 6 Router', price: 60, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&w=400&q=80&sat=-20' },
    { name: '27" QHD Monitor', price: 250, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&w=400&q=80&sat=-10' }
  ],
  sports: [
    { name: 'Cricket Bat (English Willow)', price: 50, image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&w=400&q=80' },
    { name: 'Cricket Ball', price: 8, image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&w=400&q=80&sat=-30' },
    { name: 'Football', price: 25, image: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&w=400&q=80' },
    { name: 'Basketball', price: 30, image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&w=400&q=80' },
    { name: 'Tennis Racket', price: 70, image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&w=400&q=80' },
    { name: 'Tennis Balls (Pack)', price: 12, image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&w=400&q=80&sat=30' },
    { name: 'Badminton Racket', price: 35, image: 'https://images.unsplash.com/photo-1508606572321-901ea443707f?auto=format&w=400&q=80' },
    { name: 'Shuttlecock Pack', price: 10, image: 'https://images.unsplash.com/photo-1508606572321-901ea443707f?auto=format&w=400&q=80&sat=-30' },
    { name: 'Yoga Mat', price: 18, image: 'https://images.unsplash.com/photo-1540200049848-d9813ea0e120?auto=format&w=400&q=80' },
    { name: 'Dumbbell Pair (5kg)', price: 40, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&w=400&q=80' },
    { name: 'Resistance Bands Set', price: 15, image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&w=400&q=80&sat=-10' },
    { name: 'Cycling Helmet', price: 45, image: 'https://images.unsplash.com/photo-1525104885119-8806dd94ad58?auto=format&w=400&q=80' },
    { name: 'Running Shoes', price: 75, image: 'https://images.unsplash.com/photo-1528701800489-20be9f0a1e5a?auto=format&w=400&q=80' },
    { name: 'Sports Water Bottle', price: 12, image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&w=400&q=80&sat=10' },
    { name: 'Gym Duffel Bag', price: 28, image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&w=400&q=80' }
  ],
  mobiles: [
    { name: 'Nova X5 5G', price: 399, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&w=400&q=80&sat=-20' },
    { name: 'Pixelon M4', price: 449, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&w=400&q=80&sat=10' },
    { name: 'Astra Neo', price: 499, image: 'https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&w=400&q=80' },
    { name: 'Zenith S', price: 549, image: 'https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&w=400&q=80&sat=-30' },
    { name: 'Orbit One', price: 599, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&w=400&q=80&crop=entropy' },
    { name: 'Pulse 11', price: 649, image: 'https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&w=400&q=80&sat=20' },
    { name: 'Velo ZR', price: 699, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&w=400&q=80&sat=-10' },
    { name: 'Aero Edge', price: 749, image: 'https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&w=400&q=80&crop=entropy' },
    { name: 'Lumen 12', price: 799, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&w=400&q=80&sat=-35' },
    { name: 'Strata Plus', price: 849, image: 'https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&w=400&q=80&sat=-60' },
    { name: 'Aurora Max', price: 899, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&w=400&q=80&sat=15' },
    { name: 'Helio Prime', price: 949, image: 'https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&w=400&q=80&sat=-15' },
    { name: 'Spectra V', price: 999, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&w=400&q=80&sat=5' },
    { name: 'Quantum XR', price: 1049, image: 'https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&w=400&q=80&sat=-25' },
    { name: 'Vertex Pro', price: 1099, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&w=400&q=80&crop=faces' }
  ]
};

const cart = new Map();

const categoryList = [
  { key: 'fruits', grid: 'fruitsGrid' },
  { key: 'grocery', grid: 'groceryGrid' },
  { key: 'electronics', grid: 'electronicsGrid' },
  { key: 'sports', grid: 'sportsGrid' },
  { key: 'mobiles', grid: 'mobilesGrid' }
];

const el = {
  fruitsGrid: document.getElementById('fruitsGrid'),
  groceryGrid: document.getElementById('groceryGrid'),
  electronicsGrid: document.getElementById('electronicsGrid'),
  sportsGrid: document.getElementById('sportsGrid'),
  mobilesGrid: document.getElementById('mobilesGrid'),
  cartCount: document.getElementById('cartCount'),
  heroCartCount: document.getElementById('heroCartCount'),
  heroCartTotal: document.getElementById('heroCartTotal'),
  checkoutList: document.getElementById('checkoutList'),
  summaryCount: document.getElementById('summaryCount'),
  summarySubtotal: document.getElementById('summarySubtotal'),
  summaryTotal: document.getElementById('summaryTotal'),
  toast: document.getElementById('toast'),
  cartChip: document.getElementById('cartChip'),
  placeOrderBtn: document.getElementById('placeOrderBtn'),
  adminLoginBtn: document.getElementById('adminLoginBtn'),
  employeeLoginBtn: document.getElementById('employeeLoginBtn'),
  adminModal: document.getElementById('adminModal'),
  employeeModal: document.getElementById('employeeModal'),
  modalBackdrop: document.getElementById('modalBackdrop'),
  adminUser: document.getElementById('adminUser'),
  adminPass: document.getElementById('adminPass'),
  adminSubmit: document.getElementById('adminSubmit'),
  adminError: document.getElementById('adminError'),
  employeeUser: document.getElementById('employeeUser'),
  employeeToken: document.getElementById('employeeToken'),
  employeePass: document.getElementById('employeePass'),
  employeeSubmit: document.getElementById('employeeSubmit'),
  employeeError: document.getElementById('employeeError'),
  adminBadge: document.getElementById('adminBadge'),
  employeeBadge: document.getElementById('employeeBadge')
};

function buildKey(catalogKey, name) {
  return `${catalogKey}::${name}`;
}

function normalizeCatalog() {
  categoryList.forEach(({ key }) => {
    catalog[key] = catalog[key].map(item => ({
      ...item,
      price: Math.round(item.price * INR_RATE),
      inStock: item.inStock !== false,
      id: buildKey(key, item.name)
    }));
  });
}

function formatCurrency(value) {
  return `₹${value.toFixed(2)}`;
}

function createCard(item, catalogKey) {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = item.image;
  img.alt = item.name;

  const title = document.createElement('div');
  title.className = 'title';
  title.textContent = item.name;

  const price = document.createElement('div');
  price.className = 'price';
  price.textContent = formatCurrency(item.price);

  const actions = document.createElement('div');
  actions.className = 'actions';

  const addBtn = document.createElement('button');
  addBtn.className = 'btn secondary';
  addBtn.textContent = 'Add to cart';
  addBtn.disabled = !item.inStock;
  addBtn.onclick = () => addToCart(item, catalogKey);

  const buyBtn = document.createElement('button');
  buyBtn.className = 'btn primary';
  buyBtn.textContent = 'Buy now';
  buyBtn.disabled = !item.inStock;
  buyBtn.onclick = () => buyNow(item, catalogKey);

  if (!item.inStock) {
    const stock = document.createElement('span');
    stock.className = 'stock-chip out';
    stock.textContent = 'Out of stock';
    card.append(stock);
  }

  actions.append(addBtn, buyBtn);
  card.append(img, title, price, actions);

  if (state.isAdmin) {
    const adminTools = document.createElement('div');
    adminTools.className = 'admin-tools';

    const stockLabel = document.createElement('label');
    stockLabel.textContent = 'In stock';
    const stockToggle = document.createElement('input');
    stockToggle.type = 'checkbox';
    stockToggle.checked = item.inStock;
    stockToggle.onchange = () => setStock(catalogKey, item.name, stockToggle.checked);
    stockLabel.appendChild(stockToggle);

    const priceRow = document.createElement('div');
    priceRow.style.display = 'flex';
    priceRow.style.gap = '8px';
    priceRow.style.alignItems = 'center';
    const priceInput = document.createElement('input');
    priceInput.type = 'number';
    priceInput.min = '1';
    priceInput.value = item.price.toFixed(0);
    priceInput.className = '';
    const saveBtn = document.createElement('button');
    saveBtn.className = 'btn secondary small';
    saveBtn.textContent = 'Save';
    saveBtn.onclick = () => {
      const next = Number(priceInput.value);
      if (Number.isNaN(next) || next <= 0) {
        showToast('Enter a valid INR price');
        return;
      }
      updatePrice(catalogKey, item.name, next);
    };
    priceRow.append(priceInput, saveBtn);

    adminTools.append(stockLabel, priceRow);
    card.append(adminTools);
  }

  return card;
}

function renderCategories() {
  categoryList.forEach(({ key, grid }) => {
    const gridEl = el[grid];
    gridEl.innerHTML = '';
    catalog[key].forEach(item => gridEl.appendChild(createCard(item, key)));
  });
}

function addToCart(item, catalogKey) {
  if (!item.inStock) {
    showToast('Item is out of stock');
    return;
  }
  const key = buildKey(catalogKey, item.name);
  const existing = cart.get(key) || { ...item, qty: 0, id: key };
  existing.price = item.price;
  existing.qty += 1;
  cart.set(key, existing);
  updateCartUI();
  showToast(`${item.name} added to cart`);
}

function buyNow(item, catalogKey) {
  addToCart(item, catalogKey);
  document.getElementById('checkout').scrollIntoView({ behavior: 'smooth' });
}

function updateCartUI() {
  const items = Array.from(cart.values());
  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  el.cartCount.textContent = count;
  el.heroCartCount.textContent = count;
  el.heroCartTotal.textContent = subtotal.toFixed(2);
  el.summaryCount.textContent = count;
  el.summarySubtotal.textContent = subtotal.toFixed(2);
  el.summaryTotal.textContent = subtotal.toFixed(2);

  el.checkoutList.innerHTML = '';
  if (!items.length) {
    const empty = document.createElement('p');
    empty.textContent = 'Cart is empty. Use Add to cart or Buy now to begin.';
    empty.style.color = '#9ca3af';
    empty.style.margin = '6px 0';
    el.checkoutList.appendChild(empty);
    return;
  }

  items.forEach(entry => {
    const row = document.createElement('div');
    row.className = 'checkout-row';

    const left = document.createElement('div');
    left.style.display = 'flex';
    left.style.flexDirection = 'column';
    left.innerHTML = `<span class="name">${entry.name}</span><span class="qty">Qty: ${entry.qty}</span>`;

    const right = document.createElement('div');
    right.style.display = 'flex';
    right.style.alignItems = 'center';
    right.style.gap = '8px';

    const minus = document.createElement('button');
    minus.className = 'btn secondary small';
    minus.textContent = '−';
    minus.onclick = () => changeQty(entry.id, -1);

    const plus = document.createElement('button');
    plus.className = 'btn primary small';
    plus.textContent = '+';
    plus.onclick = () => changeQty(entry.id, 1);

    const lineTotal = document.createElement('div');
    lineTotal.textContent = formatCurrency(entry.qty * entry.price);
    lineTotal.style.minWidth = '72px';
    lineTotal.style.textAlign = 'right';

    right.append(minus, plus, lineTotal);
    row.append(left, right);
    el.checkoutList.appendChild(row);
  });
}

function changeQty(id, delta) {
  const target = cart.get(id);
  if (!target) return;
  target.qty += delta;
  if (target.qty <= 0) cart.delete(id);
  else cart.set(id, target);
  updateCartUI();
}

function showToast(message) {
  el.toast.textContent = message;
  el.toast.classList.add('show');
  setTimeout(() => el.toast.classList.remove('show'), 1400);
}

function setStock(catalogKey, name, inStock) {
  const item = catalog[catalogKey].find(i => i.name === name);
  if (!item) return;
  item.inStock = inStock;
  if (!inStock) {
    const key = buildKey(catalogKey, name);
    cart.delete(key);
    showToast(`${name} marked out of stock`);
  } else {
    showToast(`${name} marked in stock`);
  }
  renderCategories();
  updateCartUI();
}

function updatePrice(catalogKey, name, newPrice) {
  const item = catalog[catalogKey].find(i => i.name === name);
  if (!item) return;
  item.price = newPrice;
  const key = buildKey(catalogKey, name);
  if (cart.has(key)) {
    const entry = cart.get(key);
    entry.price = newPrice;
    cart.set(key, entry);
  }
  renderCategories();
  updateCartUI();
  showToast(`Price updated for ${name}`);
}

function openModal(modal) {
  modal.hidden = false;
  el.modalBackdrop.hidden = false;
}

function closeModals() {
  [el.adminModal, el.employeeModal].forEach(m => (m.hidden = true));
  el.modalBackdrop.hidden = true;
  clearErrors();
}

function clearErrors() {
  el.adminError.hidden = true;
  el.employeeError.hidden = true;
}

function updateSessionBadges() {
  if (state.isAdmin) {
    el.adminBadge.hidden = false;
    el.adminBadge.textContent = 'Admin: logged in';
  } else {
    el.adminBadge.hidden = true;
  }

  if (state.employee) {
    el.employeeBadge.hidden = false;
    el.employeeBadge.textContent = `Employee: ${state.employee}`;
  } else {
    el.employeeBadge.hidden = true;
  }
}

function handleAdminLogin() {
  const user = el.adminUser.value.trim();
  const pass = el.adminPass.value.trim();
  if (user === adminCreds.username && pass === adminCreds.password) {
    state.isAdmin = true;
    updateSessionBadges();
    closeModals();
    renderCategories();
    showToast('Admin logged in');
  } else {
    el.adminError.hidden = false;
  }
}

function handleEmployeeLogin() {
  const user = el.employeeUser.value;
  const token = el.employeeToken.value.trim();
  const pass = el.employeePass.value.trim();
  const expectedPass = employeeCreds.passwords[user];
  if (token === employeeCreds.token && pass === expectedPass) {
    state.employee = user;
    updateSessionBadges();
    closeModals();
    showToast(`Welcome, ${user}`);
  } else {
    el.employeeError.hidden = false;
  }
}

function setupActions() {
  el.cartChip.addEventListener('click', () => {
    document.getElementById('checkout').scrollIntoView({ behavior: 'smooth' });
  });

  el.placeOrderBtn.addEventListener('click', () => {
    if (!cart.size) {
      showToast('Add items before placing an order');
      return;
    }
    showToast('Order placed! (demo)');
    cart.clear();
    updateCartUI();
  });

  el.adminLoginBtn.addEventListener('click', () => {
    el.adminUser.value = '';
    el.adminPass.value = '';
    clearErrors();
    openModal(el.adminModal);
    el.adminUser.focus();
  });

  el.employeeLoginBtn.addEventListener('click', () => {
    el.employeeToken.value = '';
    el.employeePass.value = '';
    clearErrors();
    openModal(el.employeeModal);
    el.employeeUser.focus();
  });

  el.adminSubmit.addEventListener('click', handleAdminLogin);
  el.employeeSubmit.addEventListener('click', handleEmployeeLogin);

  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', closeModals);
  });

  el.modalBackdrop.addEventListener('click', closeModals);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModals();
  });
}

normalizeCatalog();
renderCategories();
setupActions();
updateCartUI();
