/**
 * Dtr.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    url: {
      type: 'string',
      required: true,
      description: 'Full url of docker registry.',
      maxLength: 255,
      example: 'hub.docker.com'
    },

    user: {
      type: 'string',
      required: true,
      description: 'User of docker registry',
      maxLength: 255,
      example: 'Maja123'
    },

    token: {
      type: 'string',
      required: true,
      description: 'Access token of docker registry',
      maxLength: 255,
      example: '...VJ5Y1VKbzFWMGslqb2l0psZUhCcGNtRjBhVzl1SWpveE5qUTJOalE0TXpRMGZRPT0='
    },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

