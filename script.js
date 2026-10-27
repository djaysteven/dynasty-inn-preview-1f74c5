(function () {
  const LANG_KEY = "pattaya-demo-lang";
  const THEME_KEY = "pattaya-demo-theme";

  const I18N = {
    en: {
      "meta.title": "Dynasty Inn Hotel, Pattaya",
      "aria.home": "Dynasty Inn home",
      "aria.lang": "Language",
      "aria.menu": "Menu",
      "aria.menuOpen": "Open menu",
      "aria.menuClose": "Close menu",
      "brand.short": "Dynasty Inn",
      "kicker": "Pattaya",
      "word.l1": "Dynasty",
      "word.l2": "Inn",
      "word.l3": "Hotel, Pattaya",
      "status": "Currently Open!",
      "addr.name": "Dynasty Inn Pattaya",
      "addr.line": "596/16 Soi 13, Pattaya Beach Road",
      "addr.city": "Pattaya 20150",
      "note.label": "From the site",
      "note.title": "What the page says",
      "note.body": "Situated in the heart of Pattaya and within short walking distance of Pattaya Beach and Entertainment attractions. Due to the Post Pandemic recovery, the hotel is now ready to reopen for our guests. At this moment, we are offering a special rate for short term and long term stay to enjoy Pattaya with no hassle. Please feel free to contact us using an email link below. Hope to see you soon.",
      "visit.label": "Address and email",
      "visit.title": "Dynasty Inn Pattaya",
      "visit.lead": "These are the only contact details published on the live page.",
      "label.email": "Email",
      "label.address": "Address",
      "cta.mail": "Mail to Dynasty Inn Pattaya",
      "cta.maps": "Open this address in maps",
      "unknown": "Not published on the current site: a phone number, opening hours beyond “Currently Open!”, room types, rates, or amenities. The page mentions a special rate for short and long stays, but does not list the rate.",
      "menu.photo": "Photograph",
      "menu.note": "From the site",
      "menu.visit": "Address and email",
      "menu.compare": "Live site and this demo",
      "menu.close": "Close",
      "theme.appearance": "Appearance",
      "theme.dark": "Dark theme",
      "theme.light": "Light theme",
      "theme.darkLabel": "Dark",
      "theme.lightLabel": "Light",
      "alt.photo": "The one property photograph published on dynastyinnpattaya.com.",
      "footer.demo": "Front-end demo. The photograph and the words above are from dynastyinnpattaya.com. Nothing else was added.",
      "footer.compare": "Compare with the live site",
      "cmp.title": "Dynasty Inn — the live page and this demo",
      "cmp.h1": "Dynasty Inn — live page and this demo",
      "cmp.openDemo": "Open the demo",
      "cmp.openLive": "Open the live site",
      "cmp.intro": "The live site is an unfinished BaseKit page. It already carries the inn’s name, one property photograph, a short note, an email, and a Beach Road address. A few template placeholders are still on the page. This demo keeps what was published and leaves out what was never written.",
      "cmp.liveH": "Live site",
      "cmp.liveTag": "As published",
      "cmp.demoH": "This demo",
      "cmp.demoTag": "di monogram",
      "cmp.fallback": "If the frame does not load, open the page in a new tab.",
      "cmp.keptH": "What is already there",
      "cmp.kept1": "The name Dynasty Inn Hotel, Pattaya.",
      "cmp.kept2": "One property photograph, used as the feature background.",
      "cmp.kept3": "The line “Currently Open!”",
      "cmp.kept4": "A short note about Pattaya Beach, reopening, and a special rate — with no rate figure.",
      "cmp.kept5": "Email didowntown@yahoo.com and a mail button.",
      "cmp.kept6": "Address 596/16 Soi 13, Pattaya Beach Road, Pattaya 20150.",
      "cmp.leftH": "What the template still shows",
      "cmp.left1": "The placeholder line “My strapline goes here”.",
      "cmp.left2": "A button that still reads “Lorem Ipsum”.",
      "cmp.left3": "The Francesca template’s stock feature image, as well as the real photograph.",
      "cmp.left4": "The BaseKit logo field is empty. The property photograph still carries the burgundy di monogram. No phone number is on the rendered page.",
      "cmp.demoListH": "What this demo does",
      "cmp.demo1": "Shows that same photograph once, in a frame, with a light retouch only.",
      "cmp.demo2": "Uses the published di monogram — the same burgundy circle and white letters — in the header and the favicon, with the name beside it.",
      "cmp.demo3": "Keeps the note, the open line, the email, and the address — in English and Thai.",
      "cmp.demo4": "Drops the placeholder strapline, the lorem button, and the stock background.",
      "cmp.demo5": "Does not add rooms, prices, amenities, testimonials, or a booking form.",
      "cmp.foot": "Demo by Vantage. The inn’s words and photograph stay theirs."
    },
    th: {
      "meta.title": "ไดนาสตี้ อินน์ โฮเทล พัทยา",
      "aria.home": "หน้าแรกไดนาสตี้ อินน์",
      "aria.lang": "ภาษา",
      "aria.menu": "เมนู",
      "aria.menuOpen": "เปิดเมนู",
      "aria.menuClose": "ปิดเมนู",
      "brand.short": "ไดนาสตี้ อินน์",
      "kicker": "พัทยา",
      "word.l1": "ไดนาสตี้",
      "word.l2": "อินน์",
      "word.l3": "โรงแรม พัทยา",
      "status": "เปิดให้บริการอยู่ในขณะนี้",
      "addr.name": "ไดนาสตี้ อินน์ พัทยา",
      "addr.line": "596/16 ซอย 13 ถนนพัทยา สายเลียบหาด",
      "addr.city": "พัทยา 20150",
      "note.label": "ข้อความบนเว็บไซต์",
      "note.title": "หน้าที่เขียนไว้",
      "note.body": "ตั้งอยู่ในใจกลางพัทยา เดินไปหาดพัทยาและแหล่งบันเทิงได้ไม่ไกล หลังการระบาด โรงแรมพร้อมเปิดรับผู้เข้าพักอีกครั้ง ขณะนี้มีอัตราพิเศษสำหรับเข้าพักระยะสั้นและระยะยาว เพื่อเที่ยวพัทยาได้สะดวก ติดต่อทางอีเมลด้านล่าง หวังว่าจะได้พบกันเร็ว\u00A0ๆ\u00A0นี้",
      "visit.label": "ที่อยู่และอีเมล",
      "visit.title": "ไดนาสตี้ อินน์ พัทยา",
      "visit.lead": "รายละเอียดติดต่อที่เผยแพร่บนหน้าเว็บไซต์จริง มีเพียงเท่านี้",
      "label.email": "อีเมล",
      "label.address": "ที่อยู่",
      "cta.mail": "ส่งอีเมลถึงไดนาสตี้ อินน์ พัทยา",
      "cta.maps": "เปิดที่อยู่นี้บนแผนที่",
      "unknown": "สิ่งที่เว็บไซต์ปัจจุบันไม่ได้เผยแพร่: เบอร์โทรศัพท์ เวลาเปิดปิดนอกจากข้อความ “เปิดให้บริการอยู่ในขณะนี้” ประเภทห้อง อัตราค่าห้อง และสิ่งอำนวยความสะดวก หน้าเว็บกล่าวถึงอัตราพิเศษสำหรับเข้าพักระยะสั้นและระยะยาว แต่ไม่ได้ระบุตัวเลข",
      "menu.photo": "ภาพถ่าย",
      "menu.note": "ข้อความบนเว็บไซต์",
      "menu.visit": "ที่อยู่และอีเมล",
      "menu.compare": "เว็บไซต์จริงกับเดโมนี้",
      "menu.close": "ปิด",
      "theme.appearance": "ลักษณะหน้าตา",
      "theme.dark": "ธีมมืด",
      "theme.light": "ธีมสว่าง",
      "theme.darkLabel": "มืด",
      "theme.lightLabel": "สว่าง",
      "alt.photo": "ภาพถ่ายโรงแรมภาพเดียวที่เผยแพร่บน dynastyinnpattaya.com",
      "footer.demo": "เดโมฝั่งหน้าเว็บ ภาพถ่ายและข้อความด้านบนมาจาก dynastyinnpattaya.com ไม่ได้เติมเนื้อหาอื่น",
      "footer.compare": "เทียบกับเว็บไซต์จริง",
      "cmp.title": "ไดนาสตี้ อินน์ — หน้าเว็บจริงกับเดโมนี้",
      "cmp.h1": "ไดนาสตี้ อินน์ — หน้าเว็บจริงกับเดโมนี้",
      "cmp.openDemo": "เปิดเดโม",
      "cmp.openLive": "เปิดเว็บไซต์จริง",
      "cmp.intro": "เว็บไซต์จริงเป็นหน้า BaseKit ที่ยังไม่เสร็จ มีชื่อโรงแรม ภาพถ่ายหนึ่งภาพ ข้อความสั้น ๆ อีเมล และที่อยู่ถนนพัทยาสายเลียบหาดอยู่แล้ว และยังมีข้อความต้นแบบของเทมเพลตค้างอยู่ เดโมนี้เก็บเฉพาะสิ่งที่เผยแพร่ไว้ และไม่เติมสิ่งที่ไม่ได้เขียน",
      "cmp.liveH": "เว็บไซต์จริง",
      "cmp.liveTag": "ตามที่เผยแพร่",
      "cmp.demoH": "เดโมนี้",
      "cmp.demoTag": "เครื่องหมาย di",
      "cmp.fallback": "ถ้ากรอบนี้ไม่ขึ้น ให้เปิดหน้าในแท็บใหม่",
      "cmp.keptH": "สิ่งที่มีอยู่แล้ว",
      "cmp.kept1": "ชื่อ Dynasty Inn Hotel, Pattaya",
      "cmp.kept2": "ภาพถ่ายโรงแรมหนึ่งภาพ ใช้เป็นพื้นหลังส่วนหัว",
      "cmp.kept3": "ข้อความ “Currently Open!”",
      "cmp.kept4": "ข้อความสั้นเรื่องหาดพัทยา การเปิดรับผู้เข้าพักอีกครั้ง และอัตราพิเศษ โดยไม่มีตัวเลขราคา",
      "cmp.kept5": "อีเมล didowntown@yahoo.com และปุ่มส่งอีเมล",
      "cmp.kept6": "ที่อยู่ 596/16 ซอย 13 ถนนพัทยา สายเลียบหาด พัทยา 20150",
      "cmp.leftH": "สิ่งที่เทมเพลตยังแสดงอยู่",
      "cmp.left1": "ข้อความต้นแบบ “My strapline goes here”",
      "cmp.left2": "ปุ่มที่ยังเขียนว่า “Lorem Ipsum”",
      "cmp.left3": "ภาพสต็อกของเทมเพลต Francesca นอกเหนือจากภาพถ่ายจริง",
      "cmp.left4": "ช่องโลโก้ของ BaseKit ว่าง แต่ภาพถ่ายมีเครื่องหมาย di วงกลมสีแดงเลือดนก ไม่มีเบอร์โทรบนหน้าที่แสดง",
      "cmp.demoListH": "เดโมนี้ทำอะไร",
      "cmp.demo1": "แสดงภาพถ่ายเดียวกันเพียงครั้งเดียว ในกรอบ และปรับแสงเล็กน้อยเท่านั้น",
      "cmp.demo2": "ใช้เครื่องหมาย di เดิม วงกลมสีแดงเลือดนกกับตัวอักษรสีขาว เป็นโลโก้บนหัวเว็บและไอคอนแท็บ โดยวางชื่อไว้ข้างเครื่องหมาย",
      "cmp.demo3": "คงข้อความ บรรทัดสถานะ อีเมล และที่อยู่ ทั้งภาษาอังกฤษและภาษาไทย",
      "cmp.demo4": "เอาข้อความต้นแบบ ปุ่มลอเรม และภาพพื้นหลังสต็อกออก",
      "cmp.demo5": "ไม่เพิ่มห้อง ราคา สิ่งอำนวยความสะดวก คำชม หรือแบบฟอร์มจอง",
      "cmp.foot": "เดโมโดย Vantage ข้อความและภาพถ่ายของโรงแรมยังเป็นของโรงแรม"
    }
  };

  function dict(lang) {
    return I18N[lang] || I18N.en;
  }

  function applyLang(lang) {
    if (lang !== "th" && lang !== "en") lang = "en";
    const d = dict(lang);
    document.documentElement.lang = lang;
    const titleKey = document.documentElement.getAttribute("data-title-key") || "meta.title";
    document.title = d[titleKey] || d["meta.title"] || document.title;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (d[key] != null) el.textContent = d[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (d[key] != null) el.setAttribute("aria-label", d[key]);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (d[key] != null) el.setAttribute("alt", d[key]);
    });
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });
    try { localStorage.setItem(LANG_KEY, lang); } catch (_) {}
  }

  function applyTheme(theme) {
    if (theme !== "light" && theme !== "dark") theme = "dark";
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    document.querySelectorAll("[data-theme-set]").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-theme-set") === theme ? "true" : "false");
    });
    const live = document.getElementById("themeLive");
    if (live) {
      const lang = document.documentElement.lang === "th" ? "th" : "en";
      live.textContent = theme === "light" ? dict(lang)["theme.light"] : dict(lang)["theme.dark"];
    }
    try { localStorage.setItem(THEME_KEY, theme); } catch (_) {}
  }

  let savedLang = "en";
  try {
    const s = localStorage.getItem(LANG_KEY);
    if (s === "th" || s === "en") savedLang = s;
  } catch (_) {}
  applyLang(savedLang);

  let savedTheme = "dark";
  try {
    const t = localStorage.getItem(THEME_KEY);
    if (t === "light" || t === "dark") savedTheme = t;
  } catch (_) {}
  applyTheme(savedTheme);

  document.addEventListener("click", (e) => {
    const langBtn = e.target.closest("[data-lang]");
    if (langBtn) {
      applyLang(langBtn.getAttribute("data-lang"));
      return;
    }
    const themeBtn = e.target.closest("[data-theme-set]");
    if (themeBtn) {
      applyTheme(themeBtn.getAttribute("data-theme-set"));
    }
  });

  const menuBtn = document.getElementById("menuBtn");
  const overlay = document.getElementById("menuOverlay");
  const scrim = document.getElementById("menuScrim");
  const closeBtn = document.getElementById("menuClose");

  let lockedY = 0;
  function openMenu() {
    if (!overlay) return;
    lockedY = window.scrollY || window.pageYOffset || 0;
    overlay.hidden = false;
    if (scrim) scrim.hidden = false;
    document.body.style.top = "-" + lockedY + "px";
    document.body.classList.add("menu-open");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "true");
    const focusable = overlay.querySelector("button, a");
    if (focusable) focusable.focus();
  }
  function closeMenu() {
    if (!overlay) return;
    overlay.hidden = true;
    if (scrim) scrim.hidden = true;
    document.body.classList.remove("menu-open");
    document.body.style.top = "";
    window.scrollTo(0, lockedY);
    if (menuBtn) {
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.focus();
    }
  }
  function menuFocusables() {
    if (!overlay) return [];
    return [...overlay.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')]
      .filter((el) => !el.closest("[hidden]") && el.getClientRects().length);
  }
  if (menuBtn) menuBtn.addEventListener("click", () => {
    if (overlay && overlay.hidden) openMenu();
    else closeMenu();
  });
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (scrim) scrim.addEventListener("click", closeMenu);
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (link) closeMenu();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (!overlay || overlay.hidden) return;
    if (e.key === "Escape") {
      closeMenu();
      return;
    }
    if (e.key !== "Tab") return;
    const nodes = menuFocusables();
    if (!nodes.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
})();
