app.get('/items', async (req, res) => {
    const items = await Item.find({}); 
    res.render('items-page', { itemList: items });
});