import { UserCollection } from "../models/users.js";

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { nom, prenom, email, telephone, tel } = req.body;
        const userTelephone = telephone ?? tel;

        if (!id) {
            return res.status(400).json({ msg: "id requis" });
        }

        const updates = {};

        if (nom) updates.nom = nom;
        if (prenom) updates.prenom = prenom;
        if (email) updates.email = email;
        if (userTelephone) updates.telephone = userTelephone;

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({ msg: "aucune donnée à mettre à jour" });
        }

        const user = await UserCollection.findOneAndUpdate(
            { uid: id },
            { $set: updates },
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({ msg: "aucun user trouve" });
        }

        return res.status(200).json({ message: "ok", user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Une erreur s'est produite lors de la mise à jour..." });
    }
};
