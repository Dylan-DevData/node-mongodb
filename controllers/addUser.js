import { UserCollection } from "../models/users.js";

export const adduser = async (req, res) => {
    try {
        const { nom, prenom, email, telephone, tel, uid } = req.body;
        const userTelephone = telephone ?? tel;

        if (!nom || !prenom || !email || !userTelephone || !uid) {
            return res.status(400).json({ msg: "donnees manquantes" });
        }

        const user = await UserCollection.create({
            uid,
            nom,
            prenom,
            email,
            telephone: userTelephone
        });

        return res.status(201).json({ message: "ok", user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Une erreur s'est produite..." });
    }
};