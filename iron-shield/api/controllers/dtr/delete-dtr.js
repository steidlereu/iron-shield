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

    console.log(id);

    // Save to the db
    await Dtr.archiveOne({
      where:{id: id}
    });

    // All done.
    return;

  }


};
