import { getAllProducts } from "../src/database.js"
import { ProductService } from "../src/product-service.js";

jest.mock("../src/database.js",() => {
    const originalModule = jest.requireActual("../src/database.js")

    return {
        __esModule: true,
        ...originalModule,
        getAllProducts: jest.fn()
    }
})

test.failing("mock getProductById",() => {
    ProductService.findById(1)
})

test("mock getAllProducts",() => {
    const products = [ 
        {
        id: 1,
        name: "Product Mock"
        },
        {
        id: 2,
        name: "Product Mock"
        },
    ]

    getAllProducts.mockImplementation(() => {
        return products
    })

    expect(ProductService.findAll()).toEqual(products)
})