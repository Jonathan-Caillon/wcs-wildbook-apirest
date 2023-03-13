const dataSource = require("../utils").dataSource;
const Skill = require("../entity/Skill");

class SkillController {
  static async create(req, res) {
    try {
      await dataSource.getRepository(Skill).save(req.body);
      res.status(201).send("Created Skill");
    } catch (err) {
      if (err.code === "SQLITE_CONSTRAINT") {
        return res.status(409).send("Skill already exists");
      }
      console.error(err);
      res.status(400).send("Error while creating Skill");
    }
  }

  static async read(req, res) {
    try {
      const data = await dataSource.getRepository(Skill).find();
      res.status(200).send(data);
    } catch (err) {
      console.error(err);
      res.status(400).send("Error while reading Skill");
    }
  }

  static async update(req, res) {
    try {
      const updatedUser = await dataSource
        .getRepository(Skill)
        .update(req.params.id, req.body);
      res.status(201).send(updatedUser);
    } catch (err) {
      console.error(err);
      res.status(400).send("Error while updating Skill");
    }
  }

  static async delete(req, res) {
    try {
      const skillId = req.params.id;
      const existingWilder = await dataSource
        .getRepository(Skill)
        .findOneBy({ id: skillId });
      if (existingWilder === null) {
        res.status(404).send("Skill not found");
        return;
      }
      const deletedUser = await dataSource
        .getRepository(Skill)
        .delete(req.params.id);
      res.status(200).send(deletedUser);
    } catch (err) {
      console.error(err);
      res.status(400).send("Error while deleting Skill");
    }
  }
}

module.exports = SkillController;
