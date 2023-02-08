
let items = [];
RefreshItems();


function AddToArray()
{
    var name = document.getElementById("name").value;
    var availability = document.querySelector('input[name="availability"]:checked').value;
    var RandomDate = document.getElementById("RandomDate").value;
    if(name != "" && RandomDate != "")
    {
        items.push({name,availability,RandomDate});
        EmptyForm();
        RefreshItems(items);
    }
    else
    {
        window.alert("Elements missing!");
    }
}
function RefreshItems(list = [])
{
    document.getElementById("List").innerHTML ="<div class='grid-item-name'>Name</div><div class='grid-item-name'>Availability</div><div class='grid-item-name'>Date</div>";
    list.forEach(element => {
        let div1 = document.createElement("div");
        div1.classList.add('grid-item');
        let name = document.createTextNode(element.name);
        div1.appendChild(name);
        document.getElementById("List").appendChild(div1);
        let div2 = document.createElement("div");
        div2.classList.add('grid-item');
        let availability = document.createTextNode(element.availability);
        document.getElementById("List").appendChild(div2);
        let div3 = document.createElement("div");
        div3.classList.add('grid-item');
        let RandomDate = document.createTextNode(element.RandomDate);
        div2.appendChild(availability);
        div3.appendChild(RandomDate);
        document.getElementById("List").appendChild(div3);
    });
}
function EmptyForm()
{
    document.getElementById("Form").reset();
}

function ShowAll()
{
    RefreshItems(items);
}

function SearchName()
{
    var filter = items.filter(contains);
    RefreshItems(filter);
}

function contains(item)
{
    let search = document.getElementById("SearchName").value;
    return item.name.includes(search);
        
}