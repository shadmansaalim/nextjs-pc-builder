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
        const categoriesCollection = client.db('next-pc-builder').collection('categories');

        const categoryId = req?.query?.categoryId;


        if (req.method === 'GET' && categoryId) {
            const category = await categoriesCollection.findOne({
                _id: new ObjectId(categoryId),
            });

            if (category) {
                res.status(200).json({ message: 'success', data: category });
            } else {
                res.status(404).json({ message: 'Category does not exist.' });
            }
        } else if (req.method === 'GET') {
            const categories = await categoriesCollection.find({}).toArray();

            if (categories.length > 0) {
                res.status(200).json({ message: 'success', data: categories });
            } else {
                res.status(404).json({ message: 'No categories found.' });
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
