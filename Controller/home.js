const search_form=document.getElementById('property_search')
const upload_form=document.getElementById("upload")
const show_search=document.getElementById("buy_rent")
const show_upload=document.getElementById("sell_rent")

show_search.addEventListener('click', function(){
    search_form.style.display='block'
    upload_form.style.display='none'
    document.getElementById('heading').innerText='Search for properties to be sold or rented here'
})

show_upload.addEventListener('click', function(){
    search_form.style.display='none'
    upload_form.style.display='block'
    document.getElementById('heading').innerText='Post your property to sell it or to rent it out here'
})

