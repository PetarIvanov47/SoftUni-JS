function search() {
   const townsElements = document.querySelectorAll('#towns li');
   const searchValue = document.getElementById('searchText').value;
   const resultElement = document.getElementById('result');
   let matchesCount = 0;

   for (let town of townsElements) {
      if (town.textContent.includes(searchValue) && searchValue){
         matchesCount++;
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
      }
   }

   resultElement.textContent = `${matchesCount} matches found`;
   
}
