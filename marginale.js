// declaration des variables
let select=document.querySelector('select');
let input=document.querySelectorAll('.dis');

let text_ar=document.querySelector('.text_ar');
let text_fr=document.querySelector('.text_fr');


let publie=document.querySelector('.publie');
let prenom_fr=document.querySelector('.prenom_fr');
let prenom_ar=document.querySelector('.prenom_ar');
let mari_fr=document.querySelector('.mari_fr');
let mari_ar=document.querySelector('.mari_ar');
let nom_fr=document.querySelector('.nom_fr');
let nom_ar=document.querySelector('.nom_ar');

let tribunal_fr=document.querySelector('.tribunal_fr');
let tribunal_ar=document.querySelector('.tribunal_ar');
let numero=document.querySelector('.numero');
let genre=document.querySelector('.genre');
let deces=document.querySelector('.deces');

let commune_fr=document.querySelector('.commune_fr');
let commune_ar=document.querySelector('.commune_ar');
let pere_fr=document.querySelector('.pere_fr');
let pere_ar=document.querySelector('.pere_ar');

let mere_fr=document.querySelector('.mere_fr');
let mere_ar=document.querySelector('.mere_ar');
let rediger=document.querySelector('.rediger');

let h1_ar=document.querySelector('.h1_ar');
let h1_fr=document.querySelector('.h1_fr');
 
let text_scroll=document.querySelector('.ss');
let convertir=document.querySelector('.convertir');
let manuelle=document.querySelector('.manue');
let mar_mariage=document.querySelectorAll('.attestation_mariage');

let btn_mdf=[...document.querySelectorAll('.modifier')];
let text_modifier=document.querySelector('.text_modifier');
let text_mo=document.querySelector('.text_mo');
let text_type_mod=document.querySelector('.text_type_mod')
console.log(deces.value);
 //text_ar.textContent=`توفي${1<2?1:2} `;
  //text_ar.textContent=`توفي${''} زوج السيدة ${mari_ar.value} نن   `

console.log(select)
 let name_class;

//construction function event
let text_marginal=(e)=>
    {
        let yea=deces.value.split('-');
        let yea_fin=yea[0];

        //بيان ثبوت الزوجية
        if(name_class==='assurer_mariage')
            {
              
                text_ar.textContent=
                text_fr.textContent=`Confirmation de mariage n°${numero.value}.en date du……. transcrite au registre de conservationn°………………. Entre Mr (prénom et nom) et Mme ${prenom_fr.value} ${nom_fr.value} inscrite sur acte de naissance  nannée :2022.Commune de :${tribunal_fr.value}. Fait le :${rediger.value}. `
            }

        //بيان الزواج
        if(name_class==='attestation_mariage')
            {
              
                text_ar.textContent=` تزوج ${prenom_ar.value} ${nom_ar.value} ب السيدة${mari_ar.value} بمقتضى الرسم رقم ${numero.value} بتاريخ ${publie.value} المخاطب عليه من طرف قاضي المحكمة الإبتدائية ل ${tribunal_ar.value} حرر بتاريخ ${rediger.value} `;
                text_fr.textContent=`Confirmation de mariage n°${numero.value}.en date du……. transcrite au registre de conservationn°………………. Entre Mr (prénom et nom) et Mme ${prenom_fr.value} ${nom_fr.value} inscrite sur acte de naissance  nannée :2022.Commune de :${tribunal_fr.value}. Fait le :${rediger.value}. `
                console.log(deces.value);                    
            }
        //بيان طلاق عن طريق رسم
        if(name_class==='divorce_acte')
            {
               text_fr.textContent=`Divorce de ${prenom_fr.value} ${nom_fr.value} de ${mari_fr.value} en vertu de l'acte de divorce n° ${numero.value} en date de: ${publie.value} Homologue par le juge chargé de (La section Notariale-famille) prés le tribunal de premiére instance de ${tribunal_fr.value} Fait-le ${rediger.value}`
               text_ar.textContent=` طلاق  ${prenom_ar.value} ${nom_ar.value} من ${mari_ar.value}بناء على الرسم عدد ${numero.value} بتاريخ ${publie.value} . المخاطب عليه من طرف قاضي المحكمة الإبتدائية ل${tribunal_ar.value} . حرر بتاريخ ${rediger.value} `;
            }

        //بيان وفاة الزوج(ة)  
        if(name_class==='deces_ne')
            {
                
                text_ar.textContent=` توفي ${prenom_ar.value} ${nom_ar.value} زوج السيدة ${mari_ar.value} بتاريخ ${deces.value}  و المسجلة تحت عدد ${numero.value} بجماعة ${commune_ar.value} و حرر يوم ${rediger.value} `;

            }

        //بيان وفاة و قعت في محل الولادة     
        if(name_class==='deces_pla')
            {
                text_fr.textContent=`${prenom_fr.value} ${nom_fr.value} est décédé en date du :${deces.value} à la commune ou ville de: ${commune_fr.value} Décés inscrit sous n°${numero.value} Année: ${yea_fin} Fait le: ${rediger.value}`
                text_ar.textContent=` توفي ${prenom_ar.value} ${nom_ar.value} بتاريخ ${deces.value} بجماعة أو مدينة ${commune_ar.value} وقد سجلت وفاته تحت عدد ${numero.value} سنة ${yea_fin} و حرر بتاريخ ${rediger.value } موافق ${rediger.value}`;
            }

        //بيان وفاة و قعت في غير محل الولادة  
        if(name_class==='deces_no_pla')
            {
                text_fr.textContent=`${prenom_fr.value } ${nom_fr.value} est décédé, et dont le décés est inscrit sous n°${numero.value} année ${yea_fin} La présents mention est consigné ensuite à l'avis qui nous parvenu en date du ${publie.value} de l'officier d'état civil de: ${''} Fait-le ${rediger.value}`;
                text_ar.textContent=` توفي ${prenom_ar.value} ${nom_ar.value} و سجلت وفاته تحت عدد ${numero.value} سنة ${yea_fin} و ضعنا هدا البيان بناء على الإعلام الوارد علينا بتاريخ ${publie.value} موافق ${publie.value} من ضابط الحالة المدنية ل${'aa'} و حرر بتاريخ ${rediger.value} موافق ل ${''}`;
            }
        text_scroll.scrollIntoView({behavior:"smooth"});
    }

