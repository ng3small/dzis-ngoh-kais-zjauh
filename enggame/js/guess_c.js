//前置
let w = window.innerWidth;
let h = window.innerHeight;
//做按鈕
list=[0,1,2,3];
color="rgb(255, 235, 53)";
list.forEach(num=>{
    function func1(){press_button(num)};
    const p=document.createElement("button");
    p.innerText=num;
    p.addEventListener("click",func1);
    p.style="background-color:"+color+";";
    p.id="option_"+num;
    document.getElementById("kbkbkb").appendChild(p);
});

//處理遊戲資料
let csvData=[];
let lenData;
let ran=0;//瞬時_正確于題庫_索引
let cor;//瞬時_正確于選項_索引
let num=0;//題數，設題時改
let right=0;//正確數
fetch('data/1級.csv')
.then(response => response.text())
.then(csvText => {
    // 處理 csvText
    const rows = csvText.trim().split('\n');
    csvData = rows.map(row => row.split(','));
    lenData = rows.length;
});
//遊戲中按鈕反應
function press_button(ch){
    const box_tip = document.getElementById("box_tip");
    const box_check = document.getElementById("box_check");
    const box_num = document.getElementById("box_num");
    //判斷
    if (num==0){
        box_check.innerText='正式開始';
        box_num.innerText='目前答對0題，共0題';
    }else{
        if (toString(cor)===ch){
            right+=1
            box_check.innerText='正確！「'+csvData[ran][0].trim()+'」是「'+csvData[ran][1].trim()+'」';
            box_check.style.color='green';
            const buttons=document.querySelectorAll("button");
            buttons.forEach(btn=>{
                if (btn.id==="option_"+toString(cor)){
                    btn.classList.add("flash_right");
                    setTimeout(()=>btn.classList.remove("flash_right"),500);
                }
            });
        }else{
            box_check.innerText='錯誤！「'+csvData[ran][0].trim()+'」是「'+csvData[ran][1].trim()+'」';
            box_check.style.color='red';
            const buttons=document.querySelectorAll("button");
            buttons.forEach(btn=>{
                if (btn.id==="option_"+ch){
                    btn.classList.add("flash");
                    setTimeout(()=>btn.classList.remove("flash"),500);
                }
                if (btn.id==="option_"+toString(cor)){
                    btn.classList.add("flash_right");
                    setTimeout(()=>btn.classList.remove("flash_right"),500);
                }
            });
        };
        rate=Math.round(right/num*100)
        box_num.innerText='目前答對'+right+'/'+num+'，答對率'+rate+'%';
    }
    //設題
    num+=1;
    box_tip.innerText='ENG GAME之第'+num+'題';
    ran=Math.floor(Math.random()*lenData);
    cor=Math.floor(Math.random()*4);
    document.getElementById("word").innerText = csvData[ran][0];
    [0,1,2,3].splice(cor,1).forEach(chch=>{
        ran=Math.floor(Math.random()*lenData);
        document.getElementById("option_"+chch).innerText = csvData[ran][1];
    });
    document.getElementById("option_"+cor).innerText = csvData[ran][1];
}
