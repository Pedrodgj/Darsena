$(document).ready(function () {  
    
    apiUrl = "https://darsena17catalogo.herokuapp.com/api/productos"
    
    $.ajax({  
        type: "GET",  
        url: apiUrl,    
        dataType: "json", 
        error: function() {
            let imagenesDefault = `
                <div class="slide">
                    <img src="/img/slide1 (1).jpeg"></img>
                </div>
                <div class="slide">
                    <img src="/img/slide1 (2).jpeg">
                </div>
                <div class="slide">
                    <img src="/img/slide1 (3).jpeg">
                </div>
                <div class="slide">
                    <img src="/img/slide1 (4).jpeg">
                </div>
            ` 
            $('#slider').append(imagenesDefault);
        },
        success: function (data) {                   
                
                $.each(data, function(i,item){
                    let productos = ''
                    let result = item.slice(0, 5)
                    
                    result.forEach((e) => productos +=`
                        <div class="slide">
                            <img src=${e.imagen}></img>
                        </div>
                    `)  

                  
                    $('#slider').append(productos);
               });
        },
    });         
}); 