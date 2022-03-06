
module.exports = {


  friendlyName: 'View dtr',


  description: 'Display "Dtr" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dtr/dtr'
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
