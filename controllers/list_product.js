export  const listeProduct =  async (req, res) => {
    try {
        const products = await ProductCollection.find();
        res.json({ message: 'Produits récupérés avec succès', products });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des produits' });
    }}


    