let animasiChevronDown = false;
const navOuterHeight = $("nav").outerHeight() + 1;
$("body").attr("data-offset", navOuterHeight + 1);

$(function () {
  // Show preloader content immediately
  $("#isi-preloader").removeAttr('style');

  // Set up progressive image lazy loading
  $('img[loading="lazy"]').not('#chevron-down, .preloader img').addClass('lazy-fade');
  $('body').addClass('js-enabled');
  $('img.lazy-fade').on('load error', function () {
    $(this).addClass('loaded');
  }).each(function () {
    if (this.complete) {
      $(this).addClass('loaded');
    }
  });

  const scrollToAbout = function () {
    $("html, body").animate({
      scrollTop: $("#tentang").offset().top - navOuterHeight
    }, 2000);
  };

  if ($(document).scrollTop() > 0) {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  }

  // Bind interactive event handlers immediately (no delay)
  $("html").removeAttr("style");

  const initialWidth = $(window).width();
  if (initialWidth < 992) {
    $("nav").addClass("bg-danger navbar-shadow");
    $("#tombol-rekrut").attr('href', 'https://api.whatsapp.com/send?phone=6281295098759&text=Hai%20Muhammad%20Saleh%20Solahudin.%20Saya%20ingin%20memperkerjakan%20Anda%20dengan%20gaji%20Rp18.000.000%20s.d.%20*isi%20sendiri*%20untuk%20posisi%20*isi%20sendiri*.%20Catatan%20:%20*isi%20sendiri*');
    
    if (initialWidth < 768) {
      $(".navbar-brand").text("M_SALEH_S");
      $(".nama-footer").text("M SALEH SOLAHUDIN");
    } else {
      $(".navbar-brand, .nama-footer").text("MUHAMMAD SALEH SOLAHUDIN");
    }
  } else {
    $(".navbar-brand, .nama-footer").text("MUHAMMAD SALEH SOLAHUDIN");
    $("#tombol-rekrut").attr("onclick", "modalRekrut();");
  }

  $('header').css("height", $(window).height());

  $(window).resize(function () {
    $("header").css('height', $(this).height());
    if ($(window).width() < 768) {
      $(".navbar-brand").text("M_SALEH_S");
    } else {
      $(".navbar-brand").text("MUHAMMAD SALEH SOLAHUDIN");
    }
  });

  $(document).scroll(function () {
    const scrollTop = $(this).scrollTop();
    if (animasiChevronDown) {
      if (scrollTop >= $("#tentang").offset().top - navOuterHeight) {
        $('#chevron-down').removeClass("animasi-chevron-down").hide();
        animasiChevronDown = false;
      }
    }
    if ($(window).width() > 991) {
      if (scrollTop > 1) {
        $("nav").addClass("bg-danger navbar-shadow");
      } else {
        $("nav").removeClass("bg-danger navbar-shadow");
      }
    }
  });

  $("a[href*=\"#\"]").not("[href=\"#\"]").not("[href=\"#0\"]").click(function (event) {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $("html, body").animate({
          scrollTop: target.offset().top - navOuterHeight
        }, 1000);
      }
    }
  });

  $(".navbar-nav>li>a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  $('#chevron-down').click(scrollToAbout);

  $('.card h5.card-header').each(function () {
    const text = $(this).text().trim();
    $(this).attr({
      'data-toggle': 'tooltip',
      'data-placement': 'top',
      'title': text
    });
  });

  $("[data-toggle=\"tooltip\"]").tooltip({
    container: "body",
    trigger: "hover"
  });

  new WOW().init();

  console.log("Nama projek \t: Website Muhammad Saleh Solahudin.\nDibuat oleh \t: Muhammad Saleh Solahudin.\nDidukung oleh \t: Kopi Hitam, Lagu Jadul, Lagu Dangdut, Bacaan Ayat Suci.\nKata kata biasa : Tetap Lapar, Tetap Haus, Tetap Lelah.\nHak cipta \t\t: Sejak 2019 dan dilindungi berlapis-lapis oleh undang-undang.\n\nTerima kasih untuk :- Allah S.W.T\n\t\t\t\t\t - Nabi Muhammad S.A.W\n\t\t\t\t\t - Kedua Orang Tua\n\t\t\t\t\t - Karmila Sriwulan");

  // Function to initialize typing effect and hide preloader
  const startTypingAndShowSite = function () {
    if (window.appStarted) return;
    window.appStarted = true;

    $('.preloader').fadeOut(800, function () {
      let welcomeStrings;
      if ($(window).width() < 575) {
        welcomeStrings = ["HAI DAN HALO !!!", "SELAMAT DATANG !!!", "SAYA ZIHXS", "SAYA M SALEH SOLAHUDIN"];
      } else {
        welcomeStrings = ["HAI DAN HALO !!!", "SELAMAT DATANG !!!", "SAYA ZIHXS", "SAYA MUHAMMAD SALEH SOLAHUDIN"];
      }

      new Typed("#ketik-1", {
        strings: welcomeStrings,
        typeSpeed: 60,
        backSpeed: 45,
        onComplete: function () {
          $(".typed-cursor").hide();
          $('#garis-awal').fadeIn(1000, function () {
            new Typed("#ketik-2", {
              strings: ["SAYA SUKA PEMROGRAMAN", "SAYA SUKA TANTANGAN", "SAYA SUKA KARMILA SRI WULAN", "SAYA LEAD BACKEND ENGINEER"],
              typeSpeed: 60,
              backSpeed: 45,
              preStringTyped: function () {
                const documentWidth = $(window).width();
                if (documentWidth >= 768) {
                  $(".typed-cursor").css({
                    'font-size': "24px",
                    'color': "white"
                  });
                } else if (documentWidth >= 575) {
                  $(".typed-cursor").css({
                    'font-size': "20px",
                    'color': "white"
                  });
                } else {
                  $('.typed-cursor').css({
                    'font-size': "15px",
                    'color': "white"
                  });
                }
              },
              onComplete: function () {
                $(".typed-cursor").hide();
                $('#tombol-header').fadeIn(800);
                if ($(document).scrollTop() < $("#tentang").offset().top - navOuterHeight) {
                  $("#chevron-down").fadeIn(1000, function () {
                    $("#chevron-down").addClass("animasi-chevron-down");
                    animasiChevronDown = true;
                  });
                }
              }
            });
          });
        }
      });
    });
  };

  // Run immediately when all assets/images are fully loaded
  $(window).on('load', function () {
    startTypingAndShowSite();
  });

  // Safeguard: trigger after 1200ms if window load event takes too long
  setTimeout(function () {
    startTypingAndShowSite();
  }, 1200);
});

