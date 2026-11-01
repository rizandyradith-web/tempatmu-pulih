/* ================================================
   SCRIPT.JS — Tempatmu Pulih Website
   Features:
   - Multi-language (ID / EN) dengan data object
   - Quotes Carousel
   - Tab switching (Self / Others)
   - AI Chat Companion (rule-based empathetic AI)
   - Passive Banner dismiss
   - Navbar hamburger + scroll effects
   - Scroll reveal animations
   ================================================ */

/* =============================================
   LANGUAGE DATA
   ============================================= */
const LANG = {
  id: {
    // Metadata
    "page-title": "Tempatmu Pulih — Kamu Tidak Sendiri",

    // Banner
    "banner-text": "Kalau kamu sering merasa capek hidup tanpa tahu kenapa — ada ruang khusus untukmu di sini.",
    "banner-btn": "Aku Butuh Ditemani →",

    // Navbar
    "nav-quotes": "Suara Hati",
    "nav-edu": "Pahami Ini",
    "nav-forothers": "Untuk Kamu",
    "nav-satire": "Cara Nolong",
    "nav-hotline": "Bantuan Darurat",
    "ai-btn-label": "Bicara dengan AI",

    // Hero
    "hero-tag": "Kamu datang di saat yang tepat",
    "hero-title": "Kamu tidak harus baik-baik saja\nuntuk berada di sini",
    "hero-subtitle": "Ruang ini dibuat bukan karena kami tahu persis apa yang kamu rasakan, tapi karena kami percaya bahwa perasaanmu nyata, dan kamu layak untuk didengar.",
    "hero-cta1": "Aku sedang berjuang",
    "hero-cta2": "Aku ingin membantu orang lain",

    // Quotes
    "quotes-label": "Suara Hati",
    "quotes-title": "Kata-kata yang mungkin pernah tinggal di dadamu",
    "quotes-desc": "Dari novel, film, anime, dan kata-kata mereka yang pernah merasakan kegelapan yang sama — kamu bukan satu-satunya yang merasakannya.",
    "q1-text": "Sekarang yang aku inginkan hanyalah beristirahat, tetapi aku tidak tahu istirahat seperti apa yang harus aku ambil agar terlepas dari semua perasaan busuk ini.",
    "q1-src": "Seporsi Mie Ayam Sebelum Mati — Ale",
    "q2-text": "Aku merasa seperti tenggelam di bawah cahaya bulan. Terlihat cantik dari jauh, tapi tak ada yang tahu betapa dinginnya air di sini.",
    "q2-src": "Your Lie in April — Kaori Miyazono",
    "q3-text": "Bahkan di tengah segalanya yang terasa hancur, kamu masih ada di sini. Dan itu bukan hal kecil.",
    "q3-src": "The Perks of Being a Wallflower — Stephen Chbosky",
    "q4-text": "Mencintai kehidupan lebih dari maknanya, itulah setengah dari keberanian yang kamu butuhkan untuk terus berjalan.",
    "q4-src": "The Brothers Karamazov — Fyodor Dostoevsky",
    "q5-text": "Dunia ini tidak sempurna. Tapi ia masih ada untukmu, dan selama itu, kamu masih punya kemungkinan.",
    "q5-src": "Neon Genesis Evangelion — Rei Ayanami",
    "q6-text": "Tidur, bangun, tidur, bangun, hidup yang menyedihkan... tapi aku tidak boleh menyerah. Segala sesuatu yang kamu cintai kemungkinan besar akan hilang, tetapi pada akhirnya, cinta akan kembali dengan cara yang lain.",
    "q6-src": "Letters to Milena & Diari — Franz Kafka",
    "q7-text": "Mulai sekarang, aku ingin hidup dengan benar. Aku ingin mendengar suara mereka, aku ingin melihat wajah dunia lagi... tolong bantu aku bertahan sedikit lagi.",
    "q7-src": "A Silent Voice (Koe no Katachi) — Shoya Ishida",
    "q8-text": "Di tengah musim dingin yang paling menusuk, pada akhirnya aku tersadar bahwa di dalam diriku ada musim panas yang tak terkalahkan.",
    "q8-src": "Return to Tipasa — Albert Camus",
    "q9-text": "Hidup ini penuh dengan kepedihan dan keputusasaan. Namun sandiwara hebat kehidupan terus berjalan, dan kamu boleh menyumbangkan satu bait puisimu di sana.",
    "q9-src": "Dead Poets Society — John Keating",

    // Education
    "edu-label": "Pahami Ini",
    "edu-title": "Apa yang sebenarnya terjadi?",
    "edu-desc": "Pikiran untuk mengakhiri hidup bukan tanda kelemahan, kebodohan, atau kurang iman. Ini adalah sinyal bahwa seseorang sedang menanggung rasa sakit yang melebihi kemampuannya saat ini.",
    "edu1-title": "Apa itu Suicidal Thoughts?",
    "edu1-desc": "Pikiran bunuh diri adalah pikiran tentang mengakhiri hidup sendiri. Bisa berupa pikiran pasif berupa pikiran \"Aku ingin tidak ada\" atau aktif (rencana konkret). Ini bukan pilihan, ini adalah gejala dari rasa sakit yang sangat dalam.",
    "edu2-title": "Ini Lebih Umum dari yang Kamu Kira",
    "edu2-desc": "Menurut WHO, lebih dari 700.000 orang meninggal karena bunuh diri setiap tahun, artinya jauh lebih banyak yang berjuang setiap hari. Kamu tidak sendirian dalam pertarungan ini.",
    "edu3-title": "Tanda-tanda yang Perlu Diperhatikan",
    "edu3-desc": "Menarik diri dari orang-orang terdekat, berkata \"semua orang lebih baik tanpaku\", memberi-beri barang berharga, atau tiba-tiba tampak sangat tenang setelah periode depresi, ini bisa menjadi sinyal bahwa seseorang butuh bantuan segera.",
    "edu4-title": "Ini Bukan Soal Lemah atau Kuat",
    "edu4-desc": "Depresi dan pikiran bunuh diri memiliki dasar neurobiologis yang melibatkan ketidakseimbangan neurotransmiter di otak. Sama seperti diabetes bukan \"kurang bersyukur\", depresi bukan \"kurang kuat\". Ini penyakit yang bisa diobati.",

    // Action / Self Steps
    "action-label": "Langkah Perlindungan Diri",
    "action-title": "Untuk kamu yang sedang berjuang di detik ini",

    // Satirical / Real-Talk Section
    "satire-label": "Catatan Keras Tapi Benar",
    "satire-title": "Buat yang Mau \"Nolong\", Tapi Malah Bikin Tambah Berat",
    "satire-desc": "Kalau ada teman atau keluarga yang cerita lagi hancur, tolong jangan lakukan hal-hal sok bijak di bawah ini. Niat baik tanpa empati cuma nambah luka.",
    "sat-badge-stop": "❌ Tolong Stop",
    "sat-badge-do1": "💡 LAKUKAN INI (DO'S 1)",
    "sat-badge-do2": "💡 LAKUKAN INI (DO'S 2)",
    "sat-badge-do3": "💡 LAKUKAN INI (DO'S 3)",
    "sat1-title": "\"Kurang ibadah dan kurang bersyukur kamu tuh.\"",
    "sat1-sub": "Padahal: Penyakit mental bukan azab atau tanda kurang iman.",
    "sat1-desc": "Orang depresi itu neurotransmiter di otaknya lagi kacau, sama kayak orang asma yang paru-parunya sesak. Kamu gak bakal nyuruh orang kena tipes atau patah tulang buat 'cuma istighfar dan bersyukur' kan? Ceramah di saat krisis cuma bikin mereka merasa bersalah dan makin pengen menghilang.",
    "sat2-title": "\"Ah kamu mah lebay, liat noh si anu lebih menderita!\"",
    "sat2-sub": "Padahal: Penderitaan bukan ajang olimpiade yang harus dibandingin siapa paling tersiksa.",
    "sat2-desc": "Fakta bahwa ada orang lain yang lebih menderita gak serta merta bikin rasa sakit dia menguap. Menyepelekan rasa sakit orang lain gak bakal bikin mereka termotivasi, itu cuma bikin mereka ngerasa dirinya gak pantes hidup dan gak pantes ditolong.",
    "sat3-title": "\"Dulu aku juga pernah gitu kok, tapi buktinya aku kuat tuh.\"",
    "sat3-sub": "Padahal: Dia lagi butuh didengar, bukan lagi nonton seminar motivasi kamu.",
    "sat3-desc": "Jangan bajak sesi curhat orang jadi panggung pamer ketahanan mentalmu. Tiap orang punya kapasitas saraf, trauma masa lalu, dan lingkungan yang beda. Kalau kamu kuat, alhamdulillah. Tapi jangan jadiin standar dirimu buat nge-judge rapuhnya orang lain.",
    "sat4-title": "Cukup Duduk, Diam, dan Dengarkan.",
    "sat4-sub": "Kamu gak diminta jadi psikiater atau penemu solusi hidupnya.",
    "sat4-desc": "Cukup bilang: \"Aku gak sepenuhnya paham apa yang kamu laluin, tapi aku ada di sini buat nemenin kamu. Makasih ya udah mau cerita ke aku.\" Kalimat sederhana itu jauh lebih menyelamatkan nyawa daripada seribu dalil dan nasihat sok tau. Katakan dengan lembut:
"Nggak apa-apa kalau hari ini kamu ngerasa capek banget. Kamu udah nahan beban ini sendirian sekian lama, wajar kalau kamu kehabisan tenaga."",
    "sat5-title": "Tanyakan Kebutuhan Praktisnya Saat Ini.",
    "sat5-sub": "Saat otak kelebihan beban, hal sepele terasa seperti memindahkan gunung.",
    "sat5-desc": "Jangan tanya pertanyaan abstrak seperti \"kamu mau masa depanmu gimana?\". Tanyakan hal nyata dan konkrit: \"Kamu udah makan hari ini belum? Mau aku bawain makanan?\" atau \"Perlu aku temenin ke kamar periksa/psikolog?\" Tindakan nyata membuat mereka merasa tidak sendirian di dunia nyata.",
    "sat6-title": "Validasi Bahwa Lelahnya Masuk Akal.",
    "sat6-sub": "Beri izin bagi mereka untuk merasa rapuh tanpa merasa bersalah.",

    // Education — Open Letter
    "letter-p1": "Kita mungkin tidak saling kenal. Aku tidak tahu namamu, tidak tahu apa yang sudah kamu lalui, tidak tahu berapa malam yang kamu lewati sendirian dengan pikiran yang terasa terlalu berat untuk ditanggung.",
    "letter-p2": "Tapi aku tahu satu hal: kamu sudah berjuang sebaik yang kamu bisa. Dengan apa yang kamu punya. Dengan sisa tenaga yang ada. Dan itu, meski terasa kecil bagimu, adalah sesuatu yang luar biasa.",
    "letter-p3": "Mungkin ada hari-hari di mana kamu bangun pagi dan itu saja sudah terasa seperti pencapaian terbesar. Mungkin ada momen di mana kamu harus pura-pura baik-baik saja di depan orang lain, padahal di dalam kamu sedang hampir hancur. Mungkin kamu sudah lelah menjelaskan rasa sakitmu kepada orang-orang yang tidak mengerti sampai kamu memilih diam, bukan karena tidak apa-apa, tapi karena lelah berusaha dipahami.",
    "letter-p4": "Itu tidak membuatmu lemah. Itu tidak membuatmu berlebihan. Itu tidak membuatmu gila atau salah atau tidak layak untuk bertahan.",
    "letter-p5": "Rasa sakitmu nyata. Kelelahan itu nyata. Dan kamu, kamu juga nyata, dan berharga, bahkan di hari-hari ketika kamu paling sulit mempercayai itu.",
    "letter-p6": "Halaman ini bukan untuk menghakimimu. Bukan untuk memberitahumu bahwa kamu \"harusnya\" merasa seperti ini atau itu. Ini hanya ingin bilang: kamu tidak harus menanggung ini sendirian. Dan ada hal-hal yang mungkin belum kamu tahu, tentang apa yang sebenarnya terjadi di dalam dirimu, yang mungkin bisa membuatmu sedikit lebih memahami diri sendiri.",
    "letter-sig": "— Dengan penuh ketulusan, Tempatmu Pulih 🌿",

    // Self tab — expanded intro
    "self-intro-title": "Hei. Hanya dengan membuka halaman ini, kamu sudah melakukan sesuatu yang tidak mudah.",
    "self-intro-p1": "Gak ada yang mengharapkan kamu tiba-tiba baik-baik saja. Gak ada yang akan menilai seberapa parah kondisimu, atau apakah kamu \"cukup\" menderita untuk boleh minta tolong. Kamu boleh ada di sini, apa adanya, dengan semua yang sedang kamu rasakan sekarang.",
    "self-intro-p2": "Mungkin kamu sudah lama menyimpan semua ini sendirian. Mungkin kamu sudah mencoba cerita tapi tidak dimengerti. Mungkin kamu bahkan tidak tahu harus mulai dari mana karena rasa sakitnya sudah terlalu banyak untuk dirangkum dalam kata-kata.",
    "self-intro-p3": "Itu wajar. Kamu tidak harus menjelaskan apapun. Yang paling penting sekarang, satu-satunya hal yang perlu kamu lakukan, adalah tetap aman dan membiarkan langkah-langkah kecil di bawah ini menemanimu pelan-pelan.",

    "self-s1-title": "Pergi dari situasi yang tidak aman",
    "self-s1-desc": "Kalau ada benda atau tempat yang membuatmu merasa tidak aman, jauhkan dirimu dari sana dulu. Pergi ke tempat ramai, atau hubungi seseorang.",
    "self-s2-title": "Hubungi seseorang sekarang",
    "self-s2-desc": "Boleh teman, anggota keluarga, atau hotline di bawah ini. Kamu tidak harus menjelaskan semuanya, cukup bilang \"aku butuh ditemani sekarang.\"",
    "self-s3-title": "Buat \"Rencana Keselamatan\" sederhana",
    "self-s3-desc": "Tuliskan: siapa yang akan kamu hubungi, tempat yang membuatmu merasa aman, dan satu hal kecil yang bisa kamu lakukan saat pikiran itu datang (ex: minum air, keluar dari kamar).",
    "self-s4-title": "Cari bantuan profesional",
    "self-s4-desc": "Psikolog atau psikiater bukan tanda kamu gila, mereka adalah orang yang terlatih untuk menemanimu keluar dari kegelapan ini. Kamu berhak mendapat bantuan itu.",
    "self-s5-title": "Izinkan dirimu merasa",
    "self-s5-desc": "Kamu tidak harus \"kuat\" atau \"bersyukur\" sekarang. Izinkan dirimu sedih, marah, atau lelah. Perasaan itu valid, semua yang kamu rasakan itu valid. Kamu tidak harus pura-pura baik-baik saja.",
    "self-s6-title": "Bicara dengan AI Companion kami",
    "self-s6-desc": "Kalau kamu belum siap bicara dengan manusia, AI companion kami bisa jadi pendengar pertama yang aman dan tidak menghakimi, 24 jam sehari.",
    "self-s6-btn": "Mulai Bicara →",

    // Others tab
    "others-intro-title": "Kamu peduli — dan itu sudah luar biasa.",
    "others-intro-desc": "Tidak mudah menyaksikan seseorang yang kamu sayangi berjuang. Berikut adalah hal-hal yang bisa kamu lakukan — dan yang harus kamu hindari.",
    "oth-d1-title": "Dengarkan tanpa menghakimi",
    "oth-d1-desc": "Kamu tidak perlu punya jawaban. Cukup ada — tanpa menyela, tanpa memvalidasi, tanpa berkata \"tapi kamu punya banyak yang harus disyukuri.\" Cukup dengarkan.",
    "oth-d2-title": "Tanya langsung dan dengan tenang",
    "oth-d2-desc": "Penelitian membuktikan: menanyakan \"apakah kamu punya pikiran untuk menyakiti dirimu sendiri?\" tidak memicu pikiran itu. Justru memberinya ruang untuk jujur.",
    "oth-d3-title": "Bantu akses bantuan profesional",
    "oth-d3-desc": "Tawari untuk menemani mereka ke psikolog, atau bantu mereka menghubungi hotline. Kadang hambatan terbesar adalah tidak tahu harus mulai dari mana.",
    "oth-x1-title": "Jangan remehkan atau bandingkan",
    "oth-x1-desc": "Kalimat seperti \"banyak yang lebih susah dari kamu\" atau \"itu cuma lebay\" bisa membuat mereka semakin merasa tidak layak untuk ditolong.",
    "oth-x2-title": "Jangan tinggalkan sendirian jika krisis",
    "oth-x2-desc": "Kalau kamu merasa mereka dalam bahaya sekarang, jangan pergi. Tetap bersama mereka, atau hubungi layanan darurat jika perlu.",
    "oth-x3-title": "Jangan menanggungnya sendirian",
    "oth-x3-desc": "Kamu juga berhak mendapat dukungan. Membantu seseorang yang sedang krisis bisa sangat melelahkan — cari komunitas atau konselor untuk dirimu sendiri juga.",

    // Hotline
    "hotline-label": "Bantuan Darurat",
    "hotline-title": "Kalau sekarang rasanya tidak bisa ditanggung lagi",
    "hotline-desc": "Hubungi salah satu layanan di bawah ini. Mereka terlatih, tidak akan menghakimi, dan siap mendengarkan kapanpun kamu butuh.",
    "hl1-desc": "Konseling & dukungan emosional",
    "hl2-desc": "Konseling psikologis",
    "hl3-desc": "Layanan kesehatan jiwa terdekat",
    "hl4-desc": "Chat-based crisis support (English)",
    "hl-24h": "24 Jam",
    "hl-office": "Jam Kerja",
    "hotline-note": "📞 Jika kamu atau seseorang dalam bahaya langsung, hubungi 112 atau pergi ke IGD rumah sakit terdekat.",

    // AI Chat
    "ai-btn": "Bicara dengan AI",
    "ai-panel-title": "AI Companion — Tempatmu Pulih",
    "ai-welcome": "Hei 🌿 Aku di sini. Kamu tidak harus menjelaskan semuanya — ceritakan saja apa yang kamu mau. Aku mendengarkan.",
    "ai-disclaimer": "⚠️ AI ini bukan pengganti bantuan profesional. Jika kamu dalam bahaya, hubungi 119 ext. 8 sekarang.",
    "ai-input-placeholder": "Cerita di sini...",

    // Footer
    "footer-tagline": "Kamu tidak harus sendirian menanggung ini semua.",
    "footer-nav-label": "Navigasi",
    "footer-disc-title": "Catatan Penting",
    "footer-disc-text": "Website ini dibuat untuk tujuan edukasi dan dukungan emosional. AI Companion kami bukan pengganti bantuan profesional. Jika kamu dalam krisis, hubungi layanan darurat.",
    "footer-copy": "Dibuat dengan ❤️ sebagai produk berbasis AI untuk kepedulian kesehatan mental.",
  },

  en: {
    "page-title": "Tempatmu Pulih — You Are Not Alone",
    "banner-text": "If you often feel tired of life without knowing why — there's a space here made just for you.",
    "banner-btn": "Be With Me →",
    "nav-quotes": "Heart Voices",
    "nav-edu": "Understand This",
    "nav-forothers": "For You",
    "nav-satire": "How to Help",
    "nav-hotline": "Emergency Help",
    "ai-btn-label": "Talk to AI",
    "hero-tag": "You came at the right time.",
    "hero-title": "You don't have to be okay\nto be here.",
    "hero-subtitle": "This space was not created because we know exactly what you feel — but because we believe your feelings are real, and you deserve to be heard.",
    "hero-cta1": "I am struggling",
    "hero-cta2": "I want to help someone",
    "quotes-label": "Heart Voices",
    "quotes-title": "Words that may have lived inside your chest",
    "quotes-desc": "From novels, films, anime, and the words of those who once felt the same darkness — you are not the only one who has felt this.",
    "q1-text": "Maybe what I'm looking for is not a way to die. Maybe what I'm looking for is a reason to keep living.",
    "q1-src": "A Bowl of Chicken Noodles Before Death — J.S. Khairen",
    "q2-text": "I feel like I'm drowning beneath the moonlight — beautiful from afar, but no one knows how cold the water is here.",
    "q2-src": "Your Lie in April — Kaori Miyazono",
    "q3-text": "Even in the middle of everything that feels broken, you are still here. And that is not a small thing.",
    "q3-src": "The Perks of Being a Wallflower — Stephen Chbosky",
    "q4-text": "To love life more than the meaning of it — that is half of the courage you need to keep going.",
    "q4-src": "The Brothers Karamazov — Fyodor Dostoevsky",
    "q5-text": "This world is not perfect. But it is still here for you — and as long as that's true, you still have possibilities.",
    "q5-src": "Neon Genesis Evangelion — Rei Ayanami",
    "q6-text": "Sleep, wake up, sleep, wake up, what a wretched life... but I must not give up. Everything that you love will probably be lost, but in the end, love will return in another way.",
    "q6-src": "Letters to Milena & Diaries — Franz Kafka",
    "q7-text": "From now on, I want to live properly. I want to hear their voices, I want to see the face of the world again... please help me endure just a little longer.",
    "q7-src": "A Silent Voice (Koe no Katachi) — Shoya Ishida",
    "q8-text": "In the midst of the deepest winter, I finally discovered that there was in me an invincible summer.",
    "q8-src": "Return to Tipasa — Albert Camus",
    "q9-text": "Life is full of sorrow and disillusionment. Yet the powerful play goes on, and you may contribute a verse.",
    "q9-src": "Dead Poets Society — John Keating",
    "edu-label": "Understand This",
    "edu-title": "What is actually happening?",
    "edu-desc": "Thoughts of ending life are not a sign of weakness, stupidity, or lack of faith. They are a signal that someone is carrying pain that exceeds their current capacity.",
    // Education — Open Letter
    "letter-p1": "We may not know each other. I don't know your name, I don't know what you've been through, I don't know how many nights you've spent alone with thoughts that felt too heavy to bear.",
    "letter-p2": "But I know one thing: you have been fighting as well as you possibly could. With what you had. With whatever energy was left. And that — even if it feels small to you — is something extraordinary.",
    "letter-p3": "Maybe there are days when simply getting out of bed already feels like the greatest achievement. Maybe there are moments when you have to pretend to be okay in front of others, while inside you're barely holding together. Maybe you've grown tired of trying to explain your pain to people who don't understand — so you chose silence, not because you're fine, but because you're exhausted from trying to be heard.",
    "letter-p4": "That doesn't make you weak. That doesn't make you dramatic. That doesn't make you broken or wrong or undeserving of surviving.",
    "letter-p5": "Your pain is real. The exhaustion is real. And you — you are real, and you matter, even on the days when you struggle most to believe that.",
    "letter-p6": "This page is not here to judge you. Not to tell you how you \"should\" feel. It's simply here to say: you don't have to carry this alone. And there are things you may not yet know — about what's really happening inside you — that might help you understand yourself a little more.",
    "letter-sig": "— With all sincerity, Tempatmu Pulih 🌿",
    "edu1-title": "What are Suicidal Thoughts?",
    "edu1-desc": "Suicidal thoughts are thoughts about ending one's own life. They can be passive (\"I wish I didn't exist\") or active (a concrete plan). This is not a choice — it is a symptom of very deep pain.",
    "edu2-title": "It's More Common Than You Think",
    "edu2-desc": "According to the WHO, more than 700,000 people die by suicide each year — meaning far more are struggling every day. You are not alone in this fight.",
    "edu3-title": "Signs to Watch For",
    "edu3-desc": "Withdrawing from loved ones, saying \"everyone is better off without me\", giving away valued possessions, or suddenly appearing calm after a period of depression — these can be signals that someone needs help immediately.",
    "edu4-title": "It's Not About Weakness or Strength",
    "edu4-desc": "Depression and suicidal thoughts have a neurobiological basis — involving imbalances of neurotransmitters in the brain. Just as diabetes is not \"insufficient gratitude\", depression is not \"insufficient strength\". It is an illness that can be treated.",
    // Action / Self Steps
    "action-label": "Self-Protection Steps",
    "action-title": "For you who is fighting right at this very moment",

    // Satirical / Real-Talk Section
    "satire-label": "Hard Truths to Swallow",
    "satire-title": "For Those Who Want to \"Help\", But Actually Make Things Worse",
    "satire-desc": "If a friend or family member confides in you about their mental breakdown, please don't pull these pseudo-wise remarks. Good intentions without genuine empathy only cause deeper wounds.",
    "sat-badge-stop": "❌ Please Stop",
    "sat-badge-do1": "💡 DO THIS INSTEAD (DO'S 1)",
    "sat-badge-do2": "💡 DO THIS INSTEAD (DO'S 2)",
    "sat-badge-do3": "💡 DO THIS INSTEAD (DO'S 3)",
    "sat1-title": "\"You just need to pray more and be more grateful.\"",
    "sat1-sub": "Reality check: Mental illness is not a divine punishment or a lack of faith.",
    "sat1-desc": "In clinical depression, brain neurotransmitters are physically out of balance, exactly like asthma tightens the lungs. You wouldn't tell someone with typhoid fever or a fractured bone to 'just pray it off and be thankful', right? Preaching in the middle of a crisis only induces guilt and accelerates their urge to disappear.",
    "sat2-title": "\"You're just being dramatic, look at others having it worse!\"",
    "sat2-sub": "Reality check: Suffering is not an Olympic tournament of who endures the most pain.",
    "sat2-desc": "The fact that someone else suffers doesn't magically vaporize another person's pain. Invalidating someone's suffering doesn't motivate them; it simply convinces them they don't deserve help or existence.",
    "sat3-title": "\"I went through that too back then, but look at me now, I was strong.\"",
    "sat3-sub": "Reality check: They need someone to listen, not your personal motivational seminar.",
    "sat3-desc": "Don't hijack someone's vulnerable confession into a stage for your mental toughness flexing. Everyone carries distinct nervous capacities, past traumas, and support environments. Don't use your personal bar to judge someone else's fragility.",
    "sat4-title": "Just Sit Down, Be Quiet, and Listen.",
    "sat4-sub": "Nobody asked you to be their psychiatrist or life-solver.",
    "sat4-desc": "Just say: \"I may not fully comprehend what you're battling, but I'm right here with you. Thank you for trusting me enough to share.\" That single sentence saves infinitely more lives than a thousand unsolicited sermons.",
    "sat5-title": "Ask for Their Immediate Practical Needs.",
    "sat5-sub": "When the mind is overstimulated, trivial chores feel like moving a mountain.",
    "sat5-desc": "Don't ask abstract inquiries like \"what's your 5-year plan?\". Ask tangible and grounded questions: \"Have you eaten anything today? Can I bring you warm food?\" or \"Do you want me to hold your hand to the doctor/counselor's clinic?\" Tangible care anchors them back to reality.",
    "sat6-title": "Validate That Their Exhaustion Makes Complete Sense.",
    "sat6-sub": "Grant them permission to be fragile without inflicting guilt.",
    "sat6-desc": "Speak softly: \"It's completely okay if you feel thoroughly drained today. You've held this gigantic storm alone for so long, anyone would run out of breath.\" When pain is validated rather than treated like a criminal offense, the urge to disappear gently subsides.",
    "self-intro-title": "Hey. Just by opening this page, you've already done something that wasn't easy.",
    "self-intro-p1": "No one expects you to suddenly be okay. No one will judge how severe your situation is, or whether you're \"suffering enough\" to ask for help. You're allowed to be here, exactly as you are, with everything you're feeling right now.",
    "self-intro-p2": "Maybe you've been carrying all of this alone for a long time. Maybe you've tried to talk about it but weren't understood. Maybe you don't even know where to start — because the pain has been too much to fit into words.",
    "self-intro-p3": "That's okay. You don't have to explain anything. The most important thing right now, the only thing you need to do, is stay safe — and let the small steps below gently walk alongside you.",
    "self-s1-title": "Move away from unsafe situations",
    "self-s1-desc": "If there are objects or places that make you feel unsafe, move away from them first. Go somewhere crowded, or contact someone.",
    "self-s2-title": "Contact someone right now",
    "self-s2-desc": "A friend, family member, or the hotlines below. You don't have to explain everything — just say \"I need someone with me right now.\"",
    "self-s3-title": "Create a simple \"Safety Plan\"",
    "self-s3-desc": "Write down: who you will contact, a place that feels safe for you, and one small thing you can do when those thoughts arrive (e.g. drink water, step out of the room).",
    "self-s4-title": "Seek professional help",
    "self-s4-desc": "Seeing a psychologist or psychiatrist doesn't mean you're crazy — they are trained to accompany you out of this darkness. You deserve that help.",
    "self-s5-title": "Allow yourself to feel",
    "self-s5-desc": "You don't have to be \"strong\" or \"grateful\" right now. Allow yourself to be sad, angry, or exhausted — those feelings are valid. You don't have to pretend to be okay.",
    "self-s6-title": "Talk with our AI Companion",
    "self-s6-desc": "If you're not ready to talk to a human yet, our AI companion can be a safe, non-judgmental first listener — 24 hours a day.",
    "self-s6-btn": "Start Talking →",
    "others-intro-title": "You care — and that is already extraordinary.",
    "others-intro-desc": "It is not easy to witness someone you love struggling. Here are things you can do — and things to avoid.",
    "oth-d1-title": "Listen without judgment",
    "oth-d1-desc": "You don't need to have answers. Just be there — without interrupting, without invalidating, without saying \"but you have so much to be grateful for.\" Just listen.",
    "oth-d2-title": "Ask directly and calmly",
    "oth-d2-desc": "Research proves: asking \"do you have thoughts of hurting yourself?\" does not plant the idea. It actually gives them space to be honest.",
    "oth-d3-title": "Help them access professional support",
    "oth-d3-desc": "Offer to accompany them to a psychologist, or help them contact a hotline. Sometimes the biggest barrier is not knowing where to start.",
    "oth-x1-title": "Don't minimize or compare",
    "oth-x1-desc": "Phrases like \"others have it worse\" or \"you're just being dramatic\" can make them feel even less deserving of help.",
    "oth-x2-title": "Don't leave them alone in a crisis",
    "oth-x2-desc": "If you feel they are in danger right now, don't leave. Stay with them, or contact emergency services if necessary.",
    "oth-x3-title": "Don't carry it alone",
    "oth-x3-desc": "You also deserve support. Helping someone in crisis can be deeply exhausting — seek a community or counselor for yourself too.",
    "hotline-label": "Emergency Help",
    "hotline-title": "If right now it feels like too much to carry —",
    "hotline-desc": "Contact one of the services below. They are trained, non-judgmental, and ready to listen whenever you need.",
    "hl1-desc": "Counseling & emotional support",
    "hl2-desc": "Psychological counseling",
    "hl3-desc": "Nearest mental health service",
    "hl4-desc": "Chat-based crisis support (English)",
    "hl-24h": "24 Hours",
    "hl-office": "Office Hours",
    "hotline-note": "📞 If you or someone is in immediate danger, call 112 or go to the nearest hospital emergency room.",
    "ai-btn": "Talk to AI",
    "ai-panel-title": "AI Companion — Tempatmu Pulih",
    "ai-welcome": "Hey 🌿 I'm here. You don't have to explain everything — just share whatever you want. I'm listening.",
    "ai-disclaimer": "⚠️ This AI is not a replacement for professional help. If you are in danger, call 119 ext. 8 right now.",
    "ai-input-placeholder": "Share here...",
    "footer-tagline": "You don't have to carry all of this alone.",
    "footer-nav-label": "Navigate",
    "footer-disc-title": "Important Note",
    "footer-disc-text": "This website was created for educational and emotional support purposes. Our AI Companion is not a replacement for professional help. If you are in crisis, contact emergency services.",
    "footer-copy": "Made with ❤️ as an AI-based product for mental health awareness.",
  }
};

