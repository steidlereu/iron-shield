/**
 * Shield.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    dtr: {
      type: 'number',
      required: true,
      description: 'revered dtr',
      example: 'dtr ID'
    },

    image: {
      type: 'string',
      required: true,
      description: 'image name',
      maxLength: 255,
      example: 'image name'
    },

    allTags: {
      type: 'boolean',
      required: true,
      description: 'all image tags',
      example: 'image tag'
    },

    latestTags: {
      type: 'boolean',
      required: true,
      description: 'latest image tags',
      example: 'image tag'
    },

    tags: {
      type: 'string',
      required: true,
      description: 'image tag list',
      maxLength: 255,
      example: 'image tag list'
    },

    active: {
      type: 'boolean',
      required: true,
      description: 'active',
      example: 'true or false'
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

