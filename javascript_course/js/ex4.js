var shipments =
    {
        'standard': {
            'leadTime': 7,
            'fee': 2
        },
        'express': {
            'leadTime': 3,
            'fee': 4.5
        }
    };

 document.getElementById("shipments").onchange = function (){
     let selectedOption = document.getElementById("shipments").value;

     let leadTime = shipments[selectedOption].leadTime;
     let fee = shipments[selectedOption].fee;


     let orderDate = new Date();//when no arguments are passed current date is taken as default;
     let deliveryDate = new Date(orderDate + (86400000 * leadTime));

     console.log(orderDate.toISOString().slice(0,10));
     console.log(deliveryDate.toISOString().slice(0,10));

     document.getElementById("order_date").innerHTML = orderDate.toISOString().slice(0,10); //slicing is to cut the end part of time zone
     document.getElementById("delivery_date").innerHTML = deliveryDate.toISOString().slice(0,10);
     document.getElementById("delivery_fee").innerHTML = fee + "₹";


     //**********************************************************************
     //**********************QUESTION NO. 2***************************
     //**********************************************************************

     var phones =
         {
             'iphone_se_red': {
                 'name': 'iPhone SE 64GB Red',
                 'price': '450',
                 'currency': 'US$',
                 'imageUrl': "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-red-select-2019_GEO_EMEA?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1567021767076"
             },//
             'iphone_11_black': {
                 'name': 'iPhone 11 128GB Black',
                 'price': '869',
                 'currency': 'EUR',
                 'imageUrl': "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-black-select-2019_GEO_EMEA?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1567021766023"
             },
             'iphone_8_plus_silver': {
                 'name': 'iPhone 8 Plus 64GB Silver',
                 'price': '519',
                 'currency': 'US$',
                 'imageUrl': "https://www.stockmia.com/products/view/57"
             }
         };

     let radioItems = document.getElementsByName("product");

     for(var a = 0; a< radioItems.length ; a++) {

         for(var b = 0 ; b <radioItems.length ;b++){



         }
     }

 }