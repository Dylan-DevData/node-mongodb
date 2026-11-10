export  const getProduct =  async (req, res) => {
    try {
        const  id =  req.params.id;
        if (!id) {
            return res.status(400).json({ msg: "id produit requis" });
        }
        const  product =  await ProductCollection.findOne({ uid: id });
        if (!product) {
            return res.status(404).json({ msg: "aucun produit trouve" });
        }
        res.json({ message: 'Produit récupéré avec succès', product });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erreur lors de la récupération du produit' });
    }}