/* =============================================
   AI RESPONSE SYSTEM
   Empathetic rule-based AI responses
   ============================================= */
const AI_RESPONSES = {
  id: {
    greetings: [
      "Hei, senang kamu mau berbagi. Aku di sini, dan aku mendengarkan. Mau cerita apa yang sedang kamu rasakan sekarang? 🌿",
      "Hei. Aku di sini bersamamu. Gak ada yang perlu kamu sembunyikan di sini — ceritakan saja pelan-pelan.",
    ],
    sad: [
      "Aku dengar kamu. Rasa sedih itu nyata, dan kamu gak harus menanggungnya sendirian. Boleh cerita lebih? Apa yang membuatmu merasa seperti ini?",
      "Sedih itu lelah sekali ya... Aku di sini. Kamu gak perlu pura-pura baik-baik saja di hadapanku.",
      "Aku mendengar betapa beratnya yang kamu rasakan. Kamu sudah sangat kuat hanya dengan masih ada di sini hari ini.",
    ],
    tired: [
      "Lelah yang kamu rasakan itu nyata. Dan gak apa-apa untuk merasa kelelahan — kamu sudah menanggung banyak. Aku di sini bersamamu.",
      "Kadang lelah bukan cuma soal fisik ya... Ada yang ingin kamu ceritakan tentang apa yang membuatmu merasa begini?",
      "Kamu boleh istirahat di sini sebentar. Aku gak kemana-mana.",
    ],
    alone: [
      "Kamu tidak sendirian sekarang — aku di sini, dan aku mendengarkan setiap kata yang kamu ucapkan. Apa yang paling berat untuk kamu tanggung hari ini?",
      "Rasa sendirian itu sangat menyakitkan. Aku ingin kamu tahu: aku di sini bersamamu, dan kamu berhak untuk didengar.",
    ],
    die: [
      "Aku dengar kamu. Rasa lelahmu udah numpuk banget ya sampai rasanya pengen nyerah... Aku gak akan ngehakimi kamu, gak akan nyeramahin atau nyuruh kamu 'harus kuat'. Boleh pelan-pelan tarik napas dulu? Aku ada di sini duduk nemenin kamu, kamu gak sendirian detik ini. 🌿\n\n📞 Kalau rasanya udah terlalu gelap dan gak tertahankan, tolong jangan lalui ini sendirian. Ada orang-orang baik dan terlatih yang siap dengerin kamu tanpa menghakimi di 119 ext. 8 (Layanan Pulih). Kamu berharga, bahkan di saat kamu ngerasa paling hancur.",
      "Terima kasih ya sudah jujur dan percaya buat ngomong ini ke aku. Memendam rasa ingin menyerah itu luar biasa sakitnya. Aku gak akan bilang 'hidup itu indah' sekarang karena aku tahu saat ini rasanya gak begitu buat kamu. Tapi tolong, tetap di sini dulu ya? 🌿\n\n📞 Kamu berhak mendapatkan ruang aman dan bantuan. Hubungi 119 ext. 8 kapan saja kamu butuh teman bicara.",
    ],
    hurt: [
      "Kamu menyebutkan tentang menyakiti diri sendiri — aku sangat peduli dengan keselamatanmu. Apakah kamu aman sekarang?\n\n📞 Tolong hubungi 119 ext. 8 jika kamu membutuhkan bantuan segera.",
    ],
    help: [
      "Aku senang kamu mau mencari bantuan — itu tanda keberanian yang luar biasa. Di bagian bawah halaman ini ada nomor hotline yang bisa kamu hubungi. Boleh aku bantu lebih lanjut?",
    ],
    better: [
      "Aku senang kamu merasa sedikit lebih baik. Ingat: satu langkah kecil sudah berarti besar. Kamu boleh terus cerita kapanpun 🌿",
    ],
    default: [
      "Aku mendengar kamu. Boleh cerita lebih lanjut? Aku di sini, dan aku tidak ke mana-mana.",
      "Terima kasih sudah berbagi ini. Kamu gak harus merasakannya sendirian. Apa lagi yang ingin kamu ceritakan?",
      "Aku di sini bersamamu. Perasaanmu valid — aku mendengarkan.",
      "Kamu sudah sangat berani hanya dengan mengatakannya. Aku di sini untuk mendengarkan lebih.",
    ]
  },
  en: {
    greetings: [
      "Hey, I'm glad you're sharing with me. I'm here, and I'm listening. What would you like to tell me about what you're feeling? 🌿",
      "Hey. I'm here with you. There's nothing you need to hide here — just share at your own pace.",
    ],
    sad: [
      "I hear you. That sadness is real, and you don't have to carry it alone. Can you tell me more? What's making you feel this way?",
      "Sadness can be so exhausting... I'm here. You don't have to pretend to be okay around me.",
      "I hear how heavy that feels. You've already shown so much strength just by being here today.",
    ],
    tired: [
      "The exhaustion you're feeling is real. And it's okay to feel tired — you've been carrying so much. I'm here with you.",
      "Sometimes tired isn't just physical, is it... Is there anything you'd like to share about what's making you feel this way?",
      "You can rest here for a moment. I'm not going anywhere.",
    ],
    alone: [
      "You are not alone right now — I'm here, and I'm listening to every word you say. What's weighing on you the most today?",
      "That feeling of being alone is really painful. I want you to know: I'm here with you, and you deserve to be heard.",
    ],
    die: [
      "I hear you. The weight on your chest must have piled up so heavily that everything feels too unbearable... I will not judge you, I will not preach, and I will not tell you to 'stay strong'. Can you take one gentle breath with me? I am right here sitting beside you, you are not alone in this second. 🌿\n\n📞 If things feel completely dark right now, please don't carry this alone. There are kind, trained people ready to listen with zero judgment at 119 ext. 8 or Crisis Text Line. You matter, especially on the days you feel most broken.",
      "Thank you for being brave and honest enough to share this with me. Carrying the urge to give up is immensely painful. I won't tell you 'life is wonderful' right now because I know it doesn't feel that way to you. But please, stay right here with me for a bit longer? 🌿\n\n📞 You deserve a safe space and genuine care. Reach out to 119 ext. 8 or crisistextline.org anytime you need a voice.",
    ],
    hurt: [
      "You mentioned hurting yourself — I care deeply about your safety. Are you safe right now?\n\n📞 Please call 119 ext. 8 if you need immediate help.",
    ],
    help: [
      "I'm glad you're reaching out for help — that takes incredible courage. At the bottom of this page there are hotline numbers you can call. Can I help further?",
    ],
    better: [
      "I'm glad you're feeling a little better. Remember: one small step already means so much. You can keep sharing whenever you'd like 🌿",
    ],
    default: [
      "I hear you. Would you like to share more? I'm here, and I'm not going anywhere.",
      "Thank you for sharing this. You don't have to feel this alone. What else would you like to tell me?",
      "I'm here with you. Your feelings are valid — I'm listening.",
      "It took so much courage just to say that. I'm here to listen more.",
    ]
  }
};

