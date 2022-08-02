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
          url: "https://media.cntraveler.com/photos/60d20faa834e550f9a4e100f/3:1/w_5616,h_1872,c_limit/Adventures%20to%20Have%20in%20a%20Lifetime-2021_Northern%20Lights_GettyImages-183159872.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://www.travelalaska.com/sites/default/files/2021-12/ThingsToDo_Adventure_Hero_%28ATIA%2C%20Michael%20DeYoung%29.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://midgardadventure.is/wp-content/uploads/2017/04/Thorsmork-open-6.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://blogger.googleusercontent.com/img/a/AVvXsEhfqXdTs2HinlyqxEcPJcbQkMPdR3KI2RS9OHOOyjm_MNhJDARJTMhldgB45A0B6tDOFQv6JT9NFhkKQgT6l5QGo8ELx5wyPdmrjFKbzB20fYRnA8TklWooiaGy2x39UYq9gyCojms-9WbRNTyItfW7OFr6Q5u6yUZLjlopgyG4Y0MDJHBl9g-KK1-Usw=s16000",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://www.ford.ca/content/dam/vdm_ford/live/en_ca/ford/nameplate/f-150/2021/collections/equipment/3-2/21_FRD_F15_49147_32.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://www.frommers.com/system/media_items/attachments/000/865/785/s980/Vernal_Fall__Yosemite.jpg?1594998523",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://www.outsideonline.com/wp-content/uploads/2018/09/13/bikers-up-mountain_h.jpg",
          type: "generic",
          createdBy: 0,
        },
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
          url: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWR2ZW50dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://media.cntraveler.com/photos/5e260c302245530008bbdf60/master/w_4500,h_3000,c_limit/Sri-Lanka-adventure-GettyImages-570714233.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/10/15/09/istock-483629308.jpg?quality=75&width=982&height=726&auto=webp",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://beccajeanphotography.com/wp-content/uploads/2022/02/Family-photos-portland-5Z6A9147.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://www.shootproof.com/blog/wp-content/uploads/2020/02/nyejah-bolds-photography-family-portrait-posing-2-1024x682.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://www.diabetes.co.uk/wp-content/uploads/2019/01/affection-baby-baby-girl-377058.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://beccajeanphotography.com/wp-content/uploads/2021/12/FamilyPhotos2021-117_websize-1024x683.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToYzet3NMJChgCsgcRXEipi70MB05Jt7wp33bsXR3vYWB0t2c4OZNUXlCmek8InbrSVSQ&usqp=CAU",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://www.lamarieeauxpiedsnus.com/wp-content/uploads/mariage-boheme-ravatys-thequirky-lamarieeauxpiedsnus-049-810x540.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "http://www.slate.fr/sites/default/files/styles/1060x523/public/jeremy-wong-weddings-464ps_noflw-unsplash.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://www.gffoodservice.com.au/content/uploads/2019/08/culinary_terms-hero-1-@2x-1.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://img.freepik.com/free-photo/ingredients-cooking-gray-concrete_127032-2082.jpg?w=2000",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2560,h_1280/https://goodcatchfoods.com/wp-content/uploads/2021/04/Fish-Burger-Benedict-with-Hollandaise-scaled.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://kutv.com/resources/media2/16x9/full/1015/center/80/2b1b0302-66ce-49ad-a035-98b15ee8a258-large16x9_FishBurgerwithFrenchFries.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://www.trendingnews.news/wp-content/uploads/2019/05/Self-Improvement.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://media-exp1.licdn.com/dms/image/C4D12AQGhH7weO2fVfA/article-cover_image-shrink_600_2000/0/1539242400275?e=1664409600&v=beta&t=MfXcdrp65dmr8pDK1ByFvUPAw5VLAsoBs26hnK6oGR0",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://webusupload.apowersoft.info/lightpdf/wp-content/uploads/2019/11/self-improvement-websites.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://operationmeditation.com/discover/wp-content/uploads/2012/12/86-300x336.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://www.entrepreneurshipinabox.com/wp-content/uploads/personal-development.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "http://prod-upp-image-read.ft.com/4bddfb6e-fa84-11e6-9516-2d969e0d3b65",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://media.istockphoto.com/photos/healthy-eating-exercising-weight-and-blood-pressure-control-picture-id1280587810?k=20&m=1280587810&s=612x612&w=0&h=HbmfdgfBL6s0dayZF8oiweVqC_5qvgVpcGWZtH8_DDY=",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://images.pexels.com/photos/2383010/pexels-photo-2383010.jpeg?cs=srgb&dl=pexels-total-shape-2383010.jpg&fm=jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://revcycleintelligence.com/images/site/article_headers/_normal/2017-12-12-patient-care.png",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://us.123rf.com/450wm/rawpixel/rawpixel1603/rawpixel160308149/53554297-learn-learning-education-knowledge-wisdom-studying-concept.jpg?ver=6",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://www.legendsoflearning.com/wp-content/uploads/2020/10/benefits-of-online-learning-graphic.png",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://static.scientificamerican.com/sciam/cache/file/C3D6DFBB-92DD-43D0-A9F8CB9AB477F652_source.jpg?w=590&h=800&5F47C5D2-41D8-476F-A29200DA225DCEEA",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://cdn.elearningindustry.com/wp-content/uploads/2018/07/major-goals-and-expectations-of-elearning-1024x574.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://insights.dice.com/wp-content/uploads/2019/07/shutterstock_739534918.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://teachonline.ca/sites/default/files/tools-trends/banner/new-pedagogy-1140x400.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://education.ec.europa.eu/sites/default/files/styles/eac_ratio_16_9_xl/public/2022-01/adult-education-second-image-FA-1.png?h=8abcec71&itok=Tv438R6v",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://eternitymarketing.com/assets/image-cache/blog/diy.f3f58320.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Ffe1f6bf0-eadf-11eb-a9f0-ebe3f77d4a7e.jpg?crop=2500%2C1667%2C0%2C0",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://i2.wp.com/itsalwaysautumn.com/wp-content/uploads/2015/08/diy-photo-frames-wall-display-pictures-how-to-make-your-own-frame-easy-cool-modern-display-featured-600x600.jpg",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0070/7032/files/diy-product-photography.jpg?v=1599161908",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://static.bhphotovideo.com/explora/sites/default/files/TS-starting2.png",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/09/shutterstock_525066301.png",
          type: "generic",
          createdBy: 0,
        },
        {
          url: "https://wearepf.com/wp-content/uploads/2017/09/43074189_l.png",
          type: "generic",
          createdBy: 0,
        },

        //=======================================================================================
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
        {
          url: "https://www.davestravelpages.com/wp-content/uploads/2014/10/Cycling-Quotes-18.png",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://wander-lush.org/wp-content/uploads/2021/07/Quotes-about-hiking-trekking-captions-CP-2.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://1.bp.blogspot.com/-RnFeAiDdEqE/Xs4f5uDPc5I/AAAAAAAAsjQ/q_fSX4-5m2AKR_-N3VsUq5XRl0CVkyoXQCLcBGAsYHQ/s1600/Marriage-quotes-that-will-inspire-you-and-touch-your-heart%2B%25281%2529-min.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://cdn.quotesgram.com/img/73/36/1048578250-cooking_is_love_made_visible.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://mk0evermovedi574391x.kinstacdn.com/wp-content/uploads/2020/10/Personal-development-quotes-to-live-by_104.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "http://muhaise.com/wp-content/uploads/2014/08/58.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://quotefancy.com/media/wallpaper/3840x2160/1699923-Steve-Jobs-Quote-Learn-continually-There-s-always-one-more-thing.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://lesoned.com/wp-content/uploads/2019/05/LEARN-ANYTHING.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://i.pinimg.com/originals/f7/26/0a/f7260abe33a1683e8451b82ef478a2da.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://www.success.com/wp-content/uploads/legacy/sites/default/files/new2.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://boomsumo.com/wp-content/uploads/2017/10/7-Great-Inspirational-Quotes-motivation-To-Help-You-Live-Your-Best-Life.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://www.brainyreaders.com/wp-content/uploads/2019/10/Motivational-Life-Quote.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://i.pinimg.com/736x/fe/e0/ab/fee0ab853c49511728590db41084bf2a--failure-quotes-positive-motivational-quotes.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://thumbs.dreamstime.com/b/motivational-quote-poster-inspirational-unknown-source-vintage-blue-sky-light-clouds-background-53334942.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://www.brainyreaders.com/wp-content/uploads/2019/12/Adventure-Quotes.jpg",
          type: "quotes",
          createdBy: 0,
        },
        {
          url: "https://one-week-in.com/wp-content/uploads/2019/10/quote-adventure-is-waiting-you.jpg",
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
