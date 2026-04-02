//This defines the new API endpoint for the frontend to interact with
// Use same protocol as the page (http or https)
const API = `${window.location.protocol}//localhost:3000/api`;

// Fetch all items from backend
async function fetchAllItems() {
    try {
        const response = await fetch(`${API}/items`);

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const items = await response.json();

        console.log("All items:", items);

        return items;
    } catch (error) {
        console.error("Error fetching all items:", error);
    }
}

// Fetch a single item by ID
async function fetchItemById(itemId) {
    try {
        const response = await fetch('${API}/items/${itemId}');

        if (!response.ok) throw new Error("Status: ${response.status}");

        const item = await response.json();

        console.log("Item:", item);

        return item;
    } catch (error) {
        console.error("Error fetching item:", error);
    }
}

// Create a new item
async function createItem(itemDesc) {
    try {
        const response = await fetch(`${API}/items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemDesc)
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const newItem = await response.json();

        console.log("Item created:", newItem);

        alert("Item created successfully!");

        return newItem;

    } catch (error) {
        console.error("Error creating item:", error);
        alert("Error creating item");
    }
}

// Fetch and display all items
async function fetchItems() {
    try {
        const response = await fetch('http://localhost:3000/api/items');
        const itemList = await response.json();
        
        // Render items on the page
        const container = document.getElementById('item-container');
        container.innerHTML = '';
        
        itemList.forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h3>${item}</h3>
                <h6>Submitted by: ${fname} ${lname}</h6>
                <p>${itemDesc}</p>
            `
            container.appendChild(div);
        });
    } catch (err) {
        console.error('Error fetching items:', err);
    }
}

// Load items when page loads
fetchItems();

// Delete an item by ID
async function deleteItem(itemId) {
    try {
        const response = await fetch(`${API}/items/${itemId}`, {
            method: "DELETE"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        console.log("Item claimed successfully");

        alert("Item claim successfully!");

    } catch (error) {

        console.error("Error deleting item:", error);

        alert("Error deleting item");
    }
}

// Setup event listeners
function setupEventListeners() {
    // Fetch all items button
    const fetchButton = document.getElementById("fetchAll");
    if (fetchButton) {

        fetchButton.addEventListener("click", async function() {

            await fetchAllItems();
        });
    }

    // Get single item button
    const getItemButton = document.getElementById("getItemButton");

    if (getItemButton) {

        getItemButton.addEventListener("click", async function() {

            const itemId = document.getElementById("itemIdInput").value;

            if (itemId) {

                await fetchItemById(itemId);

            } else {

                alert("Please enter an item ID");
            }
        });
    }

    // Create item form
    const createFormElement = document.getElementById("createForm");
    if (createFormElement) {
        createFormElement.addEventListener("submit", async function(event) {
            event.preventDefault();
            
            const fname = document.getElementById("fname").value;
            const lname = document.getElementById("lname").value;
            const item = document.getElementById("item").value;
            const itemDesc = document.getElementById("itemDesc").value;

            await createItem({fname, lname, item, itemDesc});
            createFormElement.reset();
        });
    }

    // Delete item button
    const deleteButton = document.getElementById("deleteBtn");
    if (deleteButton) {
        deleteButton.addEventListener("click", async function() {
            const itemId = document.getElementById("itemIdInput").value;
            if (itemId) {
                await deleteItem(itemId);
            } else {
                alert('Please enter an item ID');
            }
        });
    }
}

async function fetchFromDB(){
    // Fetch data from your backend
fetch(API)
    .then(res => res.json())  // Parse JSON response
    .then(itemList => {
        // itemList is now an array of items
        const container = document.getElementById('item-container');
        
        // Loop through each item and create HTML
        itemList.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'item-card';
            itemCard.innerHTML = `
                <h3>${item.item}</h3>
                <h6>Submitted by: ${item.fname} ${item.lname}</h6>
                <p>${item.itemdesc}</p>
            `;
            container.appendChild(itemCard);
        });
    })
    .catch(err => console.error('Error:', err));
}
// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", setupEventListeners);