/* =============================================
   STATE
   ============================================= */
let currentLang = 'id';
let currentQuote = 0;
const totalQuotes = 9;

/* =============================================
   LANGUAGE SYSTEM
   ============================================= */
function setLang(lang) {
  currentLang = lang;

  // Update active button
  document.getElementById('btn-id').classList.toggle('active', lang === 'id');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');

  const data = LANG[lang];
  document.title = data['page-title'];

  // Update all elements with data-id
  document.querySelectorAll('[data-id]').forEach(el => {
    const key = el.getAttribute('data-id');
    if (data[key] !== undefined) {
      // Preserve inner HTML for elements with strong/em tags
      if (el.tagName === 'A' || el.tagName === 'BUTTON') {
        el.textContent = data[key];
      } else {
        el.innerHTML = data[key].replace(/\n/g, '<br>');
      }
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-id-placeholder]').forEach(el => {
    const key = el.getAttribute('data-id-placeholder');
    if (data[key]) el.placeholder = data[key];
  });

  // Update quote sources (they use em tags)
  const qSrcs = ['q1-src','q2-src','q3-src','q4-src','q5-src','q6-src','q7-src','q8-src','q9-src'];
  qSrcs.forEach(key => {
    const el = document.querySelector(`[data-id="${key}"]`);
    if (el && data[key]) {
      el.innerHTML = `<em>${data[key]}</em>`;
    }
  });

  // Reinitialize AI welcome message
  updateAIWelcome(lang);
}

