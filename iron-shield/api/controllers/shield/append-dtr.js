module.exports = {


  friendlyName: 'Append sheild',


  description: 'Add new shield to protect.',


  inputs: {

    url: {
      type: 'string'
    },

    user: {
      type: 'string'
    },

    token: {
      type: 'string'
    },

  },

  exits: {

  },
  

  fn: async function ({url, user, token}) {

    // Save to the db
    await Dtr.create({url: url, user: user, token: token });

    // All done.
    return;

  }


};
