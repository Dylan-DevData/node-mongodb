import { UserCollection } from "../models/users.js";

export const getuser = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({ msg: "id utilisateur requis" });
        }

        const user = await UserCollection.findOne({ uid: id });

        if (!user) {
            return res.status(404).json({ msg: "aucun user trouve" });
        }

        return res.status(200).json({ message: "ok", user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Une erreur s'est produite..." });
    }
};