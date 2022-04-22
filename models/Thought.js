const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const Reaction = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },

    reactions: [Reaction],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

//get total tought count
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
//creates thought model
const Thought = model("thought", thoughtSchema);
//exports model
module.exports = Thought;
