import express from 'express';
import { adduser } from '../controllers/addUser.js';
import { getuser } from '../controllers/getUser.js';
import { listUsers } from '../controllers/listUsers.js';
import { updateUser } from '../controllers/updateUser.js';
import { deleteUser } from '../controllers/deleteUser.js';
import { listeProduct } from '../controllers/list_product.js';
import { getProduct } from '../controllers/get_product.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'bien sur la route api' });
});

// creation d'un utilisateur
router.post('/add-user', adduser);

// lecture d'un utilisateur
router.get('/get-user/:id', getuser);

// liste des utilisateurs
router.get('/users', listUsers);

// mise a jour d'un utilisateur
router.put('/update-user/:id', updateUser);

// suppression d'un utilisateur
router.delete('/delete-user/:id', deleteUser);


//  routes  pour les produits
router.get('/products', (req, res) => {
    res.json({ message: 'bien sur la route api/products' });
});

// liste  des produits
router.get('/list-products', listeProduct);

//  recuperer  un produit par son id
router.get('/get-product/:id',getProduct)

// modification d'un produit par son id
router.put('/update-product/:id', (req, res) => {
   try {
     const id = req.params.id;
     const {nom, description, prix} = req.body;


     if (!id) {
       return res.status(400).json({ message: 'id requis' });
     }
     const  updates = {};
     if (nom) updates.nom = nom;
     if (description) updates.description = description;
     if (prix) updates.prix = prix;
     if(Object.keys(updates).length === 0){
        return res.status(400).json({ message: 'aucune donnée à mettre à jour' });
     }  
     const  product =  ProductCollection.findOneAndUpdate(
        { uid: id },
        { $set: updates },
        { new: true, runValidators: true }
     ); 

     if (!product) {
       return res.status(404).json({ message: 'aucun produit trouve' });
     }      


   } catch (error) {
     console.log(error);
     res.status(500).json({ message: 'Erreur lors de la modification du produit' });    
   }
});

export default router;