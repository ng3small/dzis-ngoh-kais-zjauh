//前置
let w = window.innerWidth;
let h = window.innerHeight;
//做按鈕
function make_button(color,list,container){
    list.forEach(char=>{
        function func1(){press_button(char)}
        const p=document.createElement("button");
        p.innerText=char;
        p.addEventListener("click",func1);
        p.style="background-color:"+color+";";
        p.id="button_"+char;
        document.getElementById(container).appendChild(p);
    });
}

//大框
if (w>h){
    list=[[1,[1,2,3]],[2,[4,5,6]],[3,[7,8,9]]];
}else{
    list=[[1,[1,2,3,4,5,6,7,8,9]]];
}
list.forEach(([i,jj])=>{
    const p=document.createElement("div");
    p.classList.add("area");
    p.id="area_"+i;
    document.getElementById("box_kb").appendChild(p);
    jj.forEach(j=>{
        const pp=document.createElement("div");
        pp.classList.add("kb");
        pp.id="kb"+j;
        document.getElementById("area_"+i).appendChild(pp);
    });
});
//小框
make_button("rgb(255, 133, 133)",["幫","滂","並","明"],"kb1");
make_button("rgb(173, 255, 126)",["端","透","定","泥"],"kb2");
make_button("rgb(122, 255, 153)",["知","徹","澄","娘"],"kb3");
make_button("rgb(118, 123, 255)",["精","清","從","心","邪"],"kb4");
make_button("rgb(132, 175, 255)",["莊","初","崇","生","俟"],"kb5");
make_button("rgb(126, 221, 255)",["章","昌","常","書","船"],"kb6");
make_button("rgb(253, 255, 120)",["見","溪","群","疑"],"kb7");
make_button("rgb(255, 209, 130)",["影","云","以","曉","匣"],"kb8");
make_button("rgb(212, 125, 255)",["來","日"],"kb9");

//處理遊戲資料
let csvData=[];
let lenData;
let ran=0;
let num=0;
let right=0;
fetch('data/聲母.csv')
.then(response => response.text())
.then(csvText => {
    // 處理 csvText
    const rows = csvText.trim().split('\n');
    csvData = rows.map(row => row.split(','));
    lenData = rows.length
});
//遊戲中按鈕反應
function press_button(char){
    const box_tip = document.getElementById("box_tip");
    const box_check = document.getElementById("box_check");
    const box_num = document.getElementById("box_num");
    if (num==0){
        box_check.innerText='正式開始';
        box_num.innerText='目前答對0題，共0題';
    }else{
        if (csvData[ran][1].trim()===char){
            right+=1
            box_check.innerText='正確！「'+csvData[ran][0].trim()+'」是「'+csvData[ran][1].trim()+'」母。';
            box_check.style.color='green';
            const buttons=document.querySelectorAll("button");
            buttons.forEach(btn=>{
                if (btn.innerText===csvData[ran][1].trim()){
                    btn.classList.add("flash_right");
                    setTimeout(()=>btn.classList.remove("flash_right"),500)
                }
            });
        }else{
            box_check.innerText='錯誤！「'+csvData[ran][0].trim()+'」是「'+csvData[ran][1].trim()+'」母。';
            box_check.style.color='red';
            const buttons=document.querySelectorAll("button");
            buttons.forEach(btn=>{
                if (btn.innerText===csvData[ran][1].trim()){
                    btn.classList.add("flash");
                    setTimeout(()=>btn.classList.remove("flash"),500)
                }
            });
        };
        rate=Math.round(right/(num)*100)
        box_num.innerText='目前答對'+right+'/'+(num)+'，答對率'+rate+'%';
    }
    num+=1;
    box_tip.innerText='第'+num+'題';
    ran=Math.floor(Math.random()*lenData);
    document.getElementById("word").innerText = csvData[ran][0];
}
