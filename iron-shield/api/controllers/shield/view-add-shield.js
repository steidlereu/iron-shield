module.exports = {


  friendlyName: 'View add shield',


  description: 'Display "Add shield" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/shield/add-shield'
    }

  },


  fn: async function () {

    var dtrs = await Dtr.find();

    // Respond with view.
    return {
      dtrs: dtrs
    };

  }


};
