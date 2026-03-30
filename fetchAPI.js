//This will essentially handle all requests to the backend, and will be used by the HTML
// in order to fetch data from endpoints and send it back to the frontend.

//these all connect to their respective endpoints; will be identified in the HTML.
function fetchAPI(GET) {
    const fetchButton = document.getElementById("fetchAll");
    fetchButton.addEventListener("click", async function() {
    await fetchAllItems();  // calls their fetch function
    });
}

function fetchButton(GET) {
    const getItemButton = document.getElementById('getItemButton');
    getItemButton.addEventListener('click', async function name() {
        const itemId = document.getElementById("itemIdInput").value;
        await fetch(itemId);
    });
}

function createForm(POST) {
    createForm.addEventListener("submit", async function(event) {
    event.preventDefault();  // stops page from reloading
  
    const name = document.getElementById("nameInput").value;
    const description = document.getElementById("descInput").value;
  
    await createItem({name, description});  // passes form data to fetch function
    createForm.reset();  // clears the form
    });
};

function deleteButton(DELETE) {
    const deleteButton = document.getElementById("deleteBtn");

    deleteButton.addEventListener("click", async function() {
    const itemId = document.getElementById("itemIdInput").value;
    await deleteItem(itemId);
    });
};


/*
    fetch('api/items')
        .then(response => response.json())
        .then(items => {
            console.log(items);
        })
        .catch(error => {
            console.error('Fetch error: ', error);
        })
*/
