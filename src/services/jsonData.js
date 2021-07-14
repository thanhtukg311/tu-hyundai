const products = [
    {
        'slug' : 'i10-2020',
        'code' : 'i10 2020',
        'name' : 'i10 Sedan',
        'description' : 'All New Grand',
        'img_url' : '/product/i10-ac3-highlights-kv-pc.jpg',
        'utilities': {
            'title': 'Công nghệ đỉnh cao tích hợp trong một chiếc xe nhỏ gọn',
            'desc': 'Những chuyến hành trình của bạn sẽ trở nên thú vị với những công nghệ tiện ích được trang bị bên trong Grand i10',
            'main_img': '/product/67dbb3a5a1a5719bf5ce31ff653a759e.jpg',
            'main_title': 'Màn hình tầm trung cảm ứng 8inch',
            'main_desc': 'Màn hình cảm ứng trung tâm kích cỡ 8inch đa chức năng, hỗ trợ giải trí với các kết nối các chức năng Bluetooth/MP3/Radio, hỗ trợ kết nối Apple Carplay và Android Auto, cùng với bản đồ tích hợp',
            'list_desc' : [
                {
                    'img': '/product/d438e7e80d59937ab56ba8f62a028d6c.png',
                    'title': 'Camera lùi',
                    'desc': 'Việc di chuyển lùi cũng như đỗ xe trở nên dễ dàng hơn với hình ảnh sắc nét từ camera lùi',
                },
                {
                    'img': '/product/3e67a52f6b99a0c8812f5e2d41e594db.jpg',
                    'title': 'Cảm biến áp suất lốp',
                    'desc': 'Loại bỏ nỗi lo về các vấn đề về lốp xe, an tâm tận hưởng các chuyến đi',
                },
                {
                    'img': '/product/222fa5d5842eaf83be4a4668cbff4c44.jpg',
                    'title': 'Cửa gió điều hòa và cổng sạc USB hàng ghế 2',
                    'desc': 'Tận hưởng hàng ghế thứ 2 với cửa gió điều hòa và cổng sạc USB',
                },
            ]
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