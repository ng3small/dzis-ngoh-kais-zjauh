d = new Date();
hrs = d.getHours();
icoNum = (hrs<12)? "1":"2";
document.write('<link rel="short icon" href="../img/ico-' + icoNum + '.ico" type="image/x-icon">')