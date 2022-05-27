module.exports= function(router){
    router.get("/sales/category/:categoryId/product/:productId/brand/:brandId", getByMonthSales)
    router.get("/category",getCategories)
    router.get("/category/:categoryId/product",getProducts)
    router.get("/category/:categoryId/product/:productId/brand",getBrands)
    return router

    function getByMonthSales(req, rsp){
        let response = FAKEDATA[req.params.categoryId]?.[req.params.productId]?.[req.params.brandId]
        console.log(response)
        if(response == undefined){
            rsp.status(404).send("Not Found")
        }else {
            rsp.statusCode=200
            rsp.json( {sales: response})
        }
    }

    function getCategories(req, rsp){
        rsp.statusCode=200
        rsp.json( {categories: Object.keys(FAKEDATA)})
    }

    function getProducts(req, rsp){
        let response = FAKEDATA[req.params.categoryId]
        if(response == undefined) {
            rsp.status(404).send("Not Found")
        } else {
            rsp.statusCode=200
            rsp.json( {products: Object.keys(response)})
        }
    }

    function getBrands(req, rsp){
        let response = FAKEDATA[req.params.categoryId]?.[req.params.productId]
        if(response == undefined) {
            rsp.status(404).send("Not Found")
        } else {
            rsp.statusCode=200
            rsp.json( {brands: Object.keys(response)})
        }
    }

}


const FAKEDATA = {
    clothes: {
        shoes: {
            nike: {
                Januery: 50,
                February: 200,
                March: 300,
                April: 100,
            },
            adidas: {
                Januery: 80,
                February: 200,
                March: 350,
                April: 50,
            },
        },
        shirts: {
            nike: {
                Januery: 50,
                February: 250,
                March: 350,
                April: 150,
            },
            adidas: {
                Januery: 660,
                February: 260,
                March: 370,
                April: 70,
            },
        }
    },
    food: {
        frute: {
            national: {
                Januery: 60,
                February: 210,
                March: 310,
                April: 110,
            },
            international: {
                Januery: 90,
                February: 210,
                March: 360,
                April: 10,
            },
        },
        cereal: {
            national: {
                Januery: 90,
                February: 290,
                March: 390,
                April: 190,
            },
            international: {
                Januery: 570,
                February: 270,
                March: 300,
                April: 30,
            },
        }
    }
}