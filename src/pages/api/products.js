const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://shadmansaalim999:mtXYtK1Kns8oZvYN@cluster0.mv6tek1.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function bootstrap(req, res) {
    try {
        await client.connect();
        const productsCollection = client.db("next-pc-builder").collection("products");

        const productId = req?.params?.productId;
        const category = req?.params?.category;

        if (req.method === "GET" && productId) {
            const product = await productsCollection.findOne({
                _id: new ObjectId(productId),
            });

            if (product) {
                res.status(200).json({ message: "success", data: product });
            } else {
                res.status(404).json({ message: "Product doesn't exists." });
            }
        }
        else if (req.method === "GET" && category) {
            const products = await productsCollection
                .find({
                    category: category,
                })
                .toArray();

            if (products) {
                res.status(200).json({ message: "success", data: products });
            } else {
                res.status(404).json({ message: "Products not found based on category" });
            }
        }
        else if (req.method === "GET") {
            const products = await productsCollection.find({}).toArray();
            res.status(200).json({ message: "success", data: products });
        }
        return productsCollection;
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

export default bootstrap;