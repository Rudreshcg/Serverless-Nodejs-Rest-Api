const createProduct = async (event, context) => {
    let {name, description, price} = JSON.parse(event.body)
    console.log(name, description, price)
}

module.exports = createProduct