const menuData = {
      
    "sicak_icecek": [
        {
            "isim": "Çay",
            "fiyat": 15,
            "resim": "upload/urun/sicak_icecek/cay.jpg"
        },
        {
            "isim": "Kahve",
            "fiyat": 25,
            "resim": "upload/urun/sicak_icecek/kahve.jpg"
        },
        {
            "isim": "Sıcak Çikolata",
            "fiyat": 30,
            "resim": "upload/urun/sicak_icecek/sicakcikolata.jpg"
        },
        {
            "isim": "Latte",
            "fiyat": 35,
            "resim": "upload/urun/sicak_icecek/latte.jpg"
        },
        {
            "isim": "Espresso",
            "fiyat": 20,
            "resim": "upload/urun/sicak_icecek/espresso.jpg"
        }
    ],
    "ana_yemek": [
        {
            "isim": "Izgara Tavuk",
            "fiyat": 80,
            "resim": "upload/urun/ana_yemek/izgara_tavuk.jpg"
        },
        {
            "isim": "Köfte",
            "fiyat": 90,
            "resim": "upload/urun/ana_yemek/kofte.jpg"
        },
        {
            "isim": "Mantı",
            "fiyat": 70,
            "resim": "upload/urun/ana_yemek/manti.jpg"
        },
        {
            "isim": "Lahmacun",
            "fiyat": 50,
            "resim": "upload/urun/ana_yemek/lahmacun.jpg"
        },
        {
            "isim": "Karnıyarık",
            "fiyat": 85,
            "resim": "upload/urun/ana_yemek/karniyarik.jpg"
        }
    ],
    "tatli": [
        {
            "isim": "Baklava",
            "fiyat": 60,
            "resim": "upload/urun/tatli/baklava.jpg"
        },
        {
            "isim": "Kazandibi",
            "fiyat": 40,
            "resim": "upload/urun/tatli/kazandibi.jpg"
        },
        {
            "isim": "Sütlaç",
            "fiyat": 35,
            "resim": "upload/urun/tatli/sutlac.jpg"
        },
        {
            "isim": "Tiramisu",
            "fiyat": 50,
            "resim": "upload/urun/tatli/tiramisu.jpg"
        },
        {
            "isim": "Profiterol",
            "fiyat": 45,
            "resim": "upload/urun/tatli/profiterol.jpg"
        }
    ],
    "atistirmalik": [
        {
            "isim": "Patates Kızartması",
            "fiyat": 30,
            "resim": "upload/urun/atistirmalik/patates_kizartmasi.jpg"
        },
        {
            "isim": "Soğan Halkası",
            "fiyat": 25,
            "resim": "upload/urun/atistirmalik/sogan_halkasi.jpg"
        },
        {
            "isim": "Sigara Böreği",
            "fiyat": 35,
            "resim": "upload/urun/atistirmalik/sigara_boregi.jpg"
        },
        {
            "isim": "Cips",
            "fiyat": 20,
            "resim": "upload/urun/atistirmalik/cips.jpg"
        },
        {
            "isim": "Mozzarella Stick",
            "fiyat": 40,
            "resim": "upload/urun/atistirmalik/mozzarella_stick.jpg"
        }
    ]
}


function addMenuItems(category, containerId) {
    const container = document.getElementById(containerId);
    category.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
      menuItem.innerHTML = `
        <img src="${item.resim}" alt="${item.isim}">
        <h3>${item.isim}</h3>
        <p class="price">${item.fiyat} TL</p>
      `;
      container.appendChild(menuItem);
    });
  } 

  window.onload = function() {
    addMenuItems(menuData.sicak_icecek, 'sicak-icecek-items'); 
    addMenuItems(menuData.ana_yemek, 'ana-yemek-items');
    addMenuItems(menuData.tatli, 'tatli-items');
    addMenuItems(menuData.atistirmalik, 'atistirmalik-items');
  };