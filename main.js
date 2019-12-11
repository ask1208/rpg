"use strict";

const FONT = "48px monospace";// 使用フォント 

let gFrame = 0;               // 内部カウンタ
let gImgMap;                  //画像、マップ

// タイマーイベント発生時の処理
function WmTimer()
{
  gFrame++;   
                                 // 内部カウンタ加算
  const ca = document.getElementById("main");// mainキャンバスの要素を取得
  const g = ca.getContext("2d");// 2D描画コンテキストを取得

  for( let y=0;y < 16; y++ ){
    for(let x =0; x < 16; x++ ){
      g.drawImage( gImgMap, x * 32, y * 32 );//
    }
  }
  g.font = FONT;                // 文字フォント設定
  g.fillText("helllo world" + gFrame, gFrame/ 10, 64 );
  
}
// ブラウザ起動イベント
window.onload = function()
{
  gImgMap = new this.Image();gImgMap.src = "image/map.pmg"; //map画像読み込み
  setInterval( function() { WmTimer() }, 33); // 33ms間隔で、WmTimerを呼び出す(約30.3fps))
}

