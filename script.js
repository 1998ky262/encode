let x;
let y;
// xはエンコードデコードする雑用変数です。
// yも雑用
function textdata(){
  y=document.getElementById("area").value;
return y
  // 入力した文字を取得
}
function decode(){
x=textdata();
x=decodeURI(x);
  // デコード
copy();
}
function encode(){
x=textdata();
x=encodeURI(x);
  // エンコード
copy();
}
function copy(){
  textarea=document.getElementById("area").value;
  // 変数textareaに入力した文字を入れます
if (textarea==""){
alert("文字が入力されていません");
}else if(textarea=="1998はｸｿ!"){
  //隠し機能
x=fetch("ero.txt").then(response=>response.text())
  .then(code=>{
navigator.clipboard.writeText(code);
});
  document.getElementById("area").value="";
  //textarea内の文字を削除
  // ero.txtを取得してコピー
alert("ん？ちょっと待てよ？、お前なんで秘密の隠し機能を知っている！");
alert("エンコードしたわしの描いた超短編小説をクリップボードにコピーしといたぞ！");
alert("もう二度とくるんじゃねぇよwwはははははww");
}
else{
navigator.clipboard.writeText(x);
document.getElementById("area").value="";
  //textarea内の文字を削除
alert(x+"をコピーしました");
}
}
