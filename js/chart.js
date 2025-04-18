const title='字,音韻地位,國語音,合理的國語音,備註'
const test_content=`泌、祕,止開三去至B幫,mi4,bi4,
鳥,效開四上篠端,niau3,diau3,避諱
貞,梗開三平清知,zhen1,zheng1,
肯,曾開一上等溪,ken3,keng3,
拼,梗開二平耕幫,pin1,ping1,
行,梗開二平庚匣,xing2,heng2,行步也適也往也去也
行,梗開二去映匣,xing4,heng4,景迹又事也言也
凹,咸開二入洽影,au1,ya?,
突、凸,臻合一入沒定,tu1 tu2,du?,
溪,蟹開四平齊溪,xi1,qi1,
產,山開二上產生,chan3,shan3,
鉛,山合三平仙以,qian1,yan2,
嶼,遇開三上語邪,yu3,xu4,
況,宕合三去漾曉,kuang4,huang3,
瑞,止合三去寘常,rui4,shui4,
楷,蟹開二上駭溪,khai3,qie3,`

const test0_content=`行,宕開一去宕匣,hang2,hang4,次第
場,宕開三平陽澄,chang3,chang2,
鼻,止開三去至A並,bi2,bi4,
閩,臻開三平眞B明,min3,min2,
松,通開三平鍾邪,song1,song2,
巫,遇合三平虞明,u1,u2,
媽,遇開一上姥明,ma1,mu3,
慷,宕開一上蕩溪,kang1,kang3,
慨,蟹開一去代溪,kai3,kai4,
悶,臻合一去慁明,men1 men4,men4,
佐,果開一去箇精,zuo3,zuo4,
導,效開一去号定,dau3,dau4,
糾,流開三上黝見,jiu1,jiu3,`

function load_table(title, content){
    const data_title=title.split(',')
    const rows_content=content.split('\n')
    const data_content=rows_content.map(e => e.split(','))
    data_title.forEach((element, index)=> {
        if (index===0){
            document.write('<table border="1"><thead><tr><th style="width:10%;">' + element + '</th>')
        } else {
            document.write('<th>' + element + '</th>')
        }
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