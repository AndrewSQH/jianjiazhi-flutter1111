'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "326a4b34204de89ab0ad88cfa75f8875",
".git/config": "24774e0185a8eb22e8efe1b32cea3b7a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "be277579b857f6ab5ccd794bee2f3a11",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d49fe0fff5b478f1932c866906bbc2ed",
".git/logs/refs/heads/master": "d49fe0fff5b478f1932c866906bbc2ed",
".git/logs/refs/remotes/origin/master": "bfbcd251fedd28856f36d6250594415b",
".git/objects/00/1868cb75cff781556371acf24e03d1cb870594": "c01b82e312dd16f47030bc7bd16d2538",
".git/objects/05/578452aa706bcb300db189bc158014ce24bc7a": "b0d8a189b5734377e44d8d72e9116634",
".git/objects/07/8f1df65cdf1d64e0a6dd1291a590487a5a90ce": "45785bea1268b489fedd3193a18ef025",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0d/181d7dcc37d3413de8b80b9f5a64176feb6e5d": "c0f3a12b08af55f4c6e73cbd1a21cf54",
".git/objects/0d/28e010dbbe103bf3994843613a99d640c6561f": "98dcdad9930e9ae2edc052118bacd2ce",
".git/objects/10/26527431abc65fc2e405d709c9ad4f7e826815": "0e0978e28fab6a1b5e7ed454b72aa661",
".git/objects/17/72d76dc2f5369b345a3e10cd3158be59968cef": "932130b426922e2e7556ff596a4570fe",
".git/objects/18/e3b8796b313523d6b65ea967f1f32f027f8533": "dc9d24eb899686d1cc0cd6eb967478a6",
".git/objects/1b/7eca10a02e4d01c80d40571ae1799d76451591": "23dcb8f180bcffd1c0fdb6a63549047a",
".git/objects/1e/cf78562eb48363403b29e904c3f3bfc0ae4b04": "7f55f767614514e5b99ff2739d64eb34",
".git/objects/1e/d292e1ef4ba4baa884ba1a0a74ad7968ced30e": "9a31b39843f69d0138acb32092ff972b",
".git/objects/1f/d77540f535a4d57a62de30c0e904d5217758ee": "4e902d782a0ef35353dd442076a68d66",
".git/objects/20/65de12e6c61be01dcf717302e02268f2a07506": "8feeea82b4f5fd09ccd810237789d9c2",
".git/objects/21/e6a5a9ca5306f3edb9948e27eb37bcf6db1a01": "2d8764819e5f14ad18a670ace177511d",
".git/objects/25/e69a10f97c704b169b133efffaebf9a74793bc": "eaf8ad6d4c79c895ca4716358c31fc74",
".git/objects/2d/0b6ad989c85fe8c4b7f195df05fe5fc97d51a5": "a96395c50bdac5e17d75e761601353ba",
".git/objects/2d/315d2318cdbb9b5f64ee0d77d38627f68ae85a": "d3e07dcdd6e27511c0fb7019495c5961",
".git/objects/31/a39fe70e5bbef548de4587419d932d7672988f": "8e464e10bb26d92e0cbee1cf0ef709e0",
".git/objects/33/e6bbcf273993ac69db8b819b2b614887a90593": "e95593db02c6f68f7c8878f3d5e0962e",
".git/objects/39/c1858815967ab5aabcc2081fd8727c7410911b": "740e7a8b05ed0da0c4403cef797fc757",
".git/objects/39/eee21e1e05b9eaadfd6030dff1c194dc00cfa3": "7d651ad11712e1e56e83613ae0da3764",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/40/2922b392f60a727b0a49db4c741c2eb1c4a6e3": "4bf089cb967c0ef491a16341b79b5c1d",
".git/objects/40/79bdbe8639ae9d043024fff9b13ee892962dcc": "5658b012d0c0cbba40006aa193368f8d",
".git/objects/46/6d7f346e0887b578440d8b74a9ad62e7be79bb": "a6ecfc1f1871d050d7e862491e729347",
".git/objects/4c/df94caf5aec3d1ce961476f98c37671f20a3bd": "87a4a282ab87585b4ff9252a24304dd8",
".git/objects/4e/8882521e9c8b10573d5dc034231333521c47dd": "5948afdb94f79884a564ec739af312fa",
".git/objects/4f/eb545df189e25c587039c1ad1713e5c7a614e6": "075ed7ee524948bd42e10cd642e432bc",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/65/d4d08c0100bd28ac65ed707910fbd254261c8e": "c68e9652f93ef19bd661f27c0ee71d73",
".git/objects/66/66afaec3e24a71304725dbf0b0b4ee1cd03166": "0032d553455b8eddd9827cc57bd57355",
".git/objects/66/cb0b738428d66bef5283d5d734b1df03c862e9": "6b19cdcedde1d768835396c58b41b248",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/ff6e326a7ca822abc18c5cd88230cbf60370ee": "37f62b35b745d6e1fc58ae4cda0f1c36",
".git/objects/6b/87744bb4b2592f638b26f30065570e3a25a524": "628f6b322d3f3a6588bc54ff644fdc8c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/71/43eff531d6bf758a369da2d4d332c4de168b5d": "047bd946cbbcd26fe7c296c22280f028",
".git/objects/72/15a6dfb9bcf61c4d463a39a984c339f7491df6": "790e366f6a6d6c3f39ba65c4215489d7",
".git/objects/74/530711daa9659d2e930e31cfe000bafb486b5f": "2909909616f06e6a7bbdd6574233b0aa",
".git/objects/78/97ec0d9473550613d84ed9a0be5fc44a56fbed": "4dcb71784495157eb52f7b6b162f949d",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7d/fbfc2e4ae188f3f0b0a3be476797f0a09516e0": "b788c1ea1e53e93ce44bffc42a779bc9",
".git/objects/7e/f65a872c69159161ca82be43189fc735de1ab9": "244538121f77317ac4b0539bfe53d0b8",
".git/objects/82/94131eb9b0523283df5162cb6e4c725d3ba5f8": "77a2797f4faebf17a9bc289fad614d22",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/6f82f872e19d08543575a77681cb12023e7eea": "aec1525cacd7d18df3c6d38f26113f6a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/2a1d7f36632aa84f0841a843af97724f72e71e": "cc8654114414546e812e827899f9c11c",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/90/facdab0e8af6d3aa094c3d1cc37a320938202c": "93f1bac2b7efa03e65a241c59e353f32",
".git/objects/91/ba6e12cb7c0d17ef5531393d68109120cb228a": "2c30ad3633d41ab33289c151e633f37c",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/ab1fae70725fef2c8979644a123f789c3f591a": "bd8547bb23cfd24e4d86419cbbf149ae",
".git/objects/95/22ec07f9eea935cf892809c2bfc35e4020f9fa": "3b7596b16ba061bdc93059781d33a945",
".git/objects/96/b5ae13084b2ca344aae7771eaf4a240e208125": "513e17fccc0861bdd0021c5ef0482547",
".git/objects/98/2620401b87e2ab64fa1d60206ac770c4455d0d": "f19485676d2fb16535f1a9b58d642587",
".git/objects/9a/b5a7b745586e0da832eca312b6099999ee09ba": "c312d69cc7b543439b2f0cb81f229d98",
".git/objects/9c/68dafe24c1c418c7ffd508f7ea3a74439bb9fa": "66acff625e46914c3037a89f6b98d19a",
".git/objects/9e/d32463df52c1f21e02c8b56bfbba713b266a61": "8ff251e11099188c4f34b2ef4ed601c3",
".git/objects/9f/8ab8d8f14f47c7e6a85e9aef2b619a41bf3075": "6efe45617277c223be5655f67d2171b8",
".git/objects/a1/f9fbd1d8082af15dd18e4bfbd0960ca4821c61": "5a5d2500895e32e8566a05c950f9e9c2",
".git/objects/a4/474faa4cac117bedc114c1e38d87768f25193c": "112287f6e2aae20d4018aea7ede57d54",
".git/objects/a6/cf208c67d389c0e987249dd863f52ac1c5ce44": "45daaf5491e703c2f76e7adc5e6489e2",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/b041de4eb2ec17419cf24bb4936d811cec1de2": "5f376f73537cebab542f76db199f9c3b",
".git/objects/af/479ba755c88362653e75acfdceec45dd47fb31": "3659ef48d1a9d7c719aee5cf563a002b",
".git/objects/b2/d3c3a3d0f6fdd56342cb39e36c486aab32bd0a": "27a6006c74dc9da90057952b3a943026",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/821559fee656839a614220585b0c7ebe9c8371": "253ac49abfce1fbd5745ea24388ae07f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ba/2ad8a7d679a5924b04b0192ef54caebdf44fdd": "fd48be7f32a3943eae4930156e033c45",
".git/objects/ba/33dc1f8e1850680f232cd853ac15bbc4fd35bc": "59c0e58b15bca459e74e3d4a5caa10f4",
".git/objects/be/987f62648f8506d58d2ee6c185f7244df62df1": "02a86b943486722b0af452d8cb032e0e",
".git/objects/c0/4d042eb46ae56bd6b4c5f495f9ea1dee03d3e3": "79aebea261b19cc6a8e40546527070d6",
".git/objects/c7/4141162baf46210b844cb45cbef8e204dcbffc": "8dd922e0ffb03bd57225b3c20f6cdf7c",
".git/objects/c7/8e4898c957e710b818022e909e5f39e8415861": "aa8aba79c116b1e385e2b93b8bfc02bc",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/549400c7efb7ac8d2ea729fa9ce96855189259": "43e6827fb0acdf220dde6b6e81248a5b",
".git/objects/c9/1ac3d2943b25be49983c22aa1b8b4811ad2534": "f31f038c6d7fcc44d43f830e41ee0c59",
".git/objects/d0/0baa573c264b85a66a1c1a504166ba3a12d34e": "86233d20ca9aa710ae5f50baec8ee58b",
".git/objects/d0/c9085157af922f6fd14ef74400504145111921": "985c828b016fc56f490c8d71c0fe0ba9",
".git/objects/d4/1280120050602eb5e090acd9ae589d91bd459f": "38a84c6cead6079220f25a4c53b960c1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/de6d429067d96861085a7de625b0122f356bdc": "442e7c93349d65695faa69e233f21ca0",
".git/objects/d7/4dfbd7737e5898f17972aee2d7b7e963754355": "c9f99f1e9778fc3d6f48888e56ef8bfc",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/a07cfa5108bc6725fd2fe2974bcf5ab11c9164": "b29ab62d23549703b5deda393e1be56a",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/df/02f6d0c3923798df4cbfe5c81ebb45a545d2c5": "3cc036d83d88ff04e64582e941022886",
".git/objects/df/6be72ce5ea5348ae273942b77800115b7ecdf5": "e9b9b6792f2be91ceb20cb9e7d3e58d1",
".git/objects/e1/d947f4e294db783d5c14c5b10bb10044e7636f": "febc954bfe4d04f8ab94afd11d6065ae",
".git/objects/e2/cd5bf332329fc27a66d9b59d8978d70bc30624": "aa82da85c8f0db679dd342046a8f8c8f",
".git/objects/e3/f8dec130fc49a91d568521bbbfad65bc14ea78": "6b85d5fe7a0d69266a9e46351af47f4b",
".git/objects/e3/fa573c73befa04b38d7b05e91427ec89947606": "cd6ae1ad565911d92659d9c96136b723",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/3d3c89ba8628cc190743d81c9d267d4b32a140": "346d889895d166267e17135499351e15",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/49dea6605b8ab0aa4d13ffc8827d343374f4c9": "1aa3ee9e5cf69c38e64368ac1e971080",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/c01c0a383a63b06d224e349aa13f13d17171b1": "1d26d9c4253b5ce3cbae3d7d4bb2f75d",
".git/objects/fc/5b7b0bf6fe021997b53de406a1e9b13e86cece": "d22fbf3a343d4e26f784d1f9d9e6524a",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/master": "18431e3e8e683dd2444d89b036cfb702",
".git/refs/remotes/origin/master": "18431e3e8e683dd2444d89b036cfb702",
"assets/AssetManifest.bin": "d65353fe3fe35cfac193aa9f1e8dd2f6",
"assets/AssetManifest.bin.json": "570e9ea507f54e3a598d8e309913260e",
"assets/assets/backgrounds/background.jpg": "e9acbd561877ced485e759b5bf4c5a9b",
"assets/assets/fonts/%25E5%2585%25B6%25E4%25BB%2596%25E5%25AD%2597%25E4%25BD%2593/%25E6%25BC%2594%25E7%25A4%25BA%25E4%25BD%259B%25E7%25B3%25BB%25E4%25BD%2593.ttf": "14b2e49201b7f7ec8ea8749605680bee",
"assets/assets/fonts/%25E5%2585%25B6%25E4%25BB%2596%25E5%25AD%2597%25E4%25BD%2593/%25E6%25BC%2594%25E7%25A4%25BA%25E5%25A4%258F%25E8%25A1%258C%25E6%25A5%25B7.ttf": "2268941c82d850b3cbecdb96d8737ad4",
"assets/assets/fonts/%25E5%2585%25B6%25E4%25BB%2596%25E5%25AD%2597%25E4%25BD%2593/%25E6%25BC%2594%25E7%25A4%25BA%25E6%2582%25A0%25E7%2584%25B6%25E5%25B0%258F%25E6%25A5%25B7.ttf": "2f678c30a442bf1f96ac8e3a9a633cfe",
"assets/assets/fonts/%25E5%25BA%259E%25E9%2597%25A8%25E6%25AD%25A3%25E9%2581%2593%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E5%25BA%259E%25E9%2597%25A8%25E6%25AD%25A3%25E9%2581%2593%25E6%25A0%2587%25E9%25A2%2598%25E4%25BD%2593.ttf": "22482026911939769f163a00a35a1073",
"assets/assets/fonts/%25E5%25BA%259E%25E9%2597%25A8%25E6%25AD%25A3%25E9%2581%2593%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E5%25BA%259E%25E9%2597%25A8%25E6%25AD%25A3%25E9%2581%2593%25E7%25B2%2597%25E4%25B9%25A6%25E4%25BD%2593.ttf": "e453aa97485eee98587dd74d5cf11dbc",
"assets/assets/fonts/%25E6%2580%259D%25E6%25BA%2590%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E6%2580%259D%25E6%25BA%2590%25E5%25AE%258B%25E4%25BD%2593/SourceHanSerifCN-Regular.ttf": "c2fd3d73b0092680907f11ac6415347c",
"assets/assets/fonts/%25E6%2580%259D%25E6%25BA%2590%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E6%2580%259D%25E6%25BA%2590%25E6%259F%2594%25E9%25BB%2591/GenJyuuGothicL-Regular.ttf": "6bbb4fcb0eb0307b22cfca2d9d77f20a",
"assets/assets/fonts/%25E6%2580%259D%25E6%25BA%2590%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E6%2580%259D%25E6%25BA%2590%25E7%259C%259F%25E9%25BB%2591/GenShinGothic-Regular.ttf": "da0c7b8fe9af45e70b0f53668e7d760a",
"assets/assets/fonts/%25E6%2580%259D%25E6%25BA%2590%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E6%2580%259D%25E6%25BA%2590%25E9%25BB%2591%25E4%25BD%2593/SourceHanSansCN-Regular.otf": "11c302dd8c50619e4131da5d645fb422",
"assets/assets/fonts/%25E6%2596%25B9%25E6%25AD%25A3%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E6%2596%25B9%25E6%25AD%25A3%25E4%25B9%25A6%25E5%25AE%258B%25E7%25AE%2580%25E4%25BD%2593.ttf": "eb05abbf3ebe0be545cf022feda1778b",
"assets/assets/fonts/%25E6%2596%25B9%25E6%25AD%25A3%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E6%2596%25B9%25E6%25AD%25A3%25E4%25BB%25BF%25E5%25AE%258B%25E7%25AE%2580%25E4%25BD%2593.ttf": "3f9acae77d19596e962b856be1b85173",
"assets/assets/fonts/%25E6%2596%25B9%25E6%25AD%25A3%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E6%2596%25B9%25E6%25AD%25A3%25E6%25A5%25B7%25E4%25BD%2593%25E7%25AE%2580%25E4%25BD%2593.ttf": "439f3503db71d84f6ed37645cca025da",
"assets/assets/fonts/%25E6%2596%25B9%25E6%25AD%25A3%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E6%2596%25B9%25E6%25AD%25A3%25E9%25BB%2591%25E4%25BD%2593%25E7%25AE%2580%25E4%25BD%2593.ttf": "b6eaac673e04d1ec0a0c1bb93e516945",
"assets/assets/fonts/%25E6%25B2%2590%25E7%2591%25B6%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E6%25B2%2590%25E7%2591%25B6%25E8%25BD%25AF%25E7%25AC%2594%25E6%2589%258B%25E5%2586%2599%25E4%25BD%2593.ttf": "009ea542d4b984201b30a6cf2db555f8",
"assets/assets/fonts/%25E6%25B2%2590%25E7%2591%25B6%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E6%25B2%2590%25E7%2591%25B6%25E9%259A%258F%25E5%25BF%2583%25E6%2589%258B%25E5%2586%2599%25E4%25BD%2593.ttf": "7a2c44375518c09575e106717ad1e5e9",
"assets/assets/fonts/%25E7%258E%258B%25E6%25B1%2589%25E5%25AE%2597%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E7%258E%258B%25E6%25BC%25A2%25E5%25AE%2597%25E4%25B8%25AD%25E6%25A5%25B7%25E9%25AB%2594%25E6%25B3%25A8%25E9%259F%25B3.ttf": "205de7e2d986e4d6b2d2a09dd6acfda1",
"assets/assets/fonts/%25E7%258E%258B%25E6%25B1%2589%25E5%25AE%2597%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E7%258E%258B%25E6%25BC%25A2%25E5%25AE%2597%25E4%25B8%25AD%25E8%25A1%258C%25E6%259B%25B8%25E7%25B9%2581.ttf": "16372c5c0f213b616a38c29440a55392",
"assets/assets/fonts/%25E7%258E%258B%25E6%25B1%2589%25E5%25AE%2597%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E7%258E%258B%25E6%25BC%25A2%25E5%25AE%2597%25E4%25B8%25AD%25E9%259A%25B8%25E6%259B%25B8%25E7%25B9%2581.ttf": "9be6d68c52e4f5b2c4a71d17858d690c",
"assets/assets/fonts/%25E7%25AB%2599%25E9%2585%25B7%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%2520%25E7%25AB%2599%25E9%2585%25B7%25E9%25AB%2598%25E7%25AB%25AF%25E9%25BB%2591.ttf": "b201c25ecfc5ee6f159223ef2746f78d",
"assets/assets/fonts/%25E7%25AB%2599%25E9%2585%25B7%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E7%25AB%2599%25E9%2585%25B7%25E5%25BF%25AB%25E4%25B9%2590%25E4%25BD%2593.ttf": "0aceab97af2cd21dc57f76aceb1b1722",
"assets/assets/fonts/%25E7%25AB%2599%25E9%2585%25B7%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E7%25AB%2599%25E9%2585%25B7%25E6%2596%2587%25E8%2589%25BA%25E4%25BD%2593.ttf": "e7cbdb104483959fceaa167cfa9cb77e",
"assets/assets/fonts/%25E7%25AB%2599%25E9%2585%25B7%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E7%25AB%2599%25E9%2585%25B7%25E9%2585%25B7%25E9%25BB%2591%25E4%25BD%2593.ttf": "6b4f114c44c815accc37538e06e79d6b",
"assets/assets/fonts/%25E8%2583%25A1%25E6%2599%2593%25E6%25B3%25A2%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E8%2583%25A1%25E6%2599%2593%25E6%25B3%25A2%25E7%2594%25B7%25E7%25A5%259E%25E4%25BD%2593.otf": "1c6242d64be9081376927a789bd7f0c2",
"assets/assets/fonts/%25E8%2583%25A1%25E6%2599%2593%25E6%25B3%25A2%25E5%25AD%2597%25E4%25BD%2593%25E7%25B3%25BB%25E5%2588%2597/%25E8%2583%25A1%25E6%2599%2593%25E6%25B3%25A2%25E7%259C%259F%25E5%25B8%2585%25E4%25BD%2593.otf": "d79fb4684bc970942d727d863223fdb0",
"assets/assets/fonts/%25E9%2598%25BF%25E9%2587%258C%25E5%25B7%25B4%25E5%25B7%25B4%25E6%2599%25AE%25E6%2583%25A0%25E4%25BD%2593/Alibaba-PuHuiTi-Regular.ttf": "8d591595ec48e06178ace5eddfcee21c",
"assets/assets/templates/1.jpg": "dc6e05db04983e14452aee545cc49094",
"assets/assets/templates/pexels-1108936515-20895480.jpg": "b678d207dc874bf8a341eac5aa796178",
"assets/assets/templates/pexels-bertellifotografia-573299.jpg": "f55fa8c5f85acbba78795466ed4b02d5",
"assets/assets/templates/pexels-carocastilla-1716861.jpg": "19aaa523ed18a089fb9d01fb888d67ad",
"assets/assets/templates/pexels-cheng-shi-song-427082720-34903203.jpg": "22f2dcadfa7de7d3cce0ca5404594198",
"assets/assets/templates/pexels-dmitri-sotnikov-2712820-32219500.jpg": "cbea92063fc4a3b68bfce516bb7a3a9e",
"assets/assets/templates/pexels-elizabeth-ferreira-1040803688-29649276.jpg": "7d515d908e9a38b18be5f5396060a1ed",
"assets/assets/templates/pexels-h-i-nguy-n-1627264-3616937.jpg": "24922d887d75857d0d96388fc31fad08",
"assets/assets/templates/pexels-jess-vide-4321835.jpg": "aa894c00ba1836627f6af526dbbf3789",
"assets/assets/templates/pexels-lis-k-1975161963-30884074.jpg": "f3e1df18ef4c6cbe94a3340d5e1179cc",
"assets/assets/templates/pexels-ozge-taskiran-85164141-12596936.jpg": "870e21bded6af606c01b2586fcebd2eb",
"assets/assets/templates/pexels-paul-robinson-1446229-2796781.jpg": "f266a5bb555f0ce5e7632f1cd4687689",
"assets/assets/templates/pexels-sam-lim-655865-1586206.jpg": "88bcd706167ca87779ef385b16301ef8",
"assets/assets/templates/pexels-soldiervip-1382730.jpg": "db6d98b8f2990390bb7b01acd77aa56e",
"assets/assets/templates/pexels-thai-hu-nh-2335830-3998365.jpg": "a52b03767575ad3ca58767f77cd15358",
"assets/assets/templates/pexels-the-traveling-photo-experiment-41034029-8399147.jpg": "b25e50dc152f464b9a44850f63e0a8a9",
"assets/assets/templates/pexels-thek1d-773594.jpg": "823e1aa15994f520eb3d797ab27c819c",
"assets/assets/templates/pexels-tomer-dahari-571687-1331386.jpg": "d03b014a4c72e7260757c0e9e8a7e7d9",
"assets/assets/templates/pexels-valeriya-19287463.jpg": "5c9274d1d104f8158c1e9f3d11a5abb7",
"assets/assets/templates/pexels-zhangkaiyv-16144420.jpg": "e9acbd561877ced485e759b5bf4c5a9b",
"assets/assets/templates/pexels-zhangkaiyv-3210189.jpg": "d4538c15465e7c4c460b16d698d2d2a2",
"assets/FontManifest.json": "7ee5c8a48f0a84e7fabeadbfeddbb47b",
"assets/fonts/MaterialIcons-Regular.otf": "b74d103b8de6e9c770d30fb291f233df",
"assets/NOTICES": "010b5b69d564e0c094a4ef1db2f494ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "0ab764e131a89e3a8746c05c5e194868",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "63756ed598081915247eaf938e3b7cc1",
"/": "63756ed598081915247eaf938e3b7cc1",
"main.dart.js": "3c8e3f15976891bac53dd4be92d67f93",
"manifest.json": "7428f3e970bc27ce92c68a33b5aaa27c",
"version.json": "9866adfa6e7bd32fd681b6c1dc17e897"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