function updateAIWelcome(lang) {
  const messages = document.getElementById('ai-messages');
  if (messages) {
    const firstMsg = messages.querySelector('.ai-msg--bot p');
    if (firstMsg) {
      firstMsg.textContent = LANG[lang]['ai-welcome'];
    }
  }
}

/* =============================================
   QUOTES CAROUSEL
   ============================================= */
function initQuotes() {
  const track = document.getElementById('quotes-track');
  const dotsContainer = document.getElementById('q-dots');

  // Create dots
  for (let i = 0; i < totalQuotes; i++) {
    const dot = document.createElement('button');
    dot.className = 'q-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Quote ${i + 1}`);
    dot.addEventListener('click', () => goToQuote(i));
    dotsContainer.appendChild(dot);
  }

  document.getElementById('q-prev').addEventListener('click', () => {
    goToQuote((currentQuote - 1 + totalQuotes) % totalQuotes);
  });
  document.getElementById('q-next').addEventListener('click', () => {
    goToQuote((currentQuote + 1) % totalQuotes);
  });

  // Auto-advance every 6 seconds
  setInterval(() => {
    goToQuote((currentQuote + 1) % totalQuotes);
  }, 6000);
}

function goToQuote(index) {
  currentQuote = index;
  const track = document.getElementById('quotes-track');
  if (track) {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  document.querySelectorAll('.q-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

/* =============================================
   TAB SWITCHING
   ============================================= */
function switchTab(tab) {
  const tabs = ['self', 'others'];
  tabs.forEach(t => {
    document.getElementById(`tab-${t}`).classList.toggle('active', t === tab);
    document.getElementById(`tab-content-${t}`).classList.toggle('active', t === tab);
  });
}

/* =============================================
   AI CHAT COMPANION
   ============================================= */
function openAIChat() {
  document.getElementById('ai-chat-panel').classList.add('open');
  document.getElementById('ai-input').focus();
}

function closeAIChat() {
  document.getElementById('ai-chat-panel').classList.remove('open');
}

function getAIResponse(message) {
  const lower = message.toLowerCase();
  const responses = AI_RESPONSES[currentLang];

  // Check for crisis keywords first (highest priority)
  const dieKeywords = ['mati', 'bunuh diri', 'mengakhiri', 'tidak mau hidup', 'ingin mati',
                       'die', 'kill myself', 'end my life', 'suicide', 'want to die'];
  const hurtKeywords = ['menyakiti diri', 'nyakitin diri', 'self harm', 'hurt myself', 'cutting'];
  const sadKeywords = ['sedih', 'nangis', 'menangis', 'galau', 'patah hati', 'sad', 'cry', 'crying', 'heartbreak', 'broken'];
  const tiredKeywords = ['lelah', 'capek', 'kelelahan', 'exhausted', 'tired', 'worn out', 'burnout'];
  const aloneKeywords = ['sendirian', 'kesepian', 'tidak ada yang peduli', 'nobody cares', 'alone', 'lonely', 'no one'];
  const greetKeywords = ['halo', 'hai', 'hei', 'hello', 'hi', 'hey', 'apa kabar', 'how are you'];
  const helpKeywords = ['minta tolong', 'butuh bantuan', 'help', 'need help', 'tolong'];
  const betterKeywords = ['lebih baik', 'membaik', 'better', 'feeling better', 'okay now'];

  const matchAny = (keywords) => keywords.some(k => lower.includes(k));

  let pool;
  if (matchAny(dieKeywords)) pool = responses.die;
  else if (matchAny(hurtKeywords)) pool = responses.hurt;
  else if (matchAny(sadKeywords)) pool = responses.sad;
  else if (matchAny(tiredKeywords)) pool = responses.tired;
  else if (matchAny(aloneKeywords)) pool = responses.alone;
  else if (matchAny(greetKeywords)) pool = responses.greetings;
  else if (matchAny(helpKeywords)) pool = responses.help;
  else if (matchAny(betterKeywords)) pool = responses.better;
  else pool = responses.default;

  return pool[Math.floor(Math.random() * pool.length)];
}

function sendAIMessage() {
  const input = document.getElementById('ai-input');
  const text = input.value.trim();
  if (!text) return;

  const messagesEl = document.getElementById('ai-messages');

  // Add user message
  const userDiv = document.createElement('div');
  userDiv.className = 'ai-msg ai-msg--user';
  userDiv.innerHTML = `<p>${escapeHTML(text)}</p>`;
  messagesEl.appendChild(userDiv);

  input.value = '';
  messagesEl.scrollTop = messagesEl.scrollHeight;

  // Show typing indicator
  const typingDiv = document.createElement('div');
  typingDiv.className = 'ai-msg ai-msg--bot';
  typingDiv.id = 'ai-typing';
  typingDiv.innerHTML = `<div class="ai-typing"><span></span><span></span><span></span></div>`;
  messagesEl.appendChild(typingDiv);
  messagesEl.scrollTop = messagesEl.scrollHeight;

  // Simulate response delay
  const delay = 900 + Math.random() * 800;
  setTimeout(() => {
    const typing = document.getElementById('ai-typing');
    if (typing) typing.remove();

    const response = getAIResponse(text);
    const botDiv = document.createElement('div');
    botDiv.className = 'ai-msg ai-msg--bot';
    // Allow line breaks in response
    botDiv.innerHTML = `<p>${response.replace(/\n/g, '<br>')}</p>`;
    messagesEl.appendChild(botDiv);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }, delay);
}

function escapeHTML(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// Allow Enter key to send
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('ai-input');
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendAIMessage();
      }
    });
  }
});

