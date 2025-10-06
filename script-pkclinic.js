document.addEventListener('DOMContentLoaded', () => {
  const tabs = {
    'tab-1': ['#rec1395673331','#rec1395673341','#rec1395673351','#rec1395673361','#rec1395673371','#rec1395673381','#rec1395673391','#rec1395673401','#rec1395673411'],
    'tab-2': ['#rec1395673421','#rec1395673431','#rec1395673441','#rec1395673451','#rec1395673461','#rec1395673471','#rec1395673481','#rec1395673491','#rec1395673501'],
    'tab-3': ['#rec1395673511','#rec1395673521','#rec1395673531','#rec1395673541','#rec1395673551','#rec1395673561','#rec1395673571','#rec1395673591','#rec1395673601'],
    'tab-4': ['#rec1395673611','#rec1395673621','#rec1395673631','#rec1395673641','#rec1395673651','#rec1395673661','#rec1395673671','#rec1395673681','#rec1395673691'],
    'tab-5': ['#rec1395673701','#rec1395673711','#rec1395673721','#rec1395673731','#rec1395673741','#rec1395673751','#rec1395673761','#rec1395673771','#rec1395673781'],
    'tab-6': ['#rec1395673791','#rec1395673801','#rec1395673811','#rec1395673821','#rec1395673831','#rec1395673841','#rec1395673851','#rec1395673861','#rec1395673871'],
    'tab-7': ['#rec1395673881','#rec1395673891','#rec1395673901','#rec1395673911','#rec1395673921','#rec1395673931','#rec1395673941','#rec1395673951','#rec1395673961'],
    'tab-8': ['#rec1395673971','#rec1395673981','#rec1395673991','#rec1395674001','#rec1395674021','#rec1395674031','#rec1395674041','#rec1395674051','#rec1395674061']
  };

  function hideAll() {
    Object.values(tabs).flat().forEach(sel => {
      const el = document.querySelector(sel);
      if (el) el.classList.remove('active');
    });
  }

  function showTab(tab) {
    hideAll();
    tabs[tab].forEach(sel => {
      const el = document.querySelector(sel);
      if (el) el.classList.add('active');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' }); // избегаем белого флеша при резком скролле
  }

  // Добавляем zero-block-tab к каждому реку
  Object.values(tabs).flat().forEach(sel => {
    const el = document.querySelector(sel);
    if (el) el.classList.add('zero-block-tab');
  });

  // Навешиваем клики на табы
  document.querySelectorAll('.tab-1, .tab-2, .tab-3, .tab-4, .tab-5, .tab-6, .tab-7, .tab-8')
    .forEach(tabEl => {
      tabEl.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.tab-1, .tab-2, .tab-3, .tab-4, .tab-5, .tab-6, .tab-7, .tab-8')
          .forEach(el => el.classList.remove('active'));
        tabEl.classList.add('active');
        const activeTab = Array.from(tabEl.classList).find(c => /^tab-[1-8]$/.test(c));
        if (activeTab) showTab(activeTab);
      });
    });

  // Инициализация с задержкой (Tilda preload fix)
  setTimeout(() => {
    const firstTab = document.querySelector('.tab-1');
    if (firstTab) {
      firstTab.classList.add('active');
      showTab('tab-1');
    }
  }, 150);
});