$("#accordion1").on("hide.bs.collapse show.bs.collapse", event => {
  $(event.target).prev().find("i:last-child").toggleClass("fa-minus fa-chevron-down");
});

function preventViewSource(event) {
  if (event.ctrlKey && event.which === 85) {
    const redirectUrls = [
      "https://www.facebook.com/ZihxS",
      "https://twitter.com/msalehsolahudin",
      "https://www.instagram.com/msalehsolahudin/",
      "https://www.youtube.com/channel/UCO3Tsp5Coo1QLsMLn17Wdug",
      "https://www.facebook.com/milasriwulan.milasriwulan",
      "https://twitter.com/karmilasriwulan",
      "https://www.facebook.com/milasriwulan.milasriwulan"
    ];
    const randomIndex = Math.floor(Math.random() * redirectUrls.length);
    document.location = redirectUrls[randomIndex];
    return false;
  }
}
document.onkeydown = preventViewSource;

lightbox.option({
  albumLabel: "Gambar ke %1 dari %2 gambar"
});

const motoData = {
  1: {
    title: "STAY HUNGRY",
    content: `<p class="text-justify mb-0">Saya sangat lapar dalam segala hal, baik itu soal dunia maupun soal agama (akhirat). Karena kalau tidak ada rasa seperti ini saya tidak akan bisa mendapat banyak ilmu atau pengalaman yang sangat berharga.</p>`
  },
  2: {
    title: "STAY THIRSTY",
    content: `<p class="text-justify mb-0">Saya sangat haus akan prestasi, pengalaman, kompetisi, tantangan dan sesuatu atau hal yang baru untuk saya. Yang mampu mengasah dan melatih kemampuan baik jasmani maupun rohani.</p>`
  },
  3: {
    title: "STAY TIRED",
    content: `<p class="text-justify mb-0">Saya harus menikmati rasa capek atau lelah yang melanda kepada diri saya. Karena kalau tidak mau lelah maka mustahil dalam hal apapun. Karena segala sesuatu harus diniatkan, diusahakan, diperjuangkan dan juga di dorong (disertakan) dengan doa.</p>`
  },
  4: {
    title: "STAY FOOLISH",
    content: `<p class="text-justify mb-0">Saya hanya manusia biasa, hanya hamba yang lemah tak berdaya, maka dari itu saya harus selalu merasa bodoh. Karena banyak sekali orang orang yang lebih bahkan sangat cerdas dalam segala hal khususnya dunia pemrograman atau website development dan game development.</p>`
  }
};

