const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");
// const { boolean } = require("joi");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);
contactSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string()
    .required()
    .message({ "any.required": "missing required name field" }),
  email: Joi.string()
    .required()
    .message({ "any.required": "missing required email field" }),
  phone: Joi.string()
    .required()
    .message({ "any.required": "missing required phone field" }),
  favorite: Joi.boolean().label("favorite"),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .message({ "any.required": "missing required favorite field" }),
});

const schemas = {
  addSchema,
  updateFavoriteSchema,
};
const Contact = model("contacts", contactSchema);

module.exports = {
  Contact,
  schemas,
};
