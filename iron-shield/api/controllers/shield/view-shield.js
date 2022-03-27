module.exports = {


  friendlyName: 'View active shields',


  description: 'Display "Shields" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/shield/shield'
    }

  },

  fn: async function () {

    var shields = await Shield.find();

    // Respond with view.
    return {
      shields: shields
    };

  }


};
