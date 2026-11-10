import { UserCollection } from "../models/users.js";

export const listUsers = async (req, res) => {
  try {
    const users = await UserCollection.find();
    return res.status(200).json({ message: "ok", users });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: "erreur survenue lors de l'affichage des utilisateurs."
    });
  }
};