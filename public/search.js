window.onclick = function(event){
    searchBox = document.getElementById("searchBox")
    dropdownLocation = document.getElementById("downBtn")
    if(searchBox != event.target && dropdownLocation != event.target){
        dropdownContent = document.getElementById("dropdown-products").classList.remove("show");
        dropdownLocation = document.getElementById("dropdown-locations").classList.remove("show");
    }

}
function showDropdown(event){
    dropdownContent = document.getElementById("dropdown-products").classList.add("show");
}
function showLocationDropdown(event){
    dropdownLocation = document.getElementById("dropdown-locations").classList.toggle("show");
}

function setLocation(e){
    dropdownLocation = document.getElementById("dropdown-locations")
    if (dropdownLocation.classList.contains("show")){
        var locationName = e.target.id.toUpperCase()
        document.getElementById("locationSpan").innerHTML = locationName
    }
}