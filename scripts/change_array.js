export function getChangedArray(array){
    let result = [];
    for (const arrays of array) {
        let buf = {group : []}
        for (const obj of arrays.group) {
            let price = getProductPrice(obj);
            let url = getProductUrl(obj);
            let id = getProductId(obj);
            let rank = getProductRank(obj);
            buf.group.push({price,productUrl : url,id,rank});
        }
        result.push(buf);
    }
    return result;
}

function getProductPrice(obj){
    let Product = {};
    Product.price = [];
    if(obj.price){
        for (const iterator of obj.price) {
            if(iterator.text) {
                let buf = iterator.text.split(' ');
                if(buf.length > 1){
                    Product.price.push({text : parseFloat(buf[2].replace(',','.'))});
                } else if(buf.length == 1){
                    Product.price.push({text : parseFloat(buf[0])});
                }
            }
        }
    }
    return Product.price;
}

function getProductUrl(obj){
    let productUrl = {};
    let url = 'https://www.metro.ca' + obj.productUrl[0].text;
    productUrl.text = url
    return productUrl;
}

function getProductId(obj){
    let id = []
    let buf = obj.productUrl[0].text.split('/');
    id.push({text : buf[buf.length - 1]});
    return id;
}

function getProductRank(obj){
    return obj.rank;
}