function modalMotoHidup(motoId) {
  const data = motoData[motoId];
  if (data) {
    $("#judul-dinamis-modal").text(data.title);
    $("#isi-dinamis-modal").html(data.content);
  }
  $("#dinamis-modal").modal('show');
}

const portfolioData = {
  1: {
    title: "PROFILE PERUSAHAAN (APPLE)",
    content: `<p>tipe projek: website</p><p>template admin: lumino admin</p><p class="mb-0">dapur pacu: html, css, sass, bootstrap, font awesome, php, html2pdf, javascript, jquery, datatables, mysql.</p>`
  },
  2: {
    title: "PROFILE PERUSAHAAN (PERUSAHAAN JERMAN)",
    content: `<p>tipe projek: website</p><p class="mb-0">dapur pacu: html, css, bootstrap, animate, php, javascript, jquery, lazyload, wow.</p>`
  },
  3: {
    title: "RESERVASI HOTEL",
    content: `<p>tipe projek: website</p><p>template admin: dashgum</p><p class="mb-0">dapur pacu: html, css, bootstrap, font awesome, animate, php, javascript, jquery, wow, mysql.</p>`
  },
  4: {
    title: "INFOKOM E PAYMENT",
    content: `<p>tipe projek: website</p><p>template admin: material pro admin</p><p class="mb-0">dapur pacu: html, css, sass, bootstrap, font awesome, php, codeigniter, ciqrcode, html2pdf, dompdf, javascript, jquery, particles, datatables, fancybox, webqr, sweet alert, chartist, mysql, midtrans, tawkto.</p>`
  },
  5: {
    title: "GERAKAN DISIPLIN SISWA",
    content: `<p>tipe projek: website</p><p>template admin: admin lte</p><p class="mb-0">dapur pacu: html, css, bootstrap, php, laravel, javascript, jquery, mysql.</p>`
  },
  6: {
    title: "PENGARSIPAN SURAT",
    content: `<p>tipe projek: website</p><p>template admin: ace admin</p><p class="mb-0">dapur pacu: html, css, bootstrap, font awesome, php, html2pdf, javascript, jquery, datatables, mysql.</p>`
  },
  7: {
    title: "KOPERASI SIMPAN PINJAM",
    content: `<p>tipe projek: website</p><p>template admin: admin lte</p><p class="mb-0">dapur pacu: html, css, bootstrap, normalize, php, codeigniter, html2pdf, dompdf, javascript, jquery, html5shiv, respond, datatables, sweet alert, mysql.</p>`
  },
  8: {
    title: "BUKU TAMU",
    content: `<p>tipe projek: website</p><p>template admin: lumino admin</p><p class="mb-0">dapur pacu: html, css, bootstrap, animate, font awesome, php, codeigniter, javascript, jquery, tokenfield, wow, mysql.</p>`
  },
  9: {
    title: "SWEET SEVENTEEN",
    content: `<p>tipe projek: website</p><p class="mb-0">dapur pacu: html, css, bootstrap, animate, font awesome, php, codeigniter, javascript, jquery, tokenfield, wow, lazyload, typed, owl carousel, mysql.</p>`
  },
  10: {
    title: "GO LISTRIK",
    content: `<p>tipe projek: website dan aplikasi mobile</p><p>template admin: adminbsb</p><p class="mb-0">dapur pacu: html, css, sass, materialize, material icons, bootstrap, animate, bootstrap notify, php, codeigniter, html2pdf, dompdf, phpexcel, javascript, jquery, datatables, select2, sweet alert, slimscroll, waves, flot charts, typed, step, particles, node, express, socket.io, react native, mysql, midtrans, tawkto.</p>`
  },
  11: {
    title: "MOMA TRAVEL",
    content: `<p>tipe projek: website</p><p>template admin: admin lte</p><p class="mb-0">dapur pacu: html, css, sass, bootstrap, animate, icomoon, flaticon, font awesome, ionicons, php, phpmailer, javascript, jquery, datatables, fastclick, slimscroll, owl carousel, scrollax, aos, mysql.</p>`
  },
  12: {
    title: "PERSONAL PORTOFOLIO",
    content: `<p>tipe projek: website</p><p class="mb-0">dapur pacu: html, css, sass, animate, font awesome, javascript, jquery, lightbox, aos, typed, timeline, owl carousel.</p>`
  },
  13: {
    title: "INTEGRATIVE LEARNING SYSTEM",
    content: `<p>tipe projek: website</p><p>template admin: ace admin</p><p class="mb-0">dapur pacu: html, css, bootstrap, animate, font awesome, php, javascript, jquery, datatables, mysql.</p>`
  },
  14: {
    title: "CV KARMILA SRI WULAN",
    content: `<p>tipe projek: website</p><p class="mb-0">dapur pacu: html, css, bootstrap, font awesome, javascript, jquery.</p>`
  },
  15: {
    title: "PORTAL BERITA",
    content: `<p>tipe projek: website</p><p>template admin: ace admin</p><p class="mb-0">dapur pacu: html, css, bootstrap, animate, font awesome, php, javascript, angular, jquery, datatables, mysql.</p>`
  },
  16: {
    title: "ABSENSI",
    content: `<p>tipe projek: aplikasi desktop (x86)</p><p class="mb-0">dapur pacu: visual basic, .net framework 4, ole db, microsoft access database.</p>`
  },
  17: {
    title: "APOTEK",
    content: `<p>tipe projek: aplikasi desktop (x86)</p><p class="mb-0">dapur pacu: visual basic, .net framework 4, ole db, microsoft access database.</p>`
  },
  18: {
    title: "BENGKEL",
    content: `<p>tipe projek: aplikasi desktop (x86)</p><p class="mb-0">dapur pacu: visual basic, .net framework 4, mysql connector .net, mysql, sap crystal report.</p>`
  },
  19: {
    title: "INVENTARIS SEKOLAH",
    content: `<p>tipe projek: aplikasi desktop (x86)</p><p class="mb-0">dapur pacu: visual basic, .net framework 4, mysql connector .net, mysql, sap crystal report.</p>`
  },
  20: {
    title: "KOPERASI SIMPAN PINJAM",
    content: `<p>tipe projek: aplikasi desktop (x86)</p><p class="mb-0">dapur pacu: visual basic, .net framework 4, ole db, microsoft access database, sap crystal report.</p>`
  },
  21: {
    title: "PARKIR",
    content: `<p>tipe projek: aplikasi desktop (x86)</p><p class="mb-0">dapur pacu: visual basic, .net framework 4, mysql connector .net, odbc, mysql, sap crystal report.</p>`
  },
  22: {
    title: "PENDATAAN SISWA",
    content: `<p>tipe projek: aplikasi desktop (x86)</p><p class="mb-0">dapur pacu: visual basic, .net framework 4, mysql connector .net, mysql.</p>`
  },
  23: {
    title: "RENTAL MOBIL",
    content: `<p>tipe projek: aplikasi desktop (x86)</p><p class="mb-0">dapur pacu: visual basic, .net framework 4, ole db, microsoft access database, microsoft word.</p>`
  },
  24: {
    title: "RESTAURANT",
    content: `<p>tipe projek: aplikasi desktop (x86)</p><p class="mb-0">dapur pacu: visual basic, .net framework 4, ole db, microsoft access database, mysql connector .net, odbc, mysql.</p>`
  },
  25: {
    title: "SA-MP",
    content: `<p>tipe projek: permainan desktop (desktop game)</p><p class="mb-0">dapur pacu: c++, c#, pawn scripts, sa-mp scripts, php, javascript, database nosql.</p>`
  },
  20221: {
    title: "ALWAYS NGODING",
    content: `<p>tipe projek: website</p><p>template admin: adminbsb</p><p class="mb-0">dapur pacu: html, css, php, codeigniter, javascript, sql (mysql), node js, express, socket io, bootstrap, scss, font awesome, animate css, moment js, typed js, jquery, wow js, slip js, particles js, clipboard js, datatables, sweetalert, select2, prism js, tinymce, codemirror, google recaptcha, google font api, cloudflare, midtrans dan masih banyak lagi.</p>`
  },
  20222: {
    title: "KITA SEHAT",
    content: `<p>tipe projek: website</p><p class="mb-0">dapur pacu: alibabacloud low code services (alicms, image search), html, css, php, javascript.</p>`
  },
  20223: {
    title: "KITA SEHAT STORE",
    content: `<p>tipe projek: website</p><p class="mb-0">dapur pacu: alibabacloud low code services (alicms, image search), html, css, php, javascript.</p>`
  },
  20224: {
    title: "PROFILE PERUSAHAAN (ARJUNA SOLUSI KONSULTAMA)",
    content: `<p>tipe projek: website</p><p class="mb-0">dapur pacu: html, css, php, javascript, jquery, bootstrap, wordpress.</p>`
  },
  20225: {
    title: "ARISAN ONLINE",
    content: `<p>tipe projek: website</p><p>template admin: stisla</p><p class="mb-0">dapur pacu: html, css, php, mysql, javascript, jquery, bootstrap.</p>`
  },
  20226: {
    title: "PERSONAL PORTOFOLIO",
    content: `<p>tipe projek: website</p><p class="mb-0">dapur pacu: html, css, sass, animate, font awesome, javascript, jquery, lightbox, aos, typed, timeline.</p>`
  },
  20227: {
    title: "LANDING PAGE PT BIMA REGISTRA",
    content: `<p>tipe projek: website</p><p class="mb-0">dapur pacu: html, css, php, codeigniter, javascript, jquery, bootstrap, animate css, font awesome, owl carousel, wow js.</p>`
  },
  20228: {
    title: "MOCKUP WEB SECURITIES CROWDFUNDING",
    content: `<p>tipe projek: mockup website</p><p class="mb-0">dapur pacu: html, css, php, javascript, jquery, bootstrap, animate css, font awesome, owl carousel, wow js.</p>`
  }
};

