"use strict";

const FONT = "48px monospace";//使用フォント 
// ブラウザ起動イベント
window.onload = function()
{
  const ca = this.document.getElementById("main");//mainキャンバスの要素を取得
  const g = ca.getContext("2d");//2D描画コンテキストを取得
  g.font = FONT;                //文字フォント設定
  g.fillText("helllo world",0,64);

  // this.setInterval( function(){ WmTimer() },33); //33ms間隔で、WmTimerを呼び出す(約30.3fps))


}

