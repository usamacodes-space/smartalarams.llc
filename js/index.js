     // Smart Alarms theme
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              500: '#00bfe6',   // primary cyan
              700: '#009bb8'    // darker hover cyan
            },
            navy: '#13334d',     // <-- added dark blue
            accent: '#00bfe6'   // use accent for buttons, highlights
          },
          boxShadow: {
            soft: '0 10px 30px rgba(0,0,0,0.08)'
          }
        }
      }
    }

   window.addEventListener("scroll", function () {
      const header = document.getElementById("mainHeader");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    // Mobile menu toggle
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('mobileMenu');
    btn?.addEventListener('click', () => menu.classList.toggle('hidden'))

    // Small helper component builders (no frameworks)
    function FeatureItem({ title, desc }) {
      const t = document.getElementById('feature-item').content.cloneNode(true);
      t.querySelector('div.font-bold').textContent = title;
      t.querySelector('p').textContent = desc;
      const wrap = document.createElement('div');
      wrap.appendChild(t);
      return wrap.firstElementChild.outerHTML;
    }
    function ArticleCard({ img, title, blurb }) {
      const t = document.getElementById('article-card').content.cloneNode(true);
      t.querySelector('img').src = img; t.querySelector('img').alt = title;
      t.querySelector('h3').textContent = title;
      t.querySelector('p').textContent = blurb;
      const wrap = document.createElement('div');
      wrap.appendChild(t);
      return wrap.firstElementChild.outerHTML;
    }



        // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn?.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('hidden') === false;
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Shrink + swap logo on scroll
    const header = document.getElementById('mainHeader');
    const bar = document.getElementById('headerBar');

    function onScroll() {
      const scrolled = window.scrollY > 50;
      header.classList.toggle('scrolled', scrolled);
      // shrink height & logo size smoothly
      bar.classList.toggle('h-28', !scrolled);
      bar.classList.toggle('h-16', scrolled);
      // also shrink image logo if still visible
      document.querySelector('.logo-img')?.classList.toggle('h-[80px]', !scrolled);
      document.querySelector('.logo-img')?.classList.toggle('h-10', scrolled);
    }
    onScroll(); // set initial state
    window.addEventListener('scroll', onScroll, { passive: true });





          // Mobile menu toggle (a11y-friendly)
      (function () {
        const btn = document.getElementById('menuBtn');
        const menu = document.getElementById('mobileMenu');
        if (!btn || !menu) return;
        btn.addEventListener('click', () => {
          const open = menu.classList.toggle('hidden') === false;
          btn.setAttribute('aria-expanded', String(open));
        });
      })();

    // On scroll: shrink header + swap SVG to text logo
    (function () {
      const header = document.getElementById('mainHeader');
      const bar = document.getElementById('headerBar');
      const svgWrap = header.querySelector('.logo-svg-wrapper');
      const svg = header.querySelector('.logo-svg');
      const textLogo = header.querySelector('.text-logo');

      function onScroll() {
        const scrolled = window.scrollY > 10;
        // shrink bar height
        bar.classList.toggle('h-20', scrolled);
        bar.classList.toggle('h-28', !scrolled);
        // shrink SVG and swap to text
        if (scrolled) {
          svg?.classList.replace('h-20', 'h-12'); // logo smaller
          svgWrap?.classList.add('hidden');
          textLogo?.classList.remove('hidden');
        } else {
          svg?.classList.replace('h-12', 'h-20');
          textLogo?.classList.add('hidden');
          svgWrap?.classList.remove('hidden');
        }
      }
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    })();
