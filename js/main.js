var cats = [
    {
        catId: 1,
        catName: 'lulu',
        catAge: 3
    },
    {
        catId: 2,
        catName: 'caty',
        catAge: 1
    },
    {
        catId: 3,
        catName: 'meo',
        catAge: 5
    }


];
var table = document.getElementById('table');
var output = '<tr><th>Cat Id</th><th>Cat Name</th><th>Cat Age</th></tr>';
for(var i = 0; i < cats.length; i++){
    var cat = cats[i]
    output += '<tr><td>'+cat.catId+'</td><td>'+cat.catName+'</td><td>'+cat.catAge+'</td></tr>'
}
table.innerHTML=output