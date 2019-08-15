const db = require("../data/db.config");

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
    return db("schemes");
}

function findById(id) {
    return db("schemes")
        .where({ id })
        .first();
}

function findSteps(id) {
    return db("schemes.scheme_name", "steps.step_number", "steps.instructions")
        .from("schemes")
        .join("steps", "steps.scheme_id", "=", "schemes.id")
        .where({ "schemes.id": id })
        .orderBy("step_number");

}

function add(scheme) {
    return db("schemes").insert(scheme);

}

async function update(changes, id) {
    await db("schemes")
        .where({ id })
        .update(changes);

    return find();
}

async function remove(id) {
    await db("schemes")
        .delete()
        .where({ "schemes.id": id });

    return find();
}