module.exports = {


  friendlyName: 'Delete dtr',


  description: 'Remove docker registry.',


  inputs: {

    id: {
      type: 'string'
    },

  },

  exits: {

  },
  

  fn: async function ({id}) {

    // Save to the db
    await Dtr.archiveOne({id: id});

    // All done.
    return;

  }


};
