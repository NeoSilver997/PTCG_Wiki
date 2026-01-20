// Search functionality
const searchInput = document.getElementById('searchInput');
const cardItems = document.querySelectorAll('.card-item');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        cardItems.forEach(card => {
            const cardName = card.getAttribute('data-name').toLowerCase();
            if (cardName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Expansion filter
const expansionCheckboxes = document.querySelectorAll('.filter-expansion');
if (expansionCheckboxes.length > 0) {
    expansionCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
}

// Type filter
const typeButtons = document.querySelectorAll('.filter-type');
let selectedTypes = new Set();

typeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const type = button.getAttribute('data-type');
        
        if (selectedTypes.has(type)) {
            selectedTypes.delete(type);
            button.classList.remove('ring-2', 'ring-blue-600');
        } else {
            selectedTypes.add(type);
            button.classList.add('ring-2', 'ring-blue-600');
        }
        
        applyFilters();
    });
});

// Rarity filter
const rarityCheckboxes = document.querySelectorAll('.filter-rarity');
if (rarityCheckboxes.length > 0) {
    rarityCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
}

// Apply all filters
function applyFilters() {
    const selectedExpansions = Array.from(expansionCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    const selectedRarities = Array.from(rarityCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    cardItems.forEach(card => {
        const cardExpansion = card.getAttribute('data-expansion');
        const cardType = card.getAttribute('data-type');
        const cardRarity = card.getAttribute('data-rarity');
        
        let showCard = true;
        
        // Check expansion filter
        if (selectedExpansions.length > 0 && !selectedExpansions.includes(cardExpansion)) {
            showCard = false;
        }
        
        // Check type filter
        if (selectedTypes.size > 0 && !selectedTypes.has(cardType)) {
            showCard = false;
        }
        
        // Check rarity filter
        if (selectedRarities.length > 0 && !selectedRarities.includes(cardRarity)) {
            showCard = false;
        }
        
        card.style.display = showCard ? 'block' : 'none';
    });
}

// Clear filters button
const clearButton = document.querySelector('button:contains("清除篩選")');
if (clearButton) {
    clearButton.addEventListener('click', () => {
        // Clear checkboxes
        expansionCheckboxes.forEach(cb => cb.checked = false);
        rarityCheckboxes.forEach(cb => cb.checked = false);
        
        // Clear type buttons
        selectedTypes.clear();
        typeButtons.forEach(btn => btn.classList.remove('ring-2', 'ring-blue-600'));
        
        // Clear search
        if (searchInput) searchInput.value = '';
        
        // Show all cards
        cardItems.forEach(card => card.style.display = 'block');
    });
}
