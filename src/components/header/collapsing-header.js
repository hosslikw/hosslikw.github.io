document.addEventListener('DOMContentLoaded', () => {
   const header = document.getElementById('header');
   const headerContent = document.getElementById('header-content');

   const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
         header.classList.add('bg-neutral-100', 'shadow-md', 'dark:bg-neutral-700', 'dark:shadow-neutral-800');
         headerContent.style.paddingTop = '80px';
      } else {
         header.classList.remove('bg-neutral-100', 'shadow-md', 'dark:bg-neutral-700', 'dark:shadow-neutral-800');
         headerContent.style.paddingTop = '120px';
      }
   };

   window.addEventListener('scroll', handleScroll);
   handleScroll(); // Initial render
});
