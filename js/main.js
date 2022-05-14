Vue.createApp({
  data() {
    return {
      navbar: {
        title: "My Portofolio",
        description: "Ini adalah tempat saya untuk berbagi segala pengetahuan yang saya peroleh tentang koding dan teknologi.",
        menu: {
          home: {
            url: "/index.html",
            title: "Home",
          },
          about: {
            url: "/menu/about.html",
            title: "About",
          },
          contact: {
            url: "/menu/contact.html",
            title: "Contact",
          },
          artikel: {
            url: "/menu/artikel.html",
            title: "Article",
          },
        },
      },
      jumbotron: {
        imageProfile: "./bahan/Sywl.png",
        nama: "Syawal Saputra",
        role: "Pemula | Mahasiswa Universitas Ahmad Dahlan",
      },
      about: {
        hero: "./bahan/download.png",
        tentang: "Tentang",
        penulis: "ditulis oleh",
        a: {
          url: "https://www.instagram.com/syawalaja_/?hl=id",
          nama: " Syawal Saputra",
          tgl: ". 07 Desember 2002 .",
        },
        deskripsi:
          "Perkenalkan nama saya Syawal Saputra biasa di panggil syawal. Saya adalah anak pertama dengan kelahiran 2002 di Pangkep, Sulawesi Selatan.",
        deskripsi2:
          "Saya terlahir sebagai keluarga yang sederhana. Dan saya sangat bersyukur bisa mendapat beasiswa kader muhammadiyah sehingga saya diberi kesempatan untuk kuliah di Universitas Ahmad Dahlan Jogjakarta. Dan disini kisah perjalan saya diluar daerah dimulai.",
        deskripsi3:
          "Organisasi didalam lingkup muhammadiyah yang saya ikuti telah merubah diriku. Dimulai dari masalah ibadah, retorika dalam berbicara dan akademik yang tersusun dengan baik sehingga ini yang menjadi salah satu alasan mengapa aku diberi kesempatan kuliah disini.",

        pendidikan: "Pendidikan",
        Sekolah: {
          dasar: "Sekolah Dasar",
          nama0: "SDN 9 Baru-Baru Tanga",
          alamat0: " Bonto Perak, Kec. Pangkajene, Kabupaten Pangkajene Dan Kepulauan, Sulawesi Selatan 90614",
          lihat0: "Lebih banyak...",
          link0: "https://dapo.kemdikbud.go.id/sekolah/AD9B701B7BC22E77E613",
          menengah1: "Sekolah Menengah Pertama",
          nama1: "MTs MUHAMMADIYAH SIBATUA",
          alamat1: "JL. SULTAN HASANUDDIN NO. 68, Bonto Perak, Kec. Pangkajene, Kab. Pangkajene Kepulauan Prov. Sulawesi Selatan",
          lihat1: "Lebih banyak...",
          link1: "https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/474953B0-259F-4F1B-B5AF-70B4CAE5E0A8",
          menengah: "Sekolah Menengah Atas",
          nama: "MA MUHAMMADIYAH SIBATUA",
          alamat: "JL. SULTAN HASANUDDIN NO. 68, Bonto Perak, Kec. Pangkajene, Kab. Pangkajene Kepulauan Prov. Sulawesi Selatan",
          lihat: "Lebih banyak...",
          link: "https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/5CDD07F1-53EA-4AD9-A4C9-F22994336375",
          kuliah: "Perguruan Tinggi",
          nama2: "UNIVERSITAS AHMAD DAHLAN",
          alamat2: "Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55191",
          link2: "https://uad.ac.id/id/",
        },
        hardskill: "Hard Skill",
        hard: {
          figma: "Figma",
          persentase: "50%",
          deskfigma:
            "Saya lumayan tertarik dibidang desain terutama UI/UX desain, dengan begitu saya mempelajari salah satu framework bernama figma dan sudah menyelesaikan beberapa projek prototype dengan menggunakan figma.",
          tentangfigma: "Figma ...",
          urlfigma: "https://www.figma.com/",
          projekfigma: "Riwayat projek",
          urlprojek: "https://www.figma.com/file/pe4nJOvBQgBjTytAOi0orw/ZONE?node-id=0%3A1",

          html: "HTML",
          persentasehtml: "80%",
          deskhtml:
            "Saya juga sedang menekuni front end development sehingga saya mempelajari HTML atau yang biasa di sebut Hypertext Markup Language. Bahasa markup yang digunakan untuk membuat sebuah halaman web. ",
          tentanghtml: "HTML ...",
          urlhtml: "https://www.w3schools.com/html/default.asp",
          projekhtml: "Riwayat projek",
          urlprojek2: "https://github.com/syafarino15/tekweb2022",

          css: "CSS",
          persentasecss: "80%",
          deskcss:
            "Saya juga sedang menekuni front end development sehingga saya mempelajari CSS atau yang biasa di sebut Cascading Style Sheet. CSS akan menggubakan komponennya untuk membuat sebuah web lebih terstruktur dan seragam.",
          tentangcss: "CSS ...",
          urlcss: "https://www.w3schools.com/css/",
          projekcss: "Riwayat projek",
          urlprojek3: "https://github.com/syafarino15/tekweb2022",

          js: "Javascript",
          persentasejs: "80%",
          deskjs:
            "JavaScript adalah bahasa pemrograman yang digunakan dalam pengembangan website agar lebih dinamis dan interaktif. Bahkan dengan JavaScript ini kamu bisa membuat aplikasi, tools, atau bahkan game pada web ",
          tentangjs: "Javascript ...",
          urljs: "https://www.w3schools.com/js/default.asp",
          projekjs: "Riwayat projek",
          urlprojek4: "https://github.com/syafarino15/tekweb2022",
        },
        softskill: {
          judul: "Soft Skill",
          ps: "Public Speaking",
          psv: "Problem Solving",
          ct: "Critical Thingking",
        },
      },
      projek: {
        nama: "My Project",
        projek1: {
          url: "../bahan/projek2.PNG",
          desk1: "Ini adalah projek saya dalam membuat sebuah prototype aplikasi yang bernama ZONE. Pada projek ini saya mengambil peran sebagai Usage research dan UX Designer.",
        },
        projek2: {
          url: "../bahan/projek1.PNG",
          desk2: "Sedangkan ini adalah contoh prototype grab yang coba saya tirukan menggunakan aplikasi figma.",
        },
        projek3: {
          url: "../bahan/spotify.PNG",
          desk3:
            "Selanjutnya prototype yang saya selesaikan adalah prototype sporify, saya coba menyelesaikan prototype seperti ini untuk melatih desain dan ke keakurasian detail desain saya. tujuannya untuk meningkatkan jam terbang dan kecekatan dalam mendesain. Saya menggunakan mobbin.   dalam mendesain ulang prototype.",
        },
        projek4: {
          url: "../bahan/projek3.PNG",
          desk4: "Ini adalah contoh wireframe sekaligus prototype yang digunakan dalam mendesain sebuah web dalam projek di semester 3.",
        },
        projek5: {
          url: "../bahan/download.PNG",
          desk5: "Berikut adalah projek saya dalam membuat desain tampilan awal sebuah web portofolio yang di dalamnya terdapat deskripsi diri.",
        },
      },
      contact: {
        judul: "Contact Me",
        nama: {
          judul: "Nama Lengkap",
        },
        email: {
          judul: "Email",
        },
        pesan: {
          judul: "Pesan",
        },
        kirim: {
          judul: "Kirim",
        },
      },
      footer: {
        url: "https://www.instagram.com/syafarino_15/",
        nama: "An Syafarino Armawahyudi",
      },
    };
  },
  methods: {
    getHeaderData() {
      axios
        .get("https://raw.githubusercontent.com/faridsurya/Vue-Axios-Basic/master/contents/header.json")
        .then((res) => {
          console.log(res.data); //melihat respon data pada console browser
          this.header = res.data; //memperbarui variabel header pada bagian data()
        })
        .catch((error) => {
          console.log(error); //melihat error jika pengambilan data adalah gagal
        });
    },
  },
  beforeMount() {
    this.getHeaderData(); //eksekusi fungsi getHeaderData() pada bagian methods saat halaman terbuka
  },
}).mount("#app");
