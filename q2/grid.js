const subTable = `
    <div class="grid">
        <div class="col"><p>Val 1</p></div>
        <div class="col"><p>Val 2</p></div>
        <div class="col"><p>Val 3</p></div>
        <div class="col"><p>Val 4</p></div>
    </div>
     `;
     
const mainTable = `
    <div class="container grid">
        <div class="col">${subTable}</div>
        <div class="col">${subTable}</div>
        <div class="col">${subTable}</div>
        <div class="col">${subTable}</div>
    </div>`;
     
     
document.body.innerHTML = mainTable;