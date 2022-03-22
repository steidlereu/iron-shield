module.exports = {


  friendlyName: 'Append dtr',


  description: 'Add docker registry.',


  inputs: {

    url: {
      type: 'string'
    },

    token: {
      type: 'string'
    },

  },

  exits: {

  },
  

  fn: async function ({url, token}) {

    // Save to the db
    await Dtr.create({url: url, token: token });

    // All done.
    return;

  }


};