/* =============================================
   AI CHAT TRIGGER (NAVBAR)
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('ai-chat-trigger');
  if (trigger) trigger.addEventListener('click', openAIChat);
});

/* =============================================
   PASSIVE BANNER DISMISS
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  const bannerClose = document.getElementById('banner-close');
  const banner = document.getElementById('passive-banner');

  if (bannerClose && banner) {
    bannerClose.addEventListener('click', () => {
      banner.style.maxHeight = banner.offsetHeight + 'px';
      banner.style.transition = 'max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease';
      requestAnimationFrame(() => {
        banner.style.maxHeight = '0';
        banner.style.opacity = '0';
        banner.style.paddingTop = '0';
        banner.style.paddingBottom = '0';
      });
      setTimeout(() => banner.remove(), 400);
    });
  }

  // Passive banner button now handled by Netlify redirect → /companion
});

/* =============================================
   NAVBAR SCROLL EFFECT
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }
});

/* =============================================
   SCROLL REVEAL ANIMATION
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay') || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.edu-card').forEach(card => {
    observer.observe(card);
  });
});

/* =============================================
   SMOOTH SCROLL FOR NAV LINKS
   ============================================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navHeight = 68;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  initQuotes();
  setLang('id'); // Default: Bahasa Indonesia
});