let ecrire=(e)=>{
    if(name_class){
        var text_dec_fr=document.querySelector('.text_dec_fr');
        var text_dec_ar=document.querySelector('.text_dec_ar');
        console.log(text_dec_fr);
        /*
         if(name_class==='attestation_mariage')
           {
                  text_dec_ar.textContent="بيان الزواج";
                  text_dec_fr.value='déclaration Mariage';
           }
         if(name_class==='divorce_acte')
            {
               text_dec_ar.value="بيان طلاق عن طريق رسم";
               text_dec_fr.value="declaration divorce par acte";
            }
        
        //type deces_ne
         if(name_class==='deces_ne')
            {
               text_dec_ar.value="بيان وفاة الزوج(ة)";
               text_dec_fr.value="Déclaration de décès";
            }  
            */
        input.forEach(element => {
            element.removeAttribute('disabled');
            element.setAttribute("disabled",'')
           
        });
        text_scroll.scrollIntoView({behavior:"smooth"});
        text_ar.removeAttribute('disabled');
        text_fr.removeAttribute('disabled');
    }
    else{
        alert("المرجو تحديد نوع البيان الهامشي")
        }
    }
let changer_margina=function(e)
    {   
        text_ar.setAttribute('disabled','');
        name_class=e.target.value;
        console.log(name_class);

        input.forEach(element => {
            element.removeAttribute('disabled');
            element.setAttribute("disabled",'')
           
        });

        //type mariage
        if(name_class === 'attestation_mariage')
            {
                mar_mariage.forEach(ele=>{
                ele.removeAttribute('disabled');
                h1_ar.textContent='بيان الزواج';
                h1_fr.textContent=' déclaration Mariage';
                })
            }

        // type divorce_acte
        if(name_class==='divorce_acte')
            {
               let divorce_acte=document.querySelectorAll('.divorce_acte');
               divorce_acte.forEach(ele=>{
                   ele.removeAttribute('disabled');
                   h1_ar.textContent="بيان طلاق عن طريق رسم";
                   h1_fr.textContent="declaration divorce par acte";
               }) 
            }
        
        //type deces_ne
         if(name_class==='deces_ne')
            {
               let deces_ne=document.querySelectorAll('.deces_ne');
               deces_ne.forEach(ele=>{
                   ele.removeAttribute('disabled');
                   h1_ar.textContent="بيان وفاة الزوج(ة)";
                   h1_fr.textContent="Déclaration de décès";
               }) 
            }
            
         //بيان وفاة و قعت في محل الولادة        
         if(name_class==='deces_pla')
            {
               let deces_pla=document.querySelectorAll('.deces_pla');
               deces_pla.forEach(ele=>{
                   ele.removeAttribute('disabled');
                   h1_ar.textContent="بيان وفاة و قعت في محل الولادة";
                   h1_fr.textContent="Mention de décès survenu au lieu de naissance ";
               }) 
            } 
            
        
         //بيان وفاة و قعت في غير محل الولادة     
         if(name_class==='deces_no_pla')
            {
               let deces_no_pla=document.querySelectorAll('.deces_no_pla');
               deces_no_pla.forEach(ele=>{
                   ele.removeAttribute('disabled');
                   h1_ar.textContent="بيان وفاة و قعت في غير محل الولادة";
                   h1_fr.textContent="Mention du décès survenu dans un lieu autre que celui de la naissance";
               }) 
            } 

        console.log(e.target.value);
        

    }

let modifier=function(e){

    let btn =e.target.closest('.modifier');
    console.log('hey');
    if(!btn) return;
    
    let ligne=document.querySelectorAll(`.text--${btn.dataset.tab}`);
    console.log(ligne);
    //console.log(text_modifier);
    text_modifier.style.display='block';
    text_type_mod.textContent=ligne[1].textContent;
    text_mo.textContent=ligne[0].textContent;
    text_mo.scrollIntoView({behavior:"smooth"});
 
    }
//declaration event
select.addEventListener('change',changer_margina)
convertir.addEventListener('click',text_marginal);
manuelle.addEventListener('click',ecrire);
let mariage='توفية الزوج(ة) بتاريخ ... و المسجلة وفاته(ا) تحت عدد بجماعة و حرر يوم ضابط الحالة المدنية بالتفويط ';
btn_mdf.forEach(t=> t.addEventListener('click', modifier));

