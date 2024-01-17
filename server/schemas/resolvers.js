const { User, Product } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')(process.env.STRIPE);

const resolvers = {
    Query: {
      // Find product by ID
      product: async (parent, { _id }) => {
        return await Product.findById(_id);
      },
      // Get user by ID, otherwise throw AuthenticationError
      user: async (parent, args, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate({
            path: 'orders.products',
          });

          user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

          return user;
        }

        throw AuthenticationError;
      },
      // Find orders by user ID
      order: async (parent, { _id }, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id)
              .populate(
                  {
                      path: 'orders.products'
                  }
              );

          return user.orders.id(_id);
        }

        throw AuthenticationError;
      },
    },
    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
          throw AuthenticationError;
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw AuthenticationError;
        }

        const token = signToken(user);

        return { token, user };
      },
      updateUser: async (parent, args, context) => {
        if (context.user) {
          return await User.findByIdAndUpdate(context.user._id, args, { new: true });
        }

        throw AuthenticationError;
      },
      updateProduct: async (parent, { _id, quantity }) => {
        const decrement = Math.abs(quantity) * -1;

        return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
      },
    }
};