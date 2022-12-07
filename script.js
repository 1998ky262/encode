let x;
function textdata(){
return document.getElementById("area").value;
}
function decode(){
x=textdata();
x=decodeURI(x);
copy();
}
function encode(){
x=textdata();
x=encodeURI(x);
copy();
}
function copy(){
if (x==""){
alert("文字が入力されていません");
}
else{
navigator.clipboard.writeText(x);
alert(x+"をコピーしました");
if(x=="1998はｸｿ!"){
x=fetch("ero.txt");
alert("ん？ちょっと待てよ？、お前なんで秘密の隠し機能を知っている！");
alert("エンコードしたわしの描いた超短編小説をクリップボードにコピーしといたぞ！");
alert("もう二度とくるんじゃねぇよwwはははははww");
}
}
}
