let x;
let y;
// xはエンコードデコードする雑用変数です。
// yにはtextdeta関数を実行することによって取得できるtextarea内の値が入っています。
function textdata(){
  y=document.getElementById("area").value;
return y
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
if (y==""){
alert("文字が入力されていません");
}else if(y=="1998はｸｿ!"){
x=fetch("ero.txt").then(response=>response.text())
  .then(code=>{
navigator.clipboard.writeText(code);
});
alert("ん？ちょっと待てよ？、お前なんで秘密の隠し機能を知っている！");
alert("エンコードしたわしの描いた超短編小説をクリップボードにコピーしといたぞ！");
alert("もう二度とくるんじゃねぇよwwはははははww");
}
else{
navigator.clipboard.writeText(x);
document.getElementById("area").value=x;//←ここ
alert(x+"をコピーしました");

}
}
