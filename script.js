const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

var jsonData = {
    "cloths": [
        {
            "sys": { "id": "1" },
            "fields": {
                "name": "Cartoon Astronaut T-shirts",
                "image": "img/products/f1.jpg",
                "cost": "$139",
                "details": "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfortwith each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package."
            }
        },
        {
            "sys": { "id": "2" },
            "fields": {
                "name": "Cartoon Astronaut T-shirts",
                "image": "img/products/f2.jpg",
                "cost": "$139",
                "details": "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfortwith each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package."
            }
        },
        {
            "sys": { "id": "3" },
            "fields": {
                "name": "Cartoon Astronaut T-shirts",
                "image": "img/products/f3.jpg",
                "cost": "$139",
                "details": "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfortwith each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package."

            }
        },
        {
            "sys": { "id": "4" },
            "fields": {
                "name": "Cartoon Astronaut T-shirts",
                "image": "img/products/f4.jpg",
                "cost": "$139",
                "details": "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfortwith each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package."
            }
        },
        {
            "sys": { "id": "5" },
            "fields": {
                "name": "Cartoon Astronaut T-shirts",
                "image": "img/products/f5.jpg",
                "cost": "$139",
                "details": "The velvet shirt, with its special design and superior quality, is sure to leave a lasting impression. Crafted from a robust 6.0 oz. fabric made entirely of cotton, this classic fit shirt ensures unparalleled comfort with every wear. It features a taped neck and shoulder, along with a seamless double-needle collar. Available in a variety of colors, it effortlessly combines style and comfort, making it a head-turning choice for any occasion."
            }
        },
        {
            "sys": { "id": "6" },
            "fields": {
                "name": "Men's Velvet Tshirts",
                "image": "img/products/f6.jpg",
                "cost": "$90",
                "details": "The velvet shirt, with its special design and superior quality, is sure to leave a lasting impression. Crafted from a robust 6.0 oz. fabric made entirely of cotton, this classic fit shirt ensures unparalleled comfort with every wear. It features a taped neck and shoulder, along with a seamless double-needle collar. Available in a variety of colors, it effortlessly combines style and comfort, making it a head-turning choice for any occasion."
            }
        },
        {
            "sys": { "id": "7" },
            "fields": {
                "name": "Women's Floral Straight Leg Lounge Pants",
                "image": "img/products/f7.jpg",
                "cost": "$70",
                "details": "Discover the perfect harmony of comfort and style with our Women's Floral Straight Leg Lounge Pants. Crafted from a soft, breathable fabric, these pants provide all-day comfort, while their straight leg design offers timeless versatility. The charming floral pattern adds a touch of elegance, making them suitable for both lounging and casual outings. With an elastic waistband for a secure fit and convenient side pockets, these lounge pants are a must-have addition to your wardrobe, elevating your comfort and style effortlessly."
            }
        },
        {
            "sys": { "id": "8" },
            "fields": {
                "name": "Satin Jacket Shirt",
                "image": "img/products/f8.jpg",
                "cost": "$198",
                "details": "Introducing our Satin Jacket Shirt, a fusion of style and versatility that will redefine your wardrobe. Crafted from luxurious satin fabric, this unique piece embodies sophistication and contemporary fashion. Its innovative design blurs the lines between a jacket and a shirt, making it suitable for a variety of occasions, whether you're aiming for a formal look or a chic, casual ensemble. The jacket shirt boasts a flattering fit and comes in an array of colors to cater to your individual style. Whether paired with tailored pants for a refined appearance or combined with jeans for a more relaxed vibe, our Satin Jacket Shirt is the ultimate choice to elevate your fashion game and make a statement wherever you go."
            }
        },
        {
            "sys": { "id": "9" },
            "fields": {
                "name": "Xint Blue Men's Shirt",
                "image": "img/products/n1.jpg",
                "cost": "$300",
                "details": "Celebrate timeless style with the Xint Blue Men's Shirt. Expertly crafted with attention to detail, this shirt is designed to be a versatile staple in your wardrobe. Made from high-quality materials, it offers a comfortable fit and durability that lasts. The classic blue hue adds a touch of sophistication to any outfit, making it suitable for both formal and casual occasions. With its tailored fit and modern design, the Xint Blue Men's Shirt is the perfect choice for the modern man who values both style and comfort. Elevate your look effortlessly with this essential piece."
            }
        },
        {
            "sys": { "id": "10" },
            "fields": {
                "name": "Sile Cloth Linen Blend Checked Shirt",
                "image": "img/products/n2.jpg",
                "cost": "$220",
                "details": "Discover the Sile Cloth Linen Blend Checked Shirt – a stylish and comfortable choice. Made from a lightweight linen blend, it's perfect for warm days. The classic check pattern adds timeless charm, suitable for both special occasions and casual wear. With its tailored fit and attention to detail, this shirt effortlessly combines style and comfort."
            }
        },
        {
            "sys": { "id": "11" },
            "fields": {
                "name": "Textured Collarless Shirt",
                "image": "img/products/n3.jpg",
                "cost": "$45",
                "details": "Upgrade your wardrobe with our Textured Collarless Shirt. Crafted with attention to detail, this shirt offers a unique and sophisticated look. The collarless design adds a modern twist, making it versatile for various occasions. Made from high-quality materials, it ensures both comfort and durability. Elevate your style effortlessly with the Textured Collarless Shirt."
            }
        },
        {
            "sys": { "id": "12" },
            "fields": {
                "name": "1 Pocket Straight Short Sleeve Shirt",
                "image": "img/products/n4.jpg",
                "cost": "$65",
                "details": "Celebrate style and practicality with the Bristum Service 1 Pocket Straight Short Sleeve Shirt. Designed for versatility, this shirt combines a modern aesthetic with functionality. With its straight cut and short sleeves, it's suitable for various occasions. The addition of a convenient pocket enhances its utility. Crafted from high-quality materials, it ensures comfort and durability. Elevate your wardrobe with the Bristum Service 1 Pocket Straight Short Sleeve Shirt."
            }
        },
        {
            "sys": { "id": "13" },
            "fields": {
                "name": "Pure Cotton Regular Fit Denim Shirt",
                "image": "img/products/n5.jpg",
                "cost": "$300",
                "details": "Elevate your casual style with the Pure Cotton Regular Fit Denim Shirt. Crafted from premium cotton, this shirt offers a comfortable and timeless look. Its regular fit ensures versatility, making it suitable for various occasions. The classic denim design adds a touch of rugged charm to your outfit. Upgrade your wardrobe effortlessly with the Pure Cotton Regular Fit Denim Shirt."
            }
        },
        {
            "sys": { "id": "14" },
            "fields": {
                "name": "Light grey striped shorts with belt ",
                "image": "img/products/n6.jpg",
                "cost": "$70",
                "details": "Step into summer with our Light Grey Striped Shorts with Belt. These stylish shorts offer a relaxed yet fashionable look, perfect for warm days. The subtle striped pattern adds a touch of sophistication, and the included belt completes the ensemble. Crafted for both comfort and style, these shorts are a must-have addition to your summer wardrobe."
            }
        },
        {
            "sys": { "id": "15" },
            "fields": {
                "name": "Mink Pocket Detailed Buttoned Fleece Shirt",
                "image": "img/products/n7.jpg",
                "cost": "$55",
                "details": "Elevate your casual look with the Mink Pocket Detailed Buttoned Fleece Shirt. This shirt combines style and comfort effortlessly. The buttoned design and pocket details add a touch of sophistication, while the fleece fabric ensures warmth and coziness. Upgrade your wardrobe with the Mink Pocket Detailed Buttoned Fleece Shirt for a versatile and comfortable addition."
            }
        },
        {
            "sys": { "id": "16" },
            "fields": {
                "name": "Navy Blue Linen Blend Short Sleeve Shirt",
                "image": "img/products/n8.jpg",
                "cost": "$420",
                "details": "Elevate your summer style with our Navy Blue Linen Blend Short Sleeve Shirt. Crafted for comfort and breathability, this shirt is perfect for warm days. The classic navy blue color and linen blend fabric offer a timeless and versatile look. Upgrade your summer wardrobe with this essential short sleeve shirt."
            }
        }
    ]
};

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
  
    // Ürün bilgilerini JSON'dan çekin
    const product = jsonData.cloths.find(item => item.sys.id === id);
  
    if (product) {
      // Ürün bilgilerini sayfada gösterin
      document.getElementById('MainImg').src = product.fields.image;
      document.getElementById('product-name').textContent = product.fields.name;
      document.getElementById('product-price').textContent = product.fields.cost;
      document.getElementById('product-description').textContent = product.fields.details;
    } else {
      // Ürün bulunamazsa bir hata mesajı gösterin veya yönlendirme yapın
      console.error('Ürün bulunamadı');
    }
  });
  
