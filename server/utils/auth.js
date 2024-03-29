const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  verifyToken: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    // If token is sent via HTTP headers, remove the "Bearer" prefix
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    // If no token, return request object as is
    if (!token) {
      return req;
    }

    // If valid token, add user data to request object
    try {
      const { data } = jwt.verify(token, process.env.SECRET, { maxAge: '2h' });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, process.env.SECRET, { expiresIn: expiration });
  },
};