function modalPortofolio(portfolioId) {
  const data = portfolioData[portfolioId];
  if (data) {
    $("#judul-dinamis-modal").text(data.title);
    $("#isi-dinamis-modal").html(data.content);
  }
  $("#dinamis-modal").modal('show');
}

function modalRekrut() {
  $('#modal-rekrut').modal('show');
}

const newPortfolioData = {
  20231: {
    title: "THE CLOUD DONATION",
    content: `<p>tipe projek: website</p><p>template admin: sb admin pro</p><p class="mb-0">dapur pacu: html, css, php menggunakan codeigniter framework, javascript, jquery, ajax, datatables, sweetalert, select2, bootstrap, font awesome, go menggunakan gin framework, apsaradb for polardb, redis, nodejs, pm2, midtrans dan masih banyak lagi.</p>`
  },
  20232: {
    title: "ZAIN.CYOU",
    content: `<p>tipe projek: website</p><p class="mb-0">dapur pacu: html, css, php, javascript, jquery, bootstrap, animate css, font awesome, owl carousel, wow js dan masih banyak lagi.</p>`
  },
  20233: {
    title: "METECH",
    content: `<p>tipe projek: website</p><p class="mb-0">dapur pacu: html, css, php, javascript, jquery, bootstrap, animate css, font awesome, owl carousel, wow js dan masih banyak lagi.</p>`
  },
  20260601: {
    title: "ULTIMATE MARTIAL ARTS SMART SYSTEM",
    content: `<p>tipe projek: website</p><p class="mb-0">dapur pacu: html, css, javascript, typescript, go, react, postgresql, vite, tanstack router, tanstack query, primereact, tailwind css, zod, react hook form, chart js, recharts, workbox, vite-plugin-pwa, lucide react, primeicons, go-chi, midtrans, webpush, go-mail, fpdf, excelize, docker, pnpm, vitest, msw, date-fns, xlsx, react hot toast dan masih banyak lagi.</p>`
  },
  20260602: {
    title: "WELL MONITORING SYSTEM",
    content: `<p>tipe projek: website</p><p class="mb-0">dapur pacu: html, css, javascript, typescript, php, python, laravel, flask, react, vite, postgresql, sqlite, redis, laravel octane (frankenphp), laravel sanctum, spatie permission, prophet (meta), pandas, numpy, scipy, scikit-learn, tailwind css, daisyui, material ui (mui), bootstrap, chart.js, highcharts, plotly, recharts, lightweight charts, axios, dompurify, html2canvas, jspdf, sheetjs (xlsx), moment js, docker, podman, nginx, make dan masih banyak lagi.</p>`
  },
  20260603: {
    title: "CP LAVA PRATAMA SOLUSINDO",
    content: `<p>tipe projek: website</p><p class="mb-0">dapur pacu: html, css, php, javascript, jquery, bootstrap, animate css, font awesome, owl carousel, wow js dan masih banyak lagi.</p>`
  },
  20260604: {
    title: "CP & CMS ELDI",
    content: `<p>tipe projek: website</p><p>template admin: custom bootstrap 5</p><p class="mb-0">dapur pacu: html, css, php, javascript, typescript, sql (postgresql), laravel, laravel sanctum, composer, react, vite, node js, pnpm, tailwind css, emotion, radix ui, material ui (mui), embla carousel, lucide react, framer motion, react slick, react day picker, react dnd, sonner, vaul, lightgallery, easymde, chart js, recharts, jspdf, jspdf autotable, react router dom, react helmet async, bootstrap, bootstrap icons, jquery, datatables, nginx, systemd, ssh, scp, rsync, makefile, bash, ubuntu linux dan masih banyak lagi.</p>`
  },
  20260605: {
    title: "POS APOTEK",
    content: `<p>tipe projek: website</p><p>template admin: adminlte</p><p class="mb-0">dapur pacu: html, css, php, codeigniter, javascript, sql (mysql), phpdotenv, phpspreadsheet, escpos-php, jquery, bootstrap, popper js, font awesome, select2, inputmask, sweetalert, toastr, pace, magicsuggest, typeahead, jquery hotkeys, intro js, google font api, overlay scrollbars, daterangepicker, moment js dan masih banyak lagi.</p>`
  }
};

function newModalPortofolio(portfolioId) {
  const data = newPortfolioData[portfolioId];
  if (data) {
    $("#judul-dinamis-modal").text(data.title);
    $("#isi-dinamis-modal").html(data.content);
  }
  $("#dinamis-modal").modal('show');
}