const express = require('express')
const userController = require('../controller/userController')
const eventController = require('../controller/eventController')
const router = express.Router()

//users
router.get("/users", userController.getUsers);
router.post("/users", userController.addUser);
router.get("/users/:id", userController.getUser);
router.patch("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);
router.get("/user/:contato",userController.getUserByContact);

//events
router.get("/events", eventController.getEvents);
router.post("/events", eventController.addEvent);
router.get("/events/:id", eventController.getEvent);
router.put("/events/:id", eventController.updateEvent);
router.delete("/events/:id", eventController.deleteEvent);

module.exports = router;