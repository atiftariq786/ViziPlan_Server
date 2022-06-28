"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("images", {
      url: Sequelize.DataTypes.STRING,
      type: Sequelize.DataTypes.STRING,
      createdBy: Sequelize.DataTypes.INTEGER,
    });

    await queryInterface.bulkInsert(
      "images",
      [
        {
          url: "https://wallpapercave.com/wp/eTpPCMk.jpg",
          type: "travel",
          createdBy: 0,
        },
        {
          url: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
          type: "travel",
          createdBy: 0,
        },
        {
          url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F06%2F24%2Fitaly-venice-EUSUMMERTRAVEL0621.jpg",
          type: "travel",
          createdBy: 0,
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDYWdDWq_UCSVYpNBCUDKXnqf0dSZt2dJATg&usqp=CAU",
          type: "travel",
          createdBy: 0,
        },
        {
          url: "https://cdn.lifehack.org/wp-content/uploads/2014/09/traveling-changes-your-life-1024x768.jpeg",
          type: "travel",
          createdBy: 0,
        },
        {
          url: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-3155666.jpg&fm=jpg",
          type: "travel",
          createdBy: 0,
        },
        {
          url: "https://cdn.wallpapersafari.com/82/6/Jb792j.jpg",
          type: "travel",
          createdBy: 0,
        },
        {
          url: "https://beyondwords.life/wp-content/uploads/2016/12/shutterstock_531460864.jpg",
          type: "travel",
          createdBy: 0,
        },
        {
          url: "https://s3.amazonaws.com/chryslermedia.iconicweb.com/mediasite/libraryImages/JP021_008WRd8g6mbusl8ck51lh99k0pd7img__mid.jpg",
          type: "travel",
          createdBy: 0,
        },
        {
          url: "https://c1.wallpaperflare.com/preview/233/750/444/nature-landscape-mountain-mountains.jpg",
          type: "travel",
          createdBy: 0,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete("images", null, {});
    await queryInterface.dropTable("images");
  },
};
