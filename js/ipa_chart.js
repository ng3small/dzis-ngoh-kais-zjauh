const con_title='雙唇,唇齒,舌唇,齒,齒齦,齦後,捲舌,齦腭,硬腭,軟腭,小舌,咽,會⁠厭,聲門'
const con_content=`鼻音,m̥,m,,ɱ,,n̼,,,n̥,n,,,ɳ̊,ɳ,,,ɲ̊,ɲ,ŋ̊,ŋ,,ɴ,,,,,,\n
塞音,p,b,p̪,b̪,t̼,d̼,,,t,d,,,ʈ,ɖ,,,c,ɟ,k,ɡ,q,ɢ,,,ʡ,,ʔ,\n
有噝擦音,,,,,,,,,s,z,ʃ,ʒ,ʂ,ʐ,ɕ,ʑ,,,,,,,,,,,,\n
無噝擦音,ɸ,β,f,v,θ̼,ð̼,θ,ð,θ̠,ð̠,ɹ̠̊˔,ɹ̠˔,,ɻ˔,,,ç,ʝ,x,ɣ,χ,ʁ,ħ,ʕ,ʜ,ʢ,h,ɦ\n
近音,,,ʋ̥,ʋ,,,,,ɹ̥,ɹ,,,ɻ̊,ɻ,,,j̊,j,ɰ̊,ɰ,,,,,,,,ʔ̞\n
閃音,,ⱱ̟,,ⱱ,,ɾ̼,,,ɾ̥,ɾ,,,ɽ̊,ɽ,,,,,,,,ɢ̆,,,,ʡ̆,,\n
顫音,ʙ̥,ʙ,,,,,,,r̥,r,,,ɽ̊r̥,ɽr,,,,,,,ʀ̥,ʀ,,,,,,\n
邊擦音,,,,,,,,,ɬ,ɮ,,,ɭ̊˔,ɭ˔,,,ʎ̝̊,ʎ̝,ʟ̝̊,ʟ̝,,,,,,,,\n
邊近音,,,,,,,,,l̥,l,,,ɭ̊,ɭ,,,ʎ̥,ʎ,ʟ̥,ʟ,,ʟ̠,,,,,,\n
邊閃音,,,,,,,,,,ɺ,,,,ɭ̆,,,,ʎ̆,,ʟ̆,,,,,,,,`
const vow_title='前,次前,央,次後,後'
const vow_content=`閉,i,y,,,ɨ,ʉ,,,ɯ,u\n
次閉,,,ʉ,ʏ,ɪ̈,ʊ̈,ɯ̞,ʊ,,\n
半閉,e,ø,,,ɘ,ɵ,,,ɤ,o\n
中,e̞,ø̞,,,ə,ə̹,,,ɤ̞,o̞\n
半開,ɛ,œ,,,ɜ,ɞ,,,ʌ,ɔ\n
次開,æ,,,,ɐ,ɐ̹,,,,\n
開,a,ɶ,,,ä,ɒ̈,,,ɑ,ɒ\n`


function load_table_con(title, content){
    const data_title=title.split(',')
    const rows_content=content.split('\n\n')
    const data_content=rows_content.map(e => e.split(','))
    document.write('<table border="1"><thead><tr><th style="width:10%;">方式＼部位</th>')
    data_title.forEach(element => {
        document.write('<th colspan="2">' + element + '</th>')
    })
    document.write('</tr></thead><tbody>')
    data_content.forEach(e1=>{
        document.write('<tr>')
        e1.forEach(e2 => {
            document.write('<td>'+(e2||'')+'</td>')
        })
        document.write('</tr>')
    })
    document.write('</tbody></table>')
}

function load_table_vow(title, content){
    const data_title=title.split(',')
    const rows_content=content.split('\n\n')
    const data_content=rows_content.map(e => e.split(','))
    document.write('<table border="1"><thead><tr><th style="width:10%;">舌位</th>')
    data_title.forEach(element => {
        document.write('<th colspan="2">' + element + '</th>')
    })
    document.write('</tr></thead><tbody>')
    data_content.forEach(e1=>{
        document.write('<tr>')
        e1.forEach(e2 => {
            document.write('<td>'+(e2||'')+'</td>')
        })
        document.write('</tr>')
    })
    document.write('</tbody></table>')
}