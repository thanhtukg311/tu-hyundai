const products = [
    {
        'slug' : 'i10-2020',
        'code' : 'i10 2020',
        'name' : 'i10 Sedan',
        'description' : 'All New Grand',
        'img_url' : '/product/i10-ac3-highlights-kv-pc.jpg',
        'utilities': {
            'title_1': 'Công nghệ đỉnh cao tích hợp trong một chiếc xe nhỏ gọn',
            'desc_1': 'Những chuyến hành trình của bạn sẽ trở nên thú vị với những công nghệ tiện ích được trang bị bên trong Grand i10',
            'img_1': '/product/noi-that.jpg'
        }
    },
    {
        'slug' : 'accent-2020',
        'code' : 'Accent 2020',
        'name' : 'Accent 2020',
        'description' : 'All New Grand',
        'img_url' : '/product/i10-ac3-highlights-kv-pc.jpg',
    }
]

export default {
 getProduct (slug, success){
     let prod = {};
     products.forEach(function(e) {
         if(e.slug == slug){
             prod = e;
         }
     });
     return success({data: prod})
 }
}