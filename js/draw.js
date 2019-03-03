// Script to apply and draw Rule 34
function draw()
{
//initialize first gen array
var fgen = new Array(400).fill(0);
fgen[200]=1;//seed
//create array of all cells
var cells = new Array(160000).fill(0);
//copy our seeded first gen into cells
for(var i=0;i<400;i++)
  cells[i]=fgen[i];
//apply Rule 45
for(var gen=0;gen<400;gen++)//for 400 generations
  for(var cell=0;cell<400;cell++){
    var c = gen * 400 + cell;
    var nextgen = c + 400;//index of corresponding cell in next gen
    if(cell==0){//special case for left edge cells
      if(cells[c]==1 && cells[c+1]==1)//rule 5
        cells[nextgen]=1;
      if(cells[c]==1 && cells[c+1]==0)//rule 6
        cells[nextgen]=1;
      if(cells[c]==0 && cells[c+1]==1)//rule 7
        cells[nextgen]=0;
      if(cells[c]==0 && cells[c+1]==0)//rule 8
        cells[nextgen]=1;
    }
    else if(cell==399){//special case for right edge cells
      if(cells[c-1]==1 && cells[c]==1)//rule 2
        cells[nextgen]=0;
      if(cells[c-1]==1 && cells[c]==0)//rule 4
        cells[nextgen]=0;
      if(cells[c-1]==0 && cells[c]==1)//rule 6
        cells[nextgen]=1;
      if(cells[c-1]==0 && cells[c]==0)//rule 8
        cells[nextgen]=1;
    }
    else{ //for all non-edge cells
      if(cells[c-1]==1 && cells[c]==1 && cells[c+1]==1)//rule 1
        cells[nextgen]=0;
      if(cells[c-1]==1 && cells[c]==1 && cells[c+1]==0)//rule 2
        cells[nextgen]=0;
      if(cells[c-1]==1 && cells[c]==0 && cells[c+1]==1)//rule 3
        cells[nextgen]=1;
      if(cells[c-1]==1 && cells[c]==0 && cells[c+1]==0)//rule 4
        cells[nextgen]=0;
      if(cells[c-1]==0 && cells[c]==1 && cells[c+1]==1)//rule 5
        cells[nextgen]=1;
      if(cells[c-1]==0 && cells[c]==1 && cells[c+1]==0)//rule 6
        cells[nextgen]=1;
      if(cells[c-1]==0 && cells[c]==0 && cells[c+1]==1)//rule 7
        cells[nextgen]=0;
      if(cells[c-1]==0 && cells[c]==0 && cells[c+1]==0)//rule 8
        cells[nextgen]=1;
    }
  }
//squares
const squares = document.querySelector('.squares');
for(var i = 0; i < 160000; i++) {
  const level = cells[i];
  squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
}
}