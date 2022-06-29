"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("images", {
      id: {
        defaultValue: Sequelize.INTEGER,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      url: Sequelize.DataTypes.STRING,
      type: Sequelize.DataTypes.STRING,
      createdBy: Sequelize.DataTypes.INTEGER,
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.literal(`NOW()`),
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.literal(`NOW()`),
      },
    });

    await queryInterface.bulkInsert(
      "images",
      [
        {
          url: "https://wallpapercave.com/wp/eTpPCMk.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F06%2F24%2Fitaly-venice-EUSUMMERTRAVEL0621.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDYWdDWq_UCSVYpNBCUDKXnqf0dSZt2dJATg&usqp=CAU",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://cdn.lifehack.org/wp-content/uploads/2014/09/traveling-changes-your-life-1024x768.jpeg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-3155666.jpg&fm=jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://cdn.wallpapersafari.com/82/6/Jb792j.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://beyondwords.life/wp-content/uploads/2016/12/shutterstock_531460864.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://s3.amazonaws.com/chryslermedia.iconicweb.com/mediasite/libraryImages/JP021_008WRd8g6mbusl8ck51lh99k0pd7img__mid.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://c1.wallpaperflare.com/preview/233/750/444/nature-landscape-mountain-mountains.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://wallpaperaccess.com/full/650127.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://i0.wp.com/cooldigital.photography/wp-content/uploads/2019/09/Inspirational-quote.jpg?resize=750%2C500&ssl=1",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://c0.wallpaperflare.com/preview/76/209/70/message-can-wall-quote.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://wallpaper.dog/large/897731.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://i.pinimg.com/originals/e9/4f/6b/e94f6b2ac6b4297a6f145e6bd62774ed.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://motivationalquoteforme.com/wp-content/uploads/Start-Working-on-the-life-that-you-want-TODAY-4K-HD-Wallpaper-MotivationalQuoteForMedotcom.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://www.teahub.io/photos/full/127-1274591_inspirational-motivational-4k-hd-desktop-wallpaper-motivational.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://i.pinimg.com/originals/1e/71/b7/1e71b7e80b9eece4cfa18f967e07750f.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://i.pinimg.com/originals/79/88/bc/7988bcb17f342500ac9afa9f923b4315.png",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://wallpaperaccess.com/full/5259315.jpg",
          type: "quotes",
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
