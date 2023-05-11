// 导入uuid(生成唯一id模块)
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const readdir = require('../utils/readdir');
const traverseFolder = require('../utils/traverseFolder');
//文件路径
const visit = require('../file_address/index');



function bannerUrl(id) {
    console.log(readdir(`/public/shopList/merchant${id}/banner/`, 'png'));
    return visit.ptable + `merchant${id}/banner/` + readdir(`/public/shopList/merchant${id}/banner/`, 'png')[0]
}

function shopBannerUrl(id, path) {
    let a = traverseFolder(`/public/shopList/merchant${id}/${path}/`)
    for (let index = 0; index < a.length; index++) {
        a[index] = visit.ptable + `merchant${id}/${path}/` + a[index]
    }
    return a
}




function data(id) {
    let url = path.join(__dirname, `../public/shopList/merchant${id}/index.json`)
    let can = JSON.parse(fs.readFileSync(url, 'utf-8'))
    can.id = uuidv4()
    can.imgUrl = {
        banner: bannerUrl(id),
        shopBanner: shopBannerUrl(id, 'banner'),
        traverseFolder: shopBannerUrl(id, 'xiangq')
    }
    return can
}






//导出首页的icon列表List
exports.staticList = (req, res) => {
    res.send([{
        id: uuidv4(),
        title: '美食',
        iconUrl: visit.container + 'a867c870b22bc74c87c348b75528d.jpg'
    }, {
        id: uuidv4(),
        title: '商超便利',
        iconUrl: visit.container + '76a23eb90dada42528bc41499d6f8.jpg'
    }, {
        id: uuidv4(),
        title: '水果',
        iconUrl: visit.container + 'dd7c960f08cdc756b1d3ad54978fd.jpg'
    }, {
        id: uuidv4(),
        title: '送药上门',
        iconUrl: visit.container + 'af108e256ebc9f02db599592ae655.jpg'
    }, {
        id: uuidv4(),
        title: '买菜',
        iconUrl: visit.container + 'e42997b86b232161a5a16ab813ae8.jpg'
    }, {
        id: uuidv4(),
        title: '汉堡披萨',
        iconUrl: visit.container + '432619fb21a40b05cd25d11eca02d.jpg'
    }, {
        id: uuidv4(),
        title: '麻辣烫',
        iconUrl: visit.container + 'b7ba9547aa700bd20d0420e1794a8.jpg'
    }, {
        id: uuidv4(),
        title: '地方小吃',
        iconUrl: visit.container + '6f2631288a44ec177204e05cbcb93.jpg'
    }, {
        id: uuidv4(),
        title: '鲜花绿植',
        iconUrl: visit.container + 'c888acb2c8ba9e0c813f36ec9e90a.jpg'
    }, {
        id: uuidv4(),
        title: '地方美食',
        iconUrl: visit.container + 'ec21096d528b7cfd23cdd894f01c6.jpg'
    }])
}
//导出附近商家列表
exports.recommond = (req, res) => {
    res.send([{
        id: uuidv4(),
        name: '蜜雪冰城',
        text: '[多城市]冰鲜柠檬水',
        imgUrl: visit.recom + '9543e34f59c343282a8f83926f72f585173498.jpg',
        score: 5.0,
        price: 20,
        distance: 1.3
    }, {
        id: uuidv4(),
        name: '华莱士',
        text: '[多城市]双堡炸鸡桶',
        imgUrl: visit.recom + '1ef13b6262c3eaf3c42127ed7fc61a01130193.jpg',
        score: 4.9,
        price: 65,
        distance: 1.4
    }, {
        id: uuidv4(),
        name: '茶百道',
        text: '[多城市]爆品冷萃茶2选1',
        imgUrl: visit.recom + '8d5f77d0b08b88ddfc7f31434e0b9c0c173511.jpg',
        score: 4.8,
        price: 20,
        distance: 1.4
    }, {
        id: uuidv4(),
        name: '豪客来牛排',
        text: '[多城市]酸奶油香葱薯条或黄金脆薯',
        imgUrl: visit.recom + '79a87b6cf2c48602bc621a3a75d1c0f0320205.jpg',
        score: 4.8,
        price: 40,
        distance: 1.6
    }, {
        id: uuidv4(),
        name: '日之屋炭火烧肉',
        text: '[鹏瑞利青羊广场]精品 2-3 人餐',
        imgUrl: visit.recom + 'e7b160dd6a6dcddb602503972fc64c9849975.jpg',
        score: 4.6,
        price: 64,
        distance: 1.8
    }, {
        id: uuidv4(),
        name: '贰幺幺烤肉',
        text: '[光华村]欢聚四人餐',
        imgUrl: visit.recom + 'f4b280b32774e9bfdd3142393546968b261890.jpg',
        score: 4.5,
        price: 89,
        distance: 1.9
    }, {
        id: uuidv4(),
        name: 'BURANO布拉诺',
        text: '[多城市]哈根达斯冰淇淋（单球）',
        imgUrl: visit.recom + 'a70ba6f9fbd344cd423fc6efd7e8e7551402183.jpg',
        score: 4.8,
        price: 40,
        distance: 2
    }, {
        id: uuidv4(),
        name: '糕小爱·动物奶油生日蛋糕定制',
        text: '[多城市]需提前预约-4英寸(网红爆款)流心小甜品蛋糕4选1 4 选 1',
        imgUrl: visit.recom + '50acbf4b66cec781c8b6f3bf9a2bd89c615577.jpg',
        score: 4.5,
        price: 50,
        distance: 2.6
    }, {
        id: uuidv4(),
        name: '烤肉拌饭•脆皮鸡饭',
        text: '[双桥子/水碾河]【双拼】烤肉拌饭脆皮鸡饭+赠饮',
        imgUrl: visit.recom + '64e68badbe78a00c292f9f470d6aaf9161137.jpg',
        score: 4.6,
        price: 15,
        distance: 2.7
    }, {
        id: uuidv4(),
        name: '石棉烤肉',
        text: '[5店通用]石棉烤肉双人餐',
        imgUrl: visit.recom + '173bb851ef0e894227dcb6ecd6453734166624.jpg',
        score: 4.9,
        price: 22,
        distance: 2.9
    }, {
        id: uuidv4(),
        name: '谭鸭血老火锅',
        text: '[中坝/青羊万达]鸿运6人餐',
        imgUrl: visit.recom + '9543e34f59c343282a8f83926f72f585173498.jpg',
        score: 4.0,
        price: 30,
        distance: 3
    },])
}
//导出banner图
exports.slide = (req, res) => {
    res.send([{
        id: uuidv4(),
        imgUrl: visit.slide + '/8f9296dda488a179.jpg!cr_1053x420_4_0!q70.jpg',

    }, {
        id: uuidv4(),
        imgUrl: visit.slide + '/q70 (1).jpg',

    }, {
        id: uuidv4(),
        imgUrl: visit.slide + '/q70.jpg',

    },])
}
//导出商品详情
exports.tabTile = (req, res) => {
    let aside = [];
    for (let index = 0; index < 4; index++) {
        aside.push(data(index + 1))
    }
    res.send(aside)
}
// 导出订单详情
exports.order = (req, res) => {
    let data = [{
        id: uuidv4(),
        title: '舌尖上的中国',
        name: '',
        bannerUrl: 'O1CN018s3S9U1uS54nlSdlq_!!2215475886035-2-koubei.png_100x100.png',
        imgUrl: ['/shop1/Snipaste_2023-04-27_16-14-15.jpg', '/shop1/Snipaste_2023-04-27_16-14-48.jpg', '/shop1/Snipaste_2023-04-27_16-14-56.jpg'],
        price: 8.7,
        num: 3
    }, {
        id: uuidv4(),
        title: "蜜雪冰城(中坝)",
        name: '',
        bannerUrl: 'O1CN01RYQNPz1SZaKgHmuOA_!!2208374492261-0-koubei.jpg_100x100.jpg',
        imgUrl: ['/shop2/Snipaste_2023-04-27_16-17-28.jpg', '/shop2/Snipaste_2023-04-27_16-17-49.jpg', '/shop2/Snipaste_2023-04-27_16-17-56.jpg'],
        price: 16.9,
        num: 3
    }, {
        id: uuidv4(),
        title: "理柏颜营养健康旗舰店(长春店)",
        name: "褪黑素",
        bannerUrl: 'O1CN01xp2QGT1a355PE94XN_!!2214259033273-0-koubei.jpg_100x100.jpg',
        imgUrl: ['/shop3/Snipaste_2023-04-27_16-19-11.jpg'],
        price: 9.9,
        num: 1
    }, {
        id: uuidv4(),
        title: "一点点(石人南路店)",
        name: '',
        bannerUrl: 'O1CN01JYWzfq2GiUoyTXkDZ_!!2206679119049-0-koubei.jpg_100x100.jpg',
        imgUrl: ['/shop4/Snipaste_2023-04-27_16-22-03.jpg', '/shop4/Snipaste_2023-04-27_16-22-14.jpg'],
        price: 24.9,
        num: 3
    }, {
        id: uuidv4(),
        title: "叫了只炸鸡(中坝)",
        name: "第二份半价脆鸡骨套餐",
        bannerUrl: 'O1CN0107bS0Z1CqxIjrR01C_!!2208334220133-0-koubei.jpg_100x100.jpg',
        imgUrl: ['/shop5/Snipaste_2023-04-27_16-23-28.jpg'],
        price: 28,
        num: 1
    }]
    // 为所有图片添加地址前缀
    for (let index = 0; index < data.length; index++) {
        data[index].bannerUrl = visit.order + `/shop${index + 1}/banner/${data[index].bannerUrl}`
        for (let key = 0; key < data[index].imgUrl.length; key++) {
            data[index].imgUrl[key] = visit.order + data[index].imgUrl[key]
        }
    }
    res.send(data)
}
exports.goods = (req, res) => {
    let aside = [];
    for (let index = 0; index < 4; index++) {
        aside.push(data(index + 1))
    }
    // console.log(aside);
    res.send(aside)
}