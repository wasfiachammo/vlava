var services=document.getElementById("Services");


var Original_content=`<div >
<div class="icon"><i class="bi bi-briefcase"></i></div>
<h4 class="title"><a href="">Title</a></h4>
<p class="description">Description</p>
</div>`
fetch('http://localhost:1234/services')
  .then(response => response.json())
  .then(json => {
    json.Sheet1.forEach(element => {
        var content=Original_content;
        content=content.replace('Title',element.A)
        content=content.replace('Description',element.B)
        var service=document.createElement('div');
        service.innerHTML=content;
        
        service.className='col-lg-4 col-md-6 icon-box';
        services.appendChild(service);
    });



  }
  
  
  )