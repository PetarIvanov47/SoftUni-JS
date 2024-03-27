function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tableRowElemenets = document.querySelectorAll('tbody tr');
      const inputElement = document.getElementById('searchField');
      const inputValue = inputElement.value.toLocaleLowerCase();


      for (let row of tableRowElemenets) {
         const tableData = Array.from(row.children).map(x => x.textContent.toLocaleLowerCase());

         for (let word of tableData) {
            if (word.includes(inputValue) && inputValue) {
               row.classList.toggle('select');
               console.log(row);
               break
            } else {
               row.classList.remove('select');
            }
         }

   
      inputElement.value = '';
      }
   }
}