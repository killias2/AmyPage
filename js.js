document.addEventListener(('DOMContentLoaded'), () => {

    const wedBtn = document.getElementById('weddingimg');
    const wedId = 'wedBtn';
    wedBtn.addEventListener(('click'), () => {
        const imgPath = 'https://cdn.glitch.com/f7850073-1fd8-448c-b357-21db0f8371c8%2FUsWedding.JPG?v=1594944488181';
        addImage(imgPath, wedId);
    });

    const wed2Btn = document.getElementById('wedding2img');
    const wed2Id = 'wed2Btn';
    wed2Btn.addEventListener(('click'), () => {
        const imgPath = 'https://cdn.glitch.com/f7850073-1fd8-448c-b357-21db0f8371c8%2FAmyWedding.JPG?v=1594944484495';
        addImage(imgPath, wed2Id);
    });

    const zekeBtn = document.getElementById('zekeimg');
    const zekeId = 'zekeBtn';
    zekeBtn.addEventListener(('click'), () => {
        const imgPath = 'https://cdn.glitch.com/f7850073-1fd8-448c-b357-21db0f8371c8%2FZeke.jpg?v=1594944486285';
        addImage(imgPath, zekeId);
    });

    const val20Btn = document.getElementById('val20img');
    const val20Id = 'val20Btn';
    val20Btn.addEventListener(('click'), () => {
        const imgPath = 'https://cdn.glitch.com/f7850073-1fd8-448c-b357-21db0f8371c8%2FMD2020.png?v=1594944487056';
        addImage(imgPath, val20Id);
    });

    const md20Btn = document.getElementById('md20img');
    const md20Id = 'md20Btn';
    md20Btn.addEventListener(('click'), () => {
        const imgPath = 'https://cdn.glitch.com/f7850073-1fd8-448c-b357-21db0f8371c8%2FVD20.png?v=1594944488578';
        addImage(imgPath, md20Id);
    });

});

function addImage(imgPath, id){
    const oldImg = document.querySelector('.popImage');
    const imageSection = document.getElementById('imageSection');
    if(oldImg){
        document.querySelector('.btnBold').classList.remove('btnBold');
        imageSection.removeChild(oldImg);
    }
    const img = document.createElement('img');
    img.setAttribute('class', 'popImage');
    img.src = imgPath;
    document.getElementById(id).classList.add('btnBold');
    imageSection.appendChild(img);
}