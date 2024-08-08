document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header-top');
  const headerContent = document.getElementById('header-content');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      header.classList.add(
        'bg-neutral-100',
        'shadow-md',
        'dark:bg-neutral-700',
        'dark:shadow-neutral-800'
      );
      headerContent.style.paddingTop = 'var(--s80)';
    } else {
      header.classList.remove(
        'bg-neutral-100',
        'shadow-md',
        'dark:bg-neutral-700',
        'dark:shadow-neutral-800'
      );
      headerContent.style.paddingTop = 'var(--s120)';
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial render
});
