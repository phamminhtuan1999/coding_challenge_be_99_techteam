import "reflect-metadata";
import express from "express";
import { User } from "./entity/user";
import { myDataSource } from "./app-data-source";
import { ObjectId } from "mongodb";

const app = express();
app.use(express.json());

myDataSource
  .initialize()
  .then(async (connection) => {
    const userRepository = connection.getRepository(User);

    // Create a new user
    app.post("/users", async (req, res): Promise<any> => {
      try {
        const user = userRepository.create(req.body);
        const result = await userRepository.save(user);
        return res.status(201).json(result);
      } catch (error) {
        return res
          .status(400)
          .json({ error: `Failed to create users: ${error}` });
      }
    });

    // Get all users
    app.get("/users", async (req, res): Promise<any> => {
      try {
        const users = await userRepository.find();
        return res.json(users);
      } catch (error) {
        return res
          .status(500)
          .json({ error: `Failed to fetch users: ${error}` });
      }
    });

    // Get a user by ID
    app.get("/users/:id", async (req, res): Promise<any> => {
      try {
        const user = await userRepository.findOne({
          where: { _id: new ObjectId(req.params.id) },
        });
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
        return res.json(user);
      } catch (error) {
        return res
          .status(500)
          .json({ error: `Failed to fetch user: ${error}` });
      }
    });

    // Update a user
    app.put("/users/:id", async (req, res): Promise<any> => {
      try {
        const user = await userRepository.findOne({
          where: { _id: new ObjectId(req.params.id) },
        });
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
        userRepository.merge(user, req.body);
        const result = await userRepository.save(user);
        return res.json(result);
      } catch (error) {
        return res
          .status(500)
          .json({ error: `Failed to update user: ${error}` });
      }
    });

    // Delete a user
    app.delete("/users/:id", async (req, res): Promise<any> => {
      try {
        const result = await userRepository.delete(req.params.id);
        if (result.affected === 0) {
          return res.status(404).json({ error: "User not found" });
        }
        return res.status(204).send();
      } catch (error) {
        return res
          .status(500)
          .json({ error: `Failed to delete user: ${error}` });
      }
    });

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => console.log(error));
