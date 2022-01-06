const search = async() =>{
    let input = document.getElementById('inputfield').value; 
    let url =`https://api.jikan.moe/v3/search/anime?q=${beyblade}`;
    if(input=="Naruto"){
        document.getElementById('result').innerHTML=`<p id="alert">Enter Value</P>`;
       }else{
        try{
        let fetch_url = await fetch(url);
        let convert = await fetch_url.json();
        find(convert);
      }catch(err){
         document.getElementById('result').innerHTML=`<p id="alert">Not Found</P>`;
      } 




    }
        
 

     
}

function find({results}) {
    let result= document.getElementById('result');
     result.innerHTML=` <div id="sub"></div>`;
   results.filter((result)=>{
     div1.innerHTML= `<img src="${result.image_url}" alt="${result.title}">
     <div id="detials">
     <h5>Title: ${result.title}</h5>
     <p>Episode:  ${result.episodes}</p>
     <p>Score: ${result.score}</p>
     <p>Rated ${result.rated}</p>
     </div>`
     sub.appendChild(div1);
     }
   }
};
    
 

 document.getElementById('inputfield').addEventListener("keyup",function(event){
    
    if(event.key=="Enter"){
      searchh();
    }
  });