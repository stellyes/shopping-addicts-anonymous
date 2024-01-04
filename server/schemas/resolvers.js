const { User, Product } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')(process.env.STRIPE);

const resolvers = {
    // Find product by ID
    product: async (parent, { _id }) => {
      return await Product.findById(_id);
    },
    // Get user by ID, otherwise throw AuthenticationError
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
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
    }
};