var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:Mutuality%402018@cluster0-shard-00-00-nf4q0.mongodb.net:27017,cluster0-shard-00-01-nf4q0.mongodb.net:27017,cluster0-shard-00-02-nf4q0.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',{
  useNewUrlParser: true
});

var products = [
    new Product({
        imagePath: 'https://www.gemselect.com/graphics/star-diopside-cabochon-information.jpg',
        title: 'Black Star Diopside',
        description: 'The diopside gemstone group is most famed for its chrome green member known in the trade as "chrome diopside"',
        price: 186
    }),
    new Product({
        imagePath: 'https://df2sm3urulav.cloudfront.net/tenants/gr/cache/uploads/images/570000-574999/574539/57301dba55862_260x208.jpg',
        title: 'Cavansite',
        description: 'These sensational eye popping minerals form in beautiful prismatic or tabular crystals in rosette like formations!',
        price: 218
    }),
    new Product({
        imagePath: 'https://cdn.shopify.com/s/files/1/1547/3947/products/chrysanthemumball01-1_600x.JPG?v=1492027403',
        title: 'Chrysanthemum Flower Stone',
        description: 'This chrysanthemum stone has three flowers and green leaves and can be used for floral arranging, craft projects and decorative purposes.',
        price: 228
    }),
    new Product({
        imagePath: 'https://jogsshow.com/jogs-blog/wp-content/uploads/2012/04/Color-Change-Diaspore1.jpg',
        title: 'Chalcedony',
        description: 'Chalcedony is a cryptocrystalline form of silica, composed of very fine intergrowths of quartz and moganite. ',
        price: 436
    }),
    new Product({
        imagePath: 'data:image/jpeg;base64,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',
        title: 'Coral Cabochon',
        description: 'Precious coral is most often cut en cabochon due to its softness and opacity. It is popularly used for beads, ornamental carvings and sculptures.',
        price: 216
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Diaspore-Margarite-rare-09-05b.jpg',
        title: 'Diaspore',
        description: 'Diaspore, also known as diasporite, empholite, etc., is an aluminium oxide hydroxide mineral crystallizing in the orthorhombic system and isomorphous with goethite.',
        price: 332
    }),
    new Product({
        imagePath: 'http://www.crystalage.com/img/products/eudialyte-tumble-stone-40mm_8.jpg',
        title: 'Eudialyte',
        description: 'Eudialyte is a somewhat rare, nine member ring cyclosilicate mineral, which forms in alkaline igneous rocks, such as nepheline syenites.',
        price: 243
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/41nabT015FL.jpg',
        title: 'Fire agate',
        description: 'Fire agate, a variety of chalcedony, is a semi-precious natural gemstone discovered so far only in certain areas of central and northern Mexico and the southwestern United States(New Mexico, Arizona and California). ',
        price: 389
    }),
    new Product({
        imagePath: 'https://df2sm3urulav.cloudfront.net/tenants/gr/uploads/images/75000-79999/79769/79769_1235106747.jpg',
        title: 'Andesine',
        description: 'Andesine is a silicate mineral, a member of the plagioclase feldspar solid solution series',
        price: 469
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}