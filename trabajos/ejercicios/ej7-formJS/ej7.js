Zepto(function($){
    let costo=0;
    let masas={
        cl: 50,
        cr: 75,
        li: 45
    }
    let sizes={
        t_chica: 50,
        t_mediana: 70,
        t_grande: 80
    };
    const ppi=5;
    const ppie=7;
    let masa = $("input[name=tamano");
    console.log(size);
    costo += masas[masa.val()];
    costo += sizes[size.attr("id")];
    console.log(costo);
    
    
});

let checked = function(){
    return this.checked;
}
let selected = function(){
    return this.selected;s
}