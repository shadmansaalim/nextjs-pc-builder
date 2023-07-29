const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri =
    'mongodb+srv://shadmansaalim999:mtXYtK1Kns8oZvYN@cluster0.mv6tek1.mongodb.net/?retryWrites=true&w=majority';

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
        const productsCollection = client.db('next-pc-builder').collection('products');

        const productId = req?.query?.productId;
        const category = req?.query?.category;
        const limit = parseInt(req.query.limit, 10) || 0;


        if (req.method === 'GET' && productId) {
            const product = await productsCollection.findOne({
                _id: new ObjectId(productId),
            });

            if (product) {
                res.status(200).json({ message: 'success', data: product });
            } else {
                res.status(404).json({ message: 'Product does not exist.' });
            }
        } else if (req.method === 'GET' && category) {
            if (limit > 0) {
                // Randomly sample 'limit' number of products
                const products = await productsCollection.aggregate([
                    { $match: { category: category } },
                    { $sample: { size: limit } },
                ]).toArray();

                if (products.length > 0) {
                    res.status(200).json({ message: 'success', data: products });
                } else {
                    res.status(404).json({ message: 'Products not found based on category.' });
                }
            } else {
                // If limit is not provided or invalid, fetch all products for the category
                const products = await productsCollection.find({ category: category }).toArray();
                if (products.length > 0) {
                    res.status(200).json({ message: 'success', data: products });
                } else {
                    res.status(404).json({ message: 'Products not found based on category.' });
                }
            }
        } else if (req.method === 'GET') {
            if (limit > 0) {
                // Randomly sample 'limit' number of products
                const products = await productsCollection.aggregate([{ $sample: { size: limit } }]).toArray();

                if (products.length > 0) {
                    res.status(200).json({ message: 'success', data: products });
                } else {
                    res.status(404).json({ message: 'No products found.' });
                }
            } else {
                // If limit is not provided or invalid, fetch all products
                const products = await productsCollection.find({}).toArray();
                if (products.length > 0) {
                    res.status(200).json({ message: 'success', data: products });
                } else {
                    res.status(404).json({ message: 'No products found.' });
                }
            }
        }
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

export default bootstrap;
