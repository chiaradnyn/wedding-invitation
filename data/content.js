/* ==========================================================
   EDIT ONLY THIS FILE to change content.
   Language-neutral data (names, date, links, photos, music) is at the top.
   All wording lives in i18n.en and i18n.id at the bottom.
   Anything in [SQUARE BRACKETS] is still a placeholder.
   ========================================================== */
window.WEDDING = {
  defaultLang: "en",                      // opens in English; guests switch to Indonesian with the EN | ID toggle (?lang=id also works)
  couple: { a: "Chiara", b: "Adji", monogram: "C & A" },
  date: "2026-12-19T08:00:00+07:00",      // countdown target: Akad Nikah 08:00 WIB
  hero: { photo: "assets/images/hero.jpeg" },
  // Bride & groom portraits on "The Wedding of" page (shown inside the oval frame)
  profiles: { bride: "assets/images/profile-01.jpeg", groom: "assets/images/profile-02.jpeg" },
  ayat: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",   // Ar-Rum 30:21

  story: [ { photo: "assets/images/story-01.jpeg" }, { photo: "assets/images/story-02.jpeg" }, { photo: "assets/images/story-03.jpeg" } ],

  events: [
    { venue: "Gedung Soos Sasono Suko", address: "Cepu, Blora, Jawa Tengah", mapUrl: "https://www.google.com/maps/search/?api=1&query=Gedung+Soos+Sasono+Suko+Cepu" },
    { venue: "Gedung Soos Sasono Suko", address: "Cepu, Blora, Jawa Tengah", mapUrl: "https://www.google.com/maps/search/?api=1&query=Gedung+Soos+Sasono+Suko+Cepu" }
  ],
  venueMap: { name: "Gedung Soos Sasono Suko Cepu", query: "Gedung Soos Sasono Suko Cepu" },

  gallery: [ { src: "assets/images/couple-01.jpeg" }, { src: "assets/images/couple-02.jpeg" }, { src: "assets/images/hero.jpeg" }, { src: "assets/images/story-01.jpeg" } ],

  gifts: {
    banks: [{ bank: "BNI", number: "0696305090", name: "Millenanda Chiara Adnyn" }],   // keep exactly as on the bank account
    ewallets: [],
    qr: null
  },
  registry: [ { url: "" } ],              // paste the Google Sheets link in url

  // Songs play in a random order for every guest. Put the files in assets/music/
  music: {
    shuffle: true,
    tracks: [
      { src: "assets/music/Johnny Stimson - Honeymoon (Official Audio).mp3", title: "Honeymoon", artist: "Johnny Stimson" },
      { src: "assets/music/Daniel Caesar - Best Part (Audio) ft. H.E.R..mp3", title: "Best Part", artist: "Daniel Caesar ft. H.E.R." },
      { src: "assets/music/Robin Thicke - The Sweetest Love.mp3", title: "The Sweetest Love", artist: "Robin Thicke" }
    ]
  },

  rsvp: { endpoint: "https://script.google.com/macros/s/AKfycbxjdrHYKcfRBa0RPFD9BDBEtYzTuK43nOALiL273Xw9vEaGazgKIcwexv7Q4d06g8XT/exec", maxGuests: 4, deadline: "" },

  i18n: {
    /* ======================= ENGLISH ======================= */
    en: {
      seoTitle: "Chiara & Adji · Wedding Invitation",
      dateLabel: "Cepu · Saturday, 19 December 2026",
      verse: { ref: "Ar-Rum · Verse 21", text: "And among His signs is that He created for you spouses from among yourselves, that you may find tranquility in them, and He placed between you love and mercy. Indeed, in that are signs for a people who reflect." },
      heroAlt: "The couple walking together through a tropical garden",
      galleryAlts: ["The couple standing close together, dressed in batik", "The couple together", "The couple walking together through a tropical garden", "The couple standing side by side holding white flowers"],
      dressCode: "",

      texts: {
        dear: "Dear", fallbackGuest: "Guest",
        openHint: "Tap the seal to open",
        invite: "Together with our families, we invite you to celebrate our wedding",
        weddingOf: "The Wedding of",
        songsTitle: "Our songs",
        countdownTitle: "Counting the days",
        storyTitle: "Our love story",
        eventsTitle: "The day",
        galleryTitle: "Moments",
        galleryCaption: "Two guarded hearts, one quiet wish, and a whirlwind year that turned into forever.",
        rsvpTitle: "Will You Join Us?",
        giftTitle: "Warmest Wishes",
        giftIntro: "Your blessings and warm wishes are truly more than enough. For those who have kindly asked and wish to share an additional blessing, you may do so through the details below.",
        registryTitle: "Registry", registryIntro: "",
        wishesTitle: "Wishes",
        closing: "We have found our quiet certainty in each other. Thank you for walking alongside our story, and we truly look forward to celebrating the beginning of our forever with you."
      },

      ui: {
        units: ["Days", "Hours", "Min", "Sec"], timer: "Time remaining",
        viewMap: "View on map", mapTitle: "Map to ", dress: "Dress code",
        openPhoto: "Open photo: ", noPhotos: "Photos are still loading",
        songsHint: "Tap any song to play it",
        openMap: "Open in Maps", guideOpen: "Traveling from out of town? Tap to open our Cepu guide", guideClose: "Close the guide", dep: "Departs", arr: "Arrives", musicLoading: "Loading music… tap ♪ if it stays silent",
        play: "Play music", pause: "Pause music", prev: "Previous song", next: "Next song",
        tapAgain: "Tap again to play", musicMissing: "Music file not found",
        openInvite: "Open invitation", skip: "Skip to content", lang: "Language",
        rsvpScript: "The favour of a reply", respondBy: "Kindly respond by ",
        nameMark: "I,", nameCap: "your name",
        yes: "will gladly attend", no: "must regretfully decline",
        guestsCap: "Number of guests, including you", guestsLbl: "Number of guests", more: "More guests", fewer: "Fewer guests",
        words: "A few words for us", share: "Share my words in Wishes", send: "Send reply",
        errReq: "Please enter your name and choose attendance.", demo: "[Demo mode: set rsvp.endpoint in content.js to save responses]",
        sending: "Sending…", errSend: "Could not send. Check your connection and try again.", thanks: "Thank you, ",
        copied: "Copied", copyNum: "Copy number", copyAddr: "Copy address", sendGift: "Send a gift", qr: "QR code", qrPh: "[QR image]",
        wishBtn: "View wishlist", linkSoon: "Link coming soon",
        wishName: "[Guest name]", wishPh: "[Wishes appear here once the RSVP endpoint is connected]",
        joy: "Joyfully Celebrating Together", brideLbl: "The Bride & Her Family", groomLbl: "The Groom & His Family"
      },

      story: [
        { title: "A New Beginning",
          text: "Chiara moved across the sea seeking a fresh start and a quiet horizon, with love being the furthest thing from her mind. Tucked away in a remote corner of East Kalimantan, she poured herself wholly into work. But on a weekend away in Balikpapan, she joined an early morning tennis coaching session—never guessing that right there on the court, both of their worlds were about to gently shift forever." },
        { title: "In God’s Perfect Timing",
          text: "All his life, Adji had kept his heart entirely to himself—a hopeless romantic who poured his days into work and routine, waiting for a love he could truly believe in. Then, an unexpected clearing in his schedule led him to that very court. The moment he met Chiara, all hesitation vanished into pure certainty. And for Chiara, Adji was every quiet, specific detail she had once whispered in her prayers, walking straight into reality." },
        { title: "The Sweetest Whirlwind",
          text: "From that first hello, love moved with effortless grace. Early flights to meet family, quiet milestones, and an easy promise of forever. Almost exactly a year after their first meeting, they are stepping into a lifetime together. It all unfolded so fast, yet neither of them ever looked back—because when the heart knows, there is never a single doubt." }
      ],

      events: [
        { name: "Akad Nikah", date: "Saturday, 19 December 2026", time: "08.00 WIB" },
        { name: "Reception", date: "Saturday, 19 December 2026", time: ["Session 1 · 12.00–13.00 WIB", "Session 2 · 13.00–14.00 WIB"] }
      ],

      quotes: {
        hero:  { text: "When the time was finally right, love showed up gently—quiet, certain, and right on time.", by: "" },
        story: { text: "In a world full of noise, you became the quietest, softest answer to my prayers.", by: "" },
        close: { text: "Different paths, one shared destination—brought together by grace for a lifetime.", by: "" }
      },

      bride: { name: "drg. Millienanda Chiara Adnyn", rel: "Second daughter of",
        parents: ["Dr. Drs. Suka Handaja Budi, M.T.", "Mrs. Vira Dwi Cahyani, S.Kep., Ns., M.Kes."],
        address: "Jl. Dumai V No. 3, Balun, Cepu, Blora, Central Java" },
      groom: { name: "Adji Purba Atmajendra, S.E.", rel: "First son of",
        parents: ["Mr. Tri Margono, S.T.", "Mrs. Dra. Tursiana Agustin"],
        address: "Jl. Mulawarman RT 14 No. 53, South Balikpapan, East Kalimantan" },

      guide: {
        title: "A Little Guide to Cepu",
        note: "“For our beloved family and friends traveling to celebrate with us at Gedung Soos Sasono Suko, here are our favorite local stays and the bride’s most cherished culinary spots to accompany your time in Cepu.”",
        teaser: "Coming from out of town? Open our little guide to Cepu.", open: "Show the guide", close: "Hide the guide",
        aboutTitle: "About Cepu",
        about: "Known as Indonesia’s historic oil town, Cepu carries a rich heritage framed by colonial-era charm and quiet, leafy avenues. Behind its industrial legacy lies an unhurried haven, celebrated for bold local flavors and timeless traditional culinary treasures.",
        stayTitle: "Where to Stay",
        stays: [
          { name: "Hotel Ammi Cepu", text: "A colonial-heritage luxury boutique hotel offering timeless elegance, serene ambience, and top-tier hospitality. (~5 minutes to the venue)." },
          { name: "Grand Mega Resort & Spa Cepu", text: "A full-service resort featuring spacious family rooms, lush gardens, swimming pool, and relaxing spa facilities. (~8 minutes to the venue)." }
        ],
        eatTitle: "Bride’s Favorite Culinary",
        eats: [
          { name: "Mie Ayam Sredek", text: "The bride’s ultimate comfort bowl that instantly won the groom’s heart on his very first visit to Cepu. Its unmistakable signature lies in the tender chicken topping cooked in a savory, sweet, and peppery black pepper glaze over bouncy noodles.", extra: "A special treat: this dish will also be served directly at our wedding reception!" },
          { name: "Lontong Opor Kapuan Pak Pangat", text: "Legendary tender free-range chicken cooked in a bold, savory, and spicy red broth—a unique signature unlike typical yellow opor—poured generously over soft handmade rice cakes. An iconic culinary gem in Kapuan.", extra: "Local tip: It sells out very quickly, so booking one day in advance / H-1 is highly recommended!" },
          { name: "Pecel Pincuk Pojokan Kapur Tulis Sebelah PEM Akamigas", url: "https://www.google.com/maps/place/RAWON+DAN+PECEL+PINCUK+Cepu/@-7.1389982,111.5951571,17z/data=!3m1!4b1!4m6!3m5!1s0x2e77644125dc285d:0xe5dd1d40b7b97548!8m2!3d-7.1389982!4d111.597732!16s%2Fg%2F11c2p12dmd", text: "Fresh blanched greens bathed in fragrant, nutty kencur peanut sauce served on a traditional banana leaf fold. Perfect for a refreshing and nostalgic morning breakfast." },
          { name: "Ayam Panggang Mak Gogok", text: "A culinary gem tucked in the heart of traditional wood-fire cooking—juicy kampung chicken marinated in rich Javanese spices, grilled to perfection with an unforgettable smokiness." }
        ],
        trainTitle: "Getting to Cepu", trainSub: "By Train (Recommended)",
        trainIntro: "For our friends and family traveling by rail, please take your train to Stasiun Cepu. Gedung Soos Sasono Suko is conveniently located just a 5-minute drive from the station via local transport or ride-hailing services.",
        routes: [
          { from: "From Semarang Poncol", train: "KA Ambarawa Ekspres Pagi", dep: "08:30 WIB", arr: "10:47 WIB", note: "Giving you comfortable timing right before the 12:00 PM reception begins." },
          { from: "From Surabaya Pasarturi", train: "KA Sembrani (Executive)", dep: "07:50 WIB", arr: "09:40 WIB", note: "Ideal for a relaxed arrival and freshening up." },
          { from: "From Surabaya Pasarturi", train: "Commuter Line Blorasura", dep: "08:10 WIB", arr: "10:45 WIB", note: "Arrives just over an hour before the reception starts." }
        ],
        returnNote: "Return trips: Several comfortable afternoon and evening trains to both Semarang and Surabaya depart after 15:00 WIB."
      },
      gifts: { addressLabel: "Gift address", addressText: "Balikpapan [full address to be added]" },
      registry: [ { name: "Our wishlist", note: "" } ]
    },

    /* ======================= BAHASA INDONESIA ======================= */
    id: {
      seoTitle: "Chiara & Adji · Undangan Pernikahan",
      dateLabel: "Cepu · Sabtu, 19 Desember 2026",
      verse: { ref: "QS. Ar-Rum · Ayat 21", text: "Dan di antara tanda-tanda kebesaran-Nya, Dia menciptakan pasangan untukmu dari jenismu sendiri agar kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir." },
      heroAlt: "Sepasang mempelai berjalan bersama di taman tropis",
      galleryAlts: ["Sepasang mempelai berdiri berdekatan dengan busana batik", "Sepasang mempelai bersama", "Sepasang mempelai berjalan bersama di taman tropis", "Sepasang mempelai berdiri berdampingan sambil memegang bunga putih"],
      dressCode: "",

      texts: {
        dear: "Kepada Yth.", fallbackGuest: "Tamu Undangan",
        openHint: "Ketuk segel untuk membuka",
        invite: "Bersama keluarga, kami dengan penuh sukacita mengundang Anda untuk merayakan pernikahan kami",
        weddingOf: "Pernikahan",
        songsTitle: "Lagu Kami",
        countdownTitle: "Menghitung hari",
        storyTitle: "Kisah Cinta Kami",
        eventsTitle: "Hari Bahagia",
        galleryTitle: "Momen",
        galleryCaption: "Dua hati yang saling menjaga, satu doa yang terwujud, dan perjalanan satu tahun yang menjelma selamanya.",
        rsvpTitle: "Berkenan Menjadi Bagian dari Hari Bahagia Kami?",
        giftTitle: "Ungkapan Kasih",
        giftIntro: "Doa restu dan ucapan hangat dari Anda sudah lebih dari cukup bagi kami. Bagi yang berkenan berbagi tanda kasih, dapat melalui keterangan berikut.",
        registryTitle: "Daftar Hadiah", registryIntro: "",
        wishesTitle: "Ucapan & Doa",
        closing: "Kami telah menemukan kepastian dan ketenangan di dalam diri satu sama lain. Terima kasih atas ketulusan doa dan dukungan yang senantiasa mengiringi langkah kami. Merupakan suatu kehormatan dan kebahagiaan bagi kami untuk menyambut hari istimewa ini bersama Bapak/Ibu/Saudara/i sekalian."
      },

      ui: {
        units: ["Hari", "Jam", "Menit", "Detik"], timer: "Waktu tersisa",
        viewMap: "Lihat peta", mapTitle: "Peta menuju ", dress: "Kode busana",
        openPhoto: "Buka foto: ", noPhotos: "Foto masih dimuat",
        songsHint: "Ketuk lagu untuk memutarnya",
        openMap: "Buka di Peta", guideOpen: "Datang dari luar kota? Ketuk untuk melihat panduan Cepu", guideClose: "Tutup panduan", dep: "Berangkat", arr: "Tiba", musicLoading: "Memuat musik… ketuk ♪ jika masih sunyi",
        play: "Putar musik", pause: "Jeda musik", prev: "Lagu sebelumnya", next: "Lagu berikutnya",
        tapAgain: "Ketuk sekali lagi untuk memutar", musicMissing: "Berkas musik tidak ditemukan",
        openInvite: "Buka undangan", skip: "Lewati ke konten", lang: "Bahasa",
        rsvpScript: "Konfirmasi Kehadiran", respondBy: "Mohon konfirmasi sebelum ",
        nameMark: "Saya,", nameCap: "nama Anda",
        yes: "dengan senang hati akan hadir", no: "mohon maaf, belum dapat hadir",
        guestsCap: "Jumlah tamu, termasuk Anda", guestsLbl: "Jumlah tamu", more: "Tambah tamu", fewer: "Kurangi tamu",
        words: "Sepatah dua kata untuk kami", share: "Tampilkan ucapan saya di bagian Ucapan & Doa", send: "Kirim Konfirmasi",
        errReq: "Mohon isi nama dan pilih kehadiran.", demo: "[Mode demo: isi rsvp.endpoint di content.js untuk menyimpan jawaban]",
        sending: "Mengirim…", errSend: "Gagal mengirim. Periksa koneksi Anda lalu coba lagi.", thanks: "Terima kasih, ",
        copied: "Tersalin", copyNum: "Salin nomor", copyAddr: "Salin alamat", sendGift: "Kirim hadiah", qr: "Kode QR", qrPh: "[gambar QR]",
        wishBtn: "Lihat wishlist", linkSoon: "Tautan segera hadir",
        wishName: "[Nama tamu]", wishPh: "[Ucapan akan tampil di sini setelah endpoint RSVP terhubung]",
        joy: "Bersuka Cita Merayakan Bersama", brideLbl: "Mempelai Wanita & Keluarga", groomLbl: "Mempelai Pria & Keluarga"
      },

      story: [
        { title: "Awal yang Baru",
          text: "Chiara melangkah ke pulau seberang demi mencari awal baru dan ritme hidup tenang, tanpa memikirkan cinta. Di sudut Kalimantan Timur, seluruh fokus tercurah untuk bekerja. Namun saat berakhir pekan di Balikpapan, Chiara mengikuti sesi les tenis pada pagi hari—tanpa pernah menduga bahwa di sudut lapangan tersebut, dunia mereka berdua akan perlahan berubah selamanya." },
        { title: "Waktu Terbaik-Nya",
          text: "Sepanjang hidup, Adji menjaga hati dengan begitu hati-hati. Hari-harinya tercurah penuh untuk pekerjaan dan rutinitas, tanpa pernah melabuhkan rasa kepada siapa pun sebelum Chiara. Hingga tiba jeda waktu tak terduga yang menuntun langkah Adji ke lapangan tersebut. Saat tatap pertama bertemu, rasa ragu langsung berganti kepastian. Bagi Chiara, Adji adalah wujud nyata dari setiap detail doa yang pernah dipanjatkan dalam hening." },
        { title: "Menuju Selamanya",
          text: "Sejak sapaan pertama itu, segalanya mengalir dengan begitu tenang dan pasti. Perjalanan awal untuk saling mengenal keluarga, momen-momen kebersamaan yang hangat, hingga keyakinan untuk melangkah bersama. Nyaris tepat satu tahun setelah pertemuan pertama, keduanya bersiap memulai lembaran baru seumur hidup. Segalanya berjalan begitu cepat tanpa sejengkal pun keraguan—sebab ketika hati telah yakin, segalanya terasa begitu tepat." }
      ],

      events: [
        { name: "Akad Nikah", date: "Sabtu, 19 Desember 2026", time: "08.00 WIB" },
        { name: "Resepsi", date: "Sabtu, 19 Desember 2026", time: ["Sesi 1 · 12.00–13.00 WIB", "Sesi 2 · 13.00–14.00 WIB"] }
      ],

      quotes: {
        hero:  { text: "Saat segalanya telah tepat, cinta hadir dengan begitu lembut—tenang, pasti, dan tepat waktu.", by: "" },
        story: { text: "Di tengah dunia yang penuh riuh, hadirmu adalah jawaban paling tenang atas doa-doaku.", by: "" },
        close: { text: "Dua perjalanan berbeda yang bermuara pada satu tujuan—dipertemukan dengan indah untuk selamanya.", by: "" }
      },

      bride: { name: "drg. Millienanda Chiara Adnyn", rel: "Putri kedua dari",
        parents: ["Bapak Dr. Drs. Suka Handaja Budi, M.T.", "Ibu Vira Dwi Cahyani, S.Kep., Ns., M.Kes."],
        address: "Jl. Dumai V No. 3, Balun, Cepu, Blora, Jawa Tengah" },
      groom: { name: "Adji Purba Atmajendra, S.E.", rel: "Putra pertama dari",
        parents: ["Bapak Tri Margono, S.T.", "Ibu Dra. Tursiana Agustin"],
        address: "Jl. Mulawarman RT 14 No. 53, Balikpapan Selatan, Balikpapan, Kalimantan Timur" },

      guide: {
        title: "Panduan Singkat Kota Cepu",
        note: "“Bagi keluarga dan sahabat terkasih yang datang dari jauh untuk merayakan hari bahagia kami di Gedung Soos Sasono Suko, berikut rekomendasi hotel favorit serta deretan kuliner pilihan sang mempelai wanita untuk menemani kunjungan Anda di Cepu.”",
        teaser: "Datang dari luar kota? Buka panduan singkat kota Cepu.", open: "Lihat panduan", close: "Tutup panduan",
        aboutTitle: "Sekilas Tentang Cepu",
        about: "Dikenal luas sebagai kota minyak bersejarah di Jawa Tengah, Cepu menyimpan pesona peninggalan era kolonial di antara sudut kotanya yang teduh. Di balik riwayat industrinya, kota tenang ini merupakan surga tersembunyi bagi para pencinta kuliner otentik yang kaya rempah dan melegenda.",
        stayTitle: "Rekomendasi Hotel",
        stays: [
          { name: "Hotel Ammi Cepu", text: "Hotel butik bernuansa kolonial klasik yang mewah, tenang, dan sangat nyaman dengan pelayanan terbaik. Berjarak sekitar 5 menit ke gedung acara." },
          { name: "Grand Mega Resort & Spa Cepu", text: "Resor lengkap dengan kamar keluarga yang luas, area taman asri, kolam renang, dan fasilitas relaksasi spa. Sekitar 8 menit menuju lokasi acara." }
        ],
        eatTitle: "Kuliner Pilihan Mempelai Wanita",
        eats: [
          { name: "Mie Ayam Sredek", text: "Kuliner kenyamanan andalan sang mempelai wanita yang langsung memikat lidah sang mempelai pria saat pertama kali berkunjung ke Cepu. Cita rasa khasnya terletak pada olahan bumbu ayam lada hitam bercita rasa manis, pedas, dan gurih di atas mie kenyal.", extra: "Kabar gembira: sajian lezat ini juga akan hadir langsung di resepsi pernikahan kami!" },
          { name: "Lontong Opor Kapuan Pak Pangat", text: "Kuliner legendaris dengan olahan ayam kampung empuk berselimut kuah opor merah pedas gurih yang khas, berbeda dari opor kuning pada umumnya. Disajikan bersama lontong lembut, tempat ini wajib dikunjungi saat berada di Cepu.", extra: "Tips lokal: Karena cepat habis, sangat disarankan untuk memesan H-1 terlebih dahulu!" },
          { name: "Pecel Pincuk Pojokan Kapur Tulis Sebelah PEM Akamigas", url: "https://www.google.com/maps/place/RAWON+DAN+PECEL+PINCUK+Cepu/@-7.1389982,111.5951571,17z/data=!3m1!4b1!4m6!3m5!1s0x2e77644125dc285d:0xe5dd1d40b7b97548!8m2!3d-7.1389982!4d111.597732!16s%2Fg%2F11c2p12dmd", text: "Sayuran segar dengan siraman sambal pecel kencur yang harum dan gurih, disajikan di atas pincuk daun pisang. Pilihan sempurna untuk sarapan pagi yang nikmat." },
          { name: "Ayam Panggang Mak Gogok", text: "Kuliner legendaris dengan olahan ayam kampung berbumbu rempah meresap yang dipanggang di atas tungku kayu bakar, menghasilkan aroma asap gurih yang khas dan tak terlupakan." }
        ],
        trainTitle: "Panduan Transportasi", trainSub: "Moda Transportasi Kereta Api (Sangat Disarankan)",
        trainIntro: "Bagi keluarga dan kerabat yang memilih jalur kereta, tujuan akhir perjalanan adalah Stasiun Cepu. Lokasi acara di Gedung Soos Sasono Suko sangat dekat, hanya sekitar 5 menit berkendara dari stasiun menggunakan transportasi lokal atau ojek/taksi online.",
        routes: [
          { from: "Dari Stasiun Semarang Poncol", train: "KA Ambarawa Ekspres Pagi", dep: "08.30 WIB", arr: "10.47 WIB", note: "Waktu tiba ini sangat pas sebelum resepsi dimulai pukul 12.00 WIB." },
          { from: "Dari Stasiun Surabaya Pasarturi", train: "KA Sembrani (Eksekutif)", dep: "07.50 WIB", arr: "09.40 WIB", note: "Sangat leluasa untuk check-in atau bersiap santai." },
          { from: "Dari Stasiun Surabaya Pasarturi", train: "Commuter Line Blorasura", dep: "08.10 WIB", arr: "10.45 WIB", note: "Tiba sekitar 1 jam 15 menit sebelum acara dimulai." }
        ],
        returnNote: "Perjalanan pulang: Tersedia beragam pilihan jadwal kereta sore dan malam menuju Semarang maupun Surabaya yang berangkat setelah pukul 15.00 WIB."
      },
      gifts: { addressLabel: "Alamat pengiriman hadiah", addressText: "Balikpapan [alamat lengkap akan ditambahkan]" },
      registry: [ { name: "Wishlist kami", note: "" } ]
    }
  }
};
