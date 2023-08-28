async function handleRevalidate(req, res){
const event = req.body;
if(event.model === 'product'){
    const id = event.entry.id;
    await Promise.all([
    await res.revalidate('/'),
    await res.revalidate(`/products/${id}`)
    ])
    //console.log(`revalidate product', ${id}`)
}
}
export default handleRevalidate;