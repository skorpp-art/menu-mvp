
document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('menu-container');
    const langEsButton = document.getElementById('lang-es');
    const langEnButton = document.getElementById('lang-en');

    let currentLang = 'es';
    let menuData = null;

    const fetchMenuData = async () => {
        try {
            const response = await fetch('menu.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            menuData = await response.json();
            renderMenu();
        } catch (error) {
            menuContainer.innerHTML = `<p style="color: red; text-align: center;">Error al cargar el menú. Por favor, intente más tarde.</p>`;
            console.error("Fetch error: ", error);
        }
    };

    const renderMenu = () => {
        if (!menuData) return;

        menuContainer.innerHTML = ''; // Limpiar el menú actual

        menuData.categories.forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'menu-category';

            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = category.name[currentLang];
            categoryDiv.appendChild(categoryTitle);

            category.items.forEach(item => {
                const itemHtml = createItemHtml(item);
                categoryDiv.innerHTML += itemHtml;
            });

            menuContainer.appendChild(categoryDiv);
        });
    };

    const createItemHtml = (item) => {
        const name = item.name[currentLang];
        const description = item.description[currentLang];
        const price = item.price;
        const image = item.image ? `<img src="${item.image}" alt="${name}" class="menu-item__image">` : '';
        
        let tagHtml = '';
        if (item.tags) {
            const tagText = item.tags[currentLang];
            let tagClass = '';
            if (tagText.includes('RECOMENDADO') || tagText.includes('RECOMMENDED')) tagClass = 'tag-recommenndado';
            if (tagText.includes('VENDIDO') || tagText.includes('SELLER')) tagClass = 'tag-bestseller';
            if (tagText.includes('PICANTE') || tagText.includes('SPICY')) tagClass = 'tag-spicy';
            tagHtml = `<div class="menu-item__tags"><span class="tag ${tagClass}">${tagText}</span></div>`;
        }

        const upsellHtml = item.upsell ? `<div class="menu-item__upsell">${item.upsell[currentLang]}</div>` : '';

        return `
            <div class="menu-item">
                ${image}
                <div class="menu-item__content">
                    <div class="menu-item__header">
                        <span class="menu-item__name">${name}</span>
                        <span class="menu-item__price">${price}</span>
                    </div>
                    ${tagHtml}
                    <p class="menu-item__description">${description}</p>
                    ${upsellHtml}
                </div>
            </div>
        `;
    };

    const setLanguage = (lang) => {
        currentLang = lang;
        langEsButton.classList.toggle('active', lang === 'es');
        langEnButton.classList.toggle('active', lang === 'en');
        renderMenu();
    };

    langEsButton.addEventListener('click', () => setLanguage('es'));
    langEnButton.addEventListener('click', () => setLanguage('en'));

    // Carga inicial
    fetchMenuData();
});